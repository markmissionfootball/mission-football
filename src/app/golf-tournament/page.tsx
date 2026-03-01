import Image from "next/image";

const eventDetails = [
  { label: "Event", value: "Alumni Hall of Fame Golf Tournament & Silent Auction" },
  { label: "Date", value: "Monday, August 3, 2026" },
  { label: "Location", value: "Coto de Caza Golf & Racquet Club" },
  { label: "Format", value: "Scramble / Best Ball" },
  { label: "Includes", value: "Golf, Lunch, Silent Auction, Golf Ball Drop, Hall of Fame Induction" },
];

const sponsorLevels = [
  {
    title: "Title Sponsor",
    description: "Premier branding across all event materials, signage, and recognition at the Hall of Fame ceremony.",
  },
  {
    title: "Hole Sponsor",
    description: "Custom signage at a designated hole with your company name and logo displayed for all participants.",
  },
  {
    title: "Cart Sponsor",
    description: "Your logo on golf cart signage seen by every player throughout the tournament.",
  },
  {
    title: "Individual Golfer",
    description: "Register as an individual golfer or put together a foursome to enjoy a great day on the course.",
  },
];

export default function GolfTournament() {
  return (
    <main className="min-h-screen bg-[#e8e4de]">
      {/* Hero banner */}
      <section className="relative h-[340px] md:h-[420px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://missionfootball.com/wp-content/uploads/2025/08/24_MVHS_Football_Team_Varsity-scaled.jpg"
          alt="Mission Viejo Diablos Golf Tournament"
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
            Golf Tournament
          </h1>
          <p className="text-gray-300 text-sm md:text-base mt-4 uppercase tracking-wider">
            Hall of Fame Induction & Silent Auction
          </p>
        </div>
      </section>

      {/* About */}
      <section className="bg-diablo-dark">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <p className="text-diablo-gold text-sm font-bold uppercase tracking-[0.2em] mb-4">
            Annual Fundraiser
          </p>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Join us on Monday, August 3, 2026 for the annual MVHS Football
            Alumni Hall of Fame Golf Tournament and Silent Auction at Coto de
            Caza Golf &amp; Racquet Club. This premier fundraising event brings
            together alumni, supporters, and the community for a great day on
            the course while inducting legendary players and coaches into the
            Diablos Football Hall of Fame.
          </p>
        </div>
      </section>

      {/* Event Details */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-diablo-red text-2xl md:text-3xl font-light uppercase tracking-wider mb-2 border-l-4 border-diablo-red pl-4">
          Event Details
        </h2>
        <div className="flex items-center gap-0 text-gray-400 mt-4 mb-8">
          <span className="w-[40px] h-[1px] bg-current" />
          <span className="w-3 h-3 border border-current rotate-45" />
          <span className="w-[40px] h-[1px] bg-current" />
        </div>
        <div className="space-y-4">
          {eventDetails.map((detail) => (
            <div
              key={detail.label}
              className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 bg-white/60 rounded-sm p-4"
            >
              <span className="text-diablo-red font-bold text-sm uppercase tracking-wider min-w-[120px]">
                {detail.label}
              </span>
              <span className="text-gray-700 text-sm">{detail.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Sponsorship */}
      <section className="bg-diablo-dark">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-diablo-red text-2xl md:text-3xl font-light uppercase tracking-wider mb-2 text-center">
            Sponsorship Opportunities
          </h2>
          <div className="flex items-center justify-center gap-0 text-white/40 mb-10">
            <span className="w-[40px] h-[1px] bg-current" />
            <span className="w-3 h-3 border border-current rotate-45" />
            <span className="w-[40px] h-[1px] bg-current" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {sponsorLevels.map((level) => (
              <div
                key={level.title}
                className="bg-[#2a2a2a] rounded-sm p-6 border-t-2 border-diablo-gold"
              >
                <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-2">
                  {level.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {level.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-diablo-red text-xl md:text-2xl font-light uppercase tracking-wider mb-4">
          Register or Sponsor
        </h2>
        <p className="text-gray-600 text-sm mb-6 max-w-md mx-auto">
          Contact us to register your foursome, become a sponsor, or donate
          items for the silent auction.
        </p>
        <a
          href="mailto:mark@missionfootball.com"
          className="inline-block bg-diablo-red text-white font-bold uppercase tracking-wider text-sm px-8 py-4 rounded-sm hover:bg-red-700 transition-colors"
        >
          Get Involved
        </a>
      </section>
    </main>
  );
}
