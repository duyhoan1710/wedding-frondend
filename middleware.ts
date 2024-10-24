import { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";

import { EHeader } from "./lib/enum";

export default function middleware(request: NextRequest) {
  const handleI18nRouting = createMiddleware({
    locales: ["en", "de"],
    defaultLocale: "en",
  });

  const response = handleI18nRouting(request);

  response.headers.set(EHeader.PATHNAME, request.nextUrl.pathname);

  return response;
}

export const config = {
  matcher: ["/((?!api|admin|_next|.*\\..*).*)"],
};
