'use client';

import React from 'react';
import { siteConfig } from '@/config/site';
import { usePathname } from 'next/navigation';

export default function PageTitle() {
  const pathname = usePathname();
  const formattedPathname = pathname.replace('/', ''); // Remove the leading '/' character
  const pageTitle = formattedPathname.charAt(0).toUpperCase() + formattedPathname.slice(1); // Capitalize the first letter

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4 uppercase">
        {pageTitle} : {siteConfig.name} 
      </h1>

      <nav className="flex items-center mb-4">
        <a href="/">Home</a>
        <span className="mx-2">/</span>
        <span className="text-gray-600">
          {siteConfig.name} {pageTitle}
        </span>
      </nav>
    </div>
  );
}
