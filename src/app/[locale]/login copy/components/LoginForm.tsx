'use client';

import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(false); // Set to true to show the error state
    const [email, setEmail] = useState(''); // Demo value
    const [password, setPassword] = useState('••••••••'); // Demo value

    const togglePassword = () => setShowPassword(!showPassword);
    return (
        <div className="flex-col justify-center w-full py-28">
            <h1 className="text-3xl font-semibold mb-8">Login</h1>

            {error && (
                <div className="bg-red-500 text-white px-4 py-3 rounded mb-6">
                    Invalid username or password
                </div>
            )}

            <form className="space-y-6">
                <div className="space-y-2">
                    <label
                        htmlFor="email"
                        className="block uppercase text-xs text-gray-500 font-medium tracking-wider"
                    >
                        Email
                    </label>
                    <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-[#e8e8e8] border-0 focus-visible:ring-1 focus-visible:ring-gray-400"
                    />
                </div>

                <div className="space-y-2">
                    <label
                        htmlFor="password"
                        className="block uppercase text-xs text-gray-500 font-medium tracking-wider"
                    >
                        Password
                    </label>
                    <div className="relative">
                        <Input
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-[#e8e8e8] border-0 focus-visible:ring-1 focus-visible:ring-gray-400"
                        />
                        <button
                            type="button"
                            onClick={togglePassword}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        >
                            {showPassword ? (
                                <EyeOff size={20} />
                            ) : (
                                <Eye size={20} />
                            )}
                        </button>
                    </div>
                </div>

                <Button className="w-full bg-black text-white hover:bg-black/90">
                    Login
                </Button>
            </form>

            <Link
                href="/forgot-password"
                className="block mt-4 text-sm hover:underline"
            >
                Forgot password?
            </Link>
        </div>
    );
};

export default LoginForm;
