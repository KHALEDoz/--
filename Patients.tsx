import PageHeader from "@/components/PageHeader";
import EmptyState from "@/components/EmptyState";

export default function Patients() {
  // استبدل بمصدر البيانات الفعلي لاحقاً
  const patients: any[] = [];

  return (
    <div className="space-y-6" dir="rtl">
      <PageHeader title="قائمة المرضى" subtitle="ابحث وتصفّح سجلات المرضى" />

      {patients.length === 0 ? (
        <EmptyState
          title="لا توجد نتائج"
          hint="ابدأ برفع البيانات أو استخدم البحث للتصفية"
        />
      ) : (
        <div className="rounded-2xl border bg-white overflow-hidden">
          {/* ضع جدول المرضى هنا عند توفر البيانات */}
        </div>
      )}
    </div>
  );
}
