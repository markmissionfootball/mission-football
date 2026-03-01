import Image from "next/image";

const titleSponsors = [
  { name: "Under Armour", logo: "/sponsors/under-armour.svg" },
  { name: "Gatorade", logo: "/sponsors/gatorade.png" },
  { name: "Toyota", logo: "/sponsors/toyota.png" },
  { name: "Saddleback Lanes", logo: "/sponsors/saddleback-lanes.png" },
  { name: "voco Hotel", logo: "/sponsors/voco-hotel.png" },
];

const sponsorshipTiers = [
  {
    title: "Title Sponsorships",
    description:
      "Become a cornerstone of Mission Viejo Football with premier visibility across the entire program.",
    features: [
      "Logo on all program materials and signage",
      "Prominent placement on the Mission Football website",
      "Recognition at all home games and events",
      "Hall of Fame Golf Tournament headline branding",
      "Social media features throughout the season",
      "VIP access to exclusive program events",
    ],
    cta: {
      label: "Become a Title Sponsor",
      href: "mailto:mark@missionfootball.com?subject=Title%20Sponsorship%20Inquiry",
    },
    accent: "border-diablo-gold",
    accentBg: "bg-diablo-gold",
  },
  {
    title: "Business Sponsorships",
    description:
      "Support Diablos football while gaining valuable exposure for your business within the Mission Viejo community.",
    features: [
      "Business logo on program game-day materials",
      "Hole or cart sponsorship at the Golf Tournament",
      "Listing on the Mission Football website",
      "Recognition on social media channels",
      "Signage at home games and events",
      "Community goodwill with Diablo Nation",
    ],
    cta: {
      label: "Become a Business Sponsor",
      href: "mailto:mark@missionfootball.com?subject=Business%20Sponsorship%20Inquiry",
    },
    accent: "border-diablo-red",
    accentBg: "bg-diablo-red",
  },
  {
    title: "Individual Sponsorships",
    description:
      "Make a personal impact by supporting a player, a position group, or the program as a whole through our individual sponsorship options.",
    features: [
      "Direct support for player equipment and gear",
      "Contribute to team travel and meals",
      "Fund youth camp scholarships",
      "Support the Diablos Football program",
      "Be part of the Mission Viejo football family",
      "Tax-deductible contributions available",
    ],
    cta: {
      label: "Sponsor Now",
      href: "https://missionfootball.com/partnerships/",
      external: true,
    },
    accent: "border-white/30",
    accentBg: "bg-white",
  },
];

export default function Sponsorships() {
  return (
    <main className="min-h-screen bg-[#e8e4de]">
      {/* Hero banner */}
      <section className="relative h-[340px] md:h-[420px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://missionfootball.com/wp-content/uploads/2025/08/24_MVHS_Football_Team_Varsity-scaled.jpg"
          alt="Mission Viejo Diablos Sponsorships"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(31,35,44,0.7)] to-[rgb(30,35,43)]" />
        <div className="relative z-10 text-center">
          <div className="flex items-center justify-center gap-0 text-gray-400 mb-4">
            <span className="w-[60px] h-[1px] bg-current" />
            <span className="w-4 h-4 border border-current rotate-45" />
            <span className="w-[60px] h-[1px] bg-current" />
          </div>
          <h1 className="text-4xl md:text-6xl font-light uppercase tracking-wider text-[#d12132]">
            Sponsorships
          </h1>
          <p className="text-gray-300 text-sm md:text-base mt-4 uppercase tracking-wider">
            Partner with Diablos Football
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-diablo-dark">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <p className="text-diablo-gold text-sm font-bold uppercase tracking-[0.2em] mb-4">
            Invest in Excellence
          </p>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Mission Viejo Diablos football is built on the support of our
            community. Your sponsorship directly fuels championship-caliber
            athletics, character development, and opportunities for
            student-athletes. Choose the level that fits your commitment.
          </p>
        </div>
      </section>

      {/* Three Column Sponsorship Tiers */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sponsorshipTiers.map((tier) => (
            <div
              key={tier.title}
              className={`bg-white/60 rounded-sm border-t-4 ${tier.accent} flex flex-col`}
            >
              <div className="p-8 flex-1">
                <h2 className="text-diablo-dark font-bold uppercase tracking-wider text-base mb-3">
                  {tier.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {tier.description}
                </p>

                {/* Title Sponsors logos */}
                {tier.title === "Title Sponsorships" && (
                  <div className="mb-6">
                    <p className="text-diablo-red text-xs font-bold uppercase tracking-[0.15em] mb-4">
                      Our Title Sponsors
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      {titleSponsors.map((sponsor) => (
                        <div
                          key={sponsor.name}
                          className="bg-white rounded-sm p-4 flex items-center justify-center aspect-[3/2]"
                        >
                          <Image
                            src={sponsor.logo}
                            alt={`${sponsor.name} logo`}
                            width={120}
                            height={80}
                            className="object-contain max-h-[60px] w-auto"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-gray-700"
                    >
                      <svg
                        className="w-4 h-4 text-diablo-red flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 pt-0">
                {tier.cta.external ? (
                  <a
                    href={tier.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center ${tier.accentBg} ${
                      tier.accentBg === "bg-white"
                        ? "text-diablo-dark border border-gray-300 hover:bg-gray-100"
                        : tier.accentBg === "bg-diablo-gold"
                        ? "text-diablo-dark hover:bg-yellow-400"
                        : "text-white hover:bg-red-700"
                    } font-bold uppercase tracking-wider text-sm px-6 py-4 rounded-sm transition-colors`}
                  >
                    {tier.cta.label}
                  </a>
                ) : (
                  <a
                    href={tier.cta.href}
                    className={`block w-full text-center ${tier.accentBg} ${
                      tier.accentBg === "bg-diablo-gold"
                        ? "text-diablo-dark hover:bg-yellow-400"
                        : "text-white hover:bg-red-700"
                    } font-bold uppercase tracking-wider text-sm px-6 py-4 rounded-sm transition-colors`}
                  >
                    {tier.cta.label}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-diablo-dark">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="text-diablo-red text-xl md:text-2xl font-light uppercase tracking-wider mb-4">
            Questions About Sponsorships?
          </h2>
          <p className="text-gray-400 text-sm mb-8 max-w-md mx-auto">
            Contact us to discuss custom sponsorship packages or learn more
            about how your support makes an impact.
          </p>
          <a
            href="mailto:mark@missionfootball.com"
            className="inline-block bg-diablo-red text-white font-bold uppercase tracking-wider text-sm px-8 py-4 rounded-sm hover:bg-red-700 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
