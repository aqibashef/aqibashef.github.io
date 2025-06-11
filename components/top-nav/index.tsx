import Hamburger from "hamburger-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const TopNav = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <div className={"navbar-container flex justify-center w-full px-5 pt-5 fixed z-40"}>
            <div className={"navbar flex justify-between items-center py-1 px-5 rounded-md bg-[#272626] background-blur-sm w-full max-w-3xl " + (isOpen ? "flex-col" : "flex-row")}>
                <div className="flex flex-row w-full justify-between"> 
                    <Link href={"/"} className="profile">
                        <Image src={"/logo-aqib-me.svg"} alt="A" height={25} width={50}/>
                    </Link>
                    <div className={"flex lg:hidden"}>
                        <Hamburger toggled={isOpen} toggle={setOpen} size={20} rounded={true}/>
                    </div>
                </div>
                <ul className={"gap-x-8 gap-y-2 transition-display duration-150 ease-in-out " + (isOpen ? "flex flex-col lg:flex-row w-full py-5 lg:py-0" : "hidden lg:flex lg:flex-row")}>
                    <hr className="border-t-[#181818] lg:hidden"/>
                    <li>
                        <Link href={"#about"} className="flex p-3 hover:bg-[#181818] active:bg-[#181818] rounded-md">About</Link>
                    </li>
                    <hr className="border-t-[#181818] lg:hidden"/>
                    <li>
                        <Link href={"#work"} className="flex p-3 hover:bg-[#181818] active:bg-[#181818] rounded-md">Work</Link>
                    </li>
                    <hr className="border-t-[#181818] lg:hidden"/>
                    <li>
                        <Link href={"#blog"} className="flex p-3 hover:bg-[#181818] active:bg-[#181818] rounded-md">Blog</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}