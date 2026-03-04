const nflAlumni = [
  {
    name: "Mark Sanchez",
    position: "Quarterback",
    college: "USC",
    nfl: "New York Jets, Philadelphia Eagles, Dallas Cowboys, Washington, Chicago Bears",
    highlights:
      "First-round pick (#5 overall, 2009 NFL Draft). Led the Jets to back-to-back AFC Championship Games in his first two seasons — one of only two QBs in NFL history at the time to reach the conference championship in each of their first two seasons.",
    classYear: "2005",
  },
  {
    name: "Jarrett Patterson",
    position: "Center",
    college: "Notre Dame",
    nfl: "Houston Texans",
    highlights:
      "Three-year starter at Notre Dame. Signed with the Houston Texans of the NFL.",
    classYear: "2018",
  },
  {
    name: "Jeff Baca",
    position: "Center",
    college: "UCLA",
    nfl: "Minnesota Vikings",
    highlights:
      "Drafted by the Minnesota Vikings in the sixth round of the 2013 NFL Draft.",
    classYear: "2008",
  },
  {
    name: "Konrad Reuland",
    position: "Tight End",
    college: "Notre Dame / Stanford",
    nfl: "New York Jets, Baltimore Ravens, Indianapolis Colts",
    highlights:
      "Played multiple seasons in the NFL. A beloved member of the Diablos family.",
    classYear: "2005",
  },
  {
    name: "Tre Madden",
    position: "Fullback",
    college: "USC",
    nfl: "Seattle Seahawks",
    highlights:
      "Standout running back at USC. Signed as an undrafted free agent with the Seahawks.",
    classYear: "2012",
  },
  {
    name: "Easton Mascarenas-Arnold",
    position: "Wide Receiver",
    college: "Oregon State",
    nfl: "NFL",
    highlights:
      "Continued the pipeline of Diablos talent reaching the professional level.",
    classYear: "2020",
  },
];

const collegiateHighlights = [
  {
    year: "2005",
    description:
      "The legendary 2004-2005 class sent players to top programs across the country: Mark Sanchez (USC), Nick Reed (Oregon), Gregg Peat (Oregon State), Chase Moline (UCLA), Chane Moline (UCLA), Konrad Reuland (Notre Dame/Stanford), and Kevin Bemoll (Cal).",
  },
  {
    year: "2001-2005",
    description:
      "During the program's dominant 67-2 stretch, dozens of players earned Division I scholarships, establishing Mission Viejo as one of the top talent pipelines in the nation.",
  },
];

export default function Alumni() {
  return (
    <main className="min-h-screen bg-[#e8e4de]">
      {/* Hero banner */}
      <section className="bg-diablo-dark flex items-center justify-center py-16 md:py-20">
        <div className="text-center">
          <div className="flex items-center justify-center gap-0 text-gray-400 mb-4">
            <span className="w-[60px] h-[1px] bg-current" />
            <span className="w-4 h-4 border border-current rotate-45" />
            <span className="w-[60px] h-[1px] bg-current" />
          </div>
          <h1 className="text-4xl md:text-6xl font-light uppercase tracking-wider text-[#d12132]">
            Alumni
          </h1>
          <p className="text-gray-300 text-sm md:text-base mt-4 uppercase tracking-wider">
            Tradition Never Graduates
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-diablo-dark">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            A hallmark of the Mission Viejo football program is its ability to
            develop top-tier talent. Numerous Diablos alumni have gone on to play
            at the collegiate level and in the NFL, a testament to the rigorous
            training and high expectations placed on the athletes.
          </p>
        </div>
      </section>

      {/* NFL Alumni */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-diablo-red text-2xl md:text-3xl font-light uppercase tracking-wider mb-2 border-l-4 border-diablo-red pl-4">
          NFL Players
        </h2>
        <div className="flex items-center gap-0 text-gray-400 mt-4 mb-8">
          <span className="w-[40px] h-[1px] bg-current" />
          <span className="w-3 h-3 border border-current rotate-45" />
          <span className="w-[40px] h-[1px] bg-current" />
        </div>
        <div className="space-y-6">
          {nflAlumni.map((alum) => (
            <div
              key={alum.name}
              className="bg-white/60 rounded-sm p-6 border-l-4 border-diablo-red"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mb-2">
                <h3 className="text-diablo-dark text-lg font-bold uppercase tracking-wider">
                  {alum.name}
                </h3>
                <span className="text-diablo-red text-sm font-bold">
                  Class of {alum.classYear}
                </span>
              </div>
              <p className="text-diablo-gold text-xs font-bold uppercase tracking-wider mb-2">
                {alum.position} &bull; {alum.college}
              </p>
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-3">
                {alum.nfl}
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                {alum.highlights}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Collegiate Highlights */}
      <section className="bg-diablo-dark">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-diablo-red text-2xl md:text-3xl font-light uppercase tracking-wider mb-2 text-center">
            Collegiate Pipeline
          </h2>
          <div className="flex items-center justify-center gap-0 text-white/40 mb-10">
            <span className="w-[40px] h-[1px] bg-current" />
            <span className="w-3 h-3 border border-current rotate-45" />
            <span className="w-[40px] h-[1px] bg-current" />
          </div>
          <div className="space-y-6">
            {collegiateHighlights.map((item) => (
              <div
                key={item.year}
                className="bg-[#2a2a2a] rounded-sm p-6 border-l-4 border-diablo-gold"
              >
                <p className="text-diablo-gold font-bold text-sm uppercase tracking-wider mb-2">
                  {item.year}
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-diablo-red text-xl md:text-2xl font-light uppercase tracking-wider mb-4">
          Are You a Diablo Alum?
        </h2>
        <p className="text-gray-600 text-sm mb-6 max-w-md mx-auto">
          We&apos;d love to hear from you. Connect with the program and share
          your story with the next generation of Diablos.
        </p>
        <a
          href="mailto:mark@missionfootball.com"
          className="inline-block bg-diablo-red text-white font-bold uppercase tracking-wider text-sm px-8 py-4 rounded-sm hover:bg-red-700 transition-colors"
        >
          Get in Touch
        </a>
      </section>
    </main>
  );
}
