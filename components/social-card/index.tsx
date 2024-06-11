import { SocialCardItem } from "../social-card-item";

export const SocialCard = () => {
    return (
        <div className="columns-3">
            <SocialCardItem 
                url="https://x.com/aqibashef" 
                logo="/x-logo.svg"/>

            <SocialCardItem 
                url="https://www.producthunt.com/@aqibashef" 
                logo="/ph-logo.svg"/>

            <SocialCardItem 
                url="https://www.linkedin.com/in/aqib-ashef-27048753/" 
                logo="/linkedin-logo.svg"/>
        </div>
    );
}