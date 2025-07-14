import { Skeleton } from "@/components/ui/skeleton";
import WelcomeMessage from "@/components/WelcomeMessage";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { Suspense } from "react";

export default async function Home() {
  return (
    <>
      <Suspense fallback={<FallbackWelcomeMessage />}>
        <WelcomeMessage />
      </Suspense>
    </>
  )
}

import React from 'react'

export const FallbackWelcomeMessage = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold">
      <Skeleton className="w-[180px] h-[36px]" />
      <Skeleton className="w-[180px] h-[36px]" />
     
      </h1>
    </div>
  )
}
