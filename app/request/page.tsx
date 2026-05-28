import { Suspense } from "react";
import RequestPageClient from "./RequestPageClient";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";

export const metadata = {
  title: "اطلب خدمة – عناية",
  description: "اطلب خدمة كونسيرج لسيارتك الآن",
};

export default function RequestPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 bg-[#FAF7F2]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h1 className="text-4xl sm:text-5xl font-black text-[#0B1929] mb-3">
              اطلب خدمة
            </h1>
            <p className="text-[#6B7280] text-lg">
              أكمل النموذج وسيتواصل معك فريقنا لتأكيد التفاصيل
            </p>
          </div>
          <Suspense fallback={<div className="text-center py-10">جاري التحميل...</div>}>
            <RequestPageClient />
          </Suspense>
        </div>
      </main>
      <Footer />
    </>
  );
}
