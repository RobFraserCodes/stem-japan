import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { buttonVariants } from '@/components/ui/button';

export default function Intro() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-16 md:flex md:items-center md:gap-6">
      {/* Image */}
      <div className="hidden md:block md:w-1/2">
        <Image src="/images/japan.jpeg" width={500} height={200} alt="Image" className="rounded-lg m-8" />
      </div>

      {/* Text */}
      <div className="md:w-1/2 m-8">
        <h2 className="text-4xl font-bold">{siteConfig.name}</h2>
        <p className="subtitle mb-4 mt-0">Highlands&apos; Adventure: Tech Meets Tradition</p>
        <p className="mb-4">
          Embark on a life-changing 12-week educational journey across Japan,
          starting in September 2023. This exceptional, all-expenses-paid
          opportunity is designed for students seeking a comprehensive
          cultural, historical, and natural immersion in Japan. The trip
          begins in the vibrant metropolis of Tokyo, followed by visits to
          breathtaking sites such as Nikko, Hakone, Kanazawa, and Takayama.
        </p>
        <Link className={buttonVariants()} href="/about">
          Find out more
        </Link>
      </div>
    </div>
  );
}