import Image from "next/image";

const gearCategories = [
  {
    title: "Game Day Apparel",
    description: "Jerseys, hoodies, and t-shirts in official Diablo Red and Gold.",
  },
  {
    title: "Hats & Accessories",
    description: "Caps, beanies, lanyards, and bags featuring the Diablos logo.",
  },
  {
    title: "Spirit Wear",
    description: "Show your pride with spirit wear for the whole family.",
  },
  {
    title: "Outerwear",
    description: "Jackets, windbreakers, and warm-up gear for cooler game nights.",
  },
];

export default function DiabloGear() {
  return (
    <main className="min-h-screen bg-[#e8e4de]">
      {/* Hero banner */}
      <section className="relative h-[340px] md:h-[420px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://missionfootball.com/wp-content/uploads/2025/08/24_MVHS_Football_Team_Varsity-scaled.jpg"
          alt="Mission Viejo Diablos Gear"
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
            Diablo Gear
          </h1>
        </div>
      </section>

      {/* Intro + CTA */}
      <section className="bg-diablo-dark">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <p className="text-diablo-gold text-sm font-bold uppercase tracking-[0.2em] mb-4">
            Rep the Diablos
          </p>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-8">
            Show your Diablo pride with official MVHS Football merchandise.
            Every purchase supports the football program and helps fund
            equipment, travel, and team activities.
          </p>
          <a
            href="https://missionfootball.com/team-store/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-diablo-gold text-diablo-dark font-bold uppercase tracking-wider text-sm px-10 py-4 rounded-sm hover:bg-yellow-400 transition-colors"
          >
            Shop the Team Store
          </a>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-diablo-red text-2xl md:text-3xl font-light uppercase tracking-wider mb-2 border-l-4 border-diablo-red pl-4">
          What&apos;s Available
        </h2>
        <div className="flex items-center gap-0 text-gray-400 mt-4 mb-8">
          <span className="w-[40px] h-[1px] bg-current" />
          <span className="w-3 h-3 border border-current rotate-45" />
          <span className="w-[40px] h-[1px] bg-current" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {gearCategories.map((cat) => (
            <div
              key={cat.title}
              className="bg-white/60 rounded-sm p-8 border-l-4 border-diablo-gold"
            >
              <h3 className="text-diablo-dark font-bold uppercase tracking-wider text-sm mb-2">
                {cat.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {cat.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-diablo-dark">
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <p className="text-gray-400 text-sm mb-6">
            All proceeds support the MVHS Football program
          </p>
          <a
            href="https://missionfootball.com/team-store/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-white text-white text-xs font-bold uppercase tracking-wider px-6 py-3 hover:bg-white hover:text-diablo-dark transition-colors"
          >
            Visit Team Store
          </a>
        </div>
      </section>
    </main>
  );
}
