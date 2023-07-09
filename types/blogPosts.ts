import { PortableTextBlock } from "sanity";

export type BlogPost = {
    title: string;
    slug: string;
    publishedAt: string;
    excerpt: string;
    mainImage: string;
    body: PortableTextBlock[];
    author: {
        name: string;
        picture: string;
    };
};