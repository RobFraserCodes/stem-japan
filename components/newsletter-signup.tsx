'use client';

import React from 'react';
import { buttonVariants } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
import Link from 'next/link';

export default function NewsletterSignup() {
  return (
    <section className="py-14 bg-zinc-900 dark:bg-zinc-800">
      <div className="max-w-screen-xl mx-auto px-4 items-center gap-12 md:px-8 md:flex">
        <div className="flex-2 max-w-xl">
          <h4 className="text-white">Stay connected with us</h4>
          <p className="mt-3 text-white">
            Are you interested in our Japanese educational trip? Subscribe to our newsletter for exclusive updates and information!
          </p>
        </div>
        <div className="mt-6 md:mt-0 flex grow shrink-1 justify-center">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center gap-x-3 space-y-3 sm:space-y-0 md:space-y-3 sm:flex md:block"
          >
            {/* <Input type="email" required placeholder="Enter your email" /> */}
            <Link 
              href="http://eepurl.com/iuUW0w" 
              className={buttonVariants({ variant: "destructive" })}>
              Subscribe to the newsletter
            </Link>
          </form>

        </div>
      </div>
    </section>
  );
}