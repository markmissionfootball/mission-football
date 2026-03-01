import Image from "next/image";

const headCoach = {
  name: "Chad Johnson",
  title: "Head Coach",
  bio: "Chad Johnson was named head coach at Mission Viejo High School in December 2017, taking over for the retiring Bob Johnson. Before leading the Diablos, Johnson spent 12 seasons as an offensive coordinator at St. John Bosco and Trabuco Hills, where he was part of two state championships and one national championship. In 2023, he led Mission Viejo to its second state championship with a dominant 27-14 victory over De La Salle in the CIF State Division 1-AA title game. A graduate of El Toro High School and now in his 24th year of coaching, Johnson also serves as a coach in the annual Under Armour All-America Game.",
  image:
    "https://missionfootball.com/wp-content/uploads/2024/09/MV_FB_LOGO_WLACES.png",
};

const coachingStaff = [
  { name: "Jennifer Stein", title: "Assistant Coach" },
  { name: "Garrett Gray", title: "Assistant Coach" },
  { name: "Manny A. Lara", title: "Assistant Coach" },
  { name: "Patrick Higgins", title: "Statistician" },
  { name: "Doug Betz", title: "Statistician" },
];

export default function CoachingStaff() {
  return (
    <main className="min-h-screen bg-[#e8e4de]">
      {/* Hero banner */}
      <section className="relative h-[340px] md:h-[420px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://missionfootball.com/wp-content/uploads/2025/08/24_MVHS_Football_Team_Varsity-scaled.jpg"
          alt="Mission Viejo Diablos Coaching Staff"
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
            Coaching Staff
          </h1>
        </div>
      </section>

      {/* Head Coach Feature */}
      <section className="bg-diablo-dark">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="flex-shrink-0 mx-auto md:mx-0">
              <div className="w-48 h-48 rounded-full bg-[#2a2a2a] border-4 border-diablo-red flex items-center justify-center overflow-hidden">
                <Image
                  src={headCoach.image}
                  alt={headCoach.name}
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>
            </div>
            <div>
              <p className="text-diablo-gold text-sm font-bold uppercase tracking-[0.2em] mb-2">
                {headCoach.title}
              </p>
              <h2 className="text-white text-3xl md:text-4xl font-light uppercase tracking-wider mb-2">
                {headCoach.name}
              </h2>
              <div className="flex items-center gap-0 text-white/40 mb-6">
                <span className="w-[40px] h-[1px] bg-current" />
                <span className="w-3 h-3 border border-current rotate-45" />
                <span className="w-[40px] h-[1px] bg-current" />
              </div>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                {headCoach.bio}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coaching Legacy */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-diablo-red text-2xl md:text-3xl font-light uppercase tracking-wider mb-2 border-l-4 border-diablo-red pl-4">
          A Legacy of Leadership
        </h2>
        <div className="flex items-center gap-0 text-gray-400 mt-4 mb-8">
          <span className="w-[40px] h-[1px] bg-current" />
          <span className="w-3 h-3 border border-current rotate-45" />
          <span className="w-[40px] h-[1px] bg-current" />
        </div>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
          The Mission Viejo football program&apos;s success has been built on a
          foundation of exceptional coaching. From Coach John Murio, who led the
          Diablos to their first South Coast League title in 1977 and first CIF
          Championship in 1978, to Coaches Bill Crow and Mike Rush who continued
          the winning tradition through the 1980s with five more league titles.
        </p>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
          Hall of Fame Coach Bob Johnson took the program to national prominence
          from 1999 to 2017, winning 16 South Coast League titles, 5 CIF
          Southern Section Championships, and the program&apos;s first State
          Championship in 2015. As the winningest coach in Orange County history,
          his legacy set the standard for excellence.
        </p>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          Coach Chad Johnson has continued that championship tradition, leading
          the Diablos to their second State Championship in 2023 and maintaining
          Mission Viejo&apos;s status as one of the premier programs in
          California.
        </p>
      </section>

      {/* Assistant Coaches */}
      <section className="bg-diablo-dark">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-diablo-red text-2xl md:text-3xl font-light uppercase tracking-wider mb-2 text-center">
            Staff
          </h2>
          <div className="flex items-center justify-center gap-0 text-white/40 mb-10">
            <span className="w-[40px] h-[1px] bg-current" />
            <span className="w-3 h-3 border border-current rotate-45" />
            <span className="w-[40px] h-[1px] bg-current" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {coachingStaff.map((coach) => (
              <div
                key={coach.name}
                className="bg-[#2a2a2a] rounded-sm p-6 text-center border-t-2 border-diablo-red"
              >
                <div className="w-20 h-20 rounded-full bg-[#333] mx-auto mb-4 flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-1">
                  {coach.name}
                </h3>
                <p className="text-diablo-gold text-xs uppercase tracking-wider">
                  {coach.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
