// import { client } from '@/lib/sanity';
// import BlogPostPage from '@/components/blog/BlogPostPage';

// export async function getStaticProps({ params }) {
//   // Fetch the specific blog post based on the slug
//   const post = await client.fetch(
//     `*[_type == "post" && slug.current == $slug][0]`,
//     { slug: params.slug }
//   );

//   return {
//     props: {
//       post,
//     },
//     revalidate: 1, // Revalidate the page after 1 second for incremental static regeneration
//   };
// }

// export async function getStaticPaths() {
//   // Fetch the slugs of all blog posts from Sanity
//   const slugs = await client.fetch('*[_type == "post"].slug.current');

//   // Generate the paths for the blog post slugs
//   const paths = slugs.map((slug) => ({ params: { slug: slug.split('/') } }));

//   return {
//     paths,
//     fallback: true, // Set fallback to true to generate pages on-demand
//   };
// }

// export default BlogPostPage;
