import Link from "next/link";

export const BookACallCard = () => {
    return (
        <div className="bg-[#181818] rounded-2xl py-32 md:py-5 lg:py-5 xl:py-32 flex flex-col justify-center items-center mb-5">
            <p className="text-center mb-5">Got a project or <br/> partnership in mind?</p>
            <Link className="bg-[#2F2E41] rounded-[3px] px-14 py-4 font-bold" href="https://calendly.com/aqibashef/15min" target="_blank">Book a call</Link>
        </div>
    );
}