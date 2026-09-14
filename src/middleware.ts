import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const VIEW_COOKIE = "asil-view";

const ALLOWED = new Set([
  "/",
  "/hakkinda",
  "/asi-ildeniz",
  "/asi-nildeniz",
  "/iletisim",
]);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Refresh / direct open of "/": serve the remembered page, keep URL as "/".
  if (pathname === "/") {
    const view = request.cookies.get(VIEW_COOKIE)?.value;
    if (view && view !== "/" && ALLOWED.has(view)) {
      return NextResponse.rewrite(new URL(view, request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
