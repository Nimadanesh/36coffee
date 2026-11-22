"use client";

import { useState, type FormEvent } from "react";
import { CircleCheck, Minus, Plus, ShoppingBag } from "lucide-react";
import { CUPS_PER_PACK, MAX_PACKS_PER_ORDER, PACK_QUICK_CHOICES } from "@/lib/constants";
import {
  normalizeDigits,
  toFaDigits,
  validateOrder,
  type OrderInput,
} from "@/lib/validation";

const inputCls =
  "w-full rounded-sm border border-input bg-card px-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/40";

export function OrderSection() {
  const [packs, setPacks] = useState<number>(1);
  const [form, setForm] = useState<Omit<OrderInput, "packs">>({
    stationName: "",
    mobile: "",
    cityArea: "",
    note: "",
  });
  const [errors, setErrors] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");
  const [doneId, setDoneId] = useState("");

  function clampPacks(value: number): number {
    return Math.min(MAX_PACKS_PER_ORDER, Math.max(1, value));
  }

  function setField<K extends keyof Omit<OrderInput, "packs">>(
    key: K,
    value: string,
  ): void {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    setServerError("");
    const problems = validateOrder({
      ...form,
      mobile: normalizeDigits(form.mobile),
      packs,
    });
    if (problems.length > 0) {
      setErrors(problems);
      return;
    }
    setErrors([]);
    setSubmitting(true);
    try {
      const response = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          mobile: normalizeDigits(form.mobile),
          packs,
        }),
      });
      const data: unknown = await response.json().catch(() => null);
      if (!response.ok) {
        const message =
          data &&
          typeof data === "object" &&
          "errors" in data &&
          Array.isArray((data as { errors: unknown }).errors)
            ? ((data as { errors: unknown[] }).errors as string[]).join(" ")
            : "ثبت سفارش انجام نشد. دوباره تلاش کن.";
        setServerError(message);
        return;
      }
      const id =
        data && typeof data === "object" && "id" in data
          ? String((data as { id: unknown }).id)
          : "";
      setDoneId(id);
    } catch {
      setServerError("ارتباط برقرار نشد. اتصال اینترنت را بررسی کن و دوباره تلاش کن.");
    } finally {
      setSubmitting(false);
    }
  }

  if (doneId) {
    return (
      <section id="order" className="scroll-mt-20 bg-cream text-espresso">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-2xl rounded-sm border border-border bg-card p-8 text-center shadow-sm">
            <CircleCheck className="mx-auto size-14 text-terra" aria-hidden />
            <h2 className="mt-4 text-2xl font-black text-espresso">سفارشت ثبت شد.</h2>
            <p className="mt-3 leading-8 text-espresso/80">
              {toFaDigits(packs)} پکیج ۱۰۰تایی — یعنی {toFaDigits(packs * CUPS_PER_PACK)}{" "}
              فنجان کامل — برای ایستگاه {form.stationName} ثبت شد.
              <br />
              قیمت نهایی را تیم فروش موقع تماس تأیید می‌کند.
            </p>
            <p className="mt-3 text-sm text-muted-foreground" dir="ltr">
              {doneId}
            </p>
            <button
              type="button"
              onClick={() => {
                setDoneId("");
                setPacks(1);
                setForm({ stationName: "", mobile: "", cityArea: "", note: "" });
              }}
              className="mt-6 rounded-full border-2 border-espresso px-6 py-2.5 text-sm font-bold text-espresso"
            >
              ثبت سفارش تازه
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="order" className="scroll-mt-20 bg-cream text-espresso">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="flex items-center gap-3 text-xs font-bold tracking-wide text-terra">
              <span className="inline-block h-px w-10 bg-terra" aria-hidden />
              ۰۸ — سفارش پکیج
            </p>
            <h2 className="mt-5 text-3xl leading-snug font-black sm:text-4xl">
              پکیج ۱۰۰تایی سفارش بده.
            </h2>
            <p className="mt-4 leading-8 text-espresso/80">
              تعداد پکیج را انتخاب کن و اطلاعات ایستگاه را بنویس. سفارش ثبت
              می‌شود و تیم فروش برای تأیید نهایی و هماهنگی تحویل با تو تماس
              می‌گیرد.
            </p>
            <div className="mt-6 rounded-sm bg-choco p-6 text-cream">
              <p className="text-sm font-bold text-amber-soft">جمع فنجان‌ها</p>
              <p className="mt-1 text-4xl font-black">
                {toFaDigits(packs * CUPS_PER_PACK)} فنجان
              </p>
              <p className="mt-2 text-sm leading-7 text-cream/80">
                {toFaDigits(packs)} پکیج × {toFaDigits(CUPS_PER_PACK)} فنجان
              </p>
              <p className="mt-3 border-t border-cream/15 pt-3 text-sm leading-7 text-cream/80">
                قیمت نهایی را تیم فروش موقع تماس تأیید می‌کند.
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-sm border border-border bg-card p-6 shadow-sm sm:p-8 lg:col-span-3"
            noValidate
          >
            <label className="block text-sm font-bold text-espresso">
              تعداد پکیج ۱۰۰تایی
            </label>
            <div className="mt-2 flex items-center gap-3">
              <button
                type="button"
                aria-label="کم کردن تعداد"
                onClick={() => setPacks((p) => clampPacks(p - 1))}
                className="flex size-12 items-center justify-center rounded-full border border-border bg-cream text-espresso"
              >
                <Minus className="size-5" aria-hidden />
              </button>
              <span className="min-w-16 text-center text-3xl font-black text-espresso">
                {toFaDigits(packs)}
              </span>
              <button
                type="button"
                aria-label="زیاد کردن تعداد"
                onClick={() => setPacks((p) => clampPacks(p + 1))}
                className="flex size-12 items-center justify-center rounded-full border border-border bg-cream text-espresso"
              >
                <Plus className="size-5" aria-hidden />
              </button>
              <div className="ms-2 flex flex-wrap gap-2">
                {PACK_QUICK_CHOICES.map((choice) => (
                  <button
                    key={choice}
                    type="button"
                    onClick={() => setPacks(choice)}
                    className={
                      packs === choice
                        ? "rounded-full bg-choco px-4 py-2 text-sm font-bold text-cream"
                        : "rounded-full border border-border bg-cream px-4 py-2 text-sm font-bold text-espresso"
                    }
                  >
                    {toFaDigits(choice)}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="order-station"
                  className="block text-sm font-bold text-espresso"
                >
                  نام ایستگاه
                </label>
                <input
                  id="order-station"
                  value={form.stationName}
                  onChange={(e) => setField("stationName", e.target.value)}
                  placeholder="نام ایستگاه"
                  className={`${inputCls} mt-2`}
                />
              </div>
              <div>
                <label
                  htmlFor="order-mobile"
                  className="block text-sm font-bold text-espresso"
                >
                  شماره موبایل
                </label>
                <input
                  id="order-mobile"
                  dir="ltr"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel-national"
                  value={form.mobile}
                  onChange={(e) => setField("mobile", e.target.value)}
                  placeholder="09123456789"
                  className={`${inputCls} mt-2 text-left`}
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="order-city"
                  className="block text-sm font-bold text-espresso"
                >
                  شهر و محدوده فعالیت
                </label>
                <input
                  id="order-city"
                  value={form.cityArea}
                  onChange={(e) => setField("cityArea", e.target.value)}
                  placeholder="مثلاً تهران، میدان ولیعصر"
                  className={`${inputCls} mt-2`}
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="order-note"
                  className="block text-sm font-bold text-espresso"
                >
                  توضیح تحویل (اختیاری)
                </label>
                <textarea
                  id="order-note"
                  rows={3}
                  value={form.note}
                  onChange={(e) => setField("note", e.target.value)}
                  placeholder="مثلاً بهترین ساعت تحویل یا نکته‌ای برای پیک"
                  className={`${inputCls} mt-2 resize-none`}
                />
              </div>
            </div>

            {errors.length > 0 ? (
              <ul role="alert" className="mt-4 space-y-1 text-sm font-medium text-destructive">
                {errors.map((error) => (
                  <li key={error}>• {error}</li>
                ))}
              </ul>
            ) : null}
            {serverError ? (
              <p role="alert" className="mt-4 text-sm font-medium text-destructive">
                {serverError}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={submitting}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-choco px-6 py-3.5 text-base font-bold text-cream transition hover:bg-choco-deep disabled:opacity-60"
            >
              <ShoppingBag className="size-5" aria-hidden />
              {submitting ? "در حال ثبت…" : "ثبت سفارش"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
