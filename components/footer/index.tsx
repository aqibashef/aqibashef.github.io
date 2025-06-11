import Link from "next/link";

export const Footer = () => {
    return (
        <div className={"footer container flex justify-center py-5"}>
            <p>&copy; {new Date().getFullYear()} <Link href={"#"}>Aqib Ashef</Link></p>
        </div>
    );
}