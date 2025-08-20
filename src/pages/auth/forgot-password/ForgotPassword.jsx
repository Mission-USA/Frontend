import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
	const [formData, setFormData] = useState({
		email: '',
		confirmEmail: ''
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle password reset logic here
		console.log('Password reset requested for:', formData.email);
	};

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	};

	const emailsMatch = formData.email && formData.confirmEmail && formData.email === formData.confirmEmail;

	return (
		<section className="bg-gradient-to-b from-slate-50 to-white min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
			<div className="w-full max-w-md">
				{/* Header */}
				<div className="text-center mb-8">
					<h1 className="text-3xl font-bold text-slate-900">Reset your password</h1>
					<p className="mt-2 text-slate-600">
						Enter your email address and we'll send you a link to reset your password.
					</p>
				</div>

				{/* Form Card */}
				<div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
					<form onSubmit={handleSubmit} className="space-y-6">
						{/* Email Field */}
						<div>
							<label htmlFor="email" className="block text-sm font-medium text-slate-900 mb-2">
								Email Address
							</label>
							<input
								id="email"
								name="email"
								type="email"
								placeholder="Enter your email"
								value={formData.email}
								onChange={handleChange}
								required
								className="w-full rounded-lg bg-[#EEF3F7] px-4 py-3 text-slate-700 placeholder:text-slate-500 border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40 transition"
							/>
						</div>

						{/* Confirm Email Field */}
						<div>
							<label htmlFor="confirmEmail" className="block text-sm font-medium text-slate-900 mb-2">
								Confirm Email Address
							</label>
							<input
								id="confirmEmail"
								name="confirmEmail"
								type="email"
								placeholder="Confirm your email"
								value={formData.confirmEmail}
								onChange={handleChange}
								required
								className={`w-full rounded-lg bg-[#EEF3F7] px-4 py-3 text-slate-700 placeholder:text-slate-500 border transition ${
									formData.confirmEmail && !emailsMatch
										? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/40'
										: 'border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40'
								}`}
							/>
							{formData.confirmEmail && !emailsMatch && (
								<p className="mt-1 text-sm text-red-600">Email addresses do not match</p>
							)}
						</div>

						{/* Submit Button */}
						<button
							type="submit"
							disabled={!emailsMatch}
							className={`w-full rounded-lg px-4 py-3 font-semibold tracking-wide transition ${
								emailsMatch
									? 'bg-blue-600 text-white shadow-[0_10px_25px_rgba(59,130,246,0.25)] hover:opacity-95 active:opacity-90'
									: 'bg-slate-300 text-slate-500 cursor-not-allowed'
							}`}
						>
							Send Reset Link
						</button>
					</form>

					{/* Back to Login */}
					<div className="mt-6 text-center">
						<Link to="/" className="text-sm text-blue-600 font-medium hover:underline">
							← Back to login
						</Link>
					</div>
				</div>

				{/* Additional Info */}
				<div className="mt-6 text-center">
					<p className="text-sm text-slate-500">
						Don't have an account?{' '}
						<Link to="/signup" className="text-blue-600 font-medium hover:underline">
							Sign up
						</Link>
					</p>
				</div>
			</div>
		</section>
	);
};

export default ForgotPassword;