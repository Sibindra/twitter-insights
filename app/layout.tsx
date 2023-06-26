import "./globals.css";
import { IBM_Plex_Sans } from "next/font/google";

const inter = IBM_Plex_Sans({subsets:['latin'],weight:['100','200','300','400','500','600','700']});

export const metadata = {
  title: "Insights Nepal",
  description: "Twitter Data Visualization App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="logo.svg" sizes="any" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
