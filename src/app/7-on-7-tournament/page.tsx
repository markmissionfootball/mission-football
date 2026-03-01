import Image from "next/image";

const tournamentDetails = [
  { label: "Format", value: "7-on-7 Passing Tournament" },
  { label: "Location", value: "Mission Viejo High School" },
  { label: "Teams", value: "Top programs from across Southern California" },
  { label: "Divisions", value: "Varsity" },
];

export default function SevenOnSevenTournament() {
  return (
    <main className="min-h-screen bg-[#e8e4de]">
      {/* Hero banner */}
      <section className="relative h-[340px] md:h-[420px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://missionfootball.com/wp-content/uploads/2025/08/24_MVHS_Football_Team_Varsity-scaled.jpg"
          alt="Mission Viejo 7-on-7 Tournament"
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
            7 on 7 Tournament
          </h1>
        </div>
      </section>

      {/* About */}
      <section className="bg-diablo-dark">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <p className="text-diablo-gold text-sm font-bold uppercase tracking-[0.2em] mb-4">
            Summer Competition
          </p>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            The Mission Viejo 7-on-7 Tournament brings together some of the
            best high school football programs in Southern California for a
            high-energy passing tournament. This offseason event showcases the
            skills of quarterbacks, receivers, and defensive backs in a
            fast-paced, competitive format.
          </p>
        </div>
      </section>

      {/* Tournament Details */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-diablo-red text-2xl md:text-3xl font-light uppercase tracking-wider mb-2 border-l-4 border-diablo-red pl-4">
          Tournament Details
        </h2>
        <div className="flex items-center gap-0 text-gray-400 mt-4 mb-8">
          <span className="w-[40px] h-[1px] bg-current" />
          <span className="w-3 h-3 border border-current rotate-45" />
          <span className="w-[40px] h-[1px] bg-current" />
        </div>
        <div className="space-y-4">
          {tournamentDetails.map((detail) => (
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

      {/* What to Expect */}
      <section className="bg-diablo-dark">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-diablo-red text-2xl md:text-3xl font-light uppercase tracking-wider mb-2 text-center">
            What to Expect
          </h2>
          <div className="flex items-center justify-center gap-0 text-white/40 mb-10">
            <span className="w-[40px] h-[1px] bg-current" />
            <span className="w-3 h-3 border border-current rotate-45" />
            <span className="w-[40px] h-[1px] bg-current" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-[#2a2a2a] rounded-sm p-6 text-center">
              <p className="text-diablo-gold text-3xl font-bold mb-2">
                Fast-Paced
              </p>
              <p className="text-gray-400 text-sm">
                Non-stop action with quick games and bracket-style play
              </p>
            </div>
            <div className="bg-[#2a2a2a] rounded-sm p-6 text-center">
              <p className="text-diablo-gold text-3xl font-bold mb-2">
                Elite Talent
              </p>
              <p className="text-gray-400 text-sm">
                Top programs and recruitable athletes from across SoCal
              </p>
            </div>
            <div className="bg-[#2a2a2a] rounded-sm p-6 text-center">
              <p className="text-diablo-gold text-3xl font-bold mb-2">
                Community
              </p>
              <p className="text-gray-400 text-sm">
                A great day of football for players, coaches, and fans
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-diablo-red text-xl md:text-2xl font-light uppercase tracking-wider mb-4">
          Interested in Participating?
        </h2>
        <p className="text-gray-600 text-sm mb-6 max-w-md mx-auto">
          Contact the coaching staff to register your team or learn more about
          the tournament.
        </p>
        <a
          href="mailto:mark@missionfootball.com"
          className="inline-block bg-diablo-red text-white font-bold uppercase tracking-wider text-sm px-8 py-4 rounded-sm hover:bg-red-700 transition-colors"
        >
          Register Your Team
        </a>
      </section>
    </main>
  );
}
