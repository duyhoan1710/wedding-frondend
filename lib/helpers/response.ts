import { NextResponse } from "next/server";

export function getErrorResponse(
  status: number = 500,
  message: string,
  errors: any = null,
) {
  return new NextResponse(
    JSON.stringify({
      status,
      message,
      errors: errors ? errors.flatten() : null,
    }),
    {
      status,
      headers: { "Content-Type": "application/json" },
    },
  );
}
