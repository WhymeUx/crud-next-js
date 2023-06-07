"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
    const pathName = usePathname();
    return (
        <>
            <div className="fixed top-0 right-0 left-0 p-4 z-20 bg-white border shadow-sm">
                <div className=" container mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <Link href="/">
                            <Image
                                className=" "
                                src="/images/logome.png"
                                alt="logo"
                                width={40}
                                height={40}
                                ></Image>
                        </Link>
                        <h1 className="font-bold text-xl text-purple-700">
                            WHY ME
                        </h1>
                    </div>
                    <div className="flex items-center gap-3 text-lg font-bold text-slate-600">
                        <Link
                            href="/"
                            className={`hover:text-purple-500 transition-colors ${
                                pathName === "/" ? "active" : ""
                            }`}>
                            Dashboard
                        </Link>
                        <Link
                            href="/post"
                            className={`hover:text-purple-500 transition-colors ${
                                pathName === "/post" ? "active" : ""
                            }`}>
                            Blog
                        </Link>
                        <Link
                            href="/product"
                            className={`hover:text-purple-500 transition-colors ${
                                pathName === "/product" ? "active" : ""
                            }`}>
                            Product
                        </Link>
                    </div>
                </div>
            </div>
            <div className="mb-24"></div>
        </>
    );
};

export default Header;
