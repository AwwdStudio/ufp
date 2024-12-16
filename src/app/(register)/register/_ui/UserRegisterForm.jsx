import React, { useState, useTransition } from 'react';
import { Mail, Lock, Eye, EyeOff, User, AtSign, Hash } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { registerUserWithEmailAndPassword } from "@/app/actions/user/register_user";

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

const RegisterForm = () => {
    const router = useRouter();
    const [error, setError] = useState(null);
    const [isPending, startTransition] = useTransition();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [agreedToTerms, setAgreedToTerms] = useState(false);

    const isLoading = isPending || isSubmitting;

    async function handleSubmit(formData) {
        if (!agreedToTerms) {
            setError('Please agree to the terms and conditions');
            return;
        }

        setIsSubmitting(true);
        setError(null);

        try {
            startTransition(async () => {
                const result = await registerUserWithEmailAndPassword(formData);

                if (!result.success) {
                    setError(result.error);
                } else {
                    // Registration successful
                    router.push('/profile')
                    router.refresh()
                }
            });
        } catch (err) {
            setError(err.message);
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-zinc-800/20 backdrop-blur-lg shadow-xl rounded-2xl border border-zinc-800">
                <div className="px-8 py-12">
                    <form action={handleSubmit} className="space-y-8">
                        <div className="space-y-6">
                            <InputField
                                label="Full Name"
                                icon={User}
                                type="text"
                                name="name"
                                placeholder="Your full name"
                                disabled={isLoading}
                            />

                            <InputField
                                label="Username"
                                icon={AtSign}
                                type="text"
                                name="username"
                                placeholder="Choose a username"
                                disabled={isLoading}
                            />

                            <InputField
                                label="Handle"
                                icon={Hash}
                                type="text"
                                name="handle"
                                placeholder="Choose a handle"
                                disabled={isLoading}
                            />

                            <InputField
                                label="Email Address"
                                icon={Mail}
                                type="text"
                                name="email"
                                placeholder="you@example.com"
                                disabled={isLoading}
                            />

                            <InputField
                                label="Password"
                                icon={Lock}
                                type="password"
                                name="password"
                                placeholder="••••••••"
                                disabled={isLoading}
                            />
                        </div>

                        <div className="flex items-start space-x-3">
                            <div className="flex items-center h-6">
                                <input
                                    id="terms"
                                    name="terms"
                                    type="checkbox"
                                    checked={agreedToTerms}
                                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                                    disabled={isLoading}
                                    className="h-4 w-4 rounded border-zinc-600 bg-zinc-800/50 text-red-500 
                                    focus:ring-red-500/50 transition-colors cursor-pointer disabled:cursor-not-allowed"
                                />
                            </div>
                            <div className="text-sm">
                                <label htmlFor="terms" className="font-medium text-zinc-300">
                                    I agree to the{' '}
                                    <button
                                        type="button"
                                        className="text-red-400 hover:text-red-300 font-semibold transition-colors"
                                        onClick={() => {
                                            console.log('Terms clicked');
                                        }}
                                    >
                                        Terms and Conditions
                                    </button>
                                </label>
                            </div>
                        </div>

                        {error && (
                            <div className="rounded-xl bg-red-500/10 border border-red-500/20 p-4">
                                <p className="text-sm text-red-400">{error}</p>
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isLoading || !agreedToTerms}
                            className="w-full flex justify-center items-center gap-2 py-3 px-4 rounded-xl text-sm 
                            font-semibold text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 
                            focus:ring-offset-2 focus:ring-red-500 transition-all duration-300 
                            disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
                        >
                            {isLoading ? (
                                <>
                                    <LoadingSpinner />
                                    <span>Signing up...</span>
                                </>
                            ) : (
                                'Create Account'
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;