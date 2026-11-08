
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HandHeart, Search, Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "Our Work", href: "/our-work" },
  { label: "Impact", href: "/#impact" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e8e1d3] bg-[#f5f2e9]">
      <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">

        {/* Logo */}
        <Link
          href="/"
          className="relative h-[58px] w-[145px] shrink-0 sm:w-[175px]"
        >
          <Image
            src="/images/logo-transparent.png"
            alt="Sufi Humanity Aid International"
            fill
            priority
            className="object-contain object-left"
            sizes="175px"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex xl:gap-9">
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : link.href.startsWith("/#")
                  ? false
                  : pathname === link.href;

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`relative py-2 text-[13px] font-medium transition-colors duration-200
                  ${
                    isActive
                      ? "text-[#b89a55]"
                      : "text-[#073d29] hover:text-[#b89a55]"
                  }
                  after:absolute after:bottom-0 after:left-0 after:h-[1.5px]
                  after:bg-[#b89a55] after:transition-all after:duration-300
                  ${
                    isActive
                      ? "after:w-full"
                      : "after:w-0 hover:after:w-full"
                  }
                `}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Search + Donate */}
        <div className="hidden items-center gap-5 lg:flex">

          {/* Search */}
          <button
            type="button"
            aria-label="Search"
            className="text-[#b89a55] transition hover:text-[#073d29]"
          >
            <Search size={21} strokeWidth={1.5} />
          </button>

          {/* Donate Button */}
          <Link
            href="/#donate"
            className="inline-flex items-center gap-2 rounded-full bg-[#d2b166] px-5 py-3 text-[12px] font-semibold text-[#073d29] transition hover:bg-[#c4a052]"
          >
            <HandHeart
              size={17}
              strokeWidth={2}
              className="text-[#073d29]"
            />
            Donate Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center text-[#073d29] lg:hidden"
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-[#e8e1d3] bg-[#f5f2e9] px-6 py-5 lg:hidden">
          <div className="flex flex-col gap-5">
            {links.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : !link.href.startsWith("/#") &&
                    pathname === link.href;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`w-fit border-b pb-1 text-sm font-medium transition ${
                    isActive
                      ? "border-[#b89a55] text-[#b89a55]"
                      : "border-transparent text-[#073d29]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <Link
              href="/#donate"
              onClick={() => setMenuOpen(false)}
              className="mt-1 inline-flex w-fit items-center gap-2 rounded-full bg-[#d2b166] px-6 py-3 text-sm font-semibold text-[#073d29] transition hover:bg-[#c4a052]"
            >
              <HandHeart size={18} strokeWidth={2} />
              Donate Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
