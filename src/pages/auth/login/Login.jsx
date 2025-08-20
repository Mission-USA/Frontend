import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function LoginSection() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // For testing purposes, navigate to student dashboard
    navigate('/student/dashboard');
  };

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid items-center gap-12 lg:gap-16 md:grid-cols-2">
          {/* LEFT: Marketing copy */}
          <div className="order-2 md:order-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
              Seamless Login for
              <br className="hidden sm:block" /> Exclusive Access
            </h1>

            <p className="mt-6 max-w-xl text-slate-600 leading-relaxed">
              Immerse yourself in a hassle-free login journey with our intuitively
              designed login form. Effortlessly access your account.
            </p>

            <p className="mt-8 text-slate-600">
              Don&apos;t have an account?
              <Link to="/signup" className="ml-2 font-semibold text-blue-600 hover:underline">
                Register here
              </Link>
            </p>
          </div>

          {/* RIGHT: Form */}
          <div className="order-1 md:order-2 md:ml-auto w-full max-w-md justify-self-start md:justify-self-end">
            <h2 className="text-3xl font-semibold text-slate-900">Sign in</h2>

            <form
              className="mt-8 space-y-5"
              onSubmit={handleSubmit}
            >
              {/* Email */}
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-900">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter Email"
                  required
                  className="w-full rounded-lg bg-[#EEF3F7] px-4 py-3 text-slate-700 placeholder:text-slate-500 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                />
              </div>

              {/* Password */}
        <div>
                <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-900">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter Password"
                  required
                  className="w-full rounded-lg bg-[#EEF3F7] px-4 py-3 text-slate-700 placeholder:text-slate-500 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                />
              </div>

              {/* Row: remember + forgot */}
              <div className="flex items-center justify-between">
                <label className="inline-flex items-center gap-2 text-sm text-slate-700">
                  <input
                    type="checkbox"
                    className="size-4 rounded border-slate-300 align-middle"
                  />
                  Remember me
                </label>

                <Link
                  to="/forgot-password"
                  className="text-sm font-medium text-blue-600 hover:underline"
                >
                  Forgot your password?
                </Link>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-lg bg-[#185BFF] px-4 py-3 text-white font-semibold tracking-wide shadow-[0_10px_25px_rgba(24,91,255,0.25)] hover:opacity-95 active:opacity-90"
              >
                Log in
              </button>

              {/* Divider */}
              <div className="relative">
                <div className="border-t border-slate-200" />
                <span className="absolute inset-x-0 -top-3 mx-auto w-fit bg-white px-3 text-sm text-slate-500">
                  or
                </span>
              </div>

              {/* Socials */}
              <div className="flex items-center justify-center gap-6">
                {/* Google */}
                <a
                  href="#"
                  aria-label="Continue with Google"
                  className="inline-flex size-10 items-center justify-center rounded-full border border-slate-200 hover:bg-slate-50"
                >
                  <svg viewBox="0 0 48 48" className="size-5" aria-hidden="true">
                    <path fill="#EA4335" d="M24 9.5c3.2 0 6.1 1.1 8.3 3.3l6.2-6.2C34.9 3 29.8 1 24 1 14.8 1 6.9 6.5 3.4 14.2l7.6 5.9C12.6 14.6 17.8 9.5 24 9.5z"/>
                    <path fill="#4285F4" d="M46.6 24.6c0-1.5-.1-2.6-.4-3.7H24v7h12.9c-.3 2.1-1.8 5.3-5.2 7.5l8 6.2c4.7-4.3 6.9-10.6 6.9-17z"/>
                    <path fill="#FBBC05" d="M10.9 20.1l-7.6-5.9C1.1 16.2 0 20 0 24c0 4 1.1 7.8 3.3 10.9l7.6-5.9C9.9 27 9.5 25.6 9.5 24s.4-3 1.4-3.9z"/>
                    <path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.8-5.8l-8-6.2c-2.2 1.5-5.1 2.4-7.8 2.4-6.2 0-11.4-5.1-12.9-11.8l-7.6 5.9C6.9 41.5 14.8 48 24 48z"/>
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="#"
                  aria-label="Continue with Facebook"
                  className="inline-flex size-10 items-center justify-center rounded-full border border-slate-200 hover:bg-slate-50"
                >
                  <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
                    <path fill="#1877F2" d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06c0 5.01 3.66 9.17 8.44 9.94v-7.03H8.1v-2.9h2.34V9.41c0-2.3 1.37-3.57 3.47-3.57.99 0 2.04.18 2.04.18v2.24h-1.15c-1.13 0-1.48.7-1.48 1.42v1.7h2.52l-.4 2.9h-2.12V22c4.78-.77 8.44-4.93 8.44-9.94z"/>
                  </svg>
                </a>

                {/* Apple */}
                <a
                  href="#"
                  aria-label="Continue with Apple"
                  className="inline-flex size-10 items-center justify-center rounded-full border border-slate-200 hover:bg-slate-50"
                >
                  <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
                    <path fill="currentColor" d="M16.365 12.58c-.015-1.62.72-2.845 2.2-3.745-.83-1.21-2.085-1.88-3.77-2.015-1.58-.13-3.29.92-3.92.92-.66 0-2.18-.9-3.37-.87-1.73.03-3.41 1.02-4.32 2.58-1.85 3.03-.47 7.46 1.32 9.9.88 1.22 1.93 2.59 3.3 2.54 1.33-.05 1.83-.82 3.44-.82 1.61 0 2.07.82 3.48.79 1.44-.03 2.35-1.23 3.23-2.46.71-1.03 1-2.06 1.02-2.11-.02-.01-1.96-.75-1.98-3.71zM14.27 4.5c.76-.91 1.28-2.18 1.14-3.45-1.1.05-2.41.73-3.17 1.64-.7.82-1.3 2.13-1.14 3.36 1.2.09 2.41-.61 3.17-1.55z"/>
                  </svg>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};