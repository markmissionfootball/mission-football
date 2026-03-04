const resources = [
  {
    title: "Athletic Clearance",
    description:
      "All student-athletes must complete athletic clearance before participating in any team activities. This includes a current physical exam, signed forms, and insurance verification.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Team Calendar",
    description:
      "Stay up to date on practices, games, team meetings, and special events. Subscribe to the team Google Calendar for automatic updates.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    href: "/varsity-schedule",
  },
  {
    title: "Booster Club",
    description:
      "The MVHS Football Booster Club supports the program through fundraising, game-day operations, and community events. All parents are encouraged to get involved.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Volunteer Opportunities",
    description:
      "From game-day support to fundraising events, there are many ways for families to contribute to the success of Diablos football.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    href: "/volunteer",
  },
  {
    title: "Team Store",
    description:
      "Show your Diablo pride with official MVHS Football gear. Jerseys, hats, apparel, and accessories are available through our online team store.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    href: "https://missionfootball.com/team-store/",
    external: true,
  },
  {
    title: "Contact Coaching Staff",
    description:
      "Have questions about the program? Reach out to our coaching staff for information about practices, expectations, and student-athlete development.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    href: "mailto:mark@missionfootball.com",
    external: true,
  },
];

export default function ParentPortal() {
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
            Parent Portal
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-diablo-dark">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <p className="text-diablo-gold text-sm font-bold uppercase tracking-[0.2em] mb-4">
            Welcome, Diablo Families
          </p>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Your one-stop resource for everything related to the MVHS Football
            program. From athletic clearance to volunteer opportunities, find
            the information you need to support your student-athlete.
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources.map((resource) => {
            const content = (
              <>
                <div className="text-diablo-red mb-4">{resource.icon}</div>
                <h3 className="text-diablo-dark font-bold uppercase tracking-wider text-sm mb-3">
                  {resource.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {resource.description}
                </p>
              </>
            );

            if (resource.href) {
              return (
                <a
                  key={resource.title}
                  href={resource.href}
                  {...(resource.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="bg-white/60 rounded-sm p-8 border-t-2 border-diablo-red hover:border-diablo-gold transition-colors block"
                >
                  {content}
                </a>
              );
            }

            return (
              <div
                key={resource.title}
                className="bg-white/60 rounded-sm p-8 border-t-2 border-diablo-red"
              >
                {content}
              </div>
            );
          })}
        </div>
      </section>

      {/* Contact */}
      <section className="bg-diablo-dark">
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h2 className="text-diablo-red text-xl md:text-2xl font-light uppercase tracking-wider mb-4">
            Questions?
          </h2>
          <p className="text-gray-400 text-sm mb-1">
            Mission Viejo High School
          </p>
          <p className="text-gray-400 text-sm mb-1">
            25025 Chrisanta Dr., Mission Viejo, CA 92691
          </p>
          <p className="text-gray-400 text-sm mb-4">(949) 837-7722</p>
          <p className="text-gray-500 text-xs uppercase tracking-wider">
            Office Hours: Monday – Friday, 7:00 AM to 4:00 PM
          </p>
        </div>
      </section>
    </main>
  );
}
