const ITEMS = [
  "اسپرسوی واقعی",
  "پکیج کامل",
  "شبکه ایستگاه‌ها",
  "تأمین آسان",
  "۱۰۰ فنجان در یک پکیج",
] as const;

export function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div
      dir="ltr"
      aria-hidden
      className="overflow-hidden bg-ember py-3 text-cream"
    >
      <div className="marquee-track flex w-max items-center gap-8 whitespace-nowrap">
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center gap-8">
            {row.map((item, i) => (
              <span
                key={`${half}-${i}`}
                className="flex items-center gap-8 text-sm font-bold"
              >
                <span dir="rtl">{item}</span>
                <span className="text-amber-soft">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
