"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
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
    <header className="sticky top-0 z-50 border-b border-gold/25 bg-choco-deep/95 text-cream backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-baseline gap-3">
          <span className="text-xl font-black tracking-tight">36coffee</span>
          <span className="hidden text-[11px] font-medium text-cream/60 sm:block">
            بیشتر از قهوه. یک فرصت برای رشد.
          </span>
        </a>

        <nav
          className="hidden items-center gap-7 text-sm font-medium text-cream/80 md:flex"
          aria-label="ناوبری اصلی"
        >
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-cream">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#register"
            className="hidden rounded-full border border-cream/70 px-5 py-2 text-sm font-bold text-cream transition hover:bg-cream hover:text-choco-deep sm:inline-flex"
          >
            ثبت درخواست همکاری
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "بستن منو" : "باز کردن منو"}
            className="flex size-10 items-center justify-center rounded-sm border border-cream/30 text-cream md:hidden"
          >
            {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "border-t border-gold/20 bg-choco-deep px-4 pb-4 pt-2 md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav className="flex flex-col" aria-label="ناوبری موبایل">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-cream/10 px-2 py-3 text-base font-medium text-cream/85"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#register"
            onClick={() => setOpen(false)}
            className="mt-3 rounded-full border border-cream/70 px-5 py-3 text-center text-sm font-bold text-cream"
          >
            ثبت درخواست همکاری
          </a>
        </nav>
      </div>
    </header>
  );
}
