const FEATURES = [
  {
    title: "Team Management",
    description:
      "Rosters, roles, and visibility so every athlete and coach stays aligned.",
  },
  {
    title: "Workouts",
    description:
      "Plan and assign sessions so training stays structured and trackable.",
  },
  {
    title: "Performance Metrics",
    description:
      "Capture progress over time with metrics that matter to your program.",
  },
  {
    title: "Calendar",
    description:
      "Schedules, practices, and lifts in one timeline across day, week, and month.",
  },
  {
    title: "Depth Charts",
    description:
      "Lineups and positions at a glance—updated as your roster evolves.",
  },
  {
    title: "Messaging",
    description:
      "Team communication alongside schedules so context never gets lost.",
  },
] as const;

export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a
            href="/"
            className="flex items-center gap-2 text-lg font-bold tracking-tight text-white"
          >
            <span
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500 text-sm font-extrabold text-slate-950 shadow-lg shadow-sky-500/20"
              aria-hidden
            >
              CK
            </span>
            <span>CoachKrew</span>
          </a>
          <nav className="flex items-center gap-6 text-sm font-medium text-slate-400">
            <a href="#features" className="transition-colors hover:text-sky-400">
              Features
            </a>
            <a
              href="#coaches"
              className="hidden transition-colors hover:text-sky-400 sm:inline"
            >
              For coaches
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative overflow-hidden border-b border-slate-800/60">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(56,189,248,0.18),transparent)]"
            aria-hidden
          />
          <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-sky-400 sm:text-sm">
                CoachKrew
              </p>
              <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                The coaching platform built for teams.
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-slate-400 sm:text-xl">
                Manage athletes, schedules, workouts, performance metrics, depth
                charts, and team communication from one place.
              </p>
              <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
                <a
                  href="#get-started"
                  className="inline-flex h-12 items-center justify-center rounded-xl bg-sky-500 px-8 text-base font-semibold text-slate-950 shadow-lg shadow-sky-500/25 transition hover:bg-sky-400"
                >
                  Get Started
                </a>
                <a
                  href="#features"
                  className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-600 bg-slate-900/50 px-8 text-base font-semibold text-slate-100 backdrop-blur-sm transition hover:border-sky-500/50 hover:bg-slate-800/80"
                >
                  View Features
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="scroll-mt-20 border-b border-slate-800/60 bg-slate-950 py-16 sm:py-24"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Everything your program runs on
              </h2>
              <p className="mt-4 text-lg text-slate-400">
                Six pillars designed around real team workflows—not scattered
                spreadsheets and group chats.
              </p>
            </div>
            <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {FEATURES.map((item) => (
                <li key={item.title}>
                  <article className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/40 p-6 shadow-sm transition hover:border-sky-500/30 hover:bg-slate-900/70">
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                      {item.description}
                    </p>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="coaches"
          className="scroll-mt-20 border-b border-slate-800/60 py-16 sm:py-24"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900/90 to-slate-950 px-6 py-12 sm:px-12 sm:py-16 lg:px-16">
              <blockquote className="mx-auto max-w-3xl text-center">
                <p className="text-2xl font-semibold leading-snug tracking-tight text-white sm:text-3xl">
                  Built for coaches who need more than a group chat.
                </p>
                <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-400">
                  CoachKrew connects scheduling, training, and communication so
                  you spend less time juggling tools and more time developing
                  athletes.
                </p>
              </blockquote>
            </div>
          </div>
        </section>

        <section id="get-started" className="scroll-mt-20 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Ready to run your team from one place?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-slate-400">
              Open the CoachKrew mobile app to sign in, or check back soon as we
              expand the web experience.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#features"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-sky-500 px-8 text-base font-semibold text-slate-950 shadow-lg shadow-sky-500/25 transition hover:bg-sky-400"
              >
                Explore features
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 bg-slate-950 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-slate-300">CoachKrew</p>
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} CoachKrew. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
