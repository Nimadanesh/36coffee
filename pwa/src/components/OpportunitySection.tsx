import { toFaDigits } from "@/lib/validation";

const VALUES = [
  {
    title: "فروش بیشتر",
    text: "محصول جدیدی برای فروش داری",
  },
  {
    title: "تأمین آسان",
    text: "لازم نیست اقلام را جداگانه تهیه کنی",
  },
  {
    title: "عضویت در شبکه",
    text: "تنها یک خریدار نیستی؛ همکار شبکه‌ای",
  },
  {
    title: "مسیر رشد",
    text: "فرصت‌های آینده برای توسعه کسب‌وکارت",
  },
] as const;

export function OpportunitySection() {
  return (
    <section id="opportunity" className="scroll-mt-20 bg-cream text-espresso">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <p className="flex items-center gap-3 text-xs font-bold tracking-wide text-terra">
          <span className="inline-block h-px w-10 bg-terra" aria-hidden />
          ۰۴ — فرصت کسب‌وکار
        </p>
        <h2 className="mt-5 max-w-2xl text-3xl leading-snug font-black sm:text-4xl">
          یک ایستگاه قهوه. یک فرصت تازه برای کسب‌وکار.
        </h2>
        <div className="mt-10">
          {VALUES.map((value, index) => (
            <article
              key={value.title}
              className="flex items-start gap-5 border-t border-espresso/15 py-6 last:border-b"
            >
              <span className="pt-1 text-sm font-black text-terra">
                {toFaDigits(index + 1)}
              </span>
              <div>
                <h3 className="text-xl font-black">{value.title}</h3>
                <p className="mt-1 leading-7 text-espresso/75">{value.text}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8 text-sm leading-7 text-espresso/60">
          ما افزایش قطعی فروش را وعده نمی‌دهیم؛ فرصت افزایش فروش را معرفی
          می‌کنیم.
        </p>
      </div>
    </section>
  );
}
