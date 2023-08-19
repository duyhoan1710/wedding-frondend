import { NextResponse } from "next/server";
import { register } from "../service";

export async function POST(request: Request) {
  const body = await request.json();

  await register(body);

  return NextResponse.json({}, { status: 201 });
}
