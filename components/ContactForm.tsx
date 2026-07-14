"use client";

import { useState } from "react";
import { Arrow } from "./ui";

const intents = [
  { value: "brief", label: "Brief us on a project" },
  { value: "demo", label: "Book a product walkthrough" },
  { value: "pricing", label: "Request product pricing" },
  { value: "careers", label: "Careers / send me your CV" },
  { value: "press", label: "Press or analyst enquiry" },
  { value: "other", label: "Something else" },
];

const ranges = [
  "Discovery (~$10–25k)",
  "Pilot ($25–100k)",
  "Build ($100–500k)",
  "Programme ($500k+)",
  "Not sure yet",
];

const timing = ["This quarter", "Next quarter", "In the next 6 months", "Exploring, no date"];

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [intent, setIntent] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const data = new FormData(e.currentTarget);
    data.append("access_key", "33fa44a1-82c4-4458-b531-4af992f7fe9f");
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: data,
    });
    setSubmitting(false);
    if (res.ok) setSubmitted(true);
  }

  return (
    <form
      className="card p-7 md:p-8 grid gap-5"
      onSubmit={handleSubmit}
    >
      {submitted ? (
        <div className="py-8 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-ink text-white">
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden>
              <path d="M3 9.5l3.5 3.5L15 5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h3 className="mt-5 text-2xl font-semibold tracking-tight">Got it. Reply on the way.</h3>
          <p className="mt-2 text-ink-3 max-w-sm mx-auto">A real person from our team will be in touch within two working days. NDA on its way separately if you asked for one.</p>
        </div>
      ) : (
        <>
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Your name" required>
              <input className="input" name="name" autoComplete="name" required />
            </Field>
            <Field label="Work email" required>
              <input className="input" type="email" name="email" autoComplete="email" required />
            </Field>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Company">
              <input className="input" name="company" autoComplete="organization" />
            </Field>
            <Field label="Role">
              <input className="input" name="role" autoComplete="organization-title" />
            </Field>
          </div>
          <Field label="What can we help with?" required>
            <select className="input" name="intent" required defaultValue="" onChange={e => setIntent(e.target.value)}>
              <option value="" disabled>Pick one</option>
              {intents.map(i => <option key={i.value} value={i.value}>{i.label}</option>)}
            </select>
          </Field>
          {intent === "careers" && (
            <div className="rounded-xl border border-line bg-line-2 px-4 py-3 text-sm text-ink-3">
              For careers, please email us directly at{" "}
              <a href="mailto:careers.hontec@gmail.com" className="text-ink underline">careers.hontec@gmail.com</a>{" "}
              with your CV.
            </div>
          )}
          {intent !== "careers" && <><div className="grid sm:grid-cols-2 gap-5">
            <Field label="Indicative budget">
              <select className="input" name="budget" defaultValue="">
                <option value="" disabled>Pick one (optional)</option>
                {ranges.map(r => <option key={r} value={r}>{r}</option>)}
              </select>
            </Field>
            <Field label="When are you hoping to start?">
              <select className="input" name="timing" defaultValue="">
                <option value="" disabled>Pick one (optional)</option>
                {timing.map(r => <option key={r} value={r}>{r}</option>)}
              </select>
            </Field>
          </div>
          <Field label="Tell us a bit more" required>
            <textarea className="input min-h-32" name="message" required placeholder="What are you trying to ship? What have you tried? What's the deadline?" />
          </Field>
          <label className="flex items-start gap-3 text-sm text-ink-3">
            <input type="checkbox" name="nda" className="mt-1" />
            <span>Please send me your standard mutual NDA today.</span>
          </label>
          <button type="submit" className="btn btn-primary self-start" disabled={submitting}>
            {submitting ? "Sending…" : "Send to Hontec"} <Arrow />
          </button>
          <p className="text-xs text-mute">
            By submitting you agree to our <a href="/privacy" className="underline">privacy notice</a>. We don&rsquo;t share form submissions with anyone.
          </p></>}
        </>
      )}

      <style>{`
        .input {
          width: 100%;
          height: 2.75rem;
          padding: 0 0.85rem;
          border-radius: 10px;
          background: white;
          border: 1px solid var(--color-line);
          font-size: 0.95rem;
          color: var(--color-ink);
          transition: border-color 120ms ease, box-shadow 120ms ease;
        }
        textarea.input { padding: 0.7rem 0.85rem; height: auto; resize: vertical; font-family: var(--font-sans); }
        select.input { appearance: none; background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 10 10'><path d='M1 3l4 4 4-4' stroke='%2371717A' stroke-width='1.4' fill='none' stroke-linecap='round' stroke-linejoin='round'/></svg>"); background-repeat: no-repeat; background-position: right 0.85rem center; padding-right: 2rem; }
        .input:focus { outline: none; border-color: var(--color-ink); box-shadow: 0 0 0 3px rgba(10,10,11,0.08); }
      `}</style>
    </form>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-medium text-ink">
        {label}{required && <span className="text-accent ml-1">*</span>}
      </span>
      {children}
    </label>
  );
}
