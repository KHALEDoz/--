import PageHeader from "@/components/PageHeader";
import StatCard from "@/components/StatCard";
import EmptyState from "@/components/EmptyState";

export default function Dashboard() {
  // بيانات مبدأية — غيّرها بما يناسب API لاحقاً
  const loading = false;
  const patients = 0;
  const avgAge = 0;
  const samples = 0;

  return (

    
    <div className="space-y-6" dir="rtl">
      <PageHeader title="لوحة المعلومات" subtitle="نظرة عامة على البيانات والأداء" />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard label="عدد المرضى" value={patients} />
        <StatCard label="متوسط العمر" value={`${avgAge} سنة`} />
        <StatCard label="عدد العينات" value={samples} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <section className="rounded-2xl border bg-white p-4">
          <div className="font-semibold mb-2">أداء النموذج (AUC)</div>
          {loading ? (
            <div className="animate-pulse h-48 rounded-lg bg-gray-100" />
          ) : (
            <EmptyState title="لا توجد بيانات للرسم" hint="قم برفع بياناتك أولاً لعرض الرسم" />
          )}
        </section>

        <section className="rounded-2xl border bg-white p-4">
          <div className="font-semibold mb-2">توزيع مستوى الخطر</div>
          {loading ? (
            <div className="animate-pulse h-48 rounded-lg bg-gray-100" />
          ) : (
            <EmptyState title="لا توجد بيانات للتوزيع" hint="سيظهر الرسم بعد توفر البيانات" />
          )}
        </section>
      </div>
    </div>
  );
}
