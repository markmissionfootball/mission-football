import Image from "next/image";

export default function HeroAward() {
  return (
    <main className="min-h-screen bg-[#e8e4de]">
      {/* Hero banner */}
      <section className="relative h-[340px] md:h-[420px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/team-photo.webp"
          alt="Mission Viejo Diablos Hero Award"
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
            Hero Award
          </h1>
        </div>
      </section>

      {/* About */}
      <section className="bg-diablo-dark">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <p className="text-diablo-gold text-sm font-bold uppercase tracking-[0.2em] mb-4">
            Recognizing Excellence Beyond the Field
          </p>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            The Mission Viejo Football Hero Award recognizes individuals who
            embody the values of the Diablos program — leadership, service,
            integrity, and commitment to community. This award honors those who
            go above and beyond, both on and off the field.
          </p>
        </div>
      </section>

      {/* Award Details */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-diablo-red text-2xl md:text-3xl font-light uppercase tracking-wider mb-2 border-l-4 border-diablo-red pl-4">
          About the Award
        </h2>
        <div className="flex items-center gap-0 text-gray-400 mt-4 mb-8">
          <span className="w-[40px] h-[1px] bg-current" />
          <span className="w-3 h-3 border border-current rotate-45" />
          <span className="w-[40px] h-[1px] bg-current" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/60 rounded-sm p-8 border-l-4 border-diablo-gold">
            <h3 className="text-diablo-dark font-bold uppercase tracking-wider text-sm mb-3">
              Leadership
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Recognizing individuals who demonstrate exceptional leadership in
              the classroom, on the field, and in the community.
            </p>
          </div>
          <div className="bg-white/60 rounded-sm p-8 border-l-4 border-diablo-gold">
            <h3 className="text-diablo-dark font-bold uppercase tracking-wider text-sm mb-3">
              Service
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Honoring those who dedicate their time and energy to making the
              Mission Viejo community and the football program stronger.
            </p>
          </div>
          <div className="bg-white/60 rounded-sm p-8 border-l-4 border-diablo-gold">
            <h3 className="text-diablo-dark font-bold uppercase tracking-wider text-sm mb-3">
              Integrity
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Celebrating character and the commitment to doing the right thing,
              even when no one is watching.
            </p>
          </div>
          <div className="bg-white/60 rounded-sm p-8 border-l-4 border-diablo-gold">
            <h3 className="text-diablo-dark font-bold uppercase tracking-wider text-sm mb-3">
              Commitment
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Acknowledging the dedication to excellence that defines the
              Diablos tradition — on the field, in academics, and in life.
            </p>
          </div>
        </div>
      </section>

      {/* Nomination */}
      <section className="bg-diablo-dark">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="text-diablo-red text-2xl md:text-3xl font-light uppercase tracking-wider mb-4">
            Nominate a Hero
          </h2>
          <div className="flex items-center justify-center gap-0 text-white/40 mb-8">
            <span className="w-[40px] h-[1px] bg-current" />
            <span className="w-3 h-3 border border-current rotate-45" />
            <span className="w-[40px] h-[1px] bg-current" />
          </div>
          <p className="text-gray-400 text-sm mb-8 max-w-md mx-auto">
            Know someone who exemplifies the spirit of the Hero Award? Submit
            your nomination and help us recognize the heroes in our community.
          </p>
          <a
            href="mailto:mark@missionfootball.com"
            className="inline-block bg-diablo-gold text-diablo-dark font-bold uppercase tracking-wider text-sm px-8 py-4 rounded-sm hover:bg-yellow-400 transition-colors"
          >
            Submit a Nomination
          </a>
        </div>
      </section>
    </main>
  );
}
