
import { Button } from "@heroui/react";
import Image from "next/image";
import NavLinks from "./NavLinks";

const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
});

const Header = () => {
    return (
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
            <div className="grid grid-cols-3 items-center">

                {/* Left */}
                <div></div>

                {/* Center */}
                <div className="flex items-center justify-center gap-2">
                    <Image
                        className="w-10 h-10"
                        height={50}
                        width={50}
                        src="/logo.webp"
                        alt="Logo"
                    />

                    <div>
                        <div>Bangla News 24</div>
                        <div>{date}</div>
                    </div>
                </div>

                {/* Right */}
                <div className="flex justify-end gap-2">
                    <button>সাইন ইন</button>

                    <Button className="bg-red-700 rounded px-4">
                        সাইন আপ
                    </Button>
                </div>

            </div>
            <NavLinks></NavLinks>
        </div>
    );
};

export default Header;

