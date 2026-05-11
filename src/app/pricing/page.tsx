import type { Metadata } from "next";
import Link from "next/link";

import { MarketingChrome } from "@/components/MarketingChrome";

export const metadata: Metadata = {
  title: "Pricing | CoachKrew",
  description:
    "Simple pricing for serious coaches. Coach Plan includes up to four teams with full platform access.",
};

const PLAN_BULLETS = [
  "Unlimited athletes",
  "Team calendar",
  "Attendance tracking",
  "Workout builder",
  "Performance metrics",
  "Leaderboards",
  "Messaging and announcements",
  "Playbooks and play designer",
  "Assistant coach permissions",
] as const;

export default function PricingPage() {
  return (
    <MarketingChrome>
      <main className="flex-1">
        <section className="relative overflow-hidden border-b border-slate-800/70">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(14,165,233,0.1),transparent)]"
            aria-hidden
          />
          <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-sky-400">
              CoachKrew
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Simple pricing for serious coaches.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
              Run your team like a program—clear terms, no toy tiers, built for
              staffs who live in the facility and the film room.
            </p>
          </div>
        </section>

        <section className="border-b border-slate-800/70 bg-slate-950/50 py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg">
              <article className="rounded-2xl border border-slate-700 bg-slate-900/60 p-8 shadow-2xl ring-1 ring-sky-500/15 sm:p-10">
                <h2 className="text-xl font-bold text-white">Coach Plan</h2>
                <p className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold tracking-tight text-white">
                    $29
                  </span>
                  <span className="text-slate-400">/month</span>
                </p>
                <p className="mt-4 text-sm font-medium text-slate-300">
                  Includes up to 4 teams
                </p>
                <p className="mt-1 text-sm text-slate-400">
                  Additional teams are $20/month each
                </p>
                <ul className="mt-8 space-y-3 text-sm text-slate-300">
                  {PLAN_BULLETS.map((line) => (
                    <li key={line} className="flex gap-2">
                      <span className="text-sky-400" aria-hidden>
                        ✓
                      </span>
                      {line}
                    </li>
                  ))}
                </ul>
                <p className="mt-8 rounded-xl border border-slate-700/80 bg-slate-950/50 p-4 text-xs leading-relaxed text-slate-500">
                  Billing will be handled through CoachKrew&apos;s website.
                  Mobile app access will be tied to subscription status.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/#cta"
                    className="inline-flex h-12 flex-1 items-center justify-center rounded-xl bg-sky-500 text-base font-bold text-slate-950 transition hover:bg-sky-400"
                  >
                    Start Building Your Team
                  </Link>
                  <Link
                    href="/features"
                    className="inline-flex h-12 flex-1 items-center justify-center rounded-xl border border-slate-600 bg-slate-900/60 text-base font-semibold text-white transition hover:border-sky-500/40 hover:bg-slate-800/80"
                  >
                    View Features
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <p className="text-lg font-semibold text-white">
              Built for coaches who want more than a group chat.
            </p>
            <Link
              href="/"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-xl bg-white px-10 text-base font-bold text-slate-950 transition hover:bg-slate-200"
            >
              Explore the homepage
            </Link>
          </div>
        </section>
      </main>
    </MarketingChrome>
  );
}
