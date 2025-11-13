// app/components/Header.jsx
"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-[#2c3b4c] to-[#1f2a38] text-white shadow-sm">
    {/*<header className="bg-[#0d1b2a] text-white shadow-sm">*/}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 md:py-5">
          {/* Clickable logo → home */}
          <Link href="/" className="block">
            <img
              src="/images/2025TransparentlogoWhiteText.png"
              alt="Logan Law Firm Logo"
              className="h-28 md:h-32 w-auto block"
            />
          </Link>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-6 text-xlg">
            <Link href="/capabilities" className="hover:underline">Capabilities</Link>
            <Link href="/resources" className="hover:underline">Resources</Link>
            <Link href="/people" className="hover:underline">People</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}