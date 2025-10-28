import { useEffect, useState } from "react";
// كان: import Card from "@components/Card";
import Card from "../components/Card";
// كان: import { fetchFairness } from "@services/api";
import { fetchFairness } from "../services/api";

// يمكنك تعديل النوع حسب استجابة الباك
type FairnessMetric = {
  group: string;
  auc?: number;
  accuracy?: number;
  tpr?: number;
  fpr?: number;
};

export default function Fairness() {
  const [rows, setRows] = useState<FairnessMetric[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchFairness()
      .then((data) => setRows(Array.isArray(data) ? data : []))
      .catch(() => setError("تعذر جلب بيانات العدالة"));
  }, []);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-extrabold">العدالة والتحيز</h1>

      <Card title="مقاييس حسب المجموعة">
        {error ? (
          <div className="text-rose-600 text-sm">{error}</div>
        ) : rows.length === 0 ? (
          <div className="text-gray-500 text-sm">لا توجد بيانات متاحة حالياً.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-gray-500">
                  <th className="text-right py-2">المجموعة</th>
                  <th className="text-right py-2">AUC</th>
                  <th className="text-right py-2">الدقة</th>
                  <th className="text-right py-2">TPR</th>
                  <th className="text-right py-2">FPR</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={i} className="border-t">
                    <td className="py-2">{r.group}</td>
                    <td className="py-2">{r.auc ?? "-"}</td>
                    <td className="py-2">{r.accuracy ?? "-"}</td>
                    <td className="py-2">{r.tpr ?? "-"}</td>
                    <td className="py-2">{r.fpr ?? "-"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>
    </div>
  );
}
