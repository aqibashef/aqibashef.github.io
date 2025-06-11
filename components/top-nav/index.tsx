import Hamburger from "hamburger-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const TopNav = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <div className={"navbar-container flex justify-center w-full px-5 pt-5 fixed z-40"}>
            <div className={"navbar flex justify-between items-center py-1 px-5 rounded-md bg-[#27262688] background-blur-xs w-full max-w-3xl"}>
                <Link href={"/"} className="profile">
                    <Image src={"/logo-aqib-me.svg"} alt="A" height={25} width={50}/>
                </Link>
                <nav>
                    <ul className={"gap-x-8 hidden lg:flex"}>
                        <li>
                            <Link href={"#about"}>About</Link>
                        </li>
                        <li>
                            <Link href={"#work"}>Work</Link>
                        </li>
                        <li>
                            <Link href={"#blog"}>Blog</Link>
                        </li>
                    </ul>
                    <div className={"flex lg:hidden"}>
                        <Hamburger toggled={isOpen} toggle={setOpen} size={20} rounded={true}/>
                    </div>
                </nav>
            </div>
        </div>
    );
}