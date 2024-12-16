"use client"

import React, { useState, useTransition } from 'react';
import { Mail, Lock, Eye, EyeOff, Home } from 'lucide-react';
import { useRouter } from 'next/navigation';
import {loginWithEmailAndPassword} from "@/app/actions/user/login_user";

const InputField = ({ icon: Icon, type, placeholder, name, value, onChange, disabled, label }) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="space-y-2">
            <label htmlFor={name} className="block text-sm font-medium text-zinc-300">
                {label}
            </label>
            <div className="relative rounded-lg">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Icon className="h-5 w-5 text-zinc-400" />
                </div>
                <input
                    type={type === 'password' && showPassword ? 'text' : type}
                    name={name}
                    id={name}
                    defaultValue={value}
                    disabled={disabled}
                    className="block w-full pl-11 pr-3 py-2.5 bg-zinc-800/50 backdrop-blur-sm border border-zinc-700
                    rounded-lg text-zinc-100 placeholder:text-zinc-500
                    focus:ring-2 focus:ring-red-500/20 focus:border-red-500/50 transition-all duration-200
                    disabled:bg-zinc-800/30 disabled:cursor-not-allowed"
                    placeholder={placeholder}
                />
                {type === 'password' && (
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            disabled={disabled}
                            className="text-zinc-400 hover:text-zinc-300 focus:outline-none focus:text-zinc-300
                            transition-colors disabled:cursor-not-allowed"
                        >
                            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

const LoadingSpinner = () => (
    <div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current
    border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite] align-[-0.125em]" />
);

export default function LoginPage() {
    const router = useRouter();
    const [error, setError] = useState(null);
    const [isPending, startTransition] = useTransition();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const isLoading = isPending || isSubmitting;

    async function handleSubmit(formData) {
        setIsSubmitting(true);
        setError(null);

        try {
            startTransition(async () => {
                const result = await loginWithEmailAndPassword(formData);

                if (!result.success) {
                    setError(result.error);
                } else {
                    // Login successful
                    router.push('/profile')
                    // router.refresh()
                }
            });
        } catch (err) {
            setError('Failed to log in. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className="min-h-screen bg-zinc-900 relative overflow-hidden pt-28">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-900"/>
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-950/20 rounded-full blur-[120px]"/>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-red-900/10 rounded-full blur-[100px]"/>
            </div>

            {/* Home Button */}
            <div className="absolute top-8 right-8">
                <button
                    onClick={() => router.push('/')}
                    className="p-3 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700
                    hover:bg-zinc-700/50 transition-all duration-200 group"
                >
                    <Home className="h-5 w-5 text-zinc-400 group-hover:text-zinc-300" />
                </button>
            </div>

            {/* Main Content */}
            <div className="relative w-full max-w-lg mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
                    <p className="text-zinc-400">Sign in to your account</p>
                </div>

                <div className="bg-zinc-800/20 backdrop-blur-lg shadow-xl rounded-2xl border border-zinc-800">
                    <div className="px-8 py-12">
                        <form action={handleSubmit} className="space-y-6">
                            <InputField
                                label="Email Address"
                                icon={Mail}
                                type="text"
                                name="email"
                                placeholder="Enter your email"
                                disabled={isLoading}
                            />

                            <InputField
                                label="Password"
                                icon={Lock}
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                disabled={isLoading}
                            />

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        checked={rememberMe}
                                        onChange={(e) => setRememberMe(e.target.checked)}
                                        className="h-4 w-4 rounded border-zinc-600 bg-zinc-800/50 text-red-500
                                        focus:ring-red-500/50 transition-colors cursor-pointer"
                                    />
                                    <label htmlFor="remember-me" className="ml-2 block text-sm text-zinc-300">
                                        Remember me
                                    </label>
                                </div>

                                <button
                                    type="button"
                                    className="text-sm font-medium text-red-400 hover:text-red-300 transition-colors"
                                >
                                    Forgot password?
                                </button>
                            </div>

                            {error && (
                                <div className="rounded-xl bg-red-500/10 border border-red-500/20 p-4">
                                    <p className="text-sm text-red-400">{error}</p>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full flex justify-center items-center gap-2 py-3 px-4 rounded-xl text-sm
                                font-semibold text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2
                                focus:ring-offset-2 focus:ring-red-500 transition-all duration-300
                                disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
                            >
                                {isLoading ? (
                                    <>
                                        <LoadingSpinner />
                                        <span>Signing in...</span>
                                    </>
                                ) : (
                                    'Sign in'
                                )}
                            </button>

                            <div className="text-center mt-6">
                                <p className="text-sm text-zinc-400">
                                    Don't have an account?{' '}
                                    <button
                                        type="button"
                                        onClick={() => router.push('/register')}
                                        className="font-medium text-red-400 hover:text-red-300 transition-colors"
                                    >
                                        Create an account
                                    </button>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}