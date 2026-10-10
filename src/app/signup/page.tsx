
"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";

const SignUpPage = () => {
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
            const { data, error } = await authClient.signUp.email({
                name: user.name as string,
                email: user.email as string,
                password: user.password as string,
                callbackURL: "/",
            });

            if (error) {
                toast.error(
                    error.message || "Account তৈরি করা যায়নি। আবার চেষ্টা করুন।"
                );
                return;
            }

            if (data) {
                toast.success("Account তৈরি হয়েছে! স্বাগতম BazarDor-এ।");
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
                    <label className="label">Name</label>
                    <input
                        name="name"
                        type="text"
                        className="input w-md"
                        placeholder="Name"
                        required
                    />

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
                        minLength={8}
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="btn btn-neutral mt-4 w-md"
                    >
                        {loading ? "Creating Account..." : "Sign Up"}
                    </button>

                    <p className="mt-3 text-sm">
                        Already have an account?{" "}
                        <Link
                            href="/sign-in"
                            className="text-red-700 underline"
                        >
                            Sign In
                        </Link>
                    </p>
                </fieldset>
            </form>
        </div>
    );
};

export default SignUpPage;

