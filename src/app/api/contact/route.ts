import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { firstName, lastName, company, email, budget, message } = await req.json();

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: "Bitte füllen Sie alle Pflichtfelder aus." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      // We assume the user has a verified domain in Resend.
      // E.g., info@prosecure.de, but for development we can use onboarding@resend.dev or similar.
      // I will put a placeholder or standard 'onboarding@resend.dev' that works for testing.
      from: "ProSecure Website <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL || "info@prosecure.de"],
      subject: `Neue Kontaktanfrage von ${firstName} ${lastName}`,
      html: `
        <h2>Neue Kontaktanfrage über die Website</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Unternehmen:</strong> ${company || "-"}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        <p><strong>Leistung:</strong> ${budget || "-"}</p>
        <br />
        <p><strong>Nachricht:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json(
      { error: "Interner Serverfehler." },
      { status: 500 }
    );
  }
}
