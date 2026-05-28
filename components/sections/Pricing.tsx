"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "رسوم خدمة ثابتة",
    badge: "للأفراد",
    highlight: false,
    description: "ادفع رسوم خدمة ثابتة لكل طلب مقابل الاستلام والتسليم والمتابعة",
    price: "تبدأ من ٥٠ ريال",
    priceNote: "للطلب الواحد",
    features: [
      "استلام وتوصيل السيارة",
      "اختيار الورشة المناسبة",
      "متابعة التنفيذ",
      "تقرير حالة بعد الخدمة",
      "تصوير قبل وبعد",
    ],
  },
  {
    name: "باقة الشركات",
    badge: "الأكثر طلباً",
    highlight: true,
    description: "باقة شهرية مخصصة للشركات وأصحاب الأساطيل بعدد سيارات محدد",
    price: "تواصل معنا",
    priceNote: "للتسعير المخصص",
    features: [
      "عدد غير محدود من الطلبات",
      "مدير حساب مخصص",
      "أولوية في المعالجة",
      "تقارير شهرية تفصيلية",
      "أسعار ورش تفضيلية",
      "دعم على مدار الساعة",
    ],
  },
  {
    name: "باقة شهرية",
    badge: "للأفراد النشطين",
    highlight: false,
    description: "اشتراك شهري يشمل عدداً من الخدمات بسعر مخفض",
    price: "١٩٩ ريال / شهر",
    priceNote: "يشمل ٣ خدمات",
    features: [
      "٣ طلبات شهرية مشمولة",
      "خصم ١٥٪ على الخدمات الإضافية",
      "أولوية في الجدولة",
      "تقرير شهري للسيارة",
      "دعم واتساب مباشر",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <span className="inline-block bg-[#0D5C3A]/10 text-[#0D5C3A] text-sm font-bold px-4 py-1.5 rounded-full mb-4">
            الأسعار
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#0B1929] mb-4">
            خيارات تناسب احتياجاتك
          </h2>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto mb-2">
            نموذج عمل شفاف يضمن أفضل قيمة لك
          </p>
          <p className="text-sm text-[#C9A84C] font-medium">
            * الأسعار تقديرية لمرحلة الإطلاق وستُحدَّد رسمياً قريباً
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl p-7 flex flex-col ${
                plan.highlight
                  ? "bg-[#0B1929] text-white shadow-2xl shadow-[#0B1929]/30 scale-105"
                  : "bg-[#FAF7F2] border border-[#E5E7EB]"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 right-1/2 translate-x-1/2">
                  <span className="bg-[#C9A84C] text-[#0B1929] text-xs font-black px-4 py-1.5 rounded-full">
                    {plan.badge}
                  </span>
                </div>
              )}

              {!plan.highlight && (
                <span className="inline-block self-start bg-[#0D5C3A]/10 text-[#0D5C3A] text-xs font-bold px-3 py-1 rounded-full mb-4">
                  {plan.badge}
                </span>
              )}

              <h3
                className={`text-xl font-black mb-2 ${
                  plan.highlight ? "text-white" : "text-[#0B1929]"
                }`}
              >
                {plan.name}
              </h3>
              <p
                className={`text-sm leading-relaxed mb-6 ${
                  plan.highlight ? "text-white/60" : "text-[#6B7280]"
                }`}
              >
                {plan.description}
              </p>

              <div className="mb-6">
                <span
                  className={`text-2xl font-black ${
                    plan.highlight ? "text-[#C9A84C]" : "text-[#0B1929]"
                  }`}
                >
                  {plan.price}
                </span>
                <span
                  className={`text-sm mr-2 ${
                    plan.highlight ? "text-white/50" : "text-[#9CA3AF]"
                  }`}
                >
                  {plan.priceNote}
                </span>
              </div>

              <ul className="space-y-2.5 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check
                      size={15}
                      className={`shrink-0 mt-0.5 ${
                        plan.highlight ? "text-[#C9A84C]" : "text-[#0D5C3A]"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        plan.highlight ? "text-white/80" : "text-[#374151]"
                      }`}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/request"
                className={`text-center py-3 rounded-xl font-bold text-sm transition-all ${
                  plan.highlight
                    ? "bg-[#C9A84C] hover:bg-[#E8C96A] text-[#0B1929]"
                    : "bg-[#0B1929] hover:bg-[#112240] text-white"
                }`}
              >
                ابدأ الآن
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
