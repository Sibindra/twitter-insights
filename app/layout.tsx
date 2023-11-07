import { ReduxProvider } from "@/components/providers/redux.provider";
import { Space_Grotesk } from "next/font/google";
import QueryProvider from "@/components/providers/query.provider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "@/components/providers/theme-provider";
import "@/app/globals.css";

import { Toaster } from "@/components/ui/toaster";
import NextTopLoader from "nextjs-toploader";

const font = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Insights",
  description: "Twitter Data Analysis Visualization App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryProvider>
      <html lang="en">
        <link rel="icon" href="logo.svg" sizes="any" />
        <body className={font.className}>
          <NextTopLoader color="#F2CB81"/>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ReduxProvider>{children}</ReduxProvider>
          </ThemeProvider>
          <Toaster />
        </body>
        <ReactQueryDevtools initialIsOpen={false} />
      </html>
    </QueryProvider>
  );
}
