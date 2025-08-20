import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
	return (
		<main className="bg-gradient-to-b from-slate-50 to-white">
			{/* Hero / Banner */}
			<section className="relative overflow-hidden">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid items-center gap-10 md:grid-cols-2">
					<div>
						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
							Connecting Students and Companies Seamlessly
						</h1>
						<p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
							Discover opportunities, apply with confidence, and grow your career. Companies find the right talent fast.
						</p>
						<div className="mt-8 flex flex-wrap gap-3">
							<Link to="/signup" className="rounded-lg bg-slate-900 px-5 py-3 text-white font-semibold hover:opacity-95 active:opacity-90">Get Started</Link>
							<Link to="/blog" className="rounded-lg border border-slate-300 px-5 py-3 text-slate-900 font-semibold hover:bg-slate-50">Explore</Link>
						</div>
					</div>
					<div className="relative order-first md:order-none">
						<div className="aspect-video rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg" />
						<div className="absolute -bottom-6 -left-6 h-28 w-28 rounded-xl bg-blue-600/20 blur-xl" />
						<div className="absolute -top-6 -right-6 h-28 w-28 rounded-xl bg-indigo-600/20 blur-xl" />
					</div>
				</div>
			</section>

			{/* How we work for Students */}
			<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
				<h2 className="text-2xl sm:text-3xl font-bold text-slate-900">How we work for students</h2>
				<p className="mt-2 text-slate-600 max-w-2xl">A simple, transparent journey from discovery to hire.</p>
				<div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{[
						{title:'Create your profile',desc:'Add skills, education and preferences.'},
						{title:'Discover opportunities',desc:'Personalized jobs and internships.'},
						{title:'Apply in one click',desc:'Tailored applications with tracking.'},
						{title:'Track your progress',desc:'Get real-time updates & notifications.'},
					].map((item,idx)=> (
						<div key={idx} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
							<div className="flex items-center gap-3">
								<span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-blue-600/10 text-blue-700 font-semibold">{idx+1}</span>
								<h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
							</div>
							<p className="mt-3 text-slate-600">{item.desc}</p>
						</div>
					))}
				</div>
			</section>

			{/* What we provide for Companies */}
			<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
				<div className="flex items-end justify-between gap-4 flex-wrap">
					<div>
						<h2 className="text-2xl sm:text-3xl font-bold text-slate-900">What we provide for companies</h2>
						<p className="mt-2 text-slate-600 max-w-2xl">Tools that help you attract, evaluate, and hire great talent faster.</p>
					</div>
					<Link to="/company/dashboard" className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50">Go to company portal</Link>
				</div>
				<div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
					<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
						<h3 className="text-lg font-semibold text-slate-900">Smart Job Posting</h3>
						<p className="mt-2 text-slate-600">Post roles with rich descriptions and target the right audience.</p>
					</div>
					<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
						<h3 className="text-lg font-semibold text-slate-900">Applicant Management</h3>
						<p className="mt-2 text-slate-600">View, filter, and manage applicants in one place.</p>
					</div>
					<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
						<h3 className="text-lg font-semibold text-slate-900">Shortlisting & Notes</h3>
						<p className="mt-2 text-slate-600">Collaborate with your team to shortlist and leave feedback.</p>
					</div>
					<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
						<h3 className="text-lg font-semibold text-slate-900">Insights & Reports</h3>
						<p className="mt-2 text-slate-600">Track pipeline metrics and improve hiring outcomes.</p>
					</div>
				</div>
			</section>
		</main>
	);
};

export default LandingPage; 