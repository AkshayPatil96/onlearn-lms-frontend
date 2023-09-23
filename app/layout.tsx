"use client";
import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
import Loader from "@/utils/Sections/Loader";
import { ThemeProvider } from "@/utils/theme-provider";
import { SessionProvider } from "next-auth/react";
import { Josefin_Sans, Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { Providers } from "./Provider";
import "./globals.scss";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-Poppins",
});

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-Josefin",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${josefin.variable} !bg-white bg-no-repeat dark:bg-gradient-to-b dark:from-gray-900 dark:to-black duration-300`}
      >
        <Providers>
          <SessionProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
            >
              <Custom>{children}</Custom>
              <Toaster
                position="top-center"
                reverseOrder={false}
              />
            </ThemeProvider>
          </SessionProvider>
        </Providers>
      </body>
    </html>
  );
}

const Custom: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isLoading } = useLoadUserQuery({});
  return <>{isLoading ? <Loader /> : <>{children}</>}</>;
};
