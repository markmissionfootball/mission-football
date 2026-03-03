"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface DropdownItem {
  label: string;
  href: string;
  external?: boolean;
}

interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  dropdown?: DropdownItem[];
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Program Calendar", href: "/varsity-schedule" },
  {
    label: "Program Information",
    href: "#",
    dropdown: [
      { label: "Coaches", href: "/coaches" },
      {
        label: "Varsity Roster",
        href: "https://www.maxpreps.com/ca/mission-viejo/mission-viejo-diablos/football/roster/",
        external: true,
      },
      { label: "JV/Freshmen Schedules", href: "/jv-freshmen-schedules" },
      { label: "JV/Freshman Roster", href: "/jv-freshman-roster" },
      { label: "Records", href: "/records" },
      { label: "Alumni", href: "/alumni" },
    ],
  },
  {
    label: "Sponsorships",
    href: "/sponsorships",
  },
  {
    label: "Boosters",
    href: "#",
    dropdown: [
      { label: "Volunteer", href: "/volunteer" },
      { label: "Parent Portal", href: "/parent-portal" },
      { label: "Diablo Gear", href: "/diablo-gear" },
    ],
  },
  {
    label: "More",
    href: "#",
    dropdown: [
      { label: "Social Media", href: "/social" },
      { label: "Golf Tournament", href: "/golf-tournament" },
      { label: "Mission Armed Forces", href: "/mission-armed-forces" },
      { label: "7 on 7 Tournament", href: "/7-on-7-tournament" },
      { label: "Facilities", href: "/facilities" },
      { label: "Hero Award", href: "/hero-award" },
    ],
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  return (
    <header className="bg-diablo-red w-full sticky top-0 z-50">
      {/* Desktop Nav */}
      <nav className="hidden lg:flex items-center justify-center max-w-7xl mx-auto px-4 relative">
        {/* Left nav items */}
        <div className="flex-1 flex items-center justify-end gap-1">
          {navItems.slice(0, 3).map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() =>
                item.dropdown && setOpenDropdown(item.label)
              }
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {item.external ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-4 py-5 text-sm font-semibold uppercase tracking-wider transition-colors ${
                    item.label === "Home"
                      ? "text-diablo-gold"
                      : "text-white hover:text-diablo-gold"
                  }`}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  href={item.href}
                  className={`px-4 py-5 text-sm font-semibold uppercase tracking-wider transition-colors inline-flex items-center gap-1 ${
                    item.label === "Home"
                      ? "text-diablo-gold"
                      : "text-white hover:text-diablo-gold"
                  }`}
                >
                  {item.label}
                  {item.dropdown && (
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Link>
              )}

              {/* Dropdown */}
              {item.dropdown && openDropdown === item.label && (
                <div className="absolute top-full left-0 bg-white dark:bg-neutral-800 shadow-lg min-w-[220px] py-2 z-50">
                  {item.dropdown.map((sub) =>
                    sub.external ? (
                      <a
                        key={sub.label}
                        href={sub.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-5 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-diablo-red hover:text-white transition-colors"
                      >
                        {sub.label}
                      </a>
                    ) : (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className="block px-5 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-diablo-red hover:text-white transition-colors"
                      >
                        {sub.label}
                      </Link>
                    )
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Center logo */}
        <Link href="/" className="mx-6 flex-shrink-0">
          <Image
            src="https://missionfootball.com/wp-content/uploads/2024/09/MV_FB_LOGO_WLACES.png"
            alt="Mission Viejo High School Football"
            width={80}
            height={80}
            className="py-2"
            priority
          />
        </Link>

        {/* Right nav items */}
        <div className="flex-1 flex items-center gap-1">
          {navItems.slice(3).map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() =>
                item.dropdown && setOpenDropdown(item.label)
              }
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {item.external ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-5 text-sm font-semibold uppercase tracking-wider text-white hover:text-diablo-gold transition-colors"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  href={item.href}
                  className="px-4 py-5 text-sm font-semibold uppercase tracking-wider text-white hover:text-diablo-gold transition-colors inline-flex items-center gap-1"
                >
                  {item.label}
                  {item.dropdown && (
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Link>
              )}

              {item.dropdown && openDropdown === item.label && (
                <div className="absolute top-full left-0 bg-white dark:bg-neutral-800 shadow-lg min-w-[220px] py-2 z-50">
                  {item.dropdown.map((sub) =>
                    sub.external ? (
                      <a
                        key={sub.label}
                        href={sub.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-5 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-diablo-red hover:text-white transition-colors"
                      >
                        {sub.label}
                      </a>
                    ) : (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className="block px-5 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-diablo-red hover:text-white transition-colors"
                      >
                        {sub.label}
                      </Link>
                    )
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>

      {/* Mobile Nav */}
      <div className="lg:hidden flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center">
          <Image
            src="https://missionfootball.com/wp-content/uploads/2024/09/MV_FB_LOGO_WLACES.png"
            alt="Mission Viejo High School Football"
            width={60}
            height={60}
            priority
          />
        </Link>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-white p-2"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-diablo-red border-t border-white/20">
          {navItems.map((item) => (
            <div key={item.label}>
              {item.dropdown ? (
                <>
                  <button
                    onClick={() =>
                      setMobileDropdown(
                        mobileDropdown === item.label ? null : item.label
                      )
                    }
                    className="w-full text-left px-6 py-3 text-white text-sm font-semibold uppercase tracking-wider flex items-center justify-between hover:bg-white/10"
                  >
                    {item.label}
                    <svg
                      className={`w-3 h-3 transition-transform ${
                        mobileDropdown === item.label ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {mobileDropdown === item.label && (
                    <div className="bg-black/20">
                      {item.dropdown.map((sub) =>
                        sub.external ? (
                          <a
                            key={sub.label}
                            href={sub.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-10 py-2 text-white/80 text-sm hover:text-diablo-gold"
                          >
                            {sub.label}
                          </a>
                        ) : (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            className="block px-10 py-2 text-white/80 text-sm hover:text-diablo-gold"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {sub.label}
                          </Link>
                        )
                      )}
                    </div>
                  )}
                </>
              ) : item.external ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-6 py-3 text-white text-sm font-semibold uppercase tracking-wider hover:bg-white/10"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  href={item.href}
                  className={`block px-6 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-white/10 ${
                    item.label === "Home" ? "text-diablo-gold" : "text-white"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
