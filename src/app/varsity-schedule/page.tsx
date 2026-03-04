import Image from "next/image";

const CALENDAR_ID = "mark@missionfootball.com";
const EMBED_URL =
  "https://calendar.google.com/calendar/embed?src=mark%40missionfootball.com&ctz=America%2FLos_Angeles";

export default function ProgramCalendar() {
  return (
    <main className="min-h-screen bg-[#e8e4de]">
      {/* Hero banner with team photo */}
      <section className="relative h-[340px] md:h-[420px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/team-photo.webp"
          alt="Mission Viejo Diablos Varsity Football Team"
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
            Schedule
          </h1>
        </div>
      </section>

      {/* Schedule graphic */}
      <section className="bg-diablo-dark">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h2 className="text-[#d12132] text-2xl md:text-3xl font-light uppercase tracking-wider mb-2 border-l-4 border-[#d12132] pl-4">
            Tradition Never Graduates
          </h2>
          <div className="mt-8">
            <Image
              src="/images/team-photo.webp"
              alt="2025 Mission Viejo Diablos Football Schedule"
              width={1080}
              height={1350}
              className="w-full h-auto rounded-sm"
            />
          </div>
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
