import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { faqData } from '@/lib/faqData';
import PageTitle from '@/components/page-title';

export default function faqPage() {
    return (
      <section className="mt-12 mx-auto px-4 max-w-screen-xl md:px-8">
        <PageTitle />
        <div className="max-w-xl mx-auto px-4 py-8">
          <h2 className='mb-8'>Frequently Asked Questions</h2>
          <p>
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-8 space-x-4">
            <Link className={buttonVariants({ })} href="/about">
              About the program
            </Link>
            <Link className={buttonVariants({ variant: 'outline' })} href="/contact">
              Contact Us
            </Link>
          </div>

          </p>
        </div>
      </section>
  );
}