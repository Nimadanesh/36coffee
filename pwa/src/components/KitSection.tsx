import { Bean, CupSoda, ShieldCheck, Sparkles } from "lucide-react";
import { toFaDigits } from "@/lib/validation";

const KIT_ITEMS = [
  {
    icon: CupSoda,
    title: "لیوان",
    spec: "لیوان مارک‌دار 36coffee",
  },
  {
    icon: Bean,
    title: "ساشه قهوه",
    spec: "پودر قهوه آسیاب‌شده، ۱۷ تا ۱۸ گرم",
  },
  {
    icon: ShieldCheck,
    title: "درب لیوان",
    spec: "درب لیوان، برای هر فنجان",
  },
  {
    icon: Sparkles,
    title: "شکلات",
    spec: "شکلات ۳ تا ۵ گرمی، کنار هر فنجان",
  },
] as const;

const STEPS = [
  "لیوان را بردار",
  "ساشه را باز کن",
  "اسپرسو را بگیر",
  "شکلات را کنارش بگذار",
] as const;

export function KitSection() {
  return (
    <section id="kit" className="scroll-mt-20 bg-latte/60">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <p className="text-sm font-bold text-ember">معرفی محصول</p>
        <h2 className="mt-3 max-w-2xl text-3xl leading-snug font-black text-pine sm:text-4xl">
          از تهیه مواد اولیه تا یک فنجان کامل؛ همه‌چیز آماده است.
        </h2>
        <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-pine px-5 py-2 text-base font-bold text-cream">
          ۱۰۰ فنجان کامل، در یک پکیج آماده.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {KIT_ITEMS.map((item, index) => (
            <article
              key={item.title}
              className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-sm"
            >
              <span className="absolute top-4 left-4 rounded-full bg-cream px-2.5 py-1 text-xs font-black text-pine">
                {toFaDigits(index + 1)}
              </span>
              <span className="flex size-12 items-center justify-center rounded-2xl bg-ember text-white">
                <item.icon className="size-6" aria-hidden />
              </span>
              <h3 className="mt-4 text-xl font-black text-pine">{item.title}</h3>
              <p className="mt-2 leading-7 text-espresso/80">{item.spec}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-3xl bg-pine p-6 text-cream sm:p-8">
          <h3 className="text-lg font-black">یک فنجان کامل، در چهار قدم</h3>
          <ol className="mt-4 grid gap-3 sm:grid-cols-4">
            {STEPS.map((step, index) => (
              <li key={step} className="flex items-start gap-3">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-ember text-sm font-black text-white">
                  {toFaDigits(index + 1)}
                </span>
                <span className="pt-1 leading-7">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
