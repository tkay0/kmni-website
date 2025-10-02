'use client';

import "./globals.css";
import Logo from "@/components/kmni-logo";
import { Facebook, Instagram, Youtube, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/worship", label: "Worship With Us" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <html lang="en">
      <body className="pt-22">
        <div className="navbar fixed top-0 left-0 right-0 z-50 p-6 shadow-md bg-white">
          <Menu className="md:hidden h-8 w-8 text-green-600 cursor-pointer mr-2" />
          <div className="navbar-start">
            <Logo />
          </div>

          <div className="navbar-center gap-5 hidden md:flex text-green-600 font-semibold">
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
            <Link href="/giving">
              <button className="rounded bg-green-700 px-6 py-2 text-white cursor-pointer hover:bg-green-400 active:bg-green-600 transition-all duration-200 ease-in-out active:scale-95">Give</button>
            </Link>
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
              <Link href="https://web.facebook.com/kingdommissionnetworkint">
              </Link>
            </div>
          </nav>
        </footer>
      </body>
    </html>
  );
}
