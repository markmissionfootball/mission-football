export default function JvFreshmanRoster() {
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
            JV / Freshman Roster
          </h1>
          <p className="text-gray-300 text-sm md:text-base mt-4 uppercase tracking-wider">
            2026 – 2027 Season
          </p>
        </div>
      </section>

      {/* Info */}
      <section className="bg-diablo-dark">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <p className="text-diablo-gold text-sm font-bold uppercase tracking-[0.2em] mb-4">
            The Future of Diablos Football
          </p>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            The JV and Freshman programs are the foundation of Mission Viejo
            football. These young athletes develop their skills, learn the
            playbook, and build the habits that prepare them for varsity
            competition.
          </p>
        </div>
      </section>

      {/* Roster Notice */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white/60 rounded-sm p-10 text-center border-t-2 border-diablo-red">
          <h2 className="text-diablo-red text-2xl md:text-3xl font-light uppercase tracking-wider mb-4">
            Roster Coming Soon
          </h2>
          <div className="flex items-center justify-center gap-0 text-gray-400 mb-6">
            <span className="w-[40px] h-[1px] bg-current" />
            <span className="w-3 h-3 border border-current rotate-45" />
            <span className="w-[40px] h-[1px] bg-current" />
          </div>
          <p className="text-gray-600 text-sm leading-relaxed max-w-md mx-auto mb-6">
            The JV and Freshman rosters will be updated once teams are finalized
            for the upcoming season. Check back soon or contact the coaching
            staff for more information.
          </p>
          <a
            href="mailto:mark@missionfootball.com"
            className="inline-block bg-diablo-red text-white font-bold uppercase tracking-wider text-sm px-8 py-4 rounded-sm hover:bg-red-700 transition-colors"
          >
            Contact Coaches
          </a>
        </div>
      </section>

      {/* MaxPreps Link */}
      <section className="bg-diablo-dark">
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <p className="text-gray-400 text-sm mb-4">
            View JV rosters and stats on MaxPreps
          </p>
          <a
            href="https://www.maxpreps.com/ca/mission-viejo/mission-viejo-diablos/football/roster/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-diablo-gold text-diablo-dark font-bold uppercase tracking-wider text-sm px-8 py-4 rounded-sm hover:bg-yellow-400 transition-colors"
          >
            View on MaxPreps
          </a>
        </div>
      </section>
    </main>
  );
}
