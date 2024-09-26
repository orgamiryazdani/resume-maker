import type { Metadata } from "next";
import "@/styles/globals.css";
import vazirFont from "@/constants/localFont";

export const metadata: Metadata = {
  title: "رزومه ساز",
  description: "ساخت رزومه با قالب دلخواه",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='fa'
      dir='rtl'>
      <body
        className={`${vazirFont.variable} bg-secondary-900 min-h-screen font-sans`}>
        {children}
      </body>
    </html>
  );
}
