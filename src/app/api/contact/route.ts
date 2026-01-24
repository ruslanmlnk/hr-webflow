import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const requireEnv = (key: string) => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing ${key}`);
  }
  return value;
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body?.name ?? "").trim();
    const telegram = String(body?.telegram ?? "").trim();
    const whatsapp = String(body?.whatsapp ?? "").trim();
    const message = String(body?.message ?? "").trim();

    if (!name || !message) {
      return NextResponse.json(
        { error: "Name and message are required." },
        { status: 400 }
      );
    }

    const host = requireEnv("SMTP_HOST");
    const user = requireEnv("SMTP_USER");
    const pass = requireEnv("SMTP_PASS");
    const to = requireEnv("CONTACT_TO_EMAIL");
    const port = Number(process.env.SMTP_PORT ?? "465");
    const secure =
      (process.env.SMTP_SECURE ?? "true").toLowerCase() === "true";

    if (!Number.isFinite(port)) {
      return NextResponse.json(
        { error: "Server mail configuration error." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    const from = process.env.SMTP_FROM ?? user;
    const subject = `New contact form message from ${name}`;
    const text = [
      `Name: ${name}`,
      telegram ? `Telegram: ${telegram}` : "Telegram: —",
      whatsapp ? `WhatsApp: ${whatsapp}` : "WhatsApp: —",
      "",
      "Message:",
      message,
    ].join("\n");

    const safeName = escapeHtml(name);
    const safeTelegram = escapeHtml(telegram);
    const safeWhatsapp = escapeHtml(whatsapp);
    const safeMessage = escapeHtml(message);

    const html = `
      <h2>New contact form message</h2>
      <p><strong>Name:</strong> ${safeName}</p>
      <p><strong>Telegram:</strong> ${safeTelegram || "—"}</p>
      <p><strong>WhatsApp:</strong> ${safeWhatsapp || "—"}</p>
      <hr />
      <p style="white-space: pre-wrap;">${safeMessage}</p>
    `;

    await transporter.sendMail({
      from,
      to,
      subject,
      text,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 }
    );
  }
}
