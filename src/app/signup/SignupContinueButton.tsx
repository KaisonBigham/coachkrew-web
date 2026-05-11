"use client";

import { useState } from "react";

const COMING_SOON_MSG =
  "Account setup is coming soon. For now, CoachKrew is still in build mode.";

export function SignupContinueButton() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="space-y-4">
      <button
        type="button"
        onClick={() => setShowMessage(true)}
        className="flex h-12 w-full items-center justify-center rounded-xl bg-sky-500 text-base font-bold text-slate-950 shadow-lg shadow-sky-500/25 transition hover:bg-sky-400 sm:w-auto sm:min-w-[280px]"
      >
        Continue to Account Setup
      </button>
      {showMessage ? (
        <p
          className="max-w-xl rounded-xl border border-amber-500/30 bg-amber-950/30 px-4 py-3 text-sm font-medium leading-relaxed text-amber-100"
          role="status"
          aria-live="polite"
        >
          {COMING_SOON_MSG}
        </p>
      ) : null}
    </div>
  );
}
