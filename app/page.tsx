import WelcomeMessage from "@/components/WelcomeMessage";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { Suspense } from "react";
import Loading from "./Loading";

export default async function Home() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <WelcomeMessage />
      </Suspense>
    </>
  )
}
