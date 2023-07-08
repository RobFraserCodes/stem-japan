import React from 'react';
import Link from 'next/link';
import { buttonVariants } from "@/components/ui/button";

export default function ApplicationPage() {
  return (
    <div className="max-w-xl flex flex-col mx-auto justify-center h-screen">
      <h1 className="mb-4">Coming soon</h1>
      <p className="mb-4">Applications will open on the 17th July 2023</p>
      <Link
        href="/about"
        className={buttonVariants({ variant: "outline" })} >
      Find out more
      </Link>
    </div>
  );
}