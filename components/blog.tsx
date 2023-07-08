'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { client } from '@/lib/sanity';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export default function BlogPreview() {
  const fetchPosts = async () => {
    const posts = await client.fetch('*[_type == "post"]');
    // Get the latest three posts
    const latestPosts = posts.slice(0, 3);
    return latestPosts;
  };

  const [latestPosts, setLatestPosts] = React.useState([]);

  React.useEffect(() => {
    fetchPosts().then((posts) => setLatestPosts(posts));
  }, []);

  return (
    <div className="text-center py-16 bg-zinc-900 mt-8 text-white">
      <h2 className="">{siteConfig.name} Blog</h2>
      <p className="subtitle">Latest news</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-screen-xl md:mx-auto mx-8 mt-8">
        {latestPosts.map((post) => {
          const imageUrl = post.mainImage.asset._ref
            .replace('image-', '')
            .replace('-jpg', '.jpg');

          return (
            <div
              key={post._id}
              className="rounded-md shadow-md p-4 flex flex-col justify-between bg-zinc-800"
            >
              <div>
                <Image
                  src={`https://cdn.sanity.io/images/${projectId}/${dataset}/${imageUrl}`}
                  alt={post.mainImage.alt}
                  width={300}
                  height={200}
                  className="mx-auto rounded-md"
                />
                <h2 className="text-xl font-bold my-4">{post.title}</h2>
                <pre className="text-gray-400 whitespace-pre-wrap mb-4">
                  {JSON.stringify(post.excerpt, null, 2)}
                </pre>
              </div>
              <div>
                <Link
                  href={`/blog/${post.slug.current}`}
                  className="text-primary dark:text-white hover:underline"
                >
                  Read more
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}