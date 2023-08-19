import { NextRequest, NextResponse } from "next/server";

import { Role, Status } from "./lib/enum";
import { verifyJWT } from "./lib/helpers/jwt";
import { getErrorResponse } from "./lib/helpers/response";

interface AuthenticatedRequest extends NextRequest {
  user: {
    _id: string;
    role: Role;
    status: Status;
  };
}

export async function middleware(req: NextRequest) {
  let token: string | undefined;

  if (req.headers.get("Authorization")?.startsWith("Bearer ")) {
    token = req.headers.get("Authorization")?.substring(7);
  }

  console.log(token);

  if (!token) {
    return getErrorResponse(
      401,
      "You are not logged in. Please provide a token to gain access.",
    );
  }

  const response = NextResponse.next();

  try {
    const payload = verifyJWT(token);

    console.log(payload);

    (req as AuthenticatedRequest).user = payload as any;
  } catch (error) {
    return getErrorResponse(
      401,
      "Token is invalid. Please provide another token to gain access.",
    );
  }

  return response;
}

export const config = {
  matcher: [
    "/api/users",
    "/api/wedding",
    "/api/users/:path*",
    "/api/wedding/:path*",
  ],
};
