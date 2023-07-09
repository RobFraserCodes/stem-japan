import { client } from '@/lib/sanity';
import PageTitle from '@/components/page-title';
import Image from 'next/image';
import NewsletterSignup from '@/components/newsletter-signup';
import { BlogPost } from '@/types/blogPosts';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

const blogPosts = await client.fetch(
  `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    mainImage,
    body
  }`
);

export default function BlogPage() {

  return (
    <>
    <section className="mt-12 mx-auto px-4 max-w-screen-xl md:px-8">
      <PageTitle />
      <h4>Stay up to date with the latest news.</h4>
      <div className="my-16 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => {
            const imageUrl = post.mainImage.asset._ref
            .replace('image-', '')
            .replace('-jpg', '.jpg');

          return (
            <article
              className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm"
              key={post._id}
            >
              <a href={`/blog/${post.slug.current}`}>
                <div className="relative w-full h-48 rounded-t-md overflow-hidden">
                  <Image
                    src={`https://cdn.sanity.io/images/${projectId}/${dataset}/${imageUrl}`}
                    alt={post.mainImage.alt}
                    layout="fill"
                    objectFit="cover"
                    loading="lazy"
                  />
                </div>
                <div className="pt-3 ml-4 mr-2 mb-3 space-y-4">
                  <h3 className="text-xl text-gray-900">{post.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">{post.excerpt}</p>
                  <p>Read more</p>
                </div>
              </a>
            </article>
          );
        })}
      </div>
    </section>
    <NewsletterSignup />
    </>
  );
}