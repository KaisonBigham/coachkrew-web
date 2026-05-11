"use client";

import { useState } from "react";

export function EarlyAccessForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className="rounded-2xl border border-emerald-500/30 bg-emerald-950/25 p-8 shadow-lg ring-1 ring-emerald-500/10 sm:p-10"
        role="status"
        aria-live="polite"
      >
        <p className="text-lg font-semibold leading-relaxed text-emerald-100">
          Thanks — you&apos;re on the early access list. We&apos;ll reach out when
          CoachKrew is ready.
        </p>
        <p className="mt-4 text-sm text-emerald-200/80">
          Run your team like a program—we&apos;ll be in touch.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-slate-700 bg-slate-900/60 p-6 shadow-xl ring-1 ring-sky-500/10 sm:p-8"
    >
      <div className="space-y-5">
        <div>
          <label
            htmlFor="coach-name"
            className="block text-sm font-semibold text-slate-200"
          >
            Coach name
          </label>
          <input
            id="coach-name"
            name="coachName"
            type="text"
            required
            autoComplete="name"
            className="mt-2 w-full rounded-lg border border-slate-600 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none ring-sky-500/0 transition focus:border-sky-500/50 focus:ring-2 focus:ring-sky-500/30"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="coach-email"
            className="block text-sm font-semibold text-slate-200"
          >
            Email
          </label>
          <input
            id="coach-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-2 w-full rounded-lg border border-slate-600 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-sky-500/50 focus:ring-2 focus:ring-sky-500/30"
            placeholder="you@school.edu"
          />
        </div>
        <div>
          <label
            htmlFor="organization"
            className="block text-sm font-semibold text-slate-200"
          >
            School or organization
          </label>
          <input
            id="organization"
            name="organization"
            type="text"
            required
            className="mt-2 w-full rounded-lg border border-slate-600 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-sky-500/50 focus:ring-2 focus:ring-sky-500/30"
            placeholder="Program name"
          />
        </div>
        <div>
          <label
            htmlFor="sport"
            className="block text-sm font-semibold text-slate-200"
          >
            Sport
          </label>
          <input
            id="sport"
            name="sport"
            type="text"
            required
            className="mt-2 w-full rounded-lg border border-slate-600 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-sky-500/50 focus:ring-2 focus:ring-sky-500/30"
            placeholder="e.g. Football, basketball, track"
          />
        </div>
        <div>
          <label
            htmlFor="team-count"
            className="block text-sm font-semibold text-slate-200"
          >
            Number of teams
          </label>
          <input
            id="team-count"
            name="teamCount"
            type="number"
            min={1}
            max={99}
            required
            className="mt-2 w-full rounded-lg border border-slate-600 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-sky-500/50 focus:ring-2 focus:ring-sky-500/30"
            placeholder="1"
          />
        </div>
        <div>
          <label
            htmlFor="current-tools"
            className="block text-sm font-semibold text-slate-200"
          >
            What are you currently using to manage your team?
          </label>
          <textarea
            id="current-tools"
            name="currentTools"
            rows={4}
            className="mt-2 w-full resize-y rounded-lg border border-slate-600 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-sky-500/50 focus:ring-2 focus:ring-sky-500/30"
            placeholder="Spreadsheets, group chat, another app…"
          />
        </div>
      </div>
      <button
        type="submit"
        className="mt-8 flex h-12 w-full items-center justify-center rounded-xl bg-sky-500 text-base font-bold text-slate-950 shadow-lg shadow-sky-500/20 transition hover:bg-sky-400"
      >
        Request Early Access
      </button>
    </form>
  );
}
