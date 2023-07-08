import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Link from 'next/link';
import { buttonVariants } from './ui/button';
import { faqData } from '@/lib/faqData';

export function FAQ() {
  const firstThreeFAQs = faqData.slice(0, 3);

  return (
    <div className="max-w-xl mx-auto p-8">
      <h2>Frequently Asked Questions</h2>
      <p className='subtitle'>Find out more</p>
      <Accordion type="single" collapsible className="pt-8">
        {firstThreeFAQs.map((item) => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div className="mt-8">
        <Link className={buttonVariants({ variant: 'outline' })} href="/faq">
          More FAQs
        </Link>
      </div>
    </div>
  );
}
