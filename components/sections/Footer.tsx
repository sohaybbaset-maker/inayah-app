import Link from "next/link";
import { MessageCircle, MapPin } from "lucide-react";

const cities = ["الرياض", "جدة", "الدمام", "الخبر"];

export default function Footer() {
  return (
    <footer className="bg-[#0B1929] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-black text-white mb-1">عناية</h3>
            <p className="text-[#C9A84C] text-sm font-medium mb-4">
              خدمة كونسيرج للسيارات في السعودية
            </p>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm mb-6">
              سيب سيارتك علينا… نختار الورشة الصح، نتابع الشغل، ونرجعها لك في
              الموعد.
            </p>
            <a
              href="https://wa.me/966500000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5C] text-white font-bold text-sm px-5 py-2.5 rounded-full transition-colors"
            >
              <MessageCircle size={17} />
              تواصل عبر واتساب
            </a>
          </div>

          {/* Cities */}
          <div>
            <h4 className="text-white font-black mb-4 flex items-center gap-2">
              <MapPin size={16} className="text-[#C9A84C]" />
              مناطق الخدمة
            </h4>
            <ul className="space-y-2">
              {cities.map((city) => (
                <li key={city}>
                  <span className="text-white/60 text-sm hover:text-[#C9A84C] transition-colors cursor-default">
                    {city}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-black mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              {[
                { href: "#how-it-works", label: "كيف نعمل" },
                { href: "#services", label: "خدماتنا" },
                { href: "#pricing", label: "الأسعار" },
                { href: "/request", label: "اطلب خدمة" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/60 text-sm hover:text-[#C9A84C] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs text-center sm:text-right">
            © {new Date().getFullYear()} عناية — جميع الحقوق محفوظة
          </p>
          <p className="text-white/30 text-xs text-center">
            جميع الأسعار تقديرية ويتم تأكيدها بعد الفحص.
          </p>
        </div>
      </div>
    </footer>
  );
}
