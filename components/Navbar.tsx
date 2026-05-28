"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#how-it-works", label: "كيف نعمل" },
    { href: "#services", label: "خدماتنا" },
    { href: "#pricing", label: "الأسعار" },
    { href: "#trust", label: "لماذا عناية" },
  ];

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0B1929]/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-black text-white">عناية</span>
          <span className="hidden sm:block w-px h-5 bg-[#C9A84C]/40" />
          <span className="hidden sm:block text-xs text-[#C9A84C]/80 font-medium">
            خدمة كونسيرج للسيارات
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/80 hover:text-[#C9A84C] transition-colors font-medium"
            >
              {l.label}
            </a>
          ))}
          <Link
            href="/request"
            className="bg-[#C9A84C] hover:bg-[#E8C96A] text-[#0B1929] font-bold text-sm px-5 py-2 rounded-full transition-colors"
          >
            اطلب خدمة
          </Link>
        </div>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="القائمة"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-[#0B1929]/98 backdrop-blur-md border-t border-white/10 px-4 py-6 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-white/80 hover:text-[#C9A84C] font-medium py-2"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <Link
            href="/request"
            className="bg-[#C9A84C] text-[#0B1929] font-bold text-center py-3 rounded-full mt-2"
            onClick={() => setMobileOpen(false)}
          >
            اطلب خدمة الآن
          </Link>
        </div>
      )}
    </header>
  );
}
