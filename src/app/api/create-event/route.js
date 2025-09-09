import { google } from "googleapis";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, date, time, description } = body;

    if (!name || !email || !date || !time) {
      return new Response(
        JSON.stringify({ success: false, error: "Missing required fields" }),
        { status: 400 }
      );
    }

    // Authenticate with service account
    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_CLIENT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/calendar"],
    });

    const calendar = google.calendar({ version: "v3", auth });

    // Event times
    const eventStartTime = new Date(`${date}T${time}:00`);
    const eventEndTime = new Date(eventStartTime.getTime() + 30 * 60000); // +30 mins

    const event = {
      summary: `Appointment with ${name}`,
      description: description || "No description provided",
      start: {
        dateTime: eventStartTime.toISOString(),
        timeZone: "Asia/Kolkata",
      },
      end: {
        dateTime: eventEndTime.toISOString(),
        timeZone: "Asia/Kolkata",
      },
      // attendees: [{ email }],
    };

    // Insert event
    const response = await calendar.events.insert({
      calendarId: process.env.GOOGLE_CALENDAR_ID,
      resource: event,
    });

    return new Response(
      JSON.stringify({ success: true, eventLink: response.data.htmlLink }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error creating event:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}
