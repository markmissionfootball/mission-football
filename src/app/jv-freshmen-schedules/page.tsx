import Image from "next/image";

const CALENDAR_ID = "mark@missionfootball.com";
const EMBED_URL =
  "https://calendar.google.com/calendar/embed?src=mark%40missionfootball.com&ctz=America%2FLos_Angeles";

export default function JvFreshmenSchedules() {
  return (
    <main className="min-h-screen bg-[#e8e4de]">
      {/* Hero banner */}
      <section className="relative h-[340px] md:h-[420px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/team-photo.webp"
          alt="Mission Viejo Diablos JV/Freshmen Schedules"
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
            JV / Freshmen Schedules
          </h1>
          <p className="text-gray-300 text-sm md:text-base mt-4 uppercase tracking-wider">
            2026 – 2027 Season
          </p>
        </div>
      </section>

      {/* Schedule Info */}
      <section className="bg-diablo-dark">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <p className="text-diablo-gold text-sm font-bold uppercase tracking-[0.2em] mb-4">
            Game Day Info
          </p>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            JV and Freshman games are typically played on Thursdays, with JV
            at 4:00 PM and Freshman at 4:00 PM (times may vary). Check the
            calendar below for the most up-to-date schedule.
          </p>
        </div>
      </section>

      {/* Schedule Notice */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white/60 rounded-sm p-10 text-center border-t-2 border-diablo-red">
          <h2 className="text-diablo-red text-2xl md:text-3xl font-light uppercase tracking-wider mb-4">
            Schedule Coming Soon
          </h2>
          <div className="flex items-center justify-center gap-0 text-gray-400 mb-6">
            <span className="w-[40px] h-[1px] bg-current" />
            <span className="w-3 h-3 border border-current rotate-45" />
            <span className="w-[40px] h-[1px] bg-current" />
          </div>
          <p className="text-gray-600 text-sm leading-relaxed max-w-md mx-auto">
            The JV and Freshmen schedules will be posted once finalized for the
            upcoming season. Subscribe to the team calendar below for automatic
            updates.
          </p>
        </div>
      </section>

      {/* Google Calendar embed */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-light uppercase tracking-wider text-[#d12132] mb-4 text-center">
          Team Calendar
        </h2>
        <div className="flex items-center justify-center gap-0 text-gray-400 mb-8">
          <span className="w-[60px] h-[1px] bg-current" />
          <span className="w-4 h-4 border border-current rotate-45" />
          <span className="w-[60px] h-[1px] bg-current" />
        </div>

        <div className="w-full bg-white rounded-sm shadow-md overflow-hidden">
          <iframe
            src={EMBED_URL}
            className="w-full border-0"
            style={{ height: "700px" }}
            scrolling="no"
            title="MVHS Football Calendar"
          />
        </div>

        <p className="text-center text-gray-500 text-sm mt-6">
          <a
            href={`https://calendar.google.com/calendar/r?cid=${encodeURIComponent(CALENDAR_ID)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#d12132] hover:text-[#fcb423] transition-colors font-semibold"
          >
            + Subscribe to this calendar
          </a>
          {" "}to add events to your personal Google Calendar.
        </p>
      </div>
    </main>
  );
}
