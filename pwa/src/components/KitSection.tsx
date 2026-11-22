import { toFaDigits } from "@/lib/validation";

const KIT_ITEMS = [
  {
    title: "لیوان",
    spec: "لیوان مارک‌دار 36coffee",
  },
  {
    title: "ساشه قهوه",
    spec: "پودر قهوه آسیاب‌شده، ۱۷ تا ۱۸ گرم",
  },
  {
    title: "درب لیوان",
    spec: "درب لیوان، برای هر فنجان",
  },
  {
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
    <section id="kit" className="scroll-mt-20 bg-choco text-cream">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <p className="flex items-center gap-3 text-xs font-bold tracking-wide text-amber-soft">
          <span className="inline-block h-px w-10 bg-amber-soft" aria-hidden />
          ۰۵ — معرفی محصول
        </p>
        <h2 className="mt-5 max-w-2xl text-3xl leading-snug font-black sm:text-4xl">
          از تهیه مواد اولیه تا یک فنجان کامل؛ همه‌چیز آماده است.
        </h2>
        <p className="mt-6 inline-flex items-center rounded-full border border-cream/60 px-5 py-2 text-base font-bold text-cream">
          ۱۰۰ فنجان کامل، در یک پکیج آماده.
        </p>

        <div className="mt-10">
          {KIT_ITEMS.map((item, index) => (
            <article
              key={item.title}
              className="flex items-start gap-5 border-t border-cream/15 py-6 last:border-b"
            >
              <span className="pt-1 text-sm font-black text-amber-soft">
                {toFaDigits(index + 1)}
              </span>
              <div>
                <h3 className="text-xl font-black">{item.title}</h3>
                <p className="mt-1 leading-7 text-cream/75">{item.spec}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 border-t border-cream/15 pt-8">
          <h3 className="text-lg font-black">یک فنجان کامل، در چهار قدم</h3>
          <ol className="mt-5 grid gap-4 sm:grid-cols-4">
            {STEPS.map((step, index) => (
              <li key={step} className="flex items-start gap-3">
                <span className="flex size-8 shrink-0 items-center justify-center border border-gold/60 text-sm font-black text-gold">
                  {toFaDigits(index + 1)}
                </span>
                <span className="pt-1 leading-7 text-cream/85">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
