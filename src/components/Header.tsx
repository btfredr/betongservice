"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from 'next/image';

const navItems = [
  { label: "Hjem", path: "/" },
  { label: "Tjenester", path: "/tjenester" },
  { label: "Referanser", path: "/referanser" },
  { label: "Om oss", path: "/om-oss" },
  { label: "Kontakt", path: "/kontakt" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="header">
      <div className="header-inner container">
    <Link href="/" className="logo">
        Haugen Betongservice
    </Link>

        {/* Desktop */}
        <nav className="nav-desktop">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`nav-link ${pathname === item.path ? "active" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a href="tel:+4740306758" className="phone-button">
          Ring nå
        </a>

        {/* Mobil toggle */}
        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobilmeny */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <nav className="mobile-nav-list">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`mobile-nav-link ${pathname === item.path ? "active" : ""}`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <a
            href="tel:+4740306758"
            className="mobile-phone"
            onClick={() => setIsOpen(false)}
          >
            Ring nå
          </a>
        </nav>
      </div>
    </header>
  );
}