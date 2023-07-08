import React from 'react';
import PageTitle from '@/components/page-title';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <section className="mt-12 mx-auto px-4 max-w-screen-xl md:px-8">
      <PageTitle />

      <div className="grid lg:grid-cols-3 gap-4">
        <div className="space-y-4 lg:col-span-2 mb-16">
          <p>
            {siteConfig.name} is a groundbreaking educational journey designed exclusively for curious students from the Scottish Highlands. This initiative integrates technology, science, and the deep-seated cultural tapestry of Japan into a comprehensive 10-week immersive program.
          </p>
          <Image
            src="/images/about-japan.jpeg"
            alt="Meguro River with cherry blossoms, Sora Sagano"
            className="w-full h-auto mb-4 rounded-md my-8"
            width={300}
            height={300}
          />
          <p>
            Our mission, at its core, is to open up the world to our students - to expose them to Japan&apos;s advanced technological landscape, to immerse them in the richness of Japanese culture, and to stimulate their intellectual curiosity to learn, grow, and innovate. We firmly believe in the potential of the world serving as our most effective classroom, and through this initiative, we aspire to transform learning into a dynamic, stimulating, and transformative adventure.
          </p>
          <p>
            On this journey, students will visit numerous locations across Japan, from the bustling city of Tokyo to the historic beauty of Kyoto. They will delve into innovative fields, explore renowned museums, and engage with Japan&apos;s vibrant culture. &quot;Learn in Japan&quot; is not just a trip, it&apos;s a unique learning experience designed to inspire the innovators of tomorrow.
          </p>
          <p>
            We welcome you to join us in this inspiring educational endeavor, broadening horizons and fostering connections from the Scottish Highlands to the Land of the Rising Sun.
          </p>
        </div>

        <div className="mt-8 lg:mt-0 mx-8">
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
