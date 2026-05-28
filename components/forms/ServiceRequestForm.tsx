"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { services, cities } from "@/lib/data";
import { ServiceRequest } from "@/lib/types";
import ConfirmationScreen from "./ConfirmationScreen";
import { Upload, ChevronDown } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "الاسم يجب أن يكون حرفين على الأقل"),
  phone: z
    .string()
    .regex(/^05\d{8}$/, "رقم الجوال يجب أن يبدأ بـ 05 ويتكون من 10 أرقام"),
  city: z.string().min(1, "اختر مدينتك"),
  neighborhood: z.string().min(2, "أدخل الحي أو موقع الاستلام"),
  carType: z.string().min(1, "أدخل نوع السيارة"),
  carModel: z.string().min(1, "أدخل موديل السيارة"),
  service: z.string().min(1, "اختر الخدمة المطلوبة"),
  problemDescription: z
    .string()
    .min(10, "صف المشكلة أو الخدمة المطلوبة (10 أحرف على الأقل)"),
  carMovable: z.enum(["نعم", "لا"] as const),
  preferredTime: z.string().min(1, "حدد الوقت المفضل"),
  agreement: z
    .boolean()
    .refine((val) => val === true, "يجب الموافقة على الشروط للمتابعة"),
});

type FormData = z.infer<typeof schema>;

interface Props {
  preselectedService?: string;
}

export default function ServiceRequestForm({ preselectedService }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<ServiceRequest | null>(
    null
  );

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      service: preselectedService || "",
    },
  });

  const selectedServiceId = watch("service");
  const selectedService = services.find((s) => s.name === selectedServiceId);

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 800));

    const request: ServiceRequest = {
      id: `REQ-${Date.now()}`,
      name: data.name,
      phone: data.phone,
      city: data.city,
      neighborhood: data.neighborhood,
      carType: data.carType,
      carModel: data.carModel,
      service: data.service,
      problemDescription: data.problemDescription,
      carMovable: data.carMovable,
      preferredTime: data.preferredTime,
      status: "جديد",
      createdAt: new Date().toISOString().split("T")[0],
      estimatedPrice: selectedService?.priceNote
        ? selectedService.priceNote
        : selectedService
        ? `${selectedService.priceRange} ريال`
        : "يحدد بعد الفحص",
    };

    console.log("New service request:", request);
    setSubmittedData(request);
    setSubmitted(true);
  };

  if (submitted && submittedData) {
    return <ConfirmationScreen request={submittedData} />;
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
      noValidate
    >
      {/* Personal info */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E5E7EB]">
        <h2 className="text-lg font-black text-[#0B1929] mb-5 flex items-center gap-2">
          <span className="w-7 h-7 bg-[#0B1929] text-white rounded-full flex items-center justify-center text-sm font-black">
            ١
          </span>
          معلوماتك الشخصية
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field
            label="الاسم الكامل"
            error={errors.name?.message}
            required
          >
            <input
              {...register("name")}
              placeholder="مثال: عبدالله المطيري"
              className={inputClass(!!errors.name)}
            />
          </Field>

          <Field label="رقم الجوال" error={errors.phone?.message} required>
            <input
              {...register("phone")}
              type="tel"
              placeholder="05XXXXXXXX"
              dir="ltr"
              className={`${inputClass(!!errors.phone)} text-right`}
            />
          </Field>

          <Field label="المدينة" error={errors.city?.message} required>
            <div className="relative">
              <select
                {...register("city")}
                className={`${inputClass(!!errors.city)} appearance-none`}
              >
                <option value="">اختر المدينة</option>
                {cities.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9CA3AF] pointer-events-none"
              />
            </div>
          </Field>

          <Field
            label="الحي / موقع الاستلام"
            error={errors.neighborhood?.message}
            required
          >
            <input
              {...register("neighborhood")}
              placeholder="مثال: حي النخيل، شارع الأمير..."
              className={inputClass(!!errors.neighborhood)}
            />
          </Field>
        </div>
      </div>

      {/* Car info */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E5E7EB]">
        <h2 className="text-lg font-black text-[#0B1929] mb-5 flex items-center gap-2">
          <span className="w-7 h-7 bg-[#0B1929] text-white rounded-full flex items-center justify-center text-sm font-black">
            ٢
          </span>
          بيانات السيارة
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="نوع السيارة" error={errors.carType?.message} required>
            <input
              {...register("carType")}
              placeholder="مثال: تويوتا، هوندا، BMW..."
              className={inputClass(!!errors.carType)}
            />
          </Field>

          <Field
            label="موديل السيارة"
            error={errors.carModel?.message}
            required
          >
            <input
              {...register("carModel")}
              placeholder="مثال: كامري 2022، سيفيك 2021..."
              className={inputClass(!!errors.carModel)}
            />
          </Field>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-bold text-[#374151] mb-2">
            هل السيارة قابلة للحركة؟{" "}
            <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-4">
            {(["نعم", "لا"] as const).map((val) => (
              <label
                key={val}
                className="flex items-center gap-2.5 cursor-pointer group"
              >
                <input
                  type="radio"
                  value={val}
                  {...register("carMovable")}
                  className="w-4 h-4 accent-[#0D5C3A]"
                />
                <span className="text-sm font-medium text-[#374151] group-hover:text-[#0D5C3A]">
                  {val}
                </span>
              </label>
            ))}
          </div>
          {errors.carMovable && (
            <p className="text-red-500 text-xs mt-1">
              {errors.carMovable.message}
            </p>
          )}
        </div>
      </div>

      {/* Service details */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E5E7EB]">
        <h2 className="text-lg font-black text-[#0B1929] mb-5 flex items-center gap-2">
          <span className="w-7 h-7 bg-[#0B1929] text-white rounded-full flex items-center justify-center text-sm font-black">
            ٣
          </span>
          تفاصيل الخدمة
        </h2>

        <div className="space-y-4">
          <Field
            label="الخدمة المطلوبة"
            error={errors.service?.message}
            required
          >
            <div className="relative">
              <select
                {...register("service")}
                className={`${inputClass(!!errors.service)} appearance-none`}
              >
                <option value="">اختر الخدمة</option>
                {services.map((s) => (
                  <option key={s.id} value={s.name}>
                    {s.name}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9CA3AF] pointer-events-none"
              />
            </div>
          </Field>

          {/* Dynamic estimate */}
          <AnimatePresence>
            {selectedService && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl p-4"
              >
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="text-[#374151]">
                    <span className="font-bold text-[#0D5C3A]">
                      التكلفة التقديرية:
                    </span>{" "}
                    {selectedService.priceNote
                      ? selectedService.priceNote
                      : `${selectedService.priceRange} ريال`}
                  </span>
                  <span className="text-[#374151]">
                    <span className="font-bold text-[#0D5C3A]">
                      الوقت المتوقع:
                    </span>{" "}
                    {selectedService.timeRange}
                  </span>
                </div>
                <p className="text-xs text-[#6B7280] mt-1">
                  * السعر النهائي يُؤكد بعد الفحص وقبل بدء العمل
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <Field
            label="وصف المشكلة أو الخدمة"
            error={errors.problemDescription?.message}
            required
          >
            <textarea
              {...register("problemDescription")}
              rows={4}
              placeholder="اشرح المشكلة أو ما تحتاجه بالتفصيل..."
              className={`${inputClass(!!errors.problemDescription)} resize-none`}
            />
          </Field>

          <Field
            label="الوقت المفضل للاستلام"
            error={errors.preferredTime?.message}
            required
          >
            <input
              {...register("preferredTime")}
              type="datetime-local"
              className={inputClass(!!errors.preferredTime)}
              dir="ltr"
            />
          </Field>

          {/* Photo upload placeholder */}
          <div>
            <label className="block text-sm font-bold text-[#374151] mb-2">
              صور السيارة{" "}
              <span className="text-[#9CA3AF] font-normal">(اختياري)</span>
            </label>
            <label className="flex flex-col items-center justify-center gap-3 border-2 border-dashed border-[#D1D5DB] rounded-xl p-8 cursor-pointer hover:border-[#C9A84C]/50 hover:bg-[#FEFCE8]/30 transition-colors">
              <Upload size={28} className="text-[#9CA3AF]" />
              <div className="text-center">
                <p className="text-sm font-medium text-[#374151]">
                  اضغط لرفع الصور
                </p>
                <p className="text-xs text-[#9CA3AF] mt-1">
                  PNG, JPG حتى 10MB لكل صورة
                </p>
              </div>
              <input type="file" className="hidden" multiple accept="image/*" />
            </label>
          </div>
        </div>
      </div>

      {/* Agreement */}
      <div className="bg-[#FFF9F0] border border-[#C9A84C]/30 rounded-2xl p-5">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            {...register("agreement")}
            className="w-5 h-5 rounded accent-[#0D5C3A] shrink-0 mt-0.5"
          />
          <span className="text-sm text-[#374151] leading-relaxed">
            أوافق على أن السعر النهائي يتم تأكيده{" "}
            <strong>بعد الفحص وقبل بدء العمل</strong>، ولن يُنفَّذ أي عمل بدون
            موافقتي المسبقة.
          </span>
        </label>
        {errors.agreement && (
          <p className="text-red-500 text-xs mt-2 mr-8">
            {errors.agreement.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#C9A84C] hover:bg-[#E8C96A] disabled:opacity-70 disabled:cursor-not-allowed text-[#0B1929] font-black text-lg py-4 rounded-2xl transition-all shadow-lg shadow-[#C9A84C]/20 hover:shadow-[#C9A84C]/40"
      >
        {isSubmitting ? "جاري الإرسال..." : "أرسل الطلب"}
      </button>
    </motion.form>
  );
}

function Field({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-sm font-bold text-[#374151] mb-1.5">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {children}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}

function inputClass(hasError: boolean) {
  return `w-full rounded-xl border ${
    hasError ? "border-red-400 bg-red-50" : "border-[#D1D5DB] bg-[#FAF7F2]"
  } px-4 py-3 text-sm text-[#0B1929] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/40 focus:border-[#C9A84C] transition-colors`;
}
