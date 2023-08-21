import { getErrorResponse } from "@/lib/helpers/response";
import { NextResponse } from "next/server";
import { login } from "../service";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = await login(body);

    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    return getErrorResponse(error);
  }
}
