import { NextResponse } from "next/server";

import connectDB from "@/lib/dbConnect";

export async function GET(request: Request) {
  connectDB();

  return NextResponse.json(
    {
      message: "Hello",
    },
    { status: 200 },
  );
}

export async function PUT(request: Request) {}

export async function DELETE(request: Request) {}
