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
          <p>Contact details</p>
          {/* Social Media */}
          {/* Images */}
        </div>
      </div>
      <div className="w-full">
      NOTES TO EDITORS
For more information about the project name, please contact: Rob Fraser (email) or call 07727777494.
Learn in Japan is a start-up  organisation, working in partnership with Highland Council to provide world-leading educational opportunities for high school aged students.
About the Turing Scheme
The Turing Scheme is the UK government’s global programme to study and work abroad. The scheme provides funding for international opportunities in education and training across the world. Funding is open to UK and British Overseas Territories organisations from across the education and training sector through higher education, further or vocational education and training, and schools’ projects. Eligible organisations can apply for funding through the Turing Scheme for projects that offer the opportunity to study or gain work experience abroad.
The scheme is delivered by a consortium of the British Council and Ecorys UK. 
For more information: 

Website: 	www.turing-scheme.org.uk
Twitter:	https://twitter.com/TuringScheme_UK 
Facebook:	www.facebook.com/TuringSchemeUK 
        {/* Download Documents */}
      </div>
    </section>
  )
}

