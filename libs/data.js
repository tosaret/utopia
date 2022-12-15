import { google } from "googleapis";
export async function getData() {
  try {
    const target = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
    const jwt = new google.auth.JWT(
      process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      null,
      (process.env.GOOGLE_SHEETS_PRIVATE_KEY || "").replace(/\\n/gm, "\n"),
      target
    );

    const sheets = google.sheets({ version: "v4", auth: jwt });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: "data", // sheet name
    });

    const rows = response.data.values;
    if (rows.length) {
      const data = {
        menu: {
          offer: rows[1],
          portfolio: rows[2],
          about: rows[3],
          contact: rows[4],
        },
        hero: {
          slogan: rows[6],
          readMore: rows[7],
        },
      };

      return data;
    }
  } catch (err) {
    console.log(err);
  }
  return [];
}
