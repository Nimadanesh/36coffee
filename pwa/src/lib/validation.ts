/** تبدیل ارقام فارسی/عربی به لاتین و حذف فاصله و خط تیره. */
export function normalizeDigits(input: string): string {
  return input
    .replace(/[۰-۹]/g, (d) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(d)))
    .replace(/[٠-٩]/g, (d) => String("٠١٢٣٤٥٦٧٨٩".indexOf(d)))
    .replace(/[\s-]/g, "");
}

/** تبدیل ارقام لاتین به فارسی برای نمایش. */
export function toFaDigits(input: string | number): string {
  return String(input).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]);
}

/** موبایل ایرانی: ۱۱ رقم و شروع با 09. */
export function isValidIranianMobile(input: string): boolean {
  return /^09\d{9}$/.test(normalizeDigits(input));
}

export interface RegistrationInput {
  stationName: string;
  ownerName: string;
  mobile: string;
  cityArea: string;
  locationType: string;
}

export interface OrderInput {
  stationName: string;
  mobile: string;
  cityArea: string;
  packs: number;
  note: string;
}

function required(value: string, label: string, errors: string[]): void {
  if (!value.trim()) errors.push(`${label} را وارد کنید.`);
}

export function validateRegistration(
  input: RegistrationInput,
): string[] {
  const errors: string[] = [];
  required(input.stationName, "نام ایستگاه", errors);
  required(input.ownerName, "نام صاحب ایستگاه", errors);
  required(input.cityArea, "شهر و محدوده فعالیت", errors);
  required(input.locationType, "نوع محل فعالیت", errors);
  if (!input.mobile.trim()) {
    errors.push("شماره موبایل را وارد کنید.");
  } else if (!isValidIranianMobile(input.mobile)) {
    errors.push("شماره موبایل باید ۱۱ رقم و با 09 شروع شود؛ مثل 09123456789.");
  }
  return errors;
}

export function validateOrder(input: OrderInput): string[] {
  const errors: string[] = [];
  required(input.stationName, "نام ایستگاه", errors);
  required(input.cityArea, "شهر و محدوده فعالیت", errors);
  if (!input.mobile.trim()) {
    errors.push("شماره موبایل را وارد کنید.");
  } else if (!isValidIranianMobile(input.mobile)) {
    errors.push("شماره موبایل باید ۱۱ رقم و با 09 شروع شود؛ مثل 09123456789.");
  }
  if (!Number.isInteger(input.packs) || input.packs < 1) {
    errors.push("تعداد پکیج باید حداقل ۱ باشد.");
  }
  return errors;
}
