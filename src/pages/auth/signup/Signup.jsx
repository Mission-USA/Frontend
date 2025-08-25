import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
	return (
		<section className="bg-gradient-to-b from-slate-50 to-white">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
				<div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-stretch">
					{/* LEFT: Info panel */}
					<div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-blue-600 to-blue-500 text-white p-8 sm:p-10 flex flex-col justify-center shadow-lg">
						<div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
						<div className="absolute -bottom-8 -left-8 h-48 w-48 rounded-full bg-white/10 blur-2xl" />

						<div className="relative space-y-8">
							<div className="flex items-start gap-4">
								<span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15">
									<svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
										<path d="M20 6 9 17l-5-5" />
									</svg>
								</span>
								<div>
									<h3 className="text-xl font-semibold">Create Your Account</h3>
									<p className="mt-1 text-blue-50/90 leading-relaxed">Welcome to our registration page! Get started by creating your account.</p>
								</div>
							</div>

							<div className="flex items-start gap-4">
								<span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15">
									<svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
										<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" />
										<path d="m9 12 2 2 4-4" />
									</svg>
								</span>
								<div>
									<h3 className="text-xl font-semibold">Simple & Secure Registration</h3>
									<p className="mt-1 text-blue-50/90 leading-relaxed">Designed to be straightforward and secure. We prioritize your privacy and data security.</p>
								</div>
							</div>

							<div className="flex items-start gap-4">
								<span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15">
									<svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
										<path d="M12 2v4" />
										<path d="M6 2v4" />
										<rect x="3" y="4" width="18" height="18" rx="2" />
									</svg>
								</span>
								<div>
									<h3 className="text-xl font-semibold">Terms and Conditions Agreement</h3>
									<p className="mt-1 text-blue-50/90 leading-relaxed">Please accept the terms and conditions of our service during registration.</p>
								</div>
							</div>
						</div>
					</div>

					{/* RIGHT: Form */}
					<div className="md:ml-auto w-full max-w-xl">
						<h2 className="text-3xl font-semibold text-slate-900">Register</h2>

						<div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
							<form
								className="space-y-5"
								onSubmit={(e) => {
									e.preventDefault();
								}}
							>
								{/* Row 1: First / Last name */}
								<div className="grid sm:grid-cols-2 gap-4">
									<div>
										<label htmlFor="firstName" className="mb-2 block text-sm font-medium text-slate-900">First Name</label>
										<input id="firstName" name="firstName" type="text" placeholder="Enter name" autoComplete="given-name" required className="w-full rounded-lg bg-[#EEF3F7] px-4 py-3 text-slate-700 placeholder:text-slate-500 border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40 transition" />
									</div>
									<div>
										<label htmlFor="lastName" className="mb-2 block text-sm font-medium text-slate-900">Last Name</label>
										<input id="lastName" name="lastName" type="text" placeholder="Enter last name" autoComplete="family-name" required className="w-full rounded-lg bg-[#EEF3F7] px-4 py-3 text-slate-700 placeholder:text-slate-500 border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40 transition" />
									</div>
								</div>

								{/* Row 2: Email / Mobile */}
								<div className="grid sm:grid-cols-2 gap-4">
									<div>
										<label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-900">Email Id</label>
										<input id="email" name="email" type="email" placeholder="Enter email" autoComplete="email" required className="w-full rounded-lg bg-[#EEF3F7] px-4 py-3 text-slate-700 placeholder:text-slate-500 border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40 transition" />
									</div>
									<div>
										<label htmlFor="mobile" className="mb-2 block text-sm font-medium text-slate-900">Mobile No.</label>
										<input id="mobile" name="mobile" type="tel" placeholder="Enter mobile number" autoComplete="tel" className="w-full rounded-lg bg-[#EEF3F7] px-4 py-3 text-slate-700 placeholder:text-slate-500 border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40 transition" />
									</div>
								</div>

								{/* Row 3: Password / Confirm */}
								<div className="grid sm:grid-cols-2 gap-4">
									<div>
										<label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-900">Password</label>
										<input id="password" name="password" type="password" placeholder="Enter password" autoComplete="new-password" required className="w-full rounded-lg bg-[#EEF3F7] px-4 py-3 text-slate-700 placeholder:text-slate-500 border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40 transition" />
										<p className="mt-1 text-xs text-slate-500">Use 8+ characters with a mix of letters, numbers & symbols.</p>
									</div>
									<div>
										<label htmlFor="confirmPassword" className="mb-2 block text-sm font-medium text-slate-900">Confirm Password</label>
										<input id="confirmPassword" name="confirmPassword" type="password" placeholder="Enter confirm password" autoComplete="new-password" required className="w-full rounded-lg bg-[#EEF3F7] px-4 py-3 text-slate-700 placeholder:text-slate-500 border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40 transition" />
									</div>
								</div>

								{/* Terms */}
								<label className="flex items-center gap-2 text-sm text-slate-700">
									<input type="checkbox" className="size-4 rounded border-slate-300 align-middle" required />
									I accept the <a href="#" className="text-blue-600 font-medium hover:underline">Terms and Conditions</a>
								</label>

								{/* Submit */}
								<button type="submit" className="mt-3 w-full sm:w-auto rounded-lg bg-slate-900 px-5 py-3 text-white font-semibold tracking-wide shadow-[0_10px_25px_rgba(2,6,23,0.15)] hover:opacity-95 active:opacity-90 transition">
									Sign up
								</button>
							</form>
						</div>

						<p className="mt-6 text-sm text-slate-600">Already have an account? <Link to="/" className="text-blue-600 font-medium hover:underline">Log in</Link></p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Signup;