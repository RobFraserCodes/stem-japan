'use client';

import React, { useState, useEffect } from 'react';
import { client } from '@/lib/sanity';
import PageTitle from '@/components/page-title';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { buttonVariants } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import EditorNotes from '@/components/editor-notes';

export default function PressPage() {
  const [pressReleases, setPressReleases] = useState([]);

  useEffect(() => {
    const fetchPressReleases = async () => {
      const pressReleases = await client.fetch('*[_type == "pressRelease"]');
      setPressReleases(pressReleases);
    };

    fetchPressReleases();
  }, []);
  
  return (
    <section className="mt-12 mx-auto px-4 max-w-screen-xl md:px-8">
      <PageTitle />
      <div className="bg-[url('/images/japan.jpeg')] h-40">
        <h4 className='text-white p-8'>Press & Media Queries</h4>
      </div>
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          {/* Mission Statement */}
          <div className='py-8'>
            <h4 className='mt-8'>Our Mission</h4>
            <p>
            Inspiring young people in the Scottish Highlands by offering exciting learning adventures in Japan. 
            We aim to spark innovative thinking, and encourage a global perspective by focusing on science and technology.
            </p>
          </div>
          <h4 className='mb-4'>Press Releases</h4>
          <div className='grid grid-cols-2 gap-8 mb-8'>
            
            {pressReleases.map((pressRelease) => {
              return (
                <Card
                className='col-span-1'
                  key={pressRelease._id} >
                    <CardHeader>
                      <CardTitle>{pressRelease.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className='mb-4'>{pressRelease.excerpt}</p>
                      <a href={`/press/${pressRelease.slug}`}>Read More</a>
                    </CardContent>
                </Card>
              )
            }
            )}
          </div>
        </div>
        <div className='p-8'>
          {/* Social Media */}
          {/* Images */}
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
      <EditorNotes />
    </section>
  )
}

