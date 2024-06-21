import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const links = [
    { name: "Blog", href: "/blogs" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Newsletter", href: "/newsletter" },
  ];
  return (
    <header className="blog-header">
      <h2>Andrew</h2>
      <nav className={`blog-header__navbar  ${isOpen ? "slide-in_menu open" : "close"}`}>
        {links.map((link,index) => (
          <Link className="blog-header__navbar-link" href={link.href} key={index}>
            {link.name}
          </Link>
        ))}
        <ThemeToggle/>
        {isOpen && <button onClick={toggleMenu}>Close</button>}
      </nav>
      <Image onClick={toggleMenu} alt="This is an image" className="img" src="/menu.svg" width={10} height={10} />
    </header>
  );
}
