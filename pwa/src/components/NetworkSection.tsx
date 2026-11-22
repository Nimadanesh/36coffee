import { BadgeCheck, HeartHandshake, Store } from "lucide-react";

export function NetworkSection() {
  return (
    <section id="network" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="overflow-hidden rounded-[2rem] bg-pine-deep p-6 text-cream sm:p-10">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold text-amber-soft">
            <HeartHandshake className="size-4" aria-hidden />
            شبکه 36coffee
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl leading-snug font-black sm:text-4xl">
            آینده این شبکه با ایستگاه‌هایی مثل تو ساخته می‌شود.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-cream/85">
            امروز با یک پکیج قهوه شروع می‌کنیم. فردا می‌توانیم فرصت‌های بیشتری
            برای مشتری‌سازی، وفادارسازی و رشد ایستگاه‌ها بسازیم.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              { title: "امروز", text: "با یک پکیج قهوه شروع می‌کنیم" },
              { title: "فردا", text: "مشتری‌سازی برای ایستگاه تو" },
              { title: "بعد", text: "وفادارسازی و رشد ایستگاه‌ها" },
            ].map((step) => (
              <div
                key={step.title}
                className="rounded-3xl border border-white/15 bg-white/5 p-5"
              >
                <p className="flex items-center gap-2 text-sm font-bold text-amber-soft">
                  <Store className="size-4" aria-hidden />
                  {step.title}
                </p>
                <p className="mt-2 leading-7 text-cream/90">{step.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t border-white/15 pt-6">
            <p className="flex items-center gap-2 text-sm font-bold text-cream/70">
              <BadgeCheck className="size-4 text-sage" aria-hidden />
              معماری پیشنهادی برند — هنوز فعال نیست:
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {["36coffee Partner", "36coffee Station", "36coffee Club"].map(
                (name) => (
                  <span
                    key={name}
                    dir="ltr"
                    className="rounded-full border border-white/25 px-4 py-1.5 text-sm font-bold"
                  >
                    {name}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
