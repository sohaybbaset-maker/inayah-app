"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Shield, Clock, Wrench, Truck } from "lucide-react";

const trustBadges = [
  { icon: Shield, label: "ورش موثوقة" },
  { icon: Clock, label: "تسعير واضح" },
  { icon: Wrench, label: "متابعة مستمرة" },
  { icon: Truck, label: "استلام وتسليم" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden gradient-hero">
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, #C9A84C 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full opacity-5"
          style={{
            background:
              "radial-gradient(circle, #0D5C3A 0%, transparent 70%)",
          }}
        />
        {/* Subtle car silhouette lines */}
        <svg
          className="absolute bottom-0 right-0 opacity-5 w-full"
          viewBox="0 0 1440 200"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0 100 Q360 50 720 100 Q1080 150 1440 80 L1440 200 L0 200Z"
            fill="#C9A84C"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="max-w-3xl">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#C9A84C]/15 border border-[#C9A84C]/30 rounded-full px-4 py-1.5 mb-6"
          >
            <span className="w-2 h-2 bg-[#C9A84C] rounded-full animate-pulse" />
            <span className="text-[#C9A84C] text-sm font-medium">
              خدمة كونسيرج متكاملة للسيارات
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.15] mb-6"
          >
            عناية بسيارتك
            <br />
            <span style={{ color: "#C9A84C" }}>من الباب للباب</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/70 leading-relaxed mb-4 max-w-2xl"
          >
            نستلم سيارتك، نحدد الورشة المناسبة، نتابع التنفيذ، ونسلمها لك في
            الموعد.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-base text-[#C9A84C]/80 font-medium mb-10 italic"
          >
            "سيب سيارتك علينا… نختار الورشة الصح، نتابع الشغل، ونرجعها لك في
            الموعد."
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <Link
              href="/request"
              className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#E8C96A] text-[#0B1929] font-black text-lg px-8 py-4 rounded-full transition-all shadow-lg shadow-[#C9A84C]/20 hover:shadow-[#C9A84C]/40 hover:scale-105"
            >
              اطلب خدمة الآن
            </Link>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-[#C9A84C]/60 text-white hover:text-[#C9A84C] font-bold text-lg px-8 py-4 rounded-full transition-all"
            >
              اعرف كيف نعمل
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3"
          >
            {trustBadges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-xl px-3 py-3 backdrop-blur-sm"
              >
                <div className="bg-[#C9A84C]/15 rounded-lg p-1.5 shrink-0">
                  <Icon size={16} className="text-[#C9A84C]" />
                </div>
                <span className="text-white/80 text-sm font-medium">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
