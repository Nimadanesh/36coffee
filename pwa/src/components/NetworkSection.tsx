export function NetworkSection() {
  return (
    <section id="network" className="scroll-mt-20 bg-cream text-espresso">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <p className="flex items-center gap-3 text-xs font-bold tracking-wide text-terra">
          <span className="inline-block h-px w-10 bg-terra" aria-hidden />
          ۰۶ — شبکه 36coffee
        </p>
        <h2 className="mt-5 max-w-2xl text-3xl leading-snug font-black sm:text-4xl">
          آینده این شبکه با ایستگاه‌هایی مثل تو ساخته می‌شود.
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-espresso/75">
          امروز با یک پکیج قهوه شروع می‌کنیم. فردا می‌توانیم فرصت‌های بیشتری
          برای مشتری‌سازی، وفادارسازی و رشد ایستگاه‌ها بسازیم.
        </p>

        <div className="mt-10">
          {[
            { title: "امروز", text: "با یک پکیج قهوه شروع می‌کنیم" },
            { title: "فردا", text: "مشتری‌سازی برای ایستگاه تو" },
            { title: "بعد", text: "وفادارسازی و رشد ایستگاه‌ها" },
          ].map((step, index) => (
            <div
              key={step.title}
              className="flex items-start gap-5 border-t border-espresso/15 py-6 last:border-b"
            >
              <span className="pt-1 text-sm font-black text-terra">
                {["۰۱", "۰۲", "۰۳"][index]}
              </span>
              <div>
                <h3 className="text-xl font-black">{step.title}</h3>
                <p className="mt-1 leading-7 text-espresso/75">{step.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-espresso/15 pt-6">
          <p className="text-sm font-bold text-espresso/60">
            معماری پیشنهادی برند — هنوز فعال نیست:
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {["36coffee Partner", "36coffee Station", "36coffee Club"].map(
              (name) => (
                <span
                  key={name}
                  dir="ltr"
                  className="rounded-full border border-espresso/30 px-4 py-1.5 text-sm font-bold"
                >
                  {name}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
