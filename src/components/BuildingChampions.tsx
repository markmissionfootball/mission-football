import Image from "next/image";

const bulletPoints = [
  "Community outreach",
  "Youth camp volunteering",
  "School event involvement",
];

export default function BuildingChampions() {
  return (
    <section className="bg-diablo-dark text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left: Photos — two tall portrait images side by side */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[1/2]">
              <Image
                src="https://missionfootball.com/wp-content/uploads/2024/09/2-1.png"
                alt="Mission Viejo football player"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[1/2]">
              <Image
                src="https://missionfootball.com/wp-content/uploads/2024/09/1-1.png"
                alt="Mission Viejo football team and Division 1-AA State Champions"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <h2 className="text-diablo-red text-3xl md:text-5xl font-light uppercase tracking-wider mb-6">
              Building Champions on &amp; off the Field
            </h2>

            {/* Diamond divider */}
            <div className="diamond-divider text-white/40 mb-8 justify-start">
              <span className="diamond" />
            </div>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8">
              Participation in Mission Viejo High School&apos;s football program
              equips students with essential life skills that prepare them for
              future success. The program emphasizes the development of physical
              and mental strength, fostering self-discipline, leadership, and
              teamwork among its athletes. By instilling values such as
              trustworthiness, respect, responsibility, fairness, caring, and
              citizenship, the program ensures that students are well-prepared
              to navigate the challenges of life.
            </p>

            <ul className="space-y-4">
              {bulletPoints.map((point) => (
                <li key={point} className="flex items-center gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-diablo-red flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-white font-bold uppercase tracking-wider text-sm">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="inline-block mt-8 border border-white text-white text-xs font-bold uppercase tracking-wider px-6 py-3 hover:bg-white hover:text-diablo-dark transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
