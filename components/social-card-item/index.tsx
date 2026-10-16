'use client'
import Image from "next/image";
import Link from "next/link"

interface SocialCardItemProps {
    logo: string,
    url: string
}

export const SocialCardItem = ({
    logo,
    url
} : SocialCardItemProps) => {
    return (
        <Link className="block" href={url} target="_blank">
            <div className="rounded-2xl bg-[#181818] w-full aspect-square flex flex-col justify-center items-center">
                <div className="bg-[#292929] rounded-[3px] w-[45px] h-[45px] flex justify-center items-center">
                    <Image src={logo} alt="S" height={20} width={20}/>
                </div>
            </div>
        </Link>
    );
}