"use client";

import { useState, type FormEvent } from "react";
import { BadgeCheck, CircleCheck, Phone, Send } from "lucide-react";
import { LOCATION_TYPES } from "@/lib/constants";
import {
  normalizeDigits,
  validateRegistration,
  type RegistrationInput,
} from "@/lib/validation";

const inputCls =
  "w-full rounded-sm border border-input bg-card px-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/40";

type Step = "form" | "otp" | "done";

function makeDemoCode(): string {
  return String(Math.floor(100000 + Math.random() * 900000));
}

export function RegisterSection() {
  const [step, setStep] = useState<Step>("form");
  const [form, setForm] = useState<RegistrationInput>({
    stationName: "",
    ownerName: "",
    mobile: "",
    cityArea: "",
    locationType: LOCATION_TYPES[0],
  });
  const [errors, setErrors] = useState<string[]>([]);
  const [demoCode, setDemoCode] = useState("");
  const [otpInput, setOtpInput] = useState("");
  const [otpError, setOtpError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");

  function setField<K extends keyof RegistrationInput>(
    key: K,
    value: RegistrationInput[K],
  ): void {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleFormSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    setServerError("");
    const problems = validateRegistration(form);
    if (problems.length > 0) {
      setErrors(problems);
      return;
    }
    setErrors([]);
    setDemoCode(makeDemoCode());
    setOtpInput("");
    setOtpError("");
    setStep("otp");
  }

  async function handleOtpSubmit(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    if (normalizeDigits(otpInput) !== demoCode) {
      setOtpError("کد واردشده درست نیست. کد نمایشی بالا را دوباره وارد کن.");
      return;
    }
    setOtpError("");
    setSubmitting(true);
    setServerError("");
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          mobile: normalizeDigits(form.mobile),
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
            : "ثبت درخواست انجام نشد. دوباره تلاش کن.";
        setServerError(message);
        return;
      }
      setStep("done");
    } catch {
      setServerError("ارتباط برقرار نشد. اتصال اینترنت را بررسی کن و دوباره تلاش کن.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="register" className="scroll-mt-20 bg-choco-deep text-cream">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="flex items-center gap-3 text-xs font-bold tracking-wide text-amber-soft">
              <span className="inline-block h-px w-10 bg-amber-soft" aria-hidden />
              ۰۷ — ثبت درخواست همکاری
            </p>
            <h2 className="mt-5 text-3xl leading-snug font-black sm:text-4xl">
              ایستگاهت را به شبکه 36coffee معرفی کن.
            </h2>
            <p className="mt-4 leading-8 text-cream/75">
              فقط همین چند فیلد را پر کن. بعد کد تأیید را وارد می‌کنی و درخواستت
              ثبت می‌شود؛ تیم فروش برای پیگیری با تو تماس می‌گیرد.
            </p>
            <ol className="mt-6 space-y-3">
              {["اطلاعات ایستگاه", "کد تأیید موبایل", "تماس تیم فروش"].map(
                (label, index) => (
                  <li key={label} className="flex items-center gap-3">
                    <span
                      className={
                        (step === "form" && index === 0) ||
                        (step === "otp" && index === 1) ||
                        (step === "done" && index === 2)
                          ? "flex size-8 items-center justify-center rounded-full bg-terra text-sm font-black text-white"
                          : "flex size-8 items-center justify-center rounded-full border border-cream/30 bg-cream/10 text-sm font-black text-cream"
                      }
                    >
                      {index + 1}
                    </span>
                    <span className="font-medium text-cream/85">{label}</span>
                  </li>
                ),
              )}
            </ol>
          </div>

          <div className="lg:col-span-3">
            {step === "done" ? (
              <div className="rounded-sm border border-border bg-cream p-8 text-center shadow-sm">
                <CircleCheck
                  className="mx-auto size-14 text-terra"
                  aria-hidden
                />
                <h3 className="mt-4 text-2xl font-black text-espresso">
                  درخواستت ثبت شد.
                </h3>
                <p className="mt-3 leading-8 text-espresso/80">
                  ایستگاه {form.stationName} به شبکه 36coffee معرفی شد.
                  <br />
                  تیم فروش به‌زودی با شماره {form.mobile} تماس می‌گیرد.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setStep("form");
                    setForm({
                      stationName: "",
                      ownerName: "",
                      mobile: "",
                      cityArea: "",
                      locationType: LOCATION_TYPES[0],
                    });
                  }}
                  className="mt-6 rounded-full border-2 border-espresso px-6 py-2.5 text-sm font-bold text-espresso"
                >
                  ثبت درخواست تازه
                </button>
              </div>
            ) : step === "otp" ? (
              <form
                onSubmit={handleOtpSubmit}
                className="rounded-sm border border-border bg-cream p-6 shadow-sm sm:p-8"
              >
                <h3 className="flex items-center gap-2 text-xl font-black text-espresso">
                  <Phone className="size-5 text-terra" aria-hidden />
                  کد تأیید موبایل
                </h3>
                <p className="mt-2 leading-7 text-espresso/80">
                  کد را به شماره {form.mobile} می‌فرستیم — در این نسخه نمایشی،
                  پیامک واقعی ارسال نمی‌شود.
                </p>
                <div className="mt-4 rounded-sm border-2 border-dashed border-terra bg-latte/70 p-4 text-center">
                  <p className="text-xs font-bold text-terra">
                    کد نمایشی (دمو)
                  </p>
                  <p
                    dir="ltr"
                    className="mt-1 text-3xl font-black tracking-[0.3em] text-espresso"
                  >
                    {demoCode}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    کد را از همین صفحه بخوان و وارد کن.
                  </p>
                </div>
                <label
                  htmlFor="otp"
                  className="mt-5 block text-sm font-bold text-espresso"
                >
                  کد ۶ رقمی
                </label>
                <input
                  id="otp"
                  dir="ltr"
                  inputMode="numeric"
                  autoComplete="one-time-code"
                  value={otpInput}
                  onChange={(e) => setOtpInput(e.target.value)}
                  placeholder="------"
                  maxLength={6}
                  className={`${inputCls} mt-2 text-center text-2xl font-black tracking-[0.4em]`}
                />
                {otpError ? (
                  <p role="alert" className="mt-3 text-sm font-medium text-destructive">
                    {otpError}
                  </p>
                ) : null}
                {serverError ? (
                  <p role="alert" className="mt-3 text-sm font-medium text-destructive">
                    {serverError}
                  </p>
                ) : null}
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-terra px-6 py-3.5 text-base font-bold text-white disabled:opacity-60"
                  >
                    <BadgeCheck className="size-5" aria-hidden />
                    {submitting ? "در حال ثبت…" : "تأیید و ثبت درخواست"}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setDemoCode(makeDemoCode());
                      setOtpInput("");
                      setOtpError("");
                    }}
                    className="rounded-full border-2 border-espresso px-6 py-3.5 text-sm font-bold text-espresso"
                  >
                    ارسال دوباره کد
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => setStep("form")}
                  className="mt-4 text-sm font-medium text-muted-foreground underline underline-offset-4"
                >
                  برگشت و اصلاح اطلاعات
                </button>
              </form>
            ) : (
              <form
                onSubmit={handleFormSubmit}
                className="rounded-sm border border-border bg-cream p-6 shadow-sm sm:p-8"
                noValidate
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="stationName"
                      className="block text-sm font-bold text-espresso"
                    >
                      نام ایستگاه
                    </label>
                    <input
                      id="stationName"
                      value={form.stationName}
                      onChange={(e) => setField("stationName", e.target.value)}
                      placeholder="مثلاً ایستگاه قهوه میدان"
                      className={`${inputCls} mt-2`}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="ownerName"
                      className="block text-sm font-bold text-espresso"
                    >
                      نام صاحب ایستگاه
                    </label>
                    <input
                      id="ownerName"
                      value={form.ownerName}
                      onChange={(e) => setField("ownerName", e.target.value)}
                      placeholder="نام و نام خانوادگی"
                      className={`${inputCls} mt-2`}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="mobile"
                      className="block text-sm font-bold text-espresso"
                    >
                      شماره موبایل
                    </label>
                    <input
                      id="mobile"
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
                  <div>
                    <label
                      htmlFor="cityArea"
                      className="block text-sm font-bold text-espresso"
                    >
                      شهر و محدوده فعالیت
                    </label>
                    <input
                      id="cityArea"
                      value={form.cityArea}
                      onChange={(e) => setField("cityArea", e.target.value)}
                      placeholder="مثلاً تهران، میدان ولیعصر"
                      className={`${inputCls} mt-2`}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="locationType"
                      className="block text-sm font-bold text-espresso"
                    >
                      نوع محل فعالیت
                    </label>
                    <select
                      id="locationType"
                      value={form.locationType}
                      onChange={(e) => setField("locationType", e.target.value)}
                      className={`${inputCls} mt-2`}
                    >
                      {LOCATION_TYPES.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
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
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-terra px-6 py-3.5 text-base font-bold text-white transition hover:bg-terra-deep"
                >
                  <Send className="size-5" aria-hidden />
                  ارسال کد تأیید
                </button>
                <p className="mt-3 text-center text-xs leading-6 text-muted-foreground">
                  بدون رمز عبور؛ فقط با شماره موبایل. اطلاعاتت فقط برای پیگیری
                  همکاری استفاده می‌شود.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
