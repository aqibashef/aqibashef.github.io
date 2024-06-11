import { About } from "@/components/about";
import { Header } from "@/components/header";
import { SocialNav } from "@/components/social-nav";

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header/>
      <About/>
      {/* <SocialNav/> */}
    </main>
  );
}
