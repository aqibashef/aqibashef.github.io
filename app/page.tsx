import { Header } from "@/components/header";
import { Social } from "@/components/social";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header/>
      <Social/>
    </main>
  );
}
