"use client";

import { useState } from "react";
import { Coffee, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#opportunity", label: "فرصت" },
  { href: "#kit", label: "پکیج" },
  { href: "#network", label: "شبکه" },
  { href: "#order", label: "سفارش" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex size-10 items-center justify-center rounded-2xl bg-pine text-cream">
            <Coffee className="size-5" aria-hidden />
          </span>
          <span className="leading-none">
            <span className="block text-xl font-black tracking-tight text-pine">
              36coffee
            </span>
            <span className="block text-[11px] font-medium text-muted-foreground">
              بیشتر از قهوه. یک فرصت برای رشد.
            </span>
          </span>
        </a>

        <nav
          className="hidden items-center gap-6 text-sm font-medium text-espresso md:flex"
          aria-label="ناوبری اصلی"
        >
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-ember">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#register"
            className="hidden rounded-full bg-ember px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-ember/90 sm:inline-flex"
          >
            ثبت درخواست همکاری
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "بستن منو" : "باز کردن منو"}
            className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-pine md:hidden"
          >
            {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "border-t border-border/60 bg-cream px-4 pb-4 pt-2 md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav className="flex flex-col gap-1" aria-label="ناوبری موبایل">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 text-base font-medium text-espresso hover:bg-latte"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#register"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-ember px-5 py-3 text-center text-sm font-bold text-white"
          >
            ثبت درخواست همکاری
          </a>
        </nav>
      </div>
    </header>
  );
}
