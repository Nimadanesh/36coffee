import Link from "next/link";
import { readRecords, type StoredRecord } from "@/lib/store";
import { toFaDigits } from "@/lib/validation";

export const dynamic = "force-dynamic";

/**
 * نمای مدیریتی موقت (MVP) — بدون احراز هویت.
 * فقط برای دیدن درخواست‌های ثبت‌شده در همین نسخه نمایشی است؛
 * در نسخه واقعی باید ورود مدیر و دیتابیس واقعی اضافه شود.
 */

function formatDate(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleString("fa-IR");
}

function value(record: StoredRecord, key: string): string {
  const v = record[key];
  return v === undefined || v === null ? "—" : String(v);
}

export default async function PanelPage() {
  const [leads, orders] = await Promise.all([
    readRecords("leads.json"),
    readRecords("orders.json"),
  ]);

  return (
    <main className="min-h-screen bg-cream text-espresso">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
      <p className="rounded-sm border-2 border-dashed border-terra bg-latte/60 p-4 text-sm leading-7 font-medium text-espresso">
        نمای مدیریتی موقت — بدون احراز هویت. فقط برای نسخه نمایشی است؛ در
        نسخه واقعی باید ورود مدیر و دیتابیس واقعی اضافه شود. رکوردها در فایل
        JSON ذخیره می‌شوند و در گیت کامیت نمی‌شوند.
      </p>

      <h1 className="mt-8 text-3xl font-black text-espresso">پنل 36coffee</h1>

      <section className="mt-8">
        <h2 className="text-xl font-black text-espresso">
          درخواست‌های همکاری ({toFaDigits(leads.length)})
        </h2>
        {leads.length === 0 ? (
          <p className="mt-3 text-muted-foreground">
            هنوز درخواستی ثبت نشده است.
          </p>
        ) : (
          <div className="mt-4 overflow-x-auto rounded-sm border border-border bg-card">
            <table className="w-full min-w-[640px] text-right text-sm">
              <thead>
                <tr className="border-b border-border bg-cream text-espresso">
                  <th className="px-4 py-3 font-bold">ایستگاه</th>
                  <th className="px-4 py-3 font-bold">صاحب ایستگاه</th>
                  <th className="px-4 py-3 font-bold">موبایل</th>
                  <th className="px-4 py-3 font-bold">شهر و محدوده</th>
                  <th className="px-4 py-3 font-bold">نوع محل</th>
                  <th className="px-4 py-3 font-bold">تاریخ</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead) => (
                  <tr key={lead.id} className="border-b border-border/60 last:border-0">
                    <td className="px-4 py-3 font-bold">{value(lead, "stationName")}</td>
                    <td className="px-4 py-3">{value(lead, "ownerName")}</td>
                    <td className="px-4 py-3" dir="ltr">
                      {value(lead, "mobile")}
                    </td>
                    <td className="px-4 py-3">{value(lead, "cityArea")}</td>
                    <td className="px-4 py-3">{value(lead, "locationType")}</td>
                    <td className="px-4 py-3 text-muted-foreground">
                      {formatDate(lead.createdAt)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-black text-espresso">
          سفارش‌ها ({toFaDigits(orders.length)})
        </h2>
        {orders.length === 0 ? (
          <p className="mt-3 text-muted-foreground">
            هنوز سفارشی ثبت نشده است.
          </p>
        ) : (
          <div className="mt-4 overflow-x-auto rounded-sm border border-border bg-card">
            <table className="w-full min-w-[640px] text-right text-sm">
              <thead>
                <tr className="border-b border-border bg-cream text-espresso">
                  <th className="px-4 py-3 font-bold">ایستگاه</th>
                  <th className="px-4 py-3 font-bold">موبایل</th>
                  <th className="px-4 py-3 font-bold">شهر و محدوده</th>
                  <th className="px-4 py-3 font-bold">پکیج</th>
                  <th className="px-4 py-3 font-bold">فنجان</th>
                  <th className="px-4 py-3 font-bold">توضیح</th>
                  <th className="px-4 py-3 font-bold">تاریخ</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-b border-border/60 last:border-0">
                    <td className="px-4 py-3 font-bold">{value(order, "stationName")}</td>
                    <td className="px-4 py-3" dir="ltr">
                      {value(order, "mobile")}
                    </td>
                    <td className="px-4 py-3">{value(order, "cityArea")}</td>
                    <td className="px-4 py-3">{toFaDigits(value(order, "packs"))}</td>
                    <td className="px-4 py-3">{toFaDigits(value(order, "totalCups"))}</td>
                    <td className="px-4 py-3">{value(order, "note")}</td>
                    <td className="px-4 py-3 text-muted-foreground">
                      {formatDate(order.createdAt)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <p className="mt-8">
        <Link href="/" className="font-bold text-terra underline underline-offset-4">
          بازگشت به صفحه اصلی
        </Link>
      </p>
      </div>
    </main>
  );
}
