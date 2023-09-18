// pages/api/google-sheets.js

import { google } from "googleapis";
import { NextResponse } from "next/server";

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];

async function authorize() {
  const credentials = require("./secrets.json");

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: SCOPES,
  });

  return auth;
}

export async function POST(request: Request) {
  try {
    const auth = await authorize();

    const sheets = google.sheets({ version: "v4", auth });

    const spreadsheetId = "1hbSa8RibQdd0TPFzUzkiu1CT97ICH1Yhmd2RONSYYN4";
    const range = "sheet_1";

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    const values = response.data.values || [];

    const { name, phone, status } = await request.json();

    // Create a new row with the form data
    const newRow = [name, phone, status];

    // Append the new row to the existing data
    values.push(newRow);

    // Update the sheet with the new data
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range,
      valueInputOption: "RAW",
      requestBody: {
        values,
      },
    });
  } catch (error) {
    console.error("Error:", error);
  }

  return NextResponse.json({}, { status: 201 });
}
