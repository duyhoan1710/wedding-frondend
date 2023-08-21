import { NextResponse } from "next/server";

export function throwError(
  status: number = 500,
  message: string,
  errors: any = null,
) {
  throw { status, message, errors };
}

export function getErrorResponse({
  status = 500,
  message,
  errors,
}: {
  status?: number;
  message: string;
  errors?: any;
}) {
  return new NextResponse(
    JSON.stringify({
      status,
      message,
      errors: errors ? errors.flatten() : undefined,
    }),
    {
      status,
      headers: { "Content-Type": "application/json" },
    },
  );
}
