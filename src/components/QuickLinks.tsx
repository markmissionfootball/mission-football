import Link from "next/link";

const quickLinks = [
  {
    label: "Roster",
    href: "/roster",
    icon: (
      <svg viewBox="0 0 64 64" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="12" y="8" width="28" height="38" rx="2" />
        <line x1="18" y1="16" x2="34" y2="16" />
        <line x1="18" y1="22" x2="34" y2="22" />
        <line x1="18" y1="28" x2="28" y2="28" />
        <circle cx="44" cy="18" r="8" />
        <path d="M18 34l4 4 8-8" />
        <line x1="18" y1="38" x2="34" y2="38" />
      </svg>
    ),
  },
  {
    label: "Schedule",
    href: "/varsity-schedule",
    icon: (
      <svg viewBox="0 0 64 64" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="8" y="12" width="48" height="42" rx="3" />
        <line x1="8" y1="24" x2="56" y2="24" />
        <line x1="20" y1="8" x2="20" y2="16" />
        <line x1="44" y1="8" x2="44" y2="16" />
        {/* Grid lines */}
        <line x1="24" y1="24" x2="24" y2="54" />
        <line x1="40" y1="24" x2="40" y2="54" />
        <line x1="8" y1="34" x2="56" y2="34" />
        <line x1="8" y1="44" x2="56" y2="44" />
      </svg>
    ),
  },
  {
    label: "Coaching Staff",
    href: "/coaches",
    icon: (
      <svg viewBox="0 0 64 64" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="32" cy="20" r="10" />
        <circle cx="14" cy="26" r="7" />
        <circle cx="50" cy="26" r="7" />
        <path d="M20 38c0-6 5-10 12-10s12 4 12 10v8H20v-8z" />
        <path d="M4 42c0-4 4-8 10-8h2" />
        <path d="M60 42c0-4-4-8-10-8h-2" />
      </svg>
    ),
  },
  {
    label: "Youth Camps",
    href: "/youth-camps",
    icon: (
      <svg viewBox="0 0 64 64" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="2">
        {/* Play diagram / X's and O's */}
        <circle cx="16" cy="44" r="5" />
        <circle cx="48" cy="44" r="5" />
        <line x1="12" y1="20" x2="22" y2="30" />
        <line x1="22" y1="20" x2="12" y2="30" />
        <line x1="42" y1="20" x2="52" y2="30" />
        <line x1="52" y1="20" x2="42" y2="30" />
        <path d="M32 14v20" strokeDasharray="4 3" />
        <path d="M32 34l-6-6M32 34l6-6" />
        <line x1="17" y1="25" x2="47" y2="25" strokeDasharray="4 3" />
      </svg>
    ),
  },
];

export default function QuickLinks() {
  return (
    <section className="py-12 px-4 max-w-4xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {quickLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="flex flex-col items-center gap-3 text-diablo-red hover:text-diablo-gold transition-colors group"
          >
            <div className="text-diablo-red group-hover:text-diablo-gold transition-colors">
              {link.icon}
            </div>
            <span className="text-sm font-bold uppercase tracking-wider text-gray-800 dark:text-gray-200 group-hover:text-diablo-gold transition-colors">
              {link.label}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
