import type { Metadata } from "next";

import { MarketingChrome } from "@/components/MarketingChrome";

import { EarlyAccessForm } from "./EarlyAccessForm";

export const metadata: Metadata = {
  title: "Early Access | CoachKrew",
  description:
    "Request early access to CoachKrew—the platform for coaches who run their team like a program.",
};

const AUDIENCE = [
  "High school coaches",
  "College coaches",
  "Club coaches",
  "Strength and performance coaches working with teams",
] as const;

const WHY_EARLY = [
  "Help shape the product",
  "Get first access when launch opens",
  "Lock in early coach pricing",
  "Build your program before the season starts",
] as const;

export default function EarlyAccessPage() {
  return (
    <MarketingChrome>
      <main className="flex-1">
        <section className="relative overflow-hidden border-b border-slate-800/70">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(14,165,233,0.1),transparent)]"
            aria-hidden
          />
          <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-sky-400">
              Run your team like a program.
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Get early access to CoachKrew.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
              CoachKrew is being built for coaches who want one place to manage
              athletes, workouts, schedules, attendance, performance metrics,
              messages, and playbooks.
            </p>
          </div>
        </section>

        <section className="border-b border-slate-800/70 py-14 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-7">
                <EarlyAccessForm />
              </div>
              <aside className="lg:col-span-5">
                <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 shadow-md sm:p-8">
                  <h2 className="text-lg font-bold text-white">
                    Who CoachKrew is for
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    Serious staffs who need structure—not another noisy thread
                    buried in a consumer chat app.
                  </p>
                  <ul className="mt-6 space-y-3">
                    {AUDIENCE.map((line) => (
                      <li
                        key={line}
                        className="flex items-start gap-3 text-sm font-medium text-slate-200"
                      >
                        <span
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500"
                          aria-hidden
                        />
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="bg-slate-950/40 py-14 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Why join early?
            </h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {WHY_EARLY.map((line) => (
                <li
                  key={line}
                  className="rounded-xl border border-slate-800 bg-slate-900/35 p-5 text-sm font-medium leading-snug text-slate-200"
                >
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </MarketingChrome>
  );
}
