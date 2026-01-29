"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  { label: "Home", href: "/", isHome: true },
  {
    label: "News",
    href: "/blog",
    children: [
      { label: "News", href: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland" },
      { label: "Archive", href: "https://www.bitcoinassociation.ch/archive" },
    ],
  },
  {
    label: "Events",
    href: "/events",
    children: [
      { label: "Roadshow 2025", href: "https://www.bitcoinassociation.ch/roadshow-2025" },
      { label: "Bitcoin Meetup (Zurich)", href: "https://www.meetup.com/Bitcoin-Meetup-Switzerland/", external: true },
      { label: "Bitcoin Meetup Geneva", href: "https://www.meetup.com/Bitcoin-Meetup-Geneva", external: true },
      { label: "Bitcoin Meetup Luzern", href: "https://www.meetup.com/Bitcoin-Meetup-Luzern/", external: true },
      { label: "Bitcoin Meetup Neuchatel", href: "https://www.meetup.com/Bitcoin-Meetup-Neuchatel/", external: true },
      { label: "Bitcoin Meetup Basel", href: "https://www.meetup.com/bitcoin-meetup-basel/", external: true },
    ],
  },
  {
    label: "Membership",
    href: "/membership",
    children: [
      { label: "Private", href: "https://www.bitcoinassociation.ch/private" },
      { label: "Corporate", href: "https://www.bitcoinassociation.ch/corporate" },
      { label: "Our Corporate Members", href: "https://www.bitcoinassociation.ch/our-corporate-members" },
    ],
  },
  {
    label: "Participate",
    href: "/participate",
    children: [
      { label: "Meetups & Events", href: "https://www.bitcoinassociation.ch/meetups-events" },
    ],
  },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About", href: "https://www.bitcoinassociation.ch/about-1" },
      { label: "Board", href: "https://www.bitcoinassociation.ch/board" },
      { label: "Finances", href: "https://www.bitcoinassociation.ch/finances" },
      { label: "Statutes", href: "https://www.bitcoinassociation.ch/statutes" },
      { label: "Media Kit", href: "https://www.bitcoinassociation.ch/media-kit" },
      { label: "Contact", href: "https://www.bitcoinassociation.ch/contact-1" },
    ],
  },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFolder, setOpenFolder] = useState<string | null>(null);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between px-6 lg:px-10 py-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="block">
            <img
              src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/fe5fab46-02c5-44d0-8de7-74185cd0904c/Bitcoin+Association+Switzerland.png?format=1500w"
              alt="Bitcoin Association Switzerland"
              className="h-10 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <div key={item.label} className="relative nav-folder group">
              {item.children ? (
                <>
                  <button className="flex items-center gap-1 text-nav uppercase text-white hover:text-white/80 transition-colors tracking-widest">
                    {item.label}
                    <ChevronDown className="w-3 h-3 opacity-70" />
                  </button>
                  <div className="subnav pt-2">
                    <div className="bg-white rounded-sm overflow-hidden">
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          target={child.external ? "_blank" : undefined}
                          rel={child.external ? "noopener noreferrer" : undefined}
                          className="block px-5 py-2.5 text-[13px] text-gray-800 hover:text-primary transition-colors whitespace-nowrap"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  className="text-nav uppercase text-white hover:text-white/80 transition-colors tracking-widest"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white absolute top-full left-0 right-0 shadow-lg">
          <nav className="py-4">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <>
                    <button
                      onClick={() => setOpenFolder(openFolder === item.label ? null : item.label)}
                      className="w-full flex items-center justify-between px-6 py-3 text-sm uppercase tracking-wider text-gray-800 hover:bg-gray-50"
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${openFolder === item.label ? "rotate-180" : ""}`}
                      />
                    </button>
                    {openFolder === item.label && (
                      <div className="bg-gray-50">
                        {item.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            target={child.external ? "_blank" : undefined}
                            rel={child.external ? "noopener noreferrer" : undefined}
                            className="block px-10 py-2.5 text-sm text-gray-600 hover:text-primary"
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-6 py-3 text-sm uppercase tracking-wider text-gray-800 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
