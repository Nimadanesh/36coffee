// 36coffee — shared constants.
// TODO (قیمت واقعی): قیمت هر پکیج ۱۰۰تایی را وقتی مشخص شد اینجا بگذارید.
// تا آن موقع هیچ قیمتی در سایت نمایش داده نمی‌شود و قیمت نهایی را تیم
// فروش موقع تماس تأیید می‌کند.
export const PRICE_PER_PACK_TODO: number | null = null;

/** تعداد فنجان در هر پکیج. */
export const CUPS_PER_PACK = 100;

/** گزینه‌های تعداد پکیج در فرم سفارش. */
export const PACK_QUICK_CHOICES = [1, 3, 5, 10] as const;

export const MAX_PACKS_PER_ORDER = 20;

/** نوع‌های محل فعالیت در فرم ثبت‌نام. */
export const LOCATION_TYPES = [
  "دکه خیابانی",
  "ایستگاه / کیوسک",
  "مغازه کوچک",
  "سایر",
] as const;
