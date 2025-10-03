'use client';

import { useState } from 'react';
import "./globals.css";
import Logo from "@/components/kmni-logo";
import { Facebook, Instagram, Youtube, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/worship", label: "Worship With Us" },
    { href: "/messages", label: "Messages" },
    { href: "/departments", label: "Departments" },
    { href: "/contact", label: "Contact" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <html lang="en">
      <body className="pt-22">
        <div className="navbar fixed top-0 left-0 right-0 z-50 p-6 shadow-md bg-white">
          <div className="navbar-start">
            <Logo />
          </div>

          <div className="navbar-center gap-5 hidden lg:flex text-green-600 font-semibold">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`pb-1 transition ${pathname === link.href
                  ? "border-b-2 border-green-600"
                  : "hover:border-b-2 hover:border-green-400"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="navbar-end">
            <Link href="/giving" className="hidden lg:flex">
              <button className="rounded bg-green-700 px-6 py-2 text-white cursor-pointer hover:bg-green-400 active:bg-green-600 transition-all duration-200 ease-in-out active:scale-95">
                Give
              </button>
            </Link>
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden h-8 w-8 text-green-600 cursor-pointer mr-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>

          </div>
        </div>

        {/* Mobile Menu Full Screen */}
        <div
          className={`fixed inset-0 bg-white transform transition-transform duration-300 ease-in-out z-50 lg:hidden ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
          <div className="flex flex-col h-full">
            {/* Menu Header */}
            <div className="flex justify-between items-center p-6 border-0 shadow-lg">
              <Logo />
              <button
                onClick={closeMobileMenu}
                className="text-green-600 hover:text-green-400 focus:outline-none"
                aria-label="Close menu"
              >
                <X className="h-8 w-8" />
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex-1 overflow-y-auto">
              <div className="flex flex-col p-4 space-y-2">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className={`text-lg font-semibold px-4 py-3 rounded-lg transition-all duration-200 ${pathname === link.href
                        ? 'text-green-600 bg-green-50 '
                        : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                      }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Menu Footer with Give Button */}
            <div className="p-4">
              <Link href="/giving" onClick={closeMobileMenu}>
                <button className="w-full rounded bg-green-700 px-6 py-3 text-white cursor-pointer hover:bg-green-400 active:bg-green-600 transition-all duration-200 ease-in-out active:scale-95">
                  Give
                </button>
              </Link>
            </div>
          </div>
        </div>

        {children}

        {/* Footer Section */}
        <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-15 mt-15">
          <aside>
            <Logo />
            <p>
              Copyright © {new Date().getFullYear()} - All right reserved
            </p>
          </aside>
          <nav>
            <h6 className="footer-title">Follow Us</h6>
            <div className="grid grid-flow-col gap-4">
              <Link href="https://web.facebook.com/kingdommissionnetworkint">
                <Facebook />
              </Link>
              <Link href="https://www.instagram.com/gideonosei_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                <Instagram />
              </Link>
              <Link href="https://youtube.com/@psgideon?si=zDaj2sHAZhgxroNi">
                <Youtube />
              </Link>
            </div>
          </nav>
        </footer>
      </body>
    </html>
  );
}