'use client'
import { About } from "@/components/about";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { TopNav } from "@/components/top-nav";

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* <TopNav/> */}
      <Header/>
      <About/>
      <Footer/>
    </main>
  );
}
