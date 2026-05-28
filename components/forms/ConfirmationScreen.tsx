"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, ArrowRight, Phone, MapPin, Car, Clock } from "lucide-react";
import { ServiceRequest } from "@/lib/types";

interface Props {
  request: ServiceRequest;
}

const nextSteps = [
  {
    icon: Phone,
    text: "سيتواصل معك فريق عناية لتأكيد التفاصيل خلال ساعات",
  },
  {
    icon: Car,
    text: "سيتم تصوير حالة السيارة عند الاستلام وإرسالها إليك",
  },
  {
    icon: CheckCircle,
    text: "لن يبدأ أي عمل قبل موافقتك على السعر النهائي",
  },
];

export default function ConfirmationScreen({ request }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-xl mx-auto"
    >
      {/* Success header */}
      <div className="text-center mb-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.2 }}
          className="w-20 h-20 bg-[#F0FDF4] rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <CheckCircle size={40} className="text-[#0D5C3A]" />
        </motion.div>
        <h1 className="text-3xl font-black text-[#0B1929] mb-2">
          تم استلام طلبك بنجاح!
        </h1>
        <p className="text-[#6B7280]">
          رقم طلبك:{" "}
          <span className="font-bold text-[#0B1929] font-mono">
            {request.id}
          </span>
        </p>
      </div>

      {/* Request summary */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E5E7EB] mb-6">
        <h2 className="font-black text-[#0B1929] mb-4 text-lg">ملخص الطلب</h2>
        <div className="space-y-3">
          <SummaryRow icon={Phone} label="الاسم" value={request.name} />
          <SummaryRow
            icon={MapPin}
            label="موقع الاستلام"
            value={`${request.neighborhood}، ${request.city}`}
          />
          <SummaryRow
            icon={Car}
            label="السيارة"
            value={`${request.carType} ${request.carModel}`}
          />
          <SummaryRow
            icon={CheckCircle}
            label="الخدمة"
            value={request.service}
          />
          <SummaryRow
            icon={Clock}
            label="التكلفة التقديرية"
            value={request.estimatedPrice}
            highlight
          />
          <SummaryRow
            icon={Clock}
            label="الوقت المفضل"
            value={formatDateTime(request.preferredTime)}
          />
        </div>
      </div>

      {/* Next steps */}
      <div className="bg-[#0B1929] rounded-2xl p-6 mb-8">
        <h2 className="font-black text-white mb-4 text-lg">ماذا يحدث الآن؟</h2>
        <div className="space-y-4">
          {nextSteps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="flex items-start gap-3"
            >
              <div className="w-8 h-8 bg-[#C9A84C]/15 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                <step.icon size={15} className="text-[#C9A84C]" />
              </div>
              <p className="text-white/80 text-sm leading-relaxed">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href="/"
          className="flex-1 flex items-center justify-center gap-2 bg-[#0B1929] hover:bg-[#112240] text-white font-bold py-3.5 rounded-xl transition-colors"
        >
          <ArrowRight size={16} />
          العودة للرئيسية
        </Link>
        <a
          href="https://wa.me/966500000000"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5C] text-white font-bold py-3.5 rounded-xl transition-colors"
        >
          تواصل عبر واتساب
        </a>
      </div>
    </motion.div>
  );
}

function SummaryRow({
  icon: Icon,
  label,
  value,
  highlight,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex items-center gap-3 py-2 border-b border-[#F3F4F6] last:border-0">
      <Icon size={15} className="text-[#9CA3AF] shrink-0" />
      <span className="text-[#6B7280] text-sm w-32 shrink-0">{label}</span>
      <span
        className={`text-sm font-medium ${
          highlight ? "text-[#0D5C3A] font-bold" : "text-[#0B1929]"
        }`}
      >
        {value}
      </span>
    </div>
  );
}

function formatDateTime(dt: string) {
  try {
    return new Date(dt).toLocaleString("ar-SA", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  } catch {
    return dt;
  }
}
