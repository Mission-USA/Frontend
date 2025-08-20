import React from 'react';

export default function About() {
	return (
		<main className="bg-gradient-to-b from-slate-50 to-white">
			{/* Hero */}
			<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
				<div className="grid items-center gap-10 md:grid-cols-2">
					<div>
						<h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
							Built with React, Designed for Humans
						</h1>
						<p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
							This project showcases a modern React + Vite + Tailwind stack focused on clarity,
							performance, and delightful developer experience.
						</p>
						<div className="mt-8 flex flex-wrap gap-3">
							<span className="rounded-full bg-blue-600/10 text-blue-700 px-3 py-1 text-sm font-medium">React 18</span>
							<span className="rounded-full bg-indigo-600/10 text-indigo-700 px-3 py-1 text-sm font-medium">Vite</span>
							<span className="rounded-full bg-emerald-600/10 text-emerald-700 px-3 py-1 text-sm font-medium">Tailwind CSS v4</span>
							<span className="rounded-full bg-rose-600/10 text-rose-700 px-3 py-1 text-sm font-medium">ESM</span>
						</div>
					</div>

					<div className="relative order-first md:order-none">
						<div className="aspect-video rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg" />
						<div className="absolute -bottom-6 -left-6 h-28 w-28 rounded-xl bg-blue-600/20 blur-xl" />
						<div className="absolute -top-6 -right-6 h-28 w-28 rounded-xl bg-indigo-600/20 blur-xl" />
					</div>
				</div>
			</section>

			{/* Features */}
			<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
				<h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Why this stack?</h2>
				<p className="mt-2 text-slate-600 max-w-2xl">A pragmatic set of tools to build fast, maintainable apps.</p>

				<div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
						<h3 className="text-lg font-semibold text-slate-900">Component-Driven</h3>
						<p className="mt-2 text-slate-600">Reusable components enable consistent UI and faster delivery.</p>
					</div>
					<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
						<h3 className="text-lg font-semibold text-slate-900">Instant Feedback</h3>
						<p className="mt-2 text-slate-600">Vite HMR keeps the feedback loop tight for a smooth DX.</p>
					</div>
					<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
						<h3 className="text-lg font-semibold text-slate-900">Utility-First Styling</h3>
						<p className="mt-2 text-slate-600">Tailwind utilities make responsive design effortless.</p>
					</div>
					<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
						<h3 className="text-lg font-semibold text-slate-900">Accessible by Default</h3>
						<p className="mt-2 text-slate-600">Semantic markup and focus styles for inclusive interfaces.</p>
					</div>
					<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
						<h3 className="text-lg font-semibold text-slate-900">Type-Safe Ready</h3>
						<p className="mt-2 text-slate-600">Easily adopt TS when needed without changing the stack.</p>
					</div>
					<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
						<h3 className="text-lg font-semibold text-slate-900">Scalable Patterns</h3>
						<p className="mt-2 text-slate-600">Clear routing and component boundaries keep things tidy.</p>
					</div>
				</div>
			</section>

			{/* Stats / Values */}
			<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
				<div className="grid gap-6 sm:grid-cols-3">
					<div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
						<div className="text-3xl font-extrabold text-slate-900">95%</div>
						<div className="mt-1 text-sm text-slate-600"> Lighthouse performance</div>
					</div>
					<div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
						<div className="text-3xl font-extrabold text-slate-900"><span className="align-top text-lg">~</span>50ms</div>
						<div className="mt-1 text-sm text-slate-600"> HMR update time</div>
					</div>
					<div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
						<div className="text-3xl font-extrabold text-slate-900">100%</div>
						<div className="mt-1 text-sm text-slate-600"> Mobile responsive</div>
					</div>
				</div>
			</section>
		</main>
	);
}
