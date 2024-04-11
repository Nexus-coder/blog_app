import React from "react";
import Link from "next/link";
//The image tag imported here is much netter for optimization than the ing tag because it does not load the full image size
import Image from "next/image";
export default function Blog({ style }) {
  console.log(style);
  return (
    <article className={`blog-card__section`}>
    {/* In the image sectio we oly set the imagesize and height that we need only */}
    {/* The images are generated when needed and not during build time but they are stored for future requests*/}
    {/* Images are lazy loaded they are loaded while needed */}
    {/* Enable us to ship production ready images */}
      <Image src="/chair.jpeg" className="blog-card__image" width={340}/>
      <img src="/chair.jpeg" className="blog-card__image"></img>
      <section className="blog-card__main-main_section">
        <section className="blog-card__main_section">
          <time className="blog-card__time">Sunday , 1 Jan 2023</time>
          <header className="blog-card__link_header">
            <Link href={"posts/id"} className="blog-card__link">
              UX review presentations
            </Link>
            <img src="/link.svg" />
          </header>
          <p className="blog-card__content">
            How do you create compelling presentations that wow your colleagues
            and impress your managers?
          </p>
        </section>
        <section className="blog-card__category">
          <span className="blog-card__badge">Design</span>
          <span className="blog-card__badge">Research</span>
          <span className="blog-card__badge">Research</span>
        </section>
      </section>
    </article>
  );
}
