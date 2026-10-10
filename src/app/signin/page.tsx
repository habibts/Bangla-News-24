
"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";

const SignInPage = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const onSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        if (loading) return;

        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());

        setLoading(true);

        try {
            const { data, error } = await authClient.signIn.email({
                email: user.email as string,
                password: user.password as string,
                callbackURL: "/",
            });

            if (error) {
                toast.error(
                    error.message || "Login করা যায়নি। আবার চেষ্টা করুন।"
                );
                return;
            }

            if (data) {
                toast.success("Welcome back! Login successful.");
                router.push("/");
                router.refresh();
            }
        } catch {
            toast.error("সমস্যা হয়েছে। আবার চেষ্টা করুন।");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <fieldset className="fieldset rounded-box p-4">
                    <label className="label">Email</label>
                    <input
                        name="email"
                        type="email"
                        className="input w-md"
                        placeholder="Email"
                        required
                    />

                    <label className="label">Password</label>
                    <input
                        name="password"
                        type="password"
                        className="input w-md"
                        placeholder="Password"
                        required
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="btn btn-neutral mt-4 w-md"
                    >
                        {loading ? "Signing In..." : "Sign In"}
                    </button>

                    <p className="mt-3 text-sm">
                        Don&apos;t have an account?{" "}
                        <Link
                            href="/sign-up"
                            className="text-red-700 underline"
                        >
                            Sign Up
                        </Link>
                    </p>
                </fieldset>
            </form>
        </div>
    );
};

export default SignInPage;

