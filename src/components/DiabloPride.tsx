import Image from "next/image";

export default function DiabloPride() {
  return (
    <section className="bg-diablo-dark text-white">
      {/* Top image */}
      <div className="max-w-4xl mx-auto px-4 pt-16">
        <div className="relative w-full aspect-[16/10] mb-10">
          <Image
            src="/images/action-catch.webp"
            alt="Mission Viejo Diablos football action"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-16">
        <h2 className="text-diablo-red text-3xl md:text-5xl font-light uppercase tracking-wider mb-4">
          Diablo Pride
        </h2>

        <a
          href="#"
          className="inline-block border border-white text-white text-xs font-bold uppercase tracking-wider px-6 py-3 mb-8 hover:bg-white hover:text-diablo-dark transition-colors"
        >
          Read More
        </a>

        <div className="space-y-6 text-gray-300 text-sm md:text-base leading-relaxed">
          <p>
            The Mission Viejo High School football program has established
            itself as one of the premier high school teams in Southern
            California. Known for its fierce competitiveness and consistent
            performance, the Diablos have a rich tradition of excellence that
            dates back decades. The team has earned multiple CIF Southern
            Section titles and state playoff berths, solidifying their
            reputation as a powerhouse in the high school football landscape.
            Their success is largely attributed to a strong coaching staff,
            disciplined players, and an unwavering commitment to excellence both
            on and off the field.
          </p>
          <p>
            A hallmark of the Mission Viejo football program is its ability to
            develop top-tier talent. Numerous Diablos alumni have gone on to
            play at the collegiate level and in the NFL, a testament to the
            rigorous training and high expectations placed on the athletes. The
            team prides itself on fostering an environment where
            student-athletes can thrive, not just in sports but academically as
            well. With state-of-the-art facilities, a dedicated fan base, and
            an established winning culture, the Diablos continue to set the
            standard for high school football in Orange County.
          </p>
          <p>
            The leadership of coaches like Bill Crow, Mike Rush, Bob Johnson,
            and now Chad Johnson, have been a key factor in the team&apos;s
            dominance. Under their tenure and continuing with other strong
            coaching figures, Mission Viejo has consistently produced
            championship-caliber teams that embody the values of hard work,
            discipline, and teamwork. Whether it&apos;s a Friday night under the
            lights or a playoff showdown, the Diablos&apos; tradition of success
            is a source of pride for the entire community of Mission Viejo.
          </p>
        </div>
      </div>
    </section>
  );
}
