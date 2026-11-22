import { Leaf, TrendingUp, Truck, Users } from "lucide-react";
import { toFaDigits } from "@/lib/validation";

const VALUES = [
  {
    icon: TrendingUp,
    title: "فروش بیشتر",
    text: "محصول جدیدی برای فروش داری",
  },
  {
    icon: Truck,
    title: "تأمین آسان",
    text: "لازم نیست اقلام را جداگانه تهیه کنی",
  },
  {
    icon: Users,
    title: "عضویت در شبکه",
    text: "تنها یک خریدار نیستی؛ همکار شبکه‌ای",
  },
  {
    icon: Leaf,
    title: "مسیر رشد",
    text: "فرصت‌های آینده برای توسعه کسب‌وکارت",
  },
] as const;

export function OpportunitySection() {
  return (
    <section id="opportunity" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <p className="text-sm font-bold text-ember">فرصت کسب‌وکار</p>
        <h2 className="mt-3 max-w-2xl text-3xl leading-snug font-black text-pine sm:text-4xl">
          یک ایستگاه قهوه. یک فرصت تازه برای کسب‌وکار.
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((value, index) => (
            <article
              key={value.title}
              className="rounded-3xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <span className="flex size-12 items-center justify-center rounded-2xl bg-pine text-cream">
                <value.icon className="size-6" aria-hidden />
              </span>
              <p className="mt-4 text-sm font-bold text-muted-foreground">
                {toFaDigits(index + 1)}
              </p>
              <h3 className="mt-1 text-xl font-black text-pine">{value.title}</h3>
              <p className="mt-2 leading-7 text-espresso/80">{value.text}</p>
            </article>
          ))}
        </div>
        <p className="mt-6 text-sm leading-7 text-muted-foreground">
          ما افزایش قطعی فروش را وعده نمی‌دهیم؛ فرصت افزایش فروش را معرفی
          می‌کنیم.
        </p>
      </div>
    </section>
  );
}
