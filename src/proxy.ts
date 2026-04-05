import { clerkMiddleware, createRouteMatcher } 
from "@clerk/nextjs/server";

// Protect dashboard only
const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
]);

// ✅ PUBLIC routes (important)
const isPublicRoute = createRouteMatcher([
  "/api/webhooks/clerk",
   "/api/firevent",
]);

export default clerkMiddleware(async (auth, req) => {

  // Skip auth for webhook
  if (isPublicRoute(req)) {
    return;
  }

  // Protect dashboard
  if (isProtectedRoute(req)) {
    await auth.protect();
  }
});

// export const config = {
//   matcher: [
//     "/((?!_next|.*\\..*).*)",
//     "/(api|trpc)(.*)",
//   ],
// };

export const config = {
  matcher: [
    "/((?!_next|.*\\..*|api/pricing).*)",
    "/(api|trpc)(.*)",
  ],
};