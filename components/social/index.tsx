import Image from "next/image";
import Link from "next/link";

export const Social = () => {
    return (
        <div className="flex gap-x-6">
            <Link href={"https://twitter.com/aqibashef"} target="_blank">
                <Image src={"/twitter-white.svg"} alt="T" height={20} width={20}/>
            </Link>
            <Link href={"https://www.linkedin.com/in/aqib-ashef-27048753/"} target="_blank">
                <Image src={"/linkedin-white.svg"} alt="L" height={20} width={20}/>
            </Link>
        </div>
    );
}