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
      className="overflow-hidden border-y border-gold/20 bg-choco py-3.5 text-cream/60"
    >
      <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap">
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center gap-10">
            {row.map((item, i) => (
              <span
                key={`${half}-${i}`}
                className="flex items-center gap-10 text-xs font-bold tracking-wide"
              >
                <span dir="rtl">{item}</span>
                <span className="text-terra">·</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
