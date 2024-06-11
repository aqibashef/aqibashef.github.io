import { BookACallCard } from "../book-a-call-card";
import { CompanyCard } from "../company-card";
import { ExperienceCard } from "../experience-card";
import { ProfileCard } from "../profile-card";
import { SocialCard } from "../social-card";

export const About = () => {
    return (
        <div className="container flex justify-center py-20">
            <div className="columns-1 sm:columns-1 md:columns-2 lg:columns-2 xl:columns-3 px-8">
                <ProfileCard/>
                <CompanyCard/>
                <ExperienceCard/>
                <BookACallCard/>
                <SocialCard/>
            </div>
        </div>
    );
}