import type { Metadata } from "next";
import { Poppins } from "next/font/google"; // Import Poppins from next/font/google
import "./globals.css"; // Global CSS
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

// Load Poppins Google Font
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Font weights
  subsets: ["latin"], // Specify subsets if needed
  variable: "--font-poppins", // Define a CSS variable
});

// Metadata for the app
export const metadata: Metadata = {
  title: "Jamin",
  description: "Jamin is a platform for events management",
  icons: {
    icon: '/assets/images/logo.svg',
  },
};

// Root layout for your Next.js app
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${poppins.variable} antialiased`}>
        
          {children}
        </body>
      </html>
</ClerkProvider>
  );
}
