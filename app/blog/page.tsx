'use client';

import React, { useState, useEffect } from 'react';
import { client } from '@/lib/sanity';
import PageTitle from '@/components/page-title';
import Image from 'next/image';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export default function BlogPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await client.fetch('*[_type == "post"]');
      setPosts(posts);
    };

    fetchPosts();
  }, []);

  return (
    <section className="mt-12 mx-auto px-4 max-w-screen-xl md:px-8">
      <PageTitle />
      <h4>Stay up to date with the latest news.</h4>
      <div className="my-16 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => {
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
                {/* <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
                  <div className="flex-none w-10 h-10 rounded-full">
                    <Image
                      src={author.authorImage.asset.url}
                      alt={author.authorImage.alt}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </div>
                  <div className="ml-3">
                    <span className="block text-gray-900">{post.authorName}</span>
                    <span className="block text-gray-400 text-sm">{post.date}</span>
                  </div>
                </div> */}
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
  );
}