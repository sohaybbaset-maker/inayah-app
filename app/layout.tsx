import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "عناية – خدمة كونسيرج للسيارات في السعودية",
  description:
    "نستلم سيارتك، نحدد الورشة المناسبة، نتابع التنفيذ، ونسلمها لك في الموعد.",
  keywords: "صيانة سيارات، كونسيرج سيارات، ورشة، السعودية، الرياض، جدة",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="min-h-full flex flex-col"
        style={{ fontFamily: "'Tajawal', sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
