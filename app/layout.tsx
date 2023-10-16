import { ReduxProvider } from "@/store/provider";
import { Inter, Space_Grotesk } from "next/font/google";
import QueryProvider from "@/components/query.provider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "@/components/theme-provider";
import '@/app/globals.css'

const font = Space_Grotesk({
  subsets: ["latin"],
  weight: [ "300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Insights Nepal",
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
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ReduxProvider>{children}</ReduxProvider>
          </ThemeProvider>
        </body>
        <ReactQueryDevtools initialIsOpen={false} />
      </html>
    </QueryProvider>
  );
}
