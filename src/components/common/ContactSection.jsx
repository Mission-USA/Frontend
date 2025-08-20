import React from "react";

export default function ContactSection() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid gap-12 lg:gap-16 md:grid-cols-2 items-start">
          {/* LEFT: Copy + Contact info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
              Let&apos;s Talk
            </h2>

            <p className="mt-4 max-w-xl text-slate-600 leading-relaxed">
              Have some big idea or brand to develop and need help?
              Then reach out we&apos;d love to hear about your project and
              provide help.
            </p>

            {/* Email */}
            <div className="mt-10">
              <h3 className="text-sm font-semibold text-slate-900">Email</h3>

              <div className="mt-4 flex items-center gap-4">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-slate-100">
                  {/* Mail icon */}
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="size-5 text-slate-700"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" />
                    <path d="m22 8-10 6L2 8" />
                  </svg>
                </span>

                <div className="leading-tight">
                  <div className="text-xs text-slate-500">Mail</div>
                  <a
                    href="mailto:info@example.com"
                    className="text-sm font-semibold text-blue-600 hover:underline"
                  >
                    info@example.com
                  </a>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="mt-10">
              <h3 className="text-sm font-semibold text-slate-900">Socials</h3>

              <div className="mt-4 flex items-center gap-4">
                {/* Facebook */}
                <a
                  href="#"
                  aria-label="Facebook"
                  className="inline-flex size-11 items-center justify-center rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition"
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="size-5"
                    fill="currentColor"
                  >
                    <path d="M13.5 9H16V6h-2.5C11.57 6 11 7.51 11 9v2H9v3h2v7h3v-7h2.1l.4-3H14v-1c0-.6.2-1 .9-1Z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="inline-flex size-11 items-center justify-center rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition"
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="size-5"
                    fill="currentColor"
                  >
                    <path d="M6.94 6.5A2.44 2.44 0 1 1 4.5 4.06 2.44 2.44 0 0 1 6.94 6.5ZM7 8.75H2.75V21.5H7ZM13.37 8.75H9.25V21.5h4.12v-6.79c0-1.79.88-2.93 2.37-2.93 1.43 0 2.12 1.01 2.12 2.93v6.79h4.12v-7.77c0-3.81-2.03-5.58-4.73-5.58-2.18 0-3.14 1.2-3.7 2.04h-.07Z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="#"
                  aria-label="Instagram"
                  className="inline-flex size-11 items-center justify-center rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition"
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="size-5"
                    fill="currentColor"
                  >
                    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5Zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5Zm6.25-2.5a1 1 0 1 1-1-1 1 1 0 0 1 1 1Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: Form */}
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            {/* Inputs match light blue/gray background, no borders */}
            <label className="sr-only" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Name"
              className="w-full rounded-lg bg-[#EEF3F7] px-4 py-3 text-slate-700 placeholder:text-slate-500 border-0 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              required
            />

            <label className="sr-only" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              className="w-full rounded-lg bg-[#EEF3F7] px-4 py-3 text-slate-700 placeholder:text-slate-500 border-0 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              required
            />

            <label className="sr-only" htmlFor="subject">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="Subject"
              className="w-full rounded-lg bg-[#EEF3F7] px-4 py-3 text-slate-700 placeholder:text-slate-500 border-0 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            />

            <label className="sr-only" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Message"
              className="w-full rounded-lg bg-[#EEF3F7] px-4 py-3 text-slate-700 placeholder:text-slate-500 border-0 focus:outline-none focus:ring-2 focus:ring-blue-500/50 resize-y"
            />

            <button
              type="submit"
              className="mt-4 w-full rounded-lg bg-[#0B1423] px-4 py-3 text-white font-semibold tracking-wide hover:opacity-95 active:opacity-90"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
} 