import { NextResponse } from "next/server";
import { CONTACT, COMPANY } from "@/lib/constants";

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

const isEmail = (s: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
const isPhone = (s: string) => /^[+0-9 .()-]{8,20}$/.test(s);

function escape(s: string) {
  return s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string
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
    // honeypot — silent success
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

  const subject = `Nouvelle demande${service ? ` — ${service}` : ""}${city ? ` (${city})` : ""}`;
  const html = `
    <h2>Nouvelle demande depuis ${COMPANY.domain}</h2>
    <p><strong>Nom :</strong> ${escape(name)}</p>
    <p><strong>Email :</strong> ${escape(email)}</p>
    <p><strong>Téléphone :</strong> ${escape(phone)}</p>
    ${city ? `<p><strong>Ville :</strong> ${escape(city)}</p>` : ""}
    ${service ? `<p><strong>Service :</strong> ${escape(service)}</p>` : ""}
    <p><strong>Message :</strong></p>
    <p>${escape(message).replace(/\n/g, "<br/>")}</p>
  `;

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || CONTACT.email;
  const from = process.env.CONTACT_FROM_EMAIL || `Site Cassard <noreply@${COMPANY.domain}>`;

  if (!apiKey) {
    // Dev / pas de clé : on log et renvoie succès. Permet à la prod de marcher dès que la clé est ajoutée.
    console.log("[contact] (no RESEND_API_KEY) payload:", { name, email, phone, city, service, message });
    return NextResponse.json({ ok: true, dev: true });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject,
        html,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("[contact] Resend error:", res.status, errText);
      return NextResponse.json({ ok: false, error: "Email send failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] fetch error:", err);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
