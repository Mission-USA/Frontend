import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ResetPassword = () => {
	const [formData, setFormData] = useState({
		password: '',
		confirmPassword: ''
	});

	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle password reset logic here
		console.log('Password reset completed');
	};

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	};

	// Password strength checker
	const getPasswordStrength = (password) => {
		if (!password) return { score: 0, label: '', color: '' };
		
		let score = 0;
		if (password.length >= 8) score++;
		if (/[a-z]/.test(password)) score++;
		if (/[A-Z]/.test(password)) score++;
		if (/[0-9]/.test(password)) score++;
		if (/[^A-Za-z0-9]/.test(password)) score++;

		const strengthMap = {
			0: { label: 'Very Weak', color: 'bg-red-500' },
			1: { label: 'Weak', color: 'bg-orange-500' },
			2: { label: 'Fair', color: 'bg-yellow-500' },
			3: { label: 'Good', color: 'bg-blue-500' },
			4: { label: 'Strong', color: 'bg-green-500' },
			5: { label: 'Very Strong', color: 'bg-green-600' }
		};

		return { score, ...strengthMap[score] };
	};

	const passwordStrength = getPasswordStrength(formData.password);
	const passwordsMatch = formData.password && formData.confirmPassword && formData.password === formData.confirmPassword;
	const isFormValid = formData.password && passwordsMatch && passwordStrength.score >= 3;

	return (
		<section className="bg-gradient-to-b from-slate-50 to-white min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
			<div className="w-full max-w-md">
				{/* Header */}
				<div className="text-center mb-8">
					<h1 className="text-3xl font-bold text-slate-900">Set new password</h1>
					<p className="mt-2 text-slate-600">
						Create a strong password to secure your account.
					</p>
				</div>

				{/* Form Card */}
				<div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
					<form onSubmit={handleSubmit} className="space-y-6">
						{/* New Password Field */}
						<div>
							<label htmlFor="password" className="block text-sm font-medium text-slate-900 mb-2">
								New Password
							</label>
							<div className="relative">
								<input
									id="password"
									name="password"
									type={showPassword ? 'text' : 'password'}
									placeholder="Enter new password"
									value={formData.password}
									onChange={handleChange}
									required
									className="w-full rounded-lg bg-[#EEF3F7] px-4 py-3 pr-12 text-slate-700 placeholder:text-slate-500 border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40 transition"
								/>
								<button
									type="button"
									onClick={() => setShowPassword(!showPassword)}
									className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700"
								>
									{showPassword ? (
										<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
										</svg>
									) : (
										<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
										</svg>
									)}
								</button>
							</div>
							
							{/* Password Strength Indicator */}
							{formData.password && (
								<div className="mt-3">
									<div className="flex items-center gap-2 mb-2">
										<div className="flex-1 bg-slate-200 rounded-full h-2">
											<div 
												className={`h-2 rounded-full transition-all duration-300 ${passwordStrength.color}`}
												style={{ width: `${(passwordStrength.score / 5) * 100}%` }}
											/>
										</div>
										<span className="text-sm font-medium text-slate-700">{passwordStrength.label}</span>
									</div>
									<div className="text-xs text-slate-500">
										Password must be at least 8 characters with uppercase, lowercase, number, and special character.
									</div>
								</div>
							)}
						</div>

						{/* Confirm Password Field */}
						<div>
							<label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-900 mb-2">
								Confirm New Password
							</label>
							<div className="relative">
								<input
									id="confirmPassword"
									name="confirmPassword"
									type={showConfirmPassword ? 'text' : 'password'}
									placeholder="Confirm new password"
									value={formData.confirmPassword}
									onChange={handleChange}
									required
									className={`w-full rounded-lg bg-[#EEF3F7] px-4 py-3 pr-12 text-slate-700 placeholder:text-slate-500 border transition ${
										formData.confirmPassword && !passwordsMatch
											? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/40'
											: 'border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40'
									}`}
								/>
								<button
									type="button"
									onClick={() => setShowConfirmPassword(!showConfirmPassword)}
									className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700"
								>
									{showConfirmPassword ? (
										<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
										</svg>
									) : (
										<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
										</svg>
									)}
								</button>
							</div>
							{formData.confirmPassword && !passwordsMatch && (
								<p className="mt-1 text-sm text-red-600">Passwords do not match</p>
							)}
						</div>

						{/* Submit Button */}
						<button
							type="submit"
							disabled={!isFormValid}
							className={`w-full rounded-lg px-4 py-3 font-semibold tracking-wide transition ${
								isFormValid
									? 'bg-blue-600 text-white shadow-[0_10px_25px_rgba(59,130,246,0.25)] hover:opacity-95 active:opacity-90'
									: 'bg-slate-300 text-slate-500 cursor-not-allowed'
							}`}
						>
							Reset Password
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
						Remember your password?{' '}
						<Link to="/" className="text-blue-600 font-medium hover:underline">
							Sign in
						</Link>
					</p>
				</div>
			</div>
		</section>
	);
};

export default ResetPassword;
    