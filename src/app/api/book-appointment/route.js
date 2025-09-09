// src/app/api/book-appointment/route.js
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, notes, date, time } = body;

    // ✅ Validate required fields
    if (!firstName || !lastName || !email || !date || !time) {
      return new Response(
        JSON.stringify({ success: false, error: "Missing required fields" }),
        { status: 400 }
      );
    }

    // Combine name and build description
    const name = `${firstName} ${lastName}`;
    const description = notes
      ? `${notes}\nPhone: ${phone}\nEmail: ${email}`
      : `Phone: ${phone}`;

    // ✅ Determine base URL
    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL && process.env.NEXT_PUBLIC_BASE_URL.trim() !== ""
        ? process.env.NEXT_PUBLIC_BASE_URL.replace("https://", "http://") // force http in dev
        : "http://localhost:3000";

    // ✅ Call create-event route
    const res = await fetch(`${baseUrl}/api/create-event`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, date, time, description }),
    });

    let data = {};
    try {
      data = await res.json();
    } catch (e) {
      return new Response(
        JSON.stringify({ success: false, error: "Empty response from create-event" }),
        { status: 500 }
      );
    }

    if (!data.success) {
      return new Response(
        JSON.stringify({ success: false, error: data.error || "Event creation failed" }),
        { status: 500 }
      );
    }

    // ✅ Send confirmation email
    try {
    await resend.emails.send({
  from: "Appointments <noreply@moinkhan.site>",
      to: email, // use your email to test
      subject: "Your Appointment is Confirmed ✅",
      html: `
        <div style="font-family: Arial, sans-serif; line-height:1.6; color:#333; max-width:600px; margin:auto; padding:20px; border:1px solid #e0e0e0; border-radius:8px; background-color:#f9f9f9;">
          <h2 style="color:#4b0082;">Hi ${firstName},</h2>
          <p>Thank you for booking an appointment! Your meeting has been successfully scheduled.</p>
          <h3 style="color:#4b0082;">Appointment Details</h3>
          <ul style="list-style:none; padding:0;">
            <li><strong>Date:</strong> ${date}</li>
            <li><strong>Time:</strong> ${time} IST</li>
            <li><strong>Phone:</strong> ${phone}</li>
            <li><strong>Notes:</strong> ${notes}</li>
          </ul>
          <p>You can view and add the event to your Google Calendar here:</p>
          <p>
            <a href="${data.eventLink}" style="display:inline-block; padding:10px 20px; background-color:#4b0082; color:#fff; text-decoration:none; border-radius:5px;">View Event</a>
          </p>
          <p style="font-size:0.9em; color:#666;">— Moin Khan</p>
        </div>
      `,
});
    } catch (err) {
      console.error("Email send failed:", err);
    }

    return new Response(
      JSON.stringify({ success: true, eventLink: data.eventLink }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Book appointment error:", error);
    return new Response(
      JSON.stringify({ success: false, error: "Failed to book appointment" }),
      { status: 500 }
    );
  }
}
