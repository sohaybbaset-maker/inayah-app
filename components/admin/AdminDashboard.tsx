"use client";

import { useState } from "react";
import { mockRequests, requestStatuses } from "@/lib/data";
import { ServiceRequest, RequestStatus } from "@/lib/types";
import { TrendingUp, Clock, CheckCircle, Users, ChevronDown } from "lucide-react";

const statusColors: Record<RequestStatus, string> = {
  "جديد": "bg-blue-100 text-blue-800",
  "قيد الفحص": "bg-yellow-100 text-yellow-800",
  "بانتظار موافقة العميل": "bg-orange-100 text-orange-800",
  "قيد التنفيذ": "bg-purple-100 text-purple-800",
  "جاهز للتسليم": "bg-green-100 text-green-800",
  "مكتمل": "bg-gray-100 text-gray-700",
};

export default function AdminDashboard() {
  const [requests, setRequests] =
    useState<ServiceRequest[]>(mockRequests);

  const updateStatus = (id: string, status: RequestStatus) => {
    setRequests((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status } : r))
    );
  };

  const total = requests.length;
  const pending = requests.filter(
    (r) => r.status !== "مكتمل"
  ).length;
  const completed = requests.filter((r) => r.status === "مكتمل").length;
  const revenueEst = completed * 350;

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          icon={Users}
          label="إجمالي الطلبات"
          value={total}
          color="bg-[#0B1929]"
        />
        <StatCard
          icon={Clock}
          label="طلبات نشطة"
          value={pending}
          color="bg-[#0D5C3A]"
        />
        <StatCard
          icon={CheckCircle}
          label="مكتملة"
          value={completed}
          color="bg-[#C9A84C]"
          textDark
        />
        <StatCard
          icon={TrendingUp}
          label="إيرادات تقديرية"
          value={`${revenueEst.toLocaleString("ar-SA")} ريال`}
          color="bg-[#112240]"
        />
      </div>

      {/* Requests table */}
      <div className="bg-white rounded-2xl shadow-sm border border-[#E5E7EB] overflow-hidden">
        <div className="px-6 py-4 border-b border-[#E5E7EB]">
          <h2 className="text-lg font-black text-[#0B1929]">الطلبات</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#FAF7F2]">
                {[
                  "رقم الطلب",
                  "العميل",
                  "المدينة",
                  "السيارة",
                  "الخدمة",
                  "التكلفة",
                  "تاريخ",
                  "الحالة",
                ].map((h) => (
                  <th
                    key={h}
                    className="text-right px-4 py-3 font-bold text-[#6B7280] whitespace-nowrap"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {requests.map((req) => (
                <tr
                  key={req.id}
                  className="border-t border-[#F3F4F6] hover:bg-[#FAFAFA] transition-colors"
                >
                  <td className="px-4 py-3 font-mono text-xs text-[#9CA3AF]">
                    {req.id}
                  </td>
                  <td className="px-4 py-3">
                    <div className="font-bold text-[#0B1929]">{req.name}</div>
                    <div className="text-[#9CA3AF] text-xs">{req.phone}</div>
                  </td>
                  <td className="px-4 py-3 text-[#374151]">{req.city}</td>
                  <td className="px-4 py-3 text-[#374151] whitespace-nowrap">
                    {req.carType} {req.carModel}
                  </td>
                  <td className="px-4 py-3 text-[#374151] whitespace-nowrap">
                    {req.service}
                  </td>
                  <td className="px-4 py-3 text-[#0D5C3A] font-medium whitespace-nowrap">
                    {req.estimatedPrice}
                  </td>
                  <td className="px-4 py-3 text-[#9CA3AF] whitespace-nowrap">
                    {req.createdAt}
                  </td>
                  <td className="px-4 py-3">
                    <div className="relative">
                      <select
                        value={req.status}
                        onChange={(e) =>
                          updateStatus(req.id, e.target.value as RequestStatus)
                        }
                        className={`text-xs font-bold px-3 py-1.5 rounded-full appearance-none cursor-pointer pr-6 ${
                          statusColors[req.status]
                        }`}
                      >
                        {requestStatuses.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        size={12}
                        className="absolute left-1.5 top-1/2 -translate-y-1/2 pointer-events-none opacity-60"
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
  color,
  textDark,
}: {
  icon: React.ElementType;
  label: string;
  value: string | number;
  color: string;
  textDark?: boolean;
}) {
  return (
    <div className={`${color} rounded-2xl p-5 flex flex-col gap-3`}>
      <div className="flex items-center justify-between">
        <span className={`text-sm font-medium ${textDark ? "text-[#0B1929]/70" : "text-white/60"}`}>
          {label}
        </span>
        <Icon size={18} className={textDark ? "text-[#0B1929]/50" : "text-white/40"} />
      </div>
      <span className={`text-2xl font-black ${textDark ? "text-[#0B1929]" : "text-white"}`}>
        {value}
      </span>
    </div>
  );
}
