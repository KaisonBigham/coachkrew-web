import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Shared header + footer for public marketing routes (matches homepage styling).
 */
export function MarketingChrome({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-full flex-col bg-[#070b14] text-slate-100">
      <header className="sticky top-0 z-50 border-b border-slate-800/90 bg-[#070b14]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="text-xl font-extrabold tracking-tight text-white"
          >
            CoachKrew
          </Link>
          <div className="flex flex-1 flex-wrap items-center justify-end gap-3 sm:gap-6">
            <nav className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2 text-sm font-semibold text-slate-400">
              <Link
                href="/features"
                className="transition-colors hover:text-sky-400"
              >
                Features
              </Link>
              <Link
                href="/#playbooks"
                className="transition-colors hover:text-sky-400"
              >
                Playbooks
              </Link>
              <Link
                href="/#performance"
                className="transition-colors hover:text-sky-400"
              >
                Performance
              </Link>
              <Link
                href="/pricing"
                className="transition-colors hover:text-sky-400"
              >
                Pricing
              </Link>
            </nav>
            <Link
              href="/pricing"
              className="inline-flex h-10 shrink-0 items-center justify-center rounded-lg bg-sky-500 px-4 text-sm font-bold text-slate-950 shadow-lg shadow-sky-500/20 transition hover:bg-sky-400"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      {children}
      <footer className="border-t border-slate-800 bg-[#050810] py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-sm font-bold text-white">CoachKrew</p>
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} CoachKrew. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
