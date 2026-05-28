"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function StickyCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25 }}
          className="fixed bottom-0 right-0 left-0 z-40 md:hidden"
        >
          <div className="bg-[#0B1929]/95 backdrop-blur-md border-t border-white/10 px-4 py-3">
            <Link
              href="/request"
              className="block w-full bg-[#C9A84C] hover:bg-[#E8C96A] text-[#0B1929] font-black text-center py-3.5 rounded-xl transition-colors"
            >
              اطلب خدمة الآن
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
