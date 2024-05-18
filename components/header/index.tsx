import { Social } from "../social";

export const Header = () => {
    return (
        <div className="container h-screen flex justify-center items-center">
            <div className="flex flex-col items-center lg:items-start">
                <h1 className="text-3xl sm:text-4xl md:text-6xl xl:text-8xl text-center lg:text-left font-semibold leading-tight mb-6">Hi, I'm Aqib. I like to <br/>build stuff.</h1>
                <Social/>
            </div>
        </div>
    );
}