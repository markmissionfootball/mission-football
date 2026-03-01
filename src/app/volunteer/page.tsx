import Image from "next/image";

const volunteerAreas = [
  {
    title: "Game Day Operations",
    description:
      "Help make Friday nights under the lights a success. Volunteers are needed for gate operations, concessions, program sales, and field setup/teardown.",
  },
  {
    title: "Concessions",
    description:
      "Run the snack bar during home games. Proceeds directly support the football program and help fund equipment, travel, and team activities.",
  },
  {
    title: "Fundraising Events",
    description:
      "Support annual fundraisers including the Hall of Fame Golf Tournament, silent auctions, and community events that keep the program thriving.",
  },
  {
    title: "Team Meals",
    description:
      "Coordinate and prepare pre-game and post-game meals for the team. A well-fed team is a winning team — help fuel the Diablos on game days.",
  },
  {
    title: "Spirit & Community",
    description:
      "Help organize community events, pep rallies, and spirit activities that bring together players, families, and the Mission Viejo community.",
  },
  {
    title: "Administrative Support",
    description:
      "Assist with program communications, social media, photography, videography, and other behind-the-scenes tasks that keep everything running smoothly.",
  },
];

export default function Volunteer() {
  return (
    <main className="min-h-screen bg-[#e8e4de]">
      {/* Hero banner */}
      <section className="relative h-[340px] md:h-[420px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://missionfootball.com/wp-content/uploads/2025/08/24_MVHS_Football_Team_Varsity-scaled.jpg"
          alt="Mission Viejo Diablos Volunteer"
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
            Volunteer
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-diablo-dark">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <p className="text-diablo-gold text-sm font-bold uppercase tracking-[0.2em] mb-4">
            Be Part of the Tradition
          </p>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            The success of Diablos football depends on the incredible support of
            our parent and community volunteers. Whether you can help at every
            home game or just one event per season, your time makes a
            difference.
          </p>
        </div>
      </section>

      {/* Volunteer Areas */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-diablo-red text-2xl md:text-3xl font-light uppercase tracking-wider mb-2 border-l-4 border-diablo-red pl-4">
          Ways to Help
        </h2>
        <div className="flex items-center gap-0 text-gray-400 mt-4 mb-8">
          <span className="w-[40px] h-[1px] bg-current" />
          <span className="w-3 h-3 border border-current rotate-45" />
          <span className="w-[40px] h-[1px] bg-current" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {volunteerAreas.map((area) => (
            <div
              key={area.title}
              className="bg-white/60 rounded-sm p-8 border-t-2 border-diablo-red"
            >
              <h3 className="text-diablo-dark font-bold uppercase tracking-wider text-sm mb-3">
                {area.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-diablo-dark">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="text-diablo-red text-2xl md:text-3xl font-light uppercase tracking-wider mb-4">
            Ready to Get Involved?
          </h2>
          <p className="text-gray-400 text-sm mb-8 max-w-md mx-auto">
            Reach out to the booster club to learn about current volunteer
            needs and sign up for upcoming events.
          </p>
          <a
            href="mailto:mark@missionfootball.com"
            className="inline-block bg-diablo-gold text-diablo-dark font-bold uppercase tracking-wider text-sm px-8 py-4 rounded-sm hover:bg-yellow-400 transition-colors"
          >
            Sign Up to Volunteer
          </a>
        </div>
      </section>
    </main>
  );
}
