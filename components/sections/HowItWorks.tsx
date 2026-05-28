"use client";

import { motion } from "framer-motion";
import { ClipboardList, Car, Search, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    number: "١",
    title: "اختر الخدمة",
    description:
      "حدد الخدمة التي تحتاجها واملأ تفاصيل سيارتك وموقع الاستلام",
  },
  {
    icon: Car,
    number: "٢",
    title: "نستلم السيارة",
    description:
      "يصلك فريقنا في الوقت المحدد، نصور السيارة ونوثق حالتها قبل التسليم",
  },
  {
    icon: Search,
    number: "٣",
    title: "نتابع الورشة",
    description:
      "نختار الورشة المناسبة، نفاوض السعر، ونتابع التنفيذ لحظة بلحظة",
  },
  {
    icon: CheckCircle,
    number: "٤",
    title: "نسلمها لك جاهزة",
    description:
      "بعد فحص الجودة نعيد السيارة إليك في الموعد المحدد مع تقرير كامل",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-[#0D5C3A]/10 text-[#0D5C3A] text-sm font-bold px-4 py-1.5 rounded-full mb-4">
            كيف نعمل
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#0B1929] mb-4">
            أربع خطوات بسيطة
          </h2>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
            من طلب الخدمة حتى استلام سيارتك — كل شيء تحت إشرافنا
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-16 right-[12.5%] left-[12.5%] h-px bg-gradient-to-l from-[#0D5C3A]/20 via-[#C9A84C]/40 to-[#0D5C3A]/20" />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-full bg-[#0B1929] flex items-center justify-center shadow-xl z-10 relative">
                  <step.icon size={26} className="text-[#C9A84C]" />
                </div>
                <span className="absolute -top-2 -left-2 w-7 h-7 rounded-full bg-[#C9A84C] text-[#0B1929] text-xs font-black flex items-center justify-center">
                  {step.number}
                </span>
              </div>
              <h3 className="text-xl font-black text-[#0B1929] mb-3">
                {step.title}
              </h3>
              <p className="text-[#6B7280] leading-relaxed text-sm sm:text-base">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
