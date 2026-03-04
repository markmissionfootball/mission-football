const championships = [
  {
    category: "State Championships",
    items: [
      { year: "2023", detail: "CIF State Division 1-AA Champions (defeated De La Salle 27-14)" },
      { year: "2015", detail: "CIF State Division 1-AA Champions" },
    ],
  },
  {
    category: "CIF Southern Section Championships",
    items: [
      { year: "2023", detail: "CIF Division 2 Southern Section Champions" },
      { year: "2015", detail: "CIF Southern Section Champions" },
      { year: "2005", detail: "CIF Southern Section Champions" },
      { year: "2004", detail: "CIF Southern Section Champions" },
      { year: "2003", detail: "CIF Southern Section Champions" },
      { year: "2002", detail: "CIF Southern Section Champions" },
      { year: "2001", detail: "CIF Southern Section Champions" },
      { year: "1978", detail: "CIF Southern Section Champions" },
    ],
  },
];

const leagueTitles = [
  "2023", "2019", "2018", "2017", "2016", "2015", "2014", "2013",
  "2012", "2011", "2010", "2009", "2008", "2007", "2006", "2005",
  "2004", "2003", "2002", "2001", "1988", "1987", "1986", "1985",
  "1984", "1978", "1977",
];

const programRecords = [
  { label: "Winning Percentage (Since 1966)", value: ".697" },
  { label: "Consecutive Wins (OC Record)", value: "41 Games (2001-2003)" },
  { label: "Best 5-Year Record", value: "67-2 (2001-2005)" },
  { label: "Undefeated Season", value: "14-0 (2004)" },
  { label: "National Ranking (USA Today, 2004)", value: "#3" },
];

const coachingEras = [
  {
    coach: "John Murio",
    years: "1970s",
    highlights: "First South Coast League title (1977), first CIF Championship (1978)",
  },
  {
    coach: "Bill Crow & Mike Rush",
    years: "1980s",
    highlights: "Five South Coast League titles, continued winning tradition",
  },
  {
    coach: "Bob Johnson",
    years: "1999–2017",
    highlights: "16 league titles, 5 CIF Championships, 1 State Championship (2015), winningest coach in OC history",
  },
  {
    coach: "Chad Johnson",
    years: "2018–Present",
    highlights: "State Championship (2023), continued national prominence",
  },
];

export default function Records() {
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
            Records
          </h1>
        </div>
      </section>

      {/* Program Stats */}
      <section className="bg-diablo-dark">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-diablo-red text-2xl md:text-3xl font-light uppercase tracking-wider mb-2 text-center">
            By the Numbers
          </h2>
          <div className="flex items-center justify-center gap-0 text-white/40 mb-10">
            <span className="w-[40px] h-[1px] bg-current" />
            <span className="w-3 h-3 border border-current rotate-45" />
            <span className="w-[40px] h-[1px] bg-current" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {programRecords.map((record) => (
              <div
                key={record.label}
                className="bg-[#2a2a2a] rounded-sm p-6 border-l-4 border-diablo-red"
              >
                <p className="text-diablo-gold text-2xl md:text-3xl font-bold mb-1">
                  {record.value}
                </p>
                <p className="text-gray-400 text-sm uppercase tracking-wider">
                  {record.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Championships */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        {championships.map((group) => (
          <div key={group.category} className="mb-12 last:mb-0">
            <h2 className="text-diablo-red text-2xl md:text-3xl font-light uppercase tracking-wider mb-2 border-l-4 border-diablo-red pl-4">
              {group.category}
            </h2>
            <div className="flex items-center gap-0 text-gray-400 mt-4 mb-8">
              <span className="w-[40px] h-[1px] bg-current" />
              <span className="w-3 h-3 border border-current rotate-45" />
              <span className="w-[40px] h-[1px] bg-current" />
            </div>
            <div className="space-y-3">
              {group.items.map((item) => (
                <div
                  key={item.year + item.detail}
                  className="flex items-start gap-4 bg-white/60 rounded-sm p-4"
                >
                  <span className="text-diablo-red font-bold text-lg min-w-[60px]">
                    {item.year}
                  </span>
                  <span className="text-gray-700 text-sm md:text-base">
                    {item.detail}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* League Titles */}
      <section className="bg-diablo-dark">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-diablo-red text-2xl md:text-3xl font-light uppercase tracking-wider mb-2 text-center">
            South Coast League Championships
          </h2>
          <p className="text-center text-diablo-gold text-lg font-bold mb-2">
            {leagueTitles.length}x Champions
          </p>
          <div className="flex items-center justify-center gap-0 text-white/40 mb-10">
            <span className="w-[40px] h-[1px] bg-current" />
            <span className="w-3 h-3 border border-current rotate-45" />
            <span className="w-[40px] h-[1px] bg-current" />
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {leagueTitles.map((year) => (
              <span
                key={year}
                className="bg-[#2a2a2a] border border-diablo-red/30 text-white px-4 py-2 rounded-sm text-sm font-bold tracking-wider"
              >
                {year}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Coaching Eras */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-diablo-red text-2xl md:text-3xl font-light uppercase tracking-wider mb-2 border-l-4 border-diablo-red pl-4">
          Coaching Eras
        </h2>
        <div className="flex items-center gap-0 text-gray-400 mt-4 mb-8">
          <span className="w-[40px] h-[1px] bg-current" />
          <span className="w-3 h-3 border border-current rotate-45" />
          <span className="w-[40px] h-[1px] bg-current" />
        </div>
        <div className="space-y-6">
          {coachingEras.map((era) => (
            <div
              key={era.coach}
              className="bg-white/60 rounded-sm p-6 border-l-4 border-diablo-gold"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mb-2">
                <h3 className="text-diablo-dark font-bold uppercase tracking-wider text-sm">
                  {era.coach}
                </h3>
                <span className="text-diablo-red text-sm font-bold">
                  {era.years}
                </span>
              </div>
              <p className="text-gray-600 text-sm">{era.highlights}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
