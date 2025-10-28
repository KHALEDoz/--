import PageHeader from "@/components/PageHeader";
import { useState } from "react";

export default function Ingest() {
  const [status, setStatus] = useState<"idle" | "uploading" | "done">("idle");

  return (
    <div className="space-y-6" dir="rtl">
      <PageHeader title="رفع بيانات المرضى" subtitle="CSV, XLSX حتى 20MB" />

      <div className="rounded-2xl border bg-white p-6">
        <div className="space-y-4">
          <input
            type="file"
            className="w-full rounded-xl border px-3 py-2"
            disabled
          />

          <div className="flex items-center gap-2">
            <button
              className="rounded-lg bg-gray-900 text-white px-4 py-2 hover:bg-black disabled:opacity-60"
              onClick={() => setStatus("uploading")}
              disabled={status !== "idle"}
            >
              رفع الملف
            </button>
            <button
              className="rounded-lg border px-4 py-2 hover:bg-gray-50"
              onClick={() => setStatus("done")}
            >
              تحديث الحالة
            </button>
          </div>

          <div className="h-2 rounded bg-gray-100 overflow-hidden">
            <div
              className={`h-full transition-all ${
                status === "uploading"
                  ? "w-1/2 bg-gray-300"
                  : status === "done"
                  ? "w-full bg-gray-900"
                  : "w-0"
              }`}
            />
          </div>

          <ul className="text-xs text-gray-500 list-disc pr-5 space-y-1">
            <li>هذه النسخة Mock — لا يتم إرسال الملف فعليًا.</li>
            <li>للإصدار الحقيقي: استخدم <code>FormData</code> وendpoint فعلي.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
