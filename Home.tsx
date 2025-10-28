import PageHeader from "@/components/PageHeader";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="space-y-6" dir="rtl">
      <PageHeader
        title="حِين | الواجهة الرئيسية"
        subtitle="منصة التحليلات الصحية الذكية"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <HomeCard to="/dashboard" title="لوحة المعلومات" className="bg-green-50" />
        <HomeCard to="/patients" title="قائمة المرضى" className="bg-blue-50" />
        <HomeCard to="/ingest" title="رفع البيانات" className="bg-rose-50" />
        <HomeCard to="/risk-explorer" title="مستكشف المخاطر" className="bg-violet-50" />
        <HomeCard to="/model-performance" title="أداء النموذج" className="bg-amber-50" />
        <HomeCard to="/fairness" title="العدالة والإنصاف" className="bg-indigo-50" />
      </div>

      <p className="text-center text-xs text-gray-400 mt-6">
        حِين 2025 © منصة التحليلات الصحية الذكية
      </p>
    </div>
  );
}

function HomeCard({
  to,
  title,
  className = "",
}: {
  to: string;
  title: string;
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={`block rounded-2xl border px-6 py-5 text-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition ${className}`}
    >
      <div className="text-lg font-semibold">{title}</div>
    </Link>
  );
}
