export interface Service {
  id: string;
  name: string;
  description: string;
  priceRange: string;
  timeRange: string;
  priceNote?: string;
  icon: string;
}

export type RequestStatus =
  | "جديد"
  | "قيد الفحص"
  | "بانتظار موافقة العميل"
  | "قيد التنفيذ"
  | "جاهز للتسليم"
  | "مكتمل";

export interface ServiceRequest {
  id: string;
  name: string;
  phone: string;
  city: string;
  neighborhood: string;
  carType: string;
  carModel: string;
  service: string;
  problemDescription: string;
  carMovable: "نعم" | "لا";
  preferredTime: string;
  status: RequestStatus;
  createdAt: string;
  estimatedPrice: string;
}
