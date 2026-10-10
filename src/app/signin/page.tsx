
"use client";

import React from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const SignInPage = () => {
    const router = useRouter();

    const onSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.signIn.email({
            email: user.email as string,
            password: user.password as string,
            callbackURL: "/",
        });

        if (error) {
            console.log(error);
            return;
        }

        if (data) {
            console.log(data);
            router.push("/");
            router.refresh();
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
                        className="btn btn-neutral mt-4 w-md"
                    >
                        Sign In
                    </button>
                </fieldset>
            </form>
        </div>
    );
};

export default SignInPage;

