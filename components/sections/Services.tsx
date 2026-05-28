"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Clock, Banknote, ArrowLeft } from "lucide-react";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="py-24" style={{ background: "#FAF7F2" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-[#0B1929]/10 text-[#0B1929] text-sm font-bold px-4 py-1.5 rounded-full mb-4">
            خدماتنا
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#0B1929] mb-4">
            كل ما تحتاجه سيارتك
          </h2>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
            نتولى التنسيق مع أفضل الورش المتخصصة بأسعار تنافسية
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#C9A84C]/30 flex flex-col"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-black text-[#0B1929] mb-2">
                {service.name}
              </h3>
              <p className="text-[#6B7280] text-sm leading-relaxed mb-4 flex-1">
                {service.description}
              </p>

              <div className="space-y-2 mb-5">
                <div className="flex items-center gap-2 text-sm">
                  <Banknote size={15} className="text-[#C9A84C] shrink-0" />
                  <span className="text-[#0B1929] font-medium">
                    {service.priceNote
                      ? service.priceNote
                      : `${service.priceRange} ريال`}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock size={15} className="text-[#0D5C3A] shrink-0" />
                  <span className="text-[#6B7280]">{service.timeRange}</span>
                </div>
              </div>

              <Link
                href={`/request?service=${encodeURIComponent(service.name)}`}
                className="w-full flex items-center justify-center gap-2 bg-[#0B1929] hover:bg-[#C9A84C] text-white hover:text-[#0B1929] font-bold text-sm py-2.5 rounded-xl transition-all group-hover:shadow-md"
              >
                <span>اطلب الخدمة</span>
                <ArrowLeft size={14} className="rotate-180" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
