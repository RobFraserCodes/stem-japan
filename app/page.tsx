import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import NewsletterSignup from "@/components/newsletter-signup";
import Intro from "@/components/Intro";
import { FAQ } from "@/components/faq";
import TwitterBanner from "@/components/twitter-banner";
import Contact from "@/components/contact";
import BlogPreview from "@/components/blog";

export default function IndexPage() {
  return (
    <div>
      <section className="container grid items-center gap-6 pb-16 pt-6 md:py-16 justify-center text-center">
        <div className="max-w-xl flex flex-col items-center gap-2">
          <Image 
            src="/images/sun.png" 
            width={400} height={300} 
            className="rounded-lg my-8"
            alt="Japan"
          />
          <p className="bg-primary-dark py-1 px-4 mb-2 rounded-2xl uppercase font-medium dark:text-black">Journey to</p>
          <p className="text-8xl uppercase font-extrabold font-title">
            Japan
          </p>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            Our mission is to foster cross-cultural understanding and academic enrichment through immersive educational experiences in Japan. 
            Discover how you can embark on a life-changing journey. 
            Apply now to join our community of learners and global citizens!
          </p>
        </div>
        <div className="flex justify-center gap-4 uppercase mb-8">
        <Link
            href="/apply"
            className={buttonVariants({ variant: "destructive" })}
          >
            Apply
          </Link>
          <Link
            href="/about"
            className={buttonVariants({  })}
          >
            Find out more
          </Link>
        </div>
      </section>
      {/* Newsletter */}
      <NewsletterSignup />

      {/* Intro & link to About */}
      <Intro />

      {/* Social Media */}
      <TwitterBanner />

      {/* FAQ intro and link to FAQ page */}
      <FAQ />

      {/* Blog */}
      <BlogPreview  />

      {/* Contact Form */}
      <Contact />

    </div>
  )
}