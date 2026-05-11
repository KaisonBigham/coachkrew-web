import Link from "next/link";
import type { ReactNode } from "react";

import { MarketingChrome } from "@/components/MarketingChrome";

const FEATURES = [
  {
    title: "Team Management",
    description:
      "Rosters, roles, and permissions built for high school and college programs.",
  },
  {
    title: "Workouts",
    description:
      "Assign lifts and sessions with clear expectations and completion tracking.",
  },
  {
    title: "Attendance",
    description:
      "Know who was there—practices, meetings, and workouts in one ledger.",
  },
  {
    title: "Performance Metrics",
    description:
      "Testing data and custom metrics that reflect how your staff actually evaluates athletes.",
  },
  {
    title: "Leaderboards",
    description:
      "Healthy competition and visibility into progress across the roster.",
  },
  {
    title: "Messaging",
    description:
      "Team channels with context next to schedules and performance—not a siloed chat app.",
  },
  {
    title: "Calendar",
    description:
      "Practices, lifts, games, and travel on timelines coaches and athletes can trust.",
  },
  {
    title: "Playbooks",
    description:
      "Installs, concepts, and diagrams your staff owns—shared on your terms.",
  },
] as const;

function PreviewRow({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
      <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
        {label}
      </span>
      <div className="text-sm font-medium text-slate-100">{children}</div>
    </div>
  );
}

export default function Home() {
  return (
    <MarketingChrome>
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-slate-800/70">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_70%_-10%,rgba(14,165,233,0.12),transparent)]"
            aria-hidden
          />
          <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-sky-400">
                  High school &amp; college programs
                </p>
                <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[2.75rem] lg:leading-[1.1]">
                  Run your team like a program.
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
                  CoachKrew gives coaches one place to manage athletes, workouts,
                  schedules, attendance, performance metrics, messages, and
                  playbooks.
                </p>
                <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link
                    href="/pricing"
                    className="inline-flex h-12 items-center justify-center rounded-xl bg-sky-500 px-6 text-center text-base font-bold text-slate-950 shadow-lg shadow-sky-500/25 transition hover:bg-sky-400"
                  >
                    Start Building Your Team
                  </Link>
                  <Link
                    href="/features"
                    className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-600 bg-slate-900/60 px-6 text-base font-semibold text-white transition hover:border-sky-500/40 hover:bg-slate-800/80"
                  >
                    View Features
                  </Link>
                </div>
              </div>

              <aside
                className="rounded-2xl border border-slate-700/80 bg-slate-900/50 p-5 shadow-2xl shadow-black/40 ring-1 ring-white/5 backdrop-blur-sm sm:p-6"
                aria-label="Sample program dashboard"
              >
                <div className="mb-4 flex items-center justify-between border-b border-slate-800 pb-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Program overview
                    </p>
                    <p className="text-sm font-bold text-white">Varsity Football</p>
                  </div>
                  <span className="rounded-md bg-emerald-500/15 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-emerald-400">
                    Live
                  </span>
                </div>
                <div className="divide-y divide-slate-800/80">
                  <PreviewRow label="Upcoming Practice">
                    Wed 4:00 PM — Field House
                  </PreviewRow>
                  <PreviewRow label="Workout Completion">
                    <span className="text-sky-400">94%</span> this week
                  </PreviewRow>
                  <PreviewRow label="Attendance">
                    <span className="text-white">38</span>
                    <span className="text-slate-500"> / 42 present</span>
                  </PreviewRow>
                  <PreviewRow label="Top Performer">
                    J. Martinez — Hang clean PR
                  </PreviewRow>
                  <PreviewRow label="Team Notes">
                    <span className="line-clamp-2 text-slate-300">
                      Film review moved to Thursday 7:00 AM. Bring notebooks.
                    </span>
                  </PreviewRow>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Features */}
        <section
          id="features"
          className="scroll-mt-24 border-b border-slate-800/70 py-16 sm:py-24"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                One platform. Every moving part.
              </h2>
              <p className="mt-4 text-lg text-slate-400">
                From the weight room to the whiteboard—structured for staffs who
                run a real program, not a group text thread.
              </p>
            </div>
            <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {FEATURES.map((item) => (
                <li key={item.title}>
                  <article className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/35 p-6 shadow-md transition hover:border-sky-500/25 hover:bg-slate-900/55">
                    <h3 className="text-base font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                      {item.description}
                    </p>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Playbooks */}
        <section
          id="playbooks"
          className="scroll-mt-24 border-b border-slate-800/70 bg-slate-950/40 py-16 sm:py-24"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-400">
                  Standout feature
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Playbooks that match how you coach.
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-slate-400">
                  The playbook and play designer is built for football and
                  basketball: drag-and-drop players, routes, blocking schemes,
                  zones, and staff notes—so installs stay sharp and consistent.
                </p>
                <ul className="mt-8 space-y-3 text-sm text-slate-300">
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                    Team-specific playbooks with controlled access
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                    Athlete viewing permissions—you decide what they see
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                    Visual language coaches already use on the sideline and in
                    the meeting room
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-[#0a0f1a] p-8 shadow-xl ring-1 ring-sky-500/10">
                <p className="text-center text-sm font-semibold uppercase tracking-widest text-slate-500">
                  Play designer
                </p>
                <div className="relative mx-auto mt-6 aspect-[4/3] max-w-md rounded-xl border border-slate-700/80 bg-[#0c1220]">
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="grid w-full grid-cols-5 gap-2 opacity-90">
                      {Array.from({ length: 10 }).map((_, i) => (
                        <div
                          key={i}
                          className={`aspect-square rounded-full border-2 ${
                            i === 4
                              ? "border-sky-400 bg-sky-500/20"
                              : "border-slate-600 bg-slate-800/60"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 flex justify-between text-[10px] font-medium text-slate-500">
                    <span>Routes</span>
                    <span>Zones</span>
                    <span>Notes</span>
                  </div>
                </div>
                <p className="mt-6 text-center text-xs text-slate-500">
                  Concept preview — illustrative layout only
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Performance */}
        <section
          id="performance"
          className="scroll-mt-24 border-b border-slate-800/70 py-16 sm:py-24"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Performance that holds up in the meeting room.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-400">
                Track athlete testing data with clarity: height, weight, bench,
                squat, hang clean, 40-yard dash, pro agility, broad jump, and
                beyond. Layer in{" "}
                <span className="font-semibold text-slate-200">
                  custom coach-created metrics
                </span>{" "}
                so your staff measures what your program actually values.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-slate-400">
                Leaderboards and progress trends give context without turning
                development into a spreadsheet project.
              </p>
            </div>
            <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
              {["Testing", "Custom metrics", "Trends"].map((t) => (
                <div
                  key={t}
                  className="rounded-xl border border-slate-800 bg-slate-900/40 px-5 py-6 text-center"
                >
                  <p className="text-sm font-bold text-white">{t}</p>
                  <p className="mt-2 text-xs text-slate-500">
                    {t === "Testing" && "Standardized numbers, one roster view"}
                    {t === "Custom metrics" && "Your terminology, your standards"}
                    {t === "Trends" && "Leaderboards athletes can respect"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing teaser */}
        <section
          id="pricing"
          className="scroll-mt-24 border-b border-slate-800/70 bg-slate-950/50 py-16 sm:py-24"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Straightforward for staffs.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-slate-400">
              Start with what you need. Scale teams as your program grows.
            </p>
            <div className="mx-auto mt-12 max-w-md">
              <article className="rounded-2xl border border-slate-700 bg-slate-900/60 p-8 shadow-2xl ring-1 ring-sky-500/15">
                <h3 className="text-xl font-bold text-white">Coach Plan</h3>
                <p className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold tracking-tight text-white">
                    $29
                  </span>
                  <span className="text-slate-400">/month</span>
                </p>
                <ul className="mt-6 space-y-3 text-sm text-slate-300">
                  <li className="flex gap-2">
                    <span className="text-sky-400">✓</span>
                    Includes up to 4 teams
                  </li>
                  <li className="flex gap-2">
                    <span className="text-sky-400">✓</span>
                    Additional teams: $20/month each
                  </li>
                </ul>
                <a
                  href="#cta"
                  className="mt-8 flex h-12 w-full items-center justify-center rounded-xl bg-sky-500 text-base font-bold text-slate-950 transition hover:bg-sky-400"
                >
                  Start Coaching Smarter
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="cta" className="scroll-mt-24 py-20 sm:py-28">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Built for coaches who want more than a group chat.
            </h2>
            <Link
              href="/pricing"
              className="mt-10 inline-flex h-12 items-center justify-center rounded-xl bg-white px-10 text-base font-bold text-slate-950 transition hover:bg-slate-200"
            >
              Get Started
            </Link>
          </div>
        </section>
      </main>
    </MarketingChrome>
  );
}
