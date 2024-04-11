import React from "react";
export default function FeaturedBlogs({ children }) {
  return (
    <section className='featured-blog__section'>
      {children}
    </section>
  );
}
