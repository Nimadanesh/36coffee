import type { Metadata, Viewport } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "36coffee — بیشتر از قهوه. یک فرصت برای رشد.",
  description:
    "36coffee قهوه اسپرسو واقعی را به دکه‌ها و ایستگاه‌های کوچک شهر می‌رساند؛ پکیج کامل ۱۰۰تایی، هر عدد یک فنجان کامل.",
};

export const viewport: Viewport = {
  themeColor: "#1e3d2f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${vazirmatn.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
