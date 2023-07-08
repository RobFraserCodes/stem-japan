'use client';

import { useParams } from "next/navigation";
import PageTitle from "@/components/page-title";

export default function BlogPage() {
    const { slug } = useParams();
    

    return (
        <section className="mt-12 mx-auto px-4 max-w-screen-xl md:px-8">
        <PageTitle />
        </section>
    );
    }