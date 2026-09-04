import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { CONTACT, COMPANY, LIVE_DOMAIN } from "@/lib/constants";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  city?: string;
  service?: string;
  message?: string;
  consent?: boolean;
  // honeypot
  website?: string;
};

type Lead = {
  name: string;
  email: string;
  phone: string;
  city: string;
  service: string;
  message: string;
};

const isEmail = (s: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
const isPhone = (s: string) => /^[+0-9 .()-]{8,20}$/.test(s);

function escape(s: string) {
  return s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string
  );
}

/**
 * Last-resort persistence: a lead we could not email is still recoverable from
 * the Vercel function logs. Always logged on any send failure.
 */
function logLead(reason: string, lead: Lead) {
  console.error(
    `[contact][LEAD-NON-DELIVRE] ${reason} ::`,
    JSON.stringify({ ...lead, receivedAt: new Date().toISOString() })
  );
}

export async function POST(req: Request) {
  let body: ContactPayload;
  try {
    body = (await req.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  if (body.website && body.website.trim() !== "") {
    // honeypot: silent success
    return NextResponse.json({ ok: true });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const phone = (body.phone ?? "").trim();
  const city = (body.city ?? "").trim();
  const service = (body.service ?? "").trim();
  const message = (body.message ?? "").trim();

  const errors: Record<string, string> = {};
  if (name.length < 2) errors.name = "Nom trop court";
  if (!isEmail(email)) errors.email = "Email invalide";
  if (!isPhone(phone)) errors.phone = "Téléphone invalide";
  if (message.length < 10) errors.message = "Message trop court (min 10 caractères)";
  if (!body.consent) errors.consent = "Consentement requis";
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  const lead: Lead = { name, email, phone, city, service, message };

  const subject = `Nouvelle demande${service ? ` : ${service}` : ""}${city ? ` (${city})` : ""} - ${name} ${phone}`;
  const html = `
    <h2>Nouvelle demande depuis ${LIVE_DOMAIN}</h2>
    <p><strong>Nom :</strong> ${escape(name)}</p>
    <p><strong>Email :</strong> ${escape(email)}</p>
    <p><strong>Téléphone :</strong> <a href="tel:${escape(phone.replace(/[^+0-9]/g, ""))}">${escape(phone)}</a></p>
    ${city ? `<p><strong>Ville :</strong> ${escape(city)}</p>` : ""}
    ${service ? `<p><strong>Service :</strong> ${escape(service)}</p>` : ""}
    <p><strong>Message :</strong></p>
    <p>${escape(message).replace(/\n/g, "<br/>")}</p>
    <hr/>
    <p style="color:#64748b;font-size:12px">Répondre à cet email écrit directement au client.</p>
  `;
  // Plain-text alternative: multipart messages land in the inbox far more reliably.
  const text = [
    `Nouvelle demande depuis ${LIVE_DOMAIN}`,
    ``,
    `Nom : ${name}`,
    `Email : ${email}`,
    `Téléphone : ${phone}`,
    city ? `Ville : ${city}` : null,
    service ? `Service : ${service}` : null,
    ``,
    `Message :`,
    message,
  ]
    .filter((line) => line !== null)
    .join("\n");

  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  // Comma-separated list so the artisan can receive on several mailboxes.
  const to = (process.env.CONTACT_TO_EMAIL || CONTACT.email)
    .split(",")
    .map((addr) => addr.trim())
    .filter(Boolean);
  const from = process.env.CONTACT_FROM_EMAIL || `Site ${COMPANY.shortName} <${smtpUser ?? ""}>`;

  if (!smtpUser || !smtpPass) {
    // Never answer "ok" when nothing was sent: the visitor must be told to call
    // instead of believing the artisan received the request.
    logLead("SMTP_USER/SMTP_PASS absents", lead);
    return NextResponse.json(
      { ok: false, error: "Envoi indisponible pour le moment. Appelez-nous directement." },
      { status: 503 }
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT || 465),
      secure: true,
      auth: { user: smtpUser, pass: smtpPass },
    });

    await transporter.sendMail({
      from,
      to,
      replyTo: `${name} <${email}>`,
      subject,
      html,
      text,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] SMTP error:", err);
    logLead("echec SMTP", lead);
    return NextResponse.json(
      { ok: false, error: "L'envoi a échoué. Réessayez ou appelez-nous directement." },
      { status: 502 }
    );
  }
}
