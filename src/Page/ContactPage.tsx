// src/Page/ContactPage.tsx
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID!;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID!;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY!;

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [err, setErr] = useState<string | null>(null);
  const mountAtRef = useRef(Date.now());
  const COOLDOWN_MS = 30_000;

  useEffect(()=> {
    setTimeout(()=>{
      setStatus("idle");
    }, 10000)
  },[status])

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErr(null);

    const form = formRef.current!;
    const fd = new FormData(form);
    const now = Date.now();

    if (now - mountAtRef.current < 5000) {
      setStatus("error");
      setErr("Please take a few seconds to fill out the form.");
      return;
    }

    const last = Number(localStorage.getItem("contact_last_at") || 0);
    if (now - last < COOLDOWN_MS) {
      setStatus("error");
      setErr("Please wait before sending again.");
      return;
    }

    let winStart = Number(localStorage.getItem("contact_win_start") || 0);
    let count = Number(localStorage.getItem("contact_win_count") || 0);
    if (!winStart || now - winStart > 3600_000) {
      winStart = now;
      count = 0;
      localStorage.setItem("contact_win_start", String(winStart));
      localStorage.setItem("contact_win_count", "0");
    }

    if ((fd.get("website") as string)?.length) {
      localStorage.setItem("contact_last_at", String(now));
      localStorage.setItem("contact_win_count", String(count + 1));
      setStatus("success");
      form.reset();
      return;
    }

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);

      localStorage.setItem("contact_last_at", String(now));
      localStorage.setItem("contact_win_count", String(count + 1));

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErr("Failed to send. Please try again.");
    }
  }


  return (
    <div className="mx-auto max-w-2xl px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Contact Me</h1>
      <form ref={formRef} onSubmit={onSubmit} className="grid gap-4">
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <label className="grid gap-2 flex-1 basis-0 min-w-0">
            <span className="text-sm font-medium">Email</span>
            <input
              type="email"
              name="from_email"
              required
              placeholder="you@example.com"
              className="w-full rounded-xl border px-4 py-2 outline-none focus:ring"
            />
          </label>

          <label className="grid gap-2 flex-1 basis-0 min-w-0">
            <span className="text-sm font-medium">Phone Number</span>
            <input
              type="tel"
              name="phone"
              placeholder="+63 912 345 6789"
              className="w-full rounded-xl border px-4 py-2 outline-none focus:ring"
            />
          </label>
        </div>


        <label className="grid gap-2">
          <span className="text-sm font-medium">Subject</span>
          <input
            type="text"
            name="subject"
            required
            placeholder="Subject"
            className="w-full rounded-xl border px-4 py-2 outline-none focus:ring"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-medium">Message</span>
          <textarea
            name="message"
            required
            rows={6}
            placeholder="Write your message..."
            className="w-full rounded-xl border px-4 py-2 outline-none focus:ring resize-y"
          />
        </label>

        <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

        <input type="hidden" name="reply_to" value="" />

        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-xl px-5 py-2 border hover:shadow transition disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send Message"}
        </button>

        {status === "success" && (
          <p className="text-green-600">Thanks! Your message was sent to my Gmail.</p>
        )}
        {status === "error" && <p className="text-red-600">{err}</p>}
      </form>
    </div>
  );
}
