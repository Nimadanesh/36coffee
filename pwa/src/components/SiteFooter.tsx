export function SiteFooter() {
  return (
    <footer className="bg-choco-deep text-cream">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-2xl font-black">36coffee</p>
            <p className="mt-4 text-lg font-bold">
              بیشتر از قهوه. یک فرصت برای رشد.
            </p>
            <p
              dir="ltr"
              className="mt-1 text-left text-sm font-bold text-amber-soft"
            >
              YOUR STATION. YOUR BUSINESS.
            </p>
          </div>
          <nav
            className="flex flex-col gap-2 text-sm text-cream/80"
            aria-label="ناوبری فوتر"
          >
            <a href="#opportunity" className="hover:text-cream">
              فرصت کسب‌وکار
            </a>
            <a href="#kit" className="hover:text-cream">
              پکیج ۱۰۰تایی
            </a>
            <a href="#network" className="hover:text-cream">
              شبکه ایستگاه‌ها
            </a>
            <a href="#register" className="hover:text-cream">
              ثبت درخواست همکاری
            </a>
            <a href="#order" className="hover:text-cream">
              سفارش پکیج
            </a>
          </nav>
        </div>
        <div className="mt-10 border-t border-gold/25 pt-6 text-sm leading-7 text-cream/70">
          <p>
            شماره تماس و ایمیل 36coffee هنوز مشخص نشده است؛ بعد از ثبت‌نام، تیم
            فروش برای پیگیری با شما تماس می‌گیرد.
          </p>
          <p className="mt-2">© ۱۴۰۵ 36coffee — همه حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
}
