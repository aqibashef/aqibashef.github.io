'use client'
import Image from "next/image";
import Link from "next/link";

export const CompanyCard = () => {
    return (
        <div className="py-8 md:py-7 lg:py-7 xl:py-8  rounded-2xl bg-[#181818] flex justify-center mb-5">
            <Link className="mr-4" href="https://allyf.io" target="_blank">
                <Image src={'/allyf-logo.svg'} alt="Allyf" width={50} height={50}/>
            </Link>
            <Link className="mr-4" href="https://technext.it" target="_blank">
                <Image src={'/technext-logo.png'} alt="Technext" width={50} height={50}/>
            </Link>
            <Link className="mr-4" href="https://cofounder.services" target="_blank">
                <Image src={'/cofounder-services-logo.png'} alt="Cofounder Services" width={50} height={50}/>
            </Link>
        </div>
    );
}