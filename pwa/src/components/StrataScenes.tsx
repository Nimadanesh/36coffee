import Image from "next/image";

/**
 * سه صحنه متحرک به سبک مرجع STRATA، به همان ترتیب ریل:
 * ۰۱ دانه چرخان روی کرم — ۰۲ آسیاب انفجاری روی سفالی — ۰۳ ریختن قهوه با گرداب.
 * تصاویر با ابزار تولید تصویر ساخته شده‌اند و عکس واقعی محصول نیستند.
 */

function Eyebrow({
  index,
  label,
  tone,
}: {
  index: string;
  label: string;
  tone: "terra" | "cream";
}) {
  return (
    <p
      className={
        tone === "terra"
          ? "flex items-center gap-3 text-xs font-bold tracking-wide text-terra"
          : "flex items-center gap-3 text-xs font-bold tracking-wide text-cream"
      }
    >
      <span
        className={
          tone === "terra"
            ? "inline-block h-px w-10 bg-terra"
            : "inline-block h-px w-10 bg-cream"
        }
        aria-hidden
      />
      {index} — {label}
    </p>
  );
}

export function StrataScenes() {
  return (
    <section aria-label="سه صحنه قهوه">
      {/* ۰۱ — دانه قهوه: چرخش آرام روی پس‌زمینه کرم */}
      <article className="overflow-hidden bg-cream text-espresso">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2">
          <div>
            <Eyebrow index="۰۱" label="دانه قهوه" tone="terra" />
            <h2 className="mt-5 text-4xl leading-[1.2] font-black sm:text-5xl sm:leading-[1.15]">
              اسپرسوی واقعی،
              <br />
              نه قهوه فوری.
            </h2>
            <p className="mt-5 max-w-md leading-8 text-espresso/75">
              همه‌چیز از یک دانه شروع می‌شود؛ دانه‌ای که عمق طعم را می‌سازد.
            </p>
          </div>
          <div className="bean-stage mx-auto w-full max-w-md">
            <Image
              src="/images/bean.jpg"
              alt="یک دانه قهوه بزرگ و برشته، با شیار وسط مشخص"
              width={1600}
              height={1600}
              sizes="(max-width: 768px) 100vw, 480px"
              className="bean-turn w-full rounded-sm"
              priority={false}
            />
          </div>
        </div>
      </article>

      {/* ۰۲ — آسیاب: نمای انفجاری روی پس‌زمینه سفالی */}
      <article className="overflow-hidden bg-terra text-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2">
          <div className="lg:order-2">
            <Eyebrow index="۰۲" label="آسیاب" tone="cream" />
            <h2 className="mt-5 text-4xl leading-[1.2] font-black sm:text-5xl sm:leading-[1.15]">
              آسیاب‌شده،
              <br />
              دقیق و تازه.
            </h2>
            <p className="mt-5 max-w-md leading-8 text-cream/85">
              پودر قهوه آسیاب‌شده، ۱۷ تا ۱۸ گرم — به‌اندازه یک اسپرسوی واقعی.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm lg:order-1">
            <Image
              src="/images/grinder.jpg"
              alt="آسیاب قهوه با قطعات جدا از هم، به‌صورت نمای انفجاری"
              width={1344}
              height={1792}
              sizes="(max-width: 768px) 100vw, 400px"
              className="drift-slow w-full rounded-sm"
            />
          </div>
        </div>
      </article>

      {/* ۰۳ — ریختن: قهوه از قوری شیشه‌ای در فنجان، با گرداب */}
      <article className="overflow-hidden bg-choco-deep text-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2">
          <div>
            <Eyebrow index="۰۳" label="ریختن" tone="cream" />
            <h2 className="mt-5 text-4xl leading-[1.2] font-black sm:text-5xl sm:leading-[1.15]">
              ۱۰۰ فنجان کامل،
              <br />
              در یک پکیج آماده.
            </h2>
            <p className="mt-5 max-w-md leading-8 text-cream/75">
              از تهیه مواد اولیه تا یک فنجان کامل؛ همه‌چیز آماده است.
            </p>
            <a
              href="#order"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-full border border-cream/80 px-8 py-3.5 text-base font-bold text-cream transition hover:bg-cream hover:text-choco-deep"
            >
              سفارش پکیج
            </a>
          </div>
          <div className="mx-auto w-full max-w-xl overflow-hidden rounded-sm">
            <Image
              src="/images/pour.jpg"
              alt="قهوه از قوری شیشه‌ای در فنجان سفید ریخته می‌شود و گرداب می‌سازد"
              width={1920}
              height={1280}
              sizes="(max-width: 768px) 100vw, 560px"
              className="ken-burns-slow w-full"
            />
          </div>
        </div>
        <p className="border-t border-cream/10 px-4 pb-6 text-center text-xs leading-6 text-cream/45 sm:px-6">
          تصاویر این سه صحنه با ابزار تولید تصویر ساخته شده‌اند و عکس واقعی
          محصول نیستند.
        </p>
      </article>
    </section>
  );
}
