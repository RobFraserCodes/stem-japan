'use client';

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import { MainNav } from "@/components/main-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { Icons } from "./icons";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-primary-dark dark:border-slate-900 bg-primary dark:bg-black">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link href={siteConfig.links.apply} target="_blank" rel="noreferrer">
              <div
                className={buttonVariants({
                  size: "sm",
                })}
              >
                Apply
              </div>
            </Link>
            <Link href={siteConfig.links.press} target="_blank" rel="noreferrer">
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                Press & Media
              </div>
            </Link>
            <Link href={siteConfig.links.twitter} target="_blank" rel="noreferrer">
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                <Icons.twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
            <ThemeToggle />
          </nav>
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none"
            >
              <span className="sr-only">Menu</span>
              <div className="w-6 h-px bg-gray-800 dark:bg-gray-200"></div>
              <div className="w-6 h-px bg-gray-800 dark:bg-gray-200"></div>
              <div className="w-6 h-px bg-gray-800 dark:bg-gray-200"></div>
            </button>
          </div>
        </div>
      </div>
      <div className={`px-4 pt-2 pb-4 sm:hidden ${isMenuOpen ? "" : "hidden"}`}>
        <MainNav items={siteConfig.mainNav} />
      </div>
    </header>
  );
}