import Image from "next/image";

export default function MissionArmedForces() {
  return (
    <main className="min-h-screen bg-[#e8e4de]">
      {/* Hero banner */}
      <section className="relative h-[340px] md:h-[420px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/team-photo.webp"
          alt="Mission Armed Forces Night"
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
            Mission Armed Forces
          </h1>
        </div>
      </section>

      {/* About */}
      <section className="bg-diablo-dark">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <p className="text-diablo-gold text-sm font-bold uppercase tracking-[0.2em] mb-4">
            Honoring Those Who Serve
          </p>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Each year, the Mission Viejo Diablos football program proudly hosts
            the Mission Armed Forces Night — one of the most special traditions
            in the program. This annual event honors active military personnel,
            veterans, and first responders from the Mission Viejo community and
            beyond.
          </p>
        </div>
      </section>

      {/* Event Highlights */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-diablo-red text-2xl md:text-3xl font-light uppercase tracking-wider mb-2 border-l-4 border-diablo-red pl-4">
          Event Highlights
        </h2>
        <div className="flex items-center gap-0 text-gray-400 mt-4 mb-8">
          <span className="w-[40px] h-[1px] bg-current" />
          <span className="w-3 h-3 border border-current rotate-45" />
          <span className="w-[40px] h-[1px] bg-current" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/60 rounded-sm p-8 border-l-4 border-diablo-red">
            <h3 className="text-diablo-dark font-bold uppercase tracking-wider text-sm mb-3">
              Helicopter Flyover
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              The evening kicks off with a thrilling helicopter flyover above
              Diablo Stadium, setting the tone for an unforgettable night of
              football and patriotism.
            </p>
          </div>
          <div className="bg-white/60 rounded-sm p-8 border-l-4 border-diablo-red">
            <h3 className="text-diablo-dark font-bold uppercase tracking-wider text-sm mb-3">
              Fireworks Display
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              The game concludes with a spectacular fireworks show over the
              stadium, capping off one of the most anticipated home games of
              the season.
            </p>
          </div>
          <div className="bg-white/60 rounded-sm p-8 border-l-4 border-diablo-red">
            <h3 className="text-diablo-dark font-bold uppercase tracking-wider text-sm mb-3">
              On-Field Recognition
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Active service members and veterans are recognized on the field
              during a special pregame ceremony honoring their sacrifice and
              service to our country.
            </p>
          </div>
          <div className="bg-white/60 rounded-sm p-8 border-l-4 border-diablo-red">
            <h3 className="text-diablo-dark font-bold uppercase tracking-wider text-sm mb-3">
              Community Coming Together
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              More than just a football game, Armed Forces Night brings together
              the entire Mission Viejo community in a powerful display of
              gratitude and support.
            </p>
          </div>
        </div>
      </section>

      {/* Quote section */}
      <section className="bg-diablo-dark">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="flex items-center justify-center gap-0 text-white/40 mb-8">
            <span className="w-[40px] h-[1px] bg-current" />
            <span className="w-3 h-3 border border-current rotate-45" />
            <span className="w-[40px] h-[1px] bg-current" />
          </div>
          <p className="text-gray-300 text-lg md:text-xl italic leading-relaxed max-w-2xl mx-auto mb-8">
            A proud annual tradition that honors military heroes and first
            responders, featuring a helicopter flyover and fireworks.
          </p>
          <a
            href="mailto:mark@missionfootball.com"
            className="inline-block bg-diablo-gold text-diablo-dark font-bold uppercase tracking-wider text-sm px-8 py-4 rounded-sm hover:bg-yellow-400 transition-colors"
          >
            Nominate a Hero
          </a>
        </div>
      </section>
    </main>
  );
}
