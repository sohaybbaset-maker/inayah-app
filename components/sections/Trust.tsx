"use client";

import { motion } from "framer-motion";
import { Camera, CheckCircle, Star, Bell, ShieldCheck, Award } from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "تصوير السيارة قبل وبعد",
    description:
      "نوثق حالة سيارتك بالصور قبل الاستلام وبعد التسليم لضمان الشفافية الكاملة",
  },
  {
    icon: CheckCircle,
    title: "موافقة قبل أي تكلفة إضافية",
    description:
      "لا يبدأ أي عمل قبل حصولنا على موافقتك الصريحة على السعر النهائي",
  },
  {
    icon: Star,
    title: "ورش مختارة بعناية",
    description:
      "نختار من شبكة ورش موثوقة تم تقييمها وتدقيقها للحفاظ على جودة العمل",
  },
  {
    icon: Bell,
    title: "متابعة حالة الطلب",
    description:
      "تحديثات مستمرة على حالة سيارتك من لحظة الاستلام حتى التسليم",
  },
  {
    icon: ShieldCheck,
    title: "فحص جودة قبل التسليم",
    description:
      "يجري فريقنا فحصاً دقيقاً للتأكد من اكتمال الخدمة بالمعايير المطلوبة",
  },
  {
    icon: Award,
    title: "ضمان الرضا",
    description:
      "نلتزم بتصحيح أي خلل يظهر بعد التسليم خلال فترة الضمان",
  },
];

export default function Trust() {
  return (
    <section id="trust" className="py-24 bg-[#0B1929]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-[#C9A84C]/15 text-[#C9A84C] text-sm font-bold px-4 py-1.5 rounded-full mb-4">
            لماذا عناية
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            ثقتك أمانة عندنا
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            بنينا عناية على أساس الشفافية والمسؤولية — لأن سيارتك تستحق أفضل
            من ذلك
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 hover:border-[#C9A84C]/30 rounded-2xl p-6 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#C9A84C]/15 flex items-center justify-center mb-4">
                <f.icon size={22} className="text-[#C9A84C]" />
              </div>
              <h3 className="text-white font-black text-lg mb-2">{f.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {f.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
