'use client'
import Image from "next/image"

export const ProfileCard = () => {
    return (
        <div className="flex flex-col justify-center items-center bg-[#181818] rounded-2xl mb-5 py-32">
            <Image className="mb-9" src={"./profile.png"} alt="AA" width={150} height={150}/>
            <h2 className="text-3xl font-semibold">Aqib Ashef</h2>
            <p>Your average tech-veteran</p>
        </div>
    );
}