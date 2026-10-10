
"use client";

import { Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const UserInfo = () => {
    const router = useRouter();

    const { data: session, isPending } = authClient.useSession();

    const handleLogout = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/");
                    router.refresh();
                },
            },
        });
    };

    if (isPending) {
        return null;
    }

    return (
        <div className="flex justify-end items-center gap-2">
            {session ? (
                <>
                    <span className="font-medium">
                        {session.user.name}
                    </span>

                    <Button
                        onPress={handleLogout}
                        className="bg-red-700 text-white rounded px-4"
                    >
                        Logout
                    </Button>
                </>
            ) : (
                <>
                    <Link href="/signin">
                        <Button variant="bordered">
                            সাইন ইন
                        </Button>
                    </Link>

                    <Link href="/signup">
                        <Button className="bg-red-700 text-white rounded px-4">
                            সাইন আপ
                        </Button>
                    </Link>
                </>
            )}
        </div>
    );
};

export default UserInfo;

