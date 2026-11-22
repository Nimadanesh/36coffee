import { ArrowLeft, Coffee, Package, ShieldCheck } from "lucide-react";

/** تصویر لیوان قهوه — SVG و CSS، بدون عکس خارجی. */
function CupVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="float-soft relative overflow-hidden rounded-[2rem] bg-pine-deep p-6 text-cream shadow-xl sm:p-8">
        <div
          aria-hidden
          className="absolute -top-16 -left-16 size-48 rounded-full bg-ember/25 blur-2xl"
        />
        <div
          aria-hidden
          className="absolute -bottom-20 -right-10 size-56 rounded-full bg-sage/25 blur-2xl"
        />
        <svg
          viewBox="0 0 320 260"
          role="img"
          aria-label="یک فنجان قهوه داغ"
          className="relative mx-auto w-full max-w-[300px]"
        >
          <path
            d="M118 38 q6 -16 0 -26 M150 42 q6 -16 0 -26 M182 38 q6 -16 0 -26"
            fill="none"
            stroke="#ebb881"
            strokeWidth="5"
            strokeLinecap="round"
            className="steam-line"
          />
          <path
            d="M134 44 q6 -16 0 -26 M166 46 q6 -16 0 -26"
            fill="none"
            stroke="#ebb881"
            strokeWidth="5"
            strokeLinecap="round"
            className="steam-line-delayed"
          />
          <ellipse cx="160" cy="228" rx="118" ry="14" fill="#0e2118" />
          <ellipse cx="160" cy="224" rx="118" ry="14" fill="#f6ebde" opacity="0.14" />
          <path
            d="M72 84 h176 v52 a64 64 0 0 1 -64 64 h-48 a64 64 0 0 1 -64 -64 z"
            fill="#f6ebde"
          />
          <path
            d="M248 96 q44 4 40 34 q-4 28 -44 26"
            fill="none"
            stroke="#f6ebde"
            strokeWidth="14"
            strokeLinecap="round"
          />
          <ellipse cx="160" cy="84" rx="88" ry="12" fill="#51322d" />
          <ellipse cx="160" cy="84" rx="64" ry="8" fill="#3b2417" />
          <text
            x="160"
            y="152"
            textAnchor="middle"
            fontSize="26"
            fontWeight="900"
            fill="#1e3d2f"
            fontFamily="inherit"
          >
            36coffee
          </text>
        </svg>
        <p className="relative mt-2 text-center text-sm font-medium text-cream/80">
          اسپرسوی واقعی، در ایستگاه خودت
        </p>
      </div>

      <span className="absolute -top-3 right-2 rounded-full bg-ember px-3 py-1.5 text-xs font-bold text-white shadow-lg sm:right-6">
        اسپرسوی واقعی
      </span>
      <span className="absolute bottom-16 -right-1 rounded-full bg-card px-3 py-1.5 text-xs font-bold text-pine shadow-lg sm:right-2">
        نه قهوه فوری
      </span>
      <span className="absolute bottom-4 left-2 rounded-full bg-latte px-3 py-1.5 text-xs font-bold text-espresso shadow-lg">
        ۱۰۰ فنجان در یک پکیج
      </span>
    </div>
  );
}

export function HeroSection() {
  return (
    <section id="top" className="overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:items-center lg:py-20">
        <div className="fade-up">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-bold text-pine">
            <Coffee className="size-4 text-ember" aria-hidden />
            شبکه ایستگاه‌های قهوه
          </p>
          <h1 className="mt-5 text-4xl leading-[1.25] font-black text-pine sm:text-5xl lg:text-[3.4rem] lg:leading-[1.2]">
            ایستگاه قهوه‌ات، شروع یک مسیر بزرگ‌تر.
          </h1>
          <p className="mt-5 text-lg leading-8 text-espresso/85">
            با 36coffee اسپرسوی واقعی را به مشتری‌هایت عرضه کن و به شبکه‌ای از
            ایستگاه‌های قهوه بپیوند که برای رشد ساخته می‌شود.
          </p>
          <p className="mt-3 text-base leading-7 text-muted-foreground">
            36coffee قهوه اسپرسو واقعی را به دکه‌ها و ایستگاه‌های کوچک شهر
            می‌رساند، نه قهوه فوری. پکیج کامل ۱۰۰تایی، هر عدد یک فنجان کامل است.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#register"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ember px-7 py-3.5 text-base font-bold text-white shadow-md transition hover:bg-ember/90"
            >
              ایستگاهت را معرفی کن
              <ArrowLeft className="size-5" aria-hidden />
            </a>
            <a
              href="#order"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-pine bg-transparent px-7 py-3.5 text-base font-bold text-pine transition hover:bg-pine hover:text-cream"
            >
              <Package className="size-5" aria-hidden />
              سفارش پکیج
            </a>
          </div>
          <p className="mt-6 flex items-center gap-2 text-sm font-medium text-pine">
            <ShieldCheck className="size-5 text-sage" aria-hidden />
            کیفیت قهوه را تضمین می‌کنیم؛ تأمین، یک‌جا و منظم.
          </p>
        </div>
        <CupVisual />
      </div>
    </section>
  );
}
