import { ArrowLeft } from "lucide-react";

export function HeroSection() {
  return (
    <section id="top" className="hero-glow overflow-hidden bg-choco-deep text-cream">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
        <div className="fade-up max-w-3xl">
          <p className="flex items-center gap-3 text-xs font-bold tracking-wide text-terra">
            <span className="inline-block h-px w-10 bg-terra" aria-hidden />
            ۰۱ — شبکه ایستگاه‌های قهوه
          </p>
          <h1 className="mt-6 text-[2.6rem] leading-[1.2] font-black sm:text-6xl sm:leading-[1.15] lg:text-[4.2rem]">
            ایستگاه قهوه‌ات، شروع یک مسیر بزرگ‌تر.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-9 text-cream/85">
            با 36coffee اسپرسوی واقعی را به مشتری‌هایت عرضه کن و به شبکه‌ای از
            ایستگاه‌های قهوه بپیوند که برای رشد ساخته می‌شود.
          </p>
          <p className="mt-3 max-w-2xl leading-8 text-cream/60">
            36coffee قهوه اسپرسو واقعی را به دکه‌ها و ایستگاه‌های کوچک شهر
            می‌رساند، نه قهوه فوری. پکیج کامل ۱۰۰تایی، هر عدد یک فنجان کامل است.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#register"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/80 px-8 py-3.5 text-base font-bold text-cream transition hover:bg-cream hover:text-choco-deep"
            >
              ایستگاهت را معرفی کن
              <ArrowLeft className="size-5" aria-hidden />
            </a>
            <a
              href="#order"
              className="inline-flex items-center justify-center gap-2 px-2 py-3.5 text-base font-bold text-cream/80 underline decoration-gold/60 underline-offset-8 transition hover:text-cream"
            >
              سفارش پکیج
            </a>
          </div>
        </div>

        <div className="mt-14 border border-dashed border-gold/50 px-6 py-10 text-center sm:mt-16 sm:py-14">
          <p className="text-xs font-bold tracking-wide text-gold">
            جای عکس
          </p>
          <p className="mt-2 text-sm leading-7 text-cream/70">
            عکس واقعی لیوان در ایستگاه — به‌زودی
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-cream/15 pt-6 text-sm font-medium text-cream/70">
          <span>اسپرسوی واقعی</span>
          <span className="text-terra" aria-hidden>
            ·
          </span>
          <span>نه قهوه فوری</span>
          <span className="text-terra" aria-hidden>
            ·
          </span>
          <span>۱۰۰ فنجان در یک پکیج</span>
          <span className="ms-auto hidden text-xs tracking-wide text-cream/50 sm:block">
            کیفیت قهوه را تضمین می‌کنیم؛ تأمین، یک‌جا و منظم.
          </span>
        </div>
      </div>
    </section>
  );
}
