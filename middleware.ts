import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Define public routes including catch-all routes for sign-in and sign-up
const isPublicRoute = createRouteMatcher([
  '/signin(.*)',  // Catch-all for sign-in
  '/signup(.*)',  // Catch-all for sign-up
  '/',
  '/events/:id',
  '/api/webhook/clerk',
  '/api/webhook/stripe',
  '/api/uploadthing',
]);

const isIgnoredRoute = createRouteMatcher([
  '/api/webhook/clerk',
  '/api/webhook/stripe',
  '/api/uploadthing',
]);

export default clerkMiddleware((auth, request) => {
  if (isIgnoredRoute(request)) {
    return;
  }

  // Protect all routes except the public ones
  if (!isPublicRoute(request)) {
    auth().protect();
  }
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
