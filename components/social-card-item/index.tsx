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
        <Link href={url} target="_blank">
            <div className="rounded-2xl bg-[#181818] w-[102px] h-[102px] flex flex-col justify-center items-center">
                <div className="mb-1 bg-[#292929] rounded-[3px] w-[45px] h-[45px] flex justify-center items-center">
                    <Image src={logo} alt="S" height={20} width={20}/>
                </div>
            </div>
        </Link>
    );
}