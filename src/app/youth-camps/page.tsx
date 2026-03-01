import Image from "next/image";

const campFeatures = [
  {
    title: "Position-Specific Training",
    description:
      "Specialized instruction for every position — quarterbacks, receivers, linemen, linebackers, and defensive backs — taught by MVHS coaches and varsity players.",
  },
  {
    title: "Fundamentals & Technique",
    description:
      "Focus on core football fundamentals including proper tackling form, blocking technique, route running, footwork, and ball handling skills.",
  },
  {
    title: "Team Building & Competition",
    description:
      "Competitive drills and team activities that teach young athletes about teamwork, sportsmanship, and the joy of competing alongside their peers.",
  },
  {
    title: "Character Development",
    description:
      "The same values that drive the Diablos program — discipline, respect, responsibility, and leadership — are woven into every camp session.",
  },
];

const campInfo = [
  { label: "Who", value: "Youth athletes (ages and grades vary by camp)" },
  { label: "Where", value: "Mission Viejo High School" },
  { label: "Coached By", value: "MVHS coaching staff and varsity players" },
  { label: "Equipment", value: "Campers should bring cleats, water, and athletic wear" },
];

export default function YouthCamps() {
  return (
    <main className="min-h-screen bg-[#e8e4de]">
      {/* Hero banner */}
      <section className="relative h-[340px] md:h-[420px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://missionfootball.com/wp-content/uploads/2025/08/24_MVHS_Football_Team_Varsity-scaled.jpg"
          alt="Mission Viejo Diablos Youth Camps"
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
            Youth Camps
          </h1>
          <p className="text-gray-300 text-sm md:text-base mt-4 uppercase tracking-wider">
            Building the Next Generation of Diablos
          </p>
        </div>
      </section>

      {/* About */}
      <section className="bg-diablo-dark">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <p className="text-diablo-gold text-sm font-bold uppercase tracking-[0.2em] mb-4">
            Train Like a Diablo
          </p>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Mission Viejo Football youth camps give young athletes the
            opportunity to learn from the same coaching staff and varsity
            players who have built one of the most successful high school
            football programs in California. Camps focus on skill development,
            football fundamentals, and character building.
          </p>
        </div>
      </section>

      {/* Camp Features */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-diablo-red text-2xl md:text-3xl font-light uppercase tracking-wider mb-2 border-l-4 border-diablo-red pl-4">
          What Campers Learn
        </h2>
        <div className="flex items-center gap-0 text-gray-400 mt-4 mb-8">
          <span className="w-[40px] h-[1px] bg-current" />
          <span className="w-3 h-3 border border-current rotate-45" />
          <span className="w-[40px] h-[1px] bg-current" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {campFeatures.map((feature) => (
            <div
              key={feature.title}
              className="bg-white/60 rounded-sm p-8 border-t-2 border-diablo-red"
            >
              <h3 className="text-diablo-dark font-bold uppercase tracking-wider text-sm mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Camp Info */}
      <section className="bg-diablo-dark">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-diablo-red text-2xl md:text-3xl font-light uppercase tracking-wider mb-2 text-center">
            Camp Information
          </h2>
          <div className="flex items-center justify-center gap-0 text-white/40 mb-10">
            <span className="w-[40px] h-[1px] bg-current" />
            <span className="w-3 h-3 border border-current rotate-45" />
            <span className="w-[40px] h-[1px] bg-current" />
          </div>
          <div className="space-y-4">
            {campInfo.map((info) => (
              <div
                key={info.label}
                className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 bg-[#2a2a2a] rounded-sm p-4"
              >
                <span className="text-diablo-gold font-bold text-sm uppercase tracking-wider min-w-[120px]">
                  {info.label}
                </span>
                <span className="text-gray-300 text-sm">{info.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-diablo-red text-xl md:text-2xl font-light uppercase tracking-wider mb-4">
          Register for an Upcoming Camp
        </h2>
        <p className="text-gray-600 text-sm mb-6 max-w-md mx-auto">
          Contact the coaching staff for dates, registration, and details
          about upcoming youth camps.
        </p>
        <a
          href="mailto:mark@missionfootball.com"
          className="inline-block bg-diablo-red text-white font-bold uppercase tracking-wider text-sm px-8 py-4 rounded-sm hover:bg-red-700 transition-colors"
        >
          Contact Us
        </a>
      </section>
    </main>
  );
}
