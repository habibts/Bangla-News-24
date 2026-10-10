
"use client";

import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

const SignUpPage = () => {
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.signUp.email({
            name: user.name as string,
            email: user.email as string,
            password: user.password as string,
            callbackURL: "/",
        });

        if (data) {
            console.log(data);
            redirect("/");
            
        }

        if (error) {
            console.log(error);
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
                    />

                    <button
                        type="submit"
                        className="btn btn-neutral mt-4 w-md"
                    >
                        Sign Up
                    </button>
                </fieldset>
            </form>
        </div>
    );
};

export default SignUpPage;

