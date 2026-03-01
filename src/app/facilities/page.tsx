import Image from "next/image";

const facilities = [
  {
    name: "Diablo Stadium",
    description:
      "The home of Diablos football, Diablo Stadium features a state-of-the-art synthetic turf field with stadium lighting, a full scoreboard, and home and visitor grandstands. The stadium is surrounded by an eight-lane all-weather track and serves as the venue for football, soccer, lacrosse, track and field, and other school events.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" />
      </svg>
    ),
  },
  {
    name: "Weight Room",
    description:
      "Our dedicated weight training facility is equipped with modern strength and conditioning equipment designed to develop athletes at every level. The weight room supports year-round training programs that build the physical foundation for championship-caliber performance.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12h1m16 0h1M5.5 8v8M18.5 8v8M7 10v4h10v-4H7z" />
      </svg>
    ),
  },
  {
    name: "Practice Fields",
    description:
      "Multiple practice fields provide ample space for all levels of the program — Varsity, JV, and Freshman — to train simultaneously. The practice facilities allow coaching staff to conduct focused position work and full-team preparations.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4h16v16H4V4zM4 12h16M12 4v16M8 8l0 0M16 16l0 0" />
      </svg>
    ),
  },
  {
    name: "Film Room",
    description:
      "A dedicated film and meeting room allows coaches and players to review game film, study opponents, and prepare detailed game plans. Video analysis is a key component of the program's preparation process.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: "Locker Rooms",
    description:
      "Team locker room facilities with direct access to the stadium field provide a professional game-day environment for all Diablos athletes.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: "Training Room",
    description:
      "An on-site athletic training room staffed by certified athletic trainers provides injury prevention, treatment, and rehabilitation services to keep athletes healthy and performing at their best throughout the season.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

export default function Facilities() {
  return (
    <main className="min-h-screen bg-[#e8e4de]">
      {/* Hero banner */}
      <section className="relative h-[340px] md:h-[420px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://missionfootball.com/wp-content/uploads/2025/08/24_MVHS_Football_Team_Varsity-scaled.jpg"
          alt="Mission Viejo Diablos Football Facilities"
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
            Facilities
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-diablo-dark">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <p className="text-diablo-gold text-sm font-bold uppercase tracking-[0.2em] mb-4">
            State-of-the-Art
          </p>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            With state-of-the-art facilities, a dedicated fan base, and an
            established winning culture, the Diablos continue to set the standard
            for high school football in Orange County. Our facilities provide
            everything student-athletes need to train, compete, and excel.
          </p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {facilities.map((facility) => (
            <div
              key={facility.name}
              className="bg-white/60 rounded-sm p-8 border-t-2 border-diablo-red"
            >
              <div className="text-diablo-red mb-4">{facility.icon}</div>
              <h3 className="text-diablo-dark font-bold uppercase tracking-wider text-sm mb-3">
                {facility.name}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {facility.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Game Day Experience */}
      <section className="bg-diablo-dark">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-diablo-red text-2xl md:text-3xl font-light uppercase tracking-wider mb-2 text-center">
            Game Day Experience
          </h2>
          <div className="flex items-center justify-center gap-0 text-white/40 mb-10">
            <span className="w-[40px] h-[1px] bg-current" />
            <span className="w-3 h-3 border border-current rotate-45" />
            <span className="w-[40px] h-[1px] bg-current" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="bg-[#2a2a2a] rounded-sm p-6">
              <p className="text-diablo-gold text-3xl font-bold mb-2">
                Friday Nights
              </p>
              <p className="text-gray-400 text-sm uppercase tracking-wider">
                Under the Lights
              </p>
            </div>
            <div className="bg-[#2a2a2a] rounded-sm p-6">
              <p className="text-diablo-gold text-3xl font-bold mb-2">
                Diablo Inferno
              </p>
              <p className="text-gray-400 text-sm uppercase tracking-wider">
                Top 10 Student Section in OC
              </p>
            </div>
            <div className="bg-[#2a2a2a] rounded-sm p-6">
              <p className="text-diablo-gold text-3xl font-bold mb-2">
                Since 1966
              </p>
              <p className="text-gray-400 text-sm uppercase tracking-wider">
                Years of Excellence
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-diablo-red text-xl md:text-2xl font-light uppercase tracking-wider mb-4">
          Location
        </h2>
        <p className="text-gray-700 text-sm mb-1">
          Mission Viejo High School
        </p>
        <p className="text-gray-700 text-sm mb-1">25025 Chrisanta Dr.</p>
        <p className="text-gray-700 text-sm mb-4">
          Mission Viejo, CA 92691
        </p>
        <p className="text-gray-500 text-sm">(949) 837-7722</p>
      </section>
    </main>
  );
}
