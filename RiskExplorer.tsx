import { useEffect, useState } from "react";
import { fetchRisks } from "@/services/api";

// عرّف النوع هنا بدل الاستيراد من api.ts
type RiskDistribution = {
  region?: string;
  name: string;
  value: number;
  factors?: Array<{ name: string; value: number }>;
};

export default function RiskExplorer() {
  const [risks, setRisks] = useState<RiskDistribution[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchRisks()
      .then(setRisks)
      .catch(() => {
        setRisks([]);
        setError("تعذر جلب البيانات");
      });
  }, []);

  // مثال لتجهيز بيانات رسم أعمدة
  const bar = (risks ?? [])
    .flatMap((r) =>
      (r.factors ?? []).map((f) => ({
        x: `${r.region ?? ""}-${f.name}`,
        y: Math.round((f.value ?? 0) * 100),
      }))
    )
    .slice(0, 12);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-extrabold">مستكشف المخاطر</h1>

      <div className="rounded-2xl border bg-white p-4">
        {error ? (
          <div className="text-rose-600 text-sm">{error}</div>
        ) : bar.length === 0 ? (
          <div className="text-gray-500 text-sm">لا توجد بيانات لعرضها بعد.</div>
        ) : (
          // ضع مكوّن الرسم الفعلي هنا (Recharts مثلًا). مؤقتًا نعرض JSON مُهيّأ:
          <pre className="text-xs text-gray-700 overflow-auto">{JSON.stringify(bar, null, 2)}</pre>
        )}
      </div>
    </div>
  );
}
