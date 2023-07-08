// import React from 'react';
// import Image from 'next/image';

// const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
// const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

// function BlogPostPage({ post }) {
//   const imageUrl = post.mainImage.asset._ref
//     .replace('image-', '')
//     .replace('-jpg', '.jpg');

//   return (
//     <section className="mt-12 mx-auto px-4 max-w-screen-xl md:px-8">
//       <div className="max-w-md mx-auto mt-4 shadow-lg border rounded-md">
//         <div className="relative w-full h-48 rounded-t-md overflow-hidden">
//           <Image
//             src={`https://cdn.sanity.io/images/${projectId}/${dataset}/${imageUrl}`}
//             alt={post.mainImage.alt}
//             layout="fill"
//             objectFit="cover"
//             loading="lazy"
//           />
//         </div>
//         <div className="pt-3 ml-4 mr-2 mb-3 space-y-4">
//           <h3 className="text-xl text-gray-900">{post.title}</h3>
//           <p className="text-gray-400 text-sm mt-1">{post.excerpt}</p>
//           <div>{/* Render the full content of the post here */}</div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default BlogPostPage;
