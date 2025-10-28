import { useEffect, useMemo, useState } from "react";
import Card from "../components/Card";
import ChartComponent from "../components/ChartComponent";
import { fetchModelPerformance } from "../services/api";

// عدّل النوع حسب استجابة الباك لاحقًا
type PerfPoint = { fpr: number; tpr: number };
type PerfPayload = {
  auc?: number;
  accuracy?: number;
  roc?: PerfPoint[];
};

export default function ModelPerformance() {
  const [perf, setPerf] = useState<PerfPayload | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchModelPerformance()
      .then((data) => setPerf(data ?? {}))
      .catch(() => setError("تعذر جلب بيانات الأداء"));
  }, []);

  const rocData = useMemo(
    () => (perf?.roc ?? []).map((p) => ({ x: p.fpr, y: p.tpr })),
    [perf]
  );

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-extrabold">أداء النموذج</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card title="AUC">{perf?.auc ?? "-"}</Card>
        <Card title="الدقة">{perf?.accuracy ?? "-"}</Card>
        <Card title="الحساسية">-</Card>
      </div>

      <Card title="منحنى ROC (تقريبي)">
        {error ? (
          <div className="text-rose-600 text-sm">{error}</div>
        ) : rocData.length === 0 ? (
          <div className="text-gray-500 text-sm">لا توجد نقاط للرسم حالياً.</div>
        ) : (
          <ChartComponent type="line" data={rocData} />
          // إن لم تكن تملك ChartComponent جاهز، استبدله مؤقتًا بالسطـر التالي:
          // <pre className="text-xs">{JSON.stringify(rocData, null, 2)}</pre>
        )}
      </Card>
    </div>
  );
}
