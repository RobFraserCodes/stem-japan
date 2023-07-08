'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from "next/navigation";
import PageTitle from "@/components/page-title";
import { client } from '@/lib/sanity';
import Image from 'next/image';
import BlockContent from '@sanity/block-content-to-react';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export default function BlogPage() {
    const { slug } = useParams();
    const [post, setPost] = useState([]);

    useEffect(() => {
        const fetchPost = async () => {
            const post = await client.fetch(`*[_type == "post" && slug.current == "${slug}"]`);
            setPost(post);
        };

        fetchPost();
    }, []);

    return (
        <section className="mt-12 mx-auto px-4 max-w-screen-xl md:px-8">
        <PageTitle />
          <div className="grid lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2">
              {post.map((post) => {
                  const imageUrl = post.mainImage.asset._ref
                  .replace('image-', '')
                  .replace('-jpg', '.jpg');

                return (
                  <div>
                      <div className="relative w-full h-48 rounded-t-md overflow-hidden">
                        <Image
                          src={`https://cdn.sanity.io/images/${projectId}/${dataset}/${imageUrl}`}
                          alt={post.mainImage.alt}
                          layout="fill"
                          objectFit="cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="pt-3 mb-3 space-y-4">
                        <BlockContent blocks={post.body} className="space-y-4 pb-16" />
                      </div>
                  </div>
                );
              })}
            </div>
            <div>
              {/* Put your right column content here */}
            </div>
          </div>
        </section>
    );
}
