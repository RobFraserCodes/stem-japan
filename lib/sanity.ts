import { createClient } from "next-sanity";

export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    useCdn: process.env.NODE_ENV === "production",
    apiVersion: "2021-03-25",
    token: process.env.SANITY_API_WRITE_TOKEN,
});