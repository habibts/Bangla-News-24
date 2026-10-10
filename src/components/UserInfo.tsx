
"use client";

import { Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";

const UserInfo = () => {
    const router = useRouter();

    const { data: session, isPending } = authClient.useSession();

    const handleLogout = async () => {
        try {
            const { error } = await authClient.signOut();

            if (error) {
                toast.error("Logout করা যায়নি। আবার চেষ্টা করুন।");
                return;
            }

            toast.success("Logged out successfully!");

            router.push("/");
            router.refresh();
        } catch {
            toast.error("Logout করার সময় সমস্যা হয়েছে।");
        }
    };

    if (isPending) {
        return null;
    }

    return (
        <div className="flex items-center justify-end gap-2">
            {session ? (
                <>
                    <span className="font-medium">
                        {session.user.name}
                    </span>

                    <Button
                        onPress={handleLogout}
                        className="rounded bg-red-700 px-4 text-white"
                    >
                        Logout
                    </Button>
                </>
            ) : (
                <>
                    <Link href="/signin">
                        <Button variant="outline">
                            সাইন ইন
                        </Button>
                    </Link>

                    <Link href="/signup">
                        <Button className="rounded bg-red-700 px-4 text-white">
                            সাইন আপ
                        </Button>
                    </Link>
                </>
            )}
        </div>
    );
};

export default UserInfo;

