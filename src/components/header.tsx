"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false); // State for menu toggle

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed z-10 w-full p-4 md:px-12 shadow-lg bg-gray-400">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="relative w-[32px] h-[32px]">
          <Link href="/">
            <Image
              src="/weldcraft-blue.svg"
              alt="WeldCraft Company Logo"
              layout="fill"
              className="object-cover"
              priority
            />
          </Link>
        </div>

        {/* Burger Button */}
        <button
          className="md:hidden text-blue-800"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Menu */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-12 left-0 w-full bg-gray-400 md:static md:w-auto md:bg-transparent md:flex justify-end`}
        >
          <ul className="flex flex-col md:flex-row gap-4 p-4 md:p-0">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/product", label: "Product" },
              { href: "/teams", label: "Teams" },
              { href: "#contact", label: "Contact Us" },
            ].map((item) => (
              <li key={item.href} className="group">
                <Link
                  href={item.href}
                  className="relative block py-2 px-4 text-blue-800 transition-all group-hover:text-lg"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-500 transition-all group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Button for larger screens */}
        <div className="hidden md:block transition-all ml-auto">
          <Link href="#contact" className="bg-blue-800 p-2 rounded-md text-white">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
