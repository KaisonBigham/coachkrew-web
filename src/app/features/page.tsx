import type { Metadata } from "next";
import Link from "next/link";

import { MarketingChrome } from "@/components/MarketingChrome";

export const metadata: Metadata = {
  title: "Features | CoachKrew",
  description:
    "Everything coaches need to run a real program—rosters, calendar, attendance, workouts, performance, messaging, playbooks, and staff permissions.",
};

const FEATURE_CARDS = [
  {
    title: "Team Management",
    description:
      "Structure your program with teams, rosters, and clear roles so staff and athletes always know who is accountable for what.",
  },
  {
    title: "Athlete Profiles",
    description:
      "Central profiles for each athlete—contact, position, notes, and history—so context travels with the player, not scattered across threads.",
  },
  {
    title: "Calendar & Scheduling",
    description:
      "Practices, lifts, meetings, and travel in one calendar coaches and athletes can trust, with less back-and-forth about when and where.",
  },
  {
    title: "Attendance Tracking",
    description:
      "Record who showed up to practices and sessions. Build habits around accountability without running a separate sign-in sheet operation.",
  },
  {
    title: "Workout Templates",
    description:
      "Save repeatable blocks your staff believes in—so every team runs your standards, not a one-off text thread from last Tuesday.",
  },
  {
    title: "Workout Assignments",
    description:
      "Push sessions to the right groups with clear expectations. Athletes know what to do, and coaches see completion at a glance.",
  },
  {
    title: "Performance Metrics",
    description:
      "Log testing and progress in one place—standard lifts and sprints plus the custom numbers your program actually grades on.",
  },
  {
    title: "Leaderboards",
    description:
      "Give athletes visibility into progress in a way that motivates the room without turning development into a public scoreboard stunt.",
  },
  {
    title: "Coach Notes",
    description:
      "Capture staff observations alongside schedules and metrics so decisions in the meeting room are grounded in shared context.",
  },
  {
    title: "Messaging & Announcements",
    description:
      "Team communication that sits next to the calendar and roster—fewer “which group chat was that?” moments when it matters.",
  },
  {
    title: "Playbooks",
    description:
      "Team-specific installs and diagrams with controlled access—so your playbook stays yours, and athletes see what they need to execute.",
  },
  {
    title: "Assistant Coach Permissions",
    description:
      "Delegate to assistants with the right level of access. Scale your staff without handing over the keys to the entire program.",
  },
] as const;

export default function FeaturesPage() {
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
              Everything coaches need to run a real program.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
              Run your team like a program—one system for the weight room, the
              field, the classroom, and the meeting room.
            </p>
          </div>
        </section>

        <section className="border-b border-slate-800/70 py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {FEATURE_CARDS.map((item) => (
                <li key={item.title}>
                  <article className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/35 p-6 shadow-md transition hover:border-sky-500/25 hover:bg-slate-900/55">
                    <h2 className="text-base font-bold text-white">
                      {item.title}
                    </h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                      {item.description}
                    </p>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <p className="text-lg font-semibold text-white">
              Ready to line it all up in one place?
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/signup"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-sky-500 px-6 text-base font-bold text-slate-950 shadow-lg shadow-sky-500/25 transition hover:bg-sky-400"
              >
                Create your account
              </Link>
              <Link
                href="/pricing"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-600 bg-slate-900/60 px-6 text-base font-semibold text-white transition hover:border-sky-500/40 hover:bg-slate-800/80"
              >
                View pricing
              </Link>
              <Link
                href="/"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-600 bg-slate-900/60 px-6 text-base font-semibold text-white transition hover:border-sky-500/40 hover:bg-slate-800/80"
              >
                Back to home
              </Link>
            </div>
          </div>
        </section>
      </main>
    </MarketingChrome>
  );
}
