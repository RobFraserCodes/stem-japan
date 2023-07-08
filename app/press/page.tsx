'use client';

import React, { useState, useEffect } from 'react';
import { client } from '@/lib/sanity';
import PageTitle from '@/components/page-title';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

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
          <div className=''>
            <h4 className='mt-8'>Our Mission</h4>
            <p>
            Inspiring young people in the Scottish Highlands by offering exciting learning adventures in Japan. 
            We aim to spark innovative thinking, and encourage a global perspective by focusing on science and technology.
            </p>
          </div>
          <div>
            {pressReleases.map((pressRelease) => {
              return (
                <Card
                  key={pressRelease._id} >
                    <CardHeader>
                      <CardTitle>{pressRelease.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{pressRelease.excerpt}</p>
                      <Button href={`/press/${pressRelease.slug}`}>Read More</Button>
                    </CardContent>
                </Card>
              )
            }
            )}
          </div>
        </div>
        <div>
          {/* Social Media */}
          {/* Images */}
        </div>
      </div>
      <div className="w-full">
        {/* Contact details */}
        {/* Download Documents */}
      </div>
    </section>
  )
}
