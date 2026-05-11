import type { Metadata } from "next";
import Link from "next/link";

import { MarketingChrome } from "@/components/MarketingChrome";

import { SignupContinueButton } from "./SignupContinueButton";

export const metadata: Metadata = {
  title: "Sign up | CoachKrew",
  description:
    "Create your CoachKrew account, explore the app, and subscribe when you are ready to manage your team.",
};

const UNLOCKS = [
  "Add and invite athletes",
  "Add assistant coaches",
  "Create and edit playbooks",
  "Save plays",
  "Assign workouts",
  "Create team events and sessions",
  "Send messages and announcements",
  "Track attendance",
  "Save performance metrics",
  "Access leaderboards and team insights",
] as const;

export default function SignupPage() {
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
              Start building your program.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
              Create your CoachKrew account, explore the app, and upgrade when
              you&apos;re ready to manage your team.
            </p>
          </div>
        </section>

        <section className="border-b border-slate-800/70 py-14 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <article className="rounded-2xl border border-slate-700 bg-slate-900/60 p-8 shadow-xl ring-1 ring-sky-500/10 sm:p-10">
              <h2 className="text-xl font-bold text-white">How it works</h2>
              <ul className="mt-6 space-y-4 text-sm leading-relaxed text-slate-300">
                <li className="flex gap-3">
                  <span className="text-sky-400" aria-hidden>
                    ✓
                  </span>
                  <span>
                    <strong className="text-white">Free to create an account</strong>{" "}
                    — get in the door with no upfront commitment.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-sky-400" aria-hidden>
                    ✓
                  </span>
                  <span>
                    <strong className="text-white">Free to explore CoachKrew</strong>{" "}
                    — learn the layout and what your staff will use day to day.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-sky-400" aria-hidden>
                    ✓
                  </span>
                  <span>
                    <strong className="text-white">
                      Subscription required before managing athletes, workouts,
                      playbooks, attendance, messages, events, and performance
                      metrics
                    </strong>{" "}
                    — serious program actions stay behind the Coach Plan so your
                    data and workflows stay professional-grade.
                  </span>
                </li>
              </ul>
            </article>
          </div>
        </section>

        <section className="border-b border-slate-800/70 bg-slate-950/40 py-14 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              What unlocks with the Coach Plan?
            </h2>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {UNLOCKS.map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900/35 px-4 py-3 text-sm font-medium text-slate-200"
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
        </section>

        <section className="py-14 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-slate-700 bg-slate-900/50 p-8 text-center shadow-lg sm:p-10">
              <h2 className="text-lg font-bold text-white">Coach Plan</h2>
              <p className="mt-3 flex items-baseline justify-center gap-1">
                <span className="text-4xl font-extrabold tracking-tight text-white">
                  $29
                </span>
                <span className="text-slate-400">/month</span>
              </p>
              <p className="mt-3 text-sm text-slate-400">
                Includes up to 4 teams
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Additional teams are $20/month each
              </p>
              <div className="mt-10 flex flex-col items-center">
                <SignupContinueButton />
              </div>
              <p className="mt-10 text-center text-sm text-slate-500">
                Prefer the full breakdown?{" "}
                <Link
                  href="/pricing"
                  className="font-semibold text-sky-400 underline-offset-2 hover:text-sky-300 hover:underline"
                >
                  View pricing
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
    </MarketingChrome>
  );
}
