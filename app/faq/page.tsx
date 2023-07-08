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
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Label } from '@/components/ui/label';


export default function faqPage() {
    return (
      <section className="mt-12 mx-auto px-4 max-w-screen-xl md:px-8">
        <PageTitle />
        <div className="grid lg:grid-cols-3 gap-4 mb-16">
          <div className="max-w-xl mx-auto px-4 py-8 lg:col-span-2">
            <h2 className='mb-8'>Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((item) => (
                <AccordionItem key={item.id} value={item.id}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="mt-8 lg:mt-0">
          <Card className="bg-primary-dark">
            <CardHeader>
              <CardTitle>Useful Links</CardTitle>
              <CardDescription>Read More or get in touch.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Our Mission</Label>
                  <Link href="/documents/mission.pdf"
                    className={buttonVariants({ variant: 'outline' })}>
                      Download
                    
                  </Link>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Contact Us</Label>
                  <Link href="/contact"
                    className={buttonVariants({ variant: 'outline' })} >
                    Contact Us
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        </div>
      </section>
  );
}