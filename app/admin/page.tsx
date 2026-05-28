import AdminDashboard from "@/components/admin/AdminDashboard";
import Link from "next/link";
import { ArrowRight, LayoutDashboard } from "lucide-react";

export const metadata = {
  title: "لوحة التحكم – عناية",
};

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]" dir="rtl" lang="ar">
      {/* Admin header */}
      <header className="bg-[#0B1929] text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <LayoutDashboard size={20} className="text-[#C9A84C]" />
            <span className="font-black text-lg">لوحة تحكم عناية</span>
            <span className="hidden sm:inline text-xs bg-[#C9A84C]/20 text-[#C9A84C] px-2 py-0.5 rounded-full font-medium">
              نسخة تجريبية
            </span>
          </div>
          <Link
            href="/"
            className="flex items-center gap-1.5 text-white/60 hover:text-white text-sm transition-colors"
          >
            <ArrowRight size={14} />
            الموقع الرئيسي
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AdminDashboard />
      </main>
    </div>
  );
}
