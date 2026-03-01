"use client";

import Image from "next/image";
import { useState } from "react";

interface Player {
  last: string;
  first: string;
  positions: string;
  photo?: string;
}

const S3_BASE = "https://blastathletics.s3.amazonaws.com/uploads/picture/file";

const roster: Player[] = [
  { last: "Abogado", first: "Isaac", positions: "OG, C, DT", photo: `${S3_BASE}/2123970/large_Screenshot_20250504_175111_BAND.jpg` },
  { last: "Ackley Garcia", first: "Benjamin", positions: "C, DT" },
  { last: "Ajaltouni", first: "Anthony", positions: "DE", photo: `${S3_BASE}/2212988/large_V_Ajaltouni_Anthony-01_2526_MVHS_FB_PRG.jpg` },
  { last: "Bird", first: "Isaiah", positions: "RB, WR, CB", photo: `${S3_BASE}/2212959/large_V_Bird_Isaiah-01_2526_MVHS_FB_PRG.jpg` },
  { last: "Bird", first: "Jeremiah", positions: "", photo: `${S3_BASE}/2164333/large_IMG_3735.jpeg` },
  { last: "Boardman", first: "Wyatt", positions: "RB, DE", photo: `${S3_BASE}/2415441/large_IMG_3937.jpeg` },
  { last: "Bonhomme", first: "Jeremy", positions: "WR, FS", photo: `${S3_BASE}/2212985/large_V_Bonhomme_Jeremy-03_2526_MVHS_FB_PRG.jpg` },
  { last: "Bullock", first: "Zach", positions: "LB", photo: `${S3_BASE}/2164306/large_image.jpg` },
  { last: "Burnor", first: "Brett", positions: "QB" },
  { last: "Carreon", first: "Noah", positions: "RB", photo: `${S3_BASE}/2212944/large_V_Carreon_Noah-01_2526_MVHS_FB_PRG.jpg` },
  { last: "Castellanos", first: "Matthew", positions: "WR, SS, FS", photo: `${S3_BASE}/2164312/large_1000001184.jpg` },
  { last: "Castillo", first: "Elijah", positions: "OT, DT" },
  { last: "Coleman", first: "Brady", positions: "" },
  { last: "Dalhover", first: "Matthew", positions: "RB, LB", photo: `${S3_BASE}/2212939/large_V_Dalhover_Matthew-01_2526_MVHS_FB_PRG.jpg` },
  { last: "Davidson", first: "Dom", positions: "LB" },
  { last: "Davidson", first: "Max", positions: "C, OL", photo: `${S3_BASE}/2212963/large_V_Davidson_Max-04_2526_MVHS_FB_PRG.jpg` },
  { last: "Davis", first: "Kole", positions: "TE, DE", photo: `${S3_BASE}/1806812/large_24_MVHS_Football_V_Headshot_048.JPG` },
  { last: "Davis", first: "Matthew", positions: "" },
  { last: "Erickson Goldberg", first: "Cooper", positions: "DE", photo: `${S3_BASE}/2132443/large_IMG_6312.jpeg` },
  { last: "Felli", first: "Dylan", positions: "OL", photo: `${S3_BASE}/2212968/large_V_Felli_Dylan-01_2526_MVHS_FB_PRG.jpg` },
  { last: "Flores", first: "Sunnie", positions: "WR, CB, SS" },
  { last: "Geldermann", first: "Gannon", positions: "", photo: `${S3_BASE}/2212957/large_V_Geldermann_Gannon-01_2526_MVHS_FB_PRG.jpg` },
  { last: "Gerrish", first: "Kyle", positions: "DT, LS", photo: `${S3_BASE}/2212953/large_V_Gerrish_Kyle-03_2526_MVHS_FB_PRG.jpg` },
  { last: "Gervase", first: "Cash", positions: "LB", photo: `${S3_BASE}/2212917/large_V_Gervase_Cash-01_2526_MVHS_FB_PRG.jpg` },
  { last: "Gomez Hernandez", first: "Jonathan", positions: "WR, CB" },
  { last: "Gonzalez", first: "Aron", positions: "WR, CB", photo: `${S3_BASE}/2164317/large_image.jpg` },
  { last: "Hawksford", first: "Tyler", positions: "WR, LB, SS", photo: `${S3_BASE}/2212987/large_V_Hawksfords_Tyler-01_2526_MVHS_FB_PRG.jpg` },
  { last: "Hicks", first: "Jordan", positions: "CB, FS", photo: `${S3_BASE}/2212927/large_V_Hicks_Jordan-04_2526_MVHS_FB_PRG.jpg` },
  { last: "Infante", first: "Jacob", positions: "OG, C, OL", photo: `${S3_BASE}/2212964/large_V_Infante_Jacob-02_2526_MVHS_FB_PRG.jpg` },
  { last: "Ingham", first: "William", positions: "LB", photo: `${S3_BASE}/2212934/large_V_Inghem_Will-01_2526_MVHS_FB_PRG.jpg` },
  { last: "Jackson", first: "Jett", positions: "DE" },
  { last: "Jackson", first: "Shantel", positions: "DE" },
  { last: "Johnson", first: "Bo", positions: "TE", photo: `${S3_BASE}/2235479/large_IMG_4917.jpeg` },
  { last: "Johnson", first: "Ryan", positions: "OL", photo: `${S3_BASE}/2164301/large_image.jpg` },
  { last: "Johnson", first: "Tyler", positions: "OT", photo: `${S3_BASE}/2212972/large_V_Johnson_Tyler-01_2526_MVHS_FB_ret_PRG.jpg` },
  { last: "Junker", first: "Jack", positions: "WR", photo: `${S3_BASE}/2212926/large_V_Junker_Jack-04_2526_MVHS_FB_PRG.jpg` },
  { last: "Karby", first: "Luke", positions: "WR", photo: `${S3_BASE}/2212916/large_V_Karby_Luke-01_2526_MVHS_FB_PRG.jpg` },
  { last: "Lassiter", first: "Myles", positions: "CB" },
  { last: "Lee", first: "Noah", positions: "OG, DT, NT", photo: `${S3_BASE}/2212956/large_V_Lee_Noah-02_2526_MVHS_FB_PRG.jpg` },
  { last: "Mahoney", first: "Loc", positions: "LB, LS" },
  { last: "Makaafi", first: "Hansen", positions: "" },
  { last: "Maldonado", first: "Francisco", positions: "WR, TE, FS", photo: `${S3_BASE}/2164316/large_image.jpg` },
  { last: "Markofski", first: "Max", positions: "WR", photo: `${S3_BASE}/2212984/large_V_Markofski_Max-01_2425_MVHS_FB_PRG.jpg` },
  { last: "Mataele", first: "Maddox", positions: "TE, LB", photo: `${S3_BASE}/2212952/large_V_Mataele_Maddox-01_2526_MVHS_FB_PRG.jpg` },
  { last: "Maxwell", first: "Desmond", positions: "WR, CB, SS", photo: `${S3_BASE}/2212936/large_V_Maxwell_Desmond-03_2526_MVHS_FB_PRG.jpg` },
  { last: "Menendez", first: "Aidan", positions: "OT", photo: `${S3_BASE}/2164311/large_image.jpg` },
  { last: "Middagh", first: "Baxter", positions: "OL", photo: `${S3_BASE}/2212970/large_V_Middagh_Baxter-02_2526_MVHS_FB_PRG.jpg` },
  { last: "Morales", first: "Austin", positions: "OG, DE, DT", photo: `${S3_BASE}/2160904/large_Screenshot_20250618_131932_Photos.jpg` },
  { last: "Newhouser", first: "Ryder", positions: "WR, SS, FS" },
  { last: "Ngoka", first: "Matthew", positions: "" },
  { last: "Patrick", first: "Jeremiah", positions: "WR, CB" },
  { last: "Ploszaj", first: "Gavin", positions: "WR, FS" },
  { last: "Poer", first: "Jameson", positions: "", photo: `${S3_BASE}/2141938/large_FullSizeRender.jpeg` },
  { last: "Poggio", first: "Cayden", positions: "WR, CB", photo: `${S3_BASE}/2164297/large_image.jpg` },
  { last: "Ramirez", first: "Archer", positions: "", photo: `${S3_BASE}/2164314/large_image.jpg` },
  { last: "Ramirez", first: "Jayden", positions: "" },
  { last: "Ramirez", first: "Troy", positions: "", photo: `${S3_BASE}/2212950/large_V_Ramirez_Troy-03_2526_MVHS_FB_PRG.jpg` },
  { last: "Reed", first: "Jojo", positions: "WR, CB", photo: `${S3_BASE}/2212924/large_V_Reed_Jojo-01_2526_MVHS_FB_PRG.jpg` },
  { last: "Richard", first: "Jayden", positions: "WR, CB", photo: `${S3_BASE}/2420044/large_IMG_9069.jpeg` },
  { last: "Rodriguez", first: "Noah", positions: "CB", photo: `${S3_BASE}/2212945/large_V_Rodriguez_Noah-04_2526_MVHS_FB_PRG.jpg` },
  { last: "Rogers", first: "Jackson", positions: "OT, DT", photo: `${S3_BASE}/2212954/large_V_Rogers_Jackson-01_2526_MVHS_FB_PRG.jpg` },
  { last: "Sauer", first: "Tanner", positions: "DT, OL", photo: `${S3_BASE}/2212965/large_V_Sauer_Tanner-02_2526_MVHS_FB_PRG.jpg` },
  { last: "Smith", first: "Stephen", positions: "LB", photo: `${S3_BASE}/2212942/large_V_Smith_Stephen-02_2526_MVHS_FB_PRG.jpg` },
  { last: "Soltesz", first: "Kaio", positions: "CB", photo: `${S3_BASE}/2164663/large_IMG_3006.jpeg` },
  { last: "Stalker", first: "Will", positions: "FS", photo: `${S3_BASE}/2164330/large_image.jpg` },
  { last: "Sylvia", first: "Caleb", positions: "K", photo: `${S3_BASE}/2212948/large_V_Sylvia_Caleb-04_2526_MVHS_FB_PRG.jpg` },
  { last: "Trujillo", first: "Adonai", positions: "OT, OG, DT", photo: `${S3_BASE}/2164337/large_image.jpg` },
  { last: "Vandermade", first: "Carson", positions: "WR", photo: `${S3_BASE}/2212922/large_V_Vandermade_Carson-02_2526_MVHS_FB_PRG.jpg` },
  { last: "Villatoro", first: "Andres", positions: "", photo: `${S3_BASE}/2342744/large_IMG_4419.jpeg` },
  { last: "Warner", first: "Bryce", positions: "LB", photo: `${S3_BASE}/2212932/large_V_Warner_Bryce-01_2526_MVHS_FB_PRG.jpg` },
  { last: "Weber", first: "Briggs", positions: "DE", photo: `${S3_BASE}/2212989/large_V_Weber_Briggs-03_2526_MVHS_FB_PRG.jpg` },
  { last: "Wilson", first: "Logan", positions: "RB, NT, KR", photo: `${S3_BASE}/2342723/large_IMG_20251014_223457512.jpg` },
  { last: "Woodbury", first: "Kj", positions: "WR, FS", photo: `${S3_BASE}/2212930/large_V_Woodbury_Kollin-03_2526_MVHS_FB_PRG.jpg` },
];

const positionGroups: Record<string, string[]> = {
  Offense: ["QB", "RB", "WR", "TE", "OL", "OT", "OG", "C"],
  Defense: ["DE", "DT", "NT", "LB", "CB", "SS", "FS"],
  "Special Teams": ["K", "LS", "KR"],
};

export default function Roster() {
  const [filter, setFilter] = useState<string>("All");

  const filtered =
    filter === "All"
      ? roster
      : roster.filter((p) => {
          if (!p.positions) return false;
          const posList = p.positions.split(", ");
          return posList.some(
            (pos) => positionGroups[filter]?.includes(pos)
          );
        });

  return (
    <main className="min-h-screen bg-[#e8e4de]">
      {/* Hero banner */}
      <section className="relative h-[340px] md:h-[420px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://missionfootball.com/wp-content/uploads/2025/08/24_MVHS_Football_Team_Varsity-scaled.jpg"
          alt="Mission Viejo Diablos Football Roster"
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
            Roster
          </h1>
          <p className="text-gray-300 text-sm md:text-base mt-4 uppercase tracking-wider">
            2026 – 2027 Season
          </p>
        </div>
      </section>

      {/* Roster count + filter */}
      <section className="bg-diablo-dark">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm uppercase tracking-wider">
              <span className="text-diablo-gold font-bold text-lg">
                {roster.length}
              </span>{" "}
              Players
            </p>
            <div className="flex flex-wrap gap-2">
              {["All", "Offense", "Defense", "Special Teams"].map((group) => (
                <button
                  key={group}
                  onClick={() => setFilter(group)}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-sm transition-colors ${
                    filter === group
                      ? "bg-diablo-red text-white"
                      : "bg-[#2a2a2a] text-gray-400 hover:text-white"
                  }`}
                >
                  {group}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Roster Grid */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filtered.map((player) => (
            <div
              key={`${player.last}-${player.first}`}
              className="bg-white/60 rounded-sm overflow-hidden group"
            >
              <div className="relative w-full aspect-square bg-gray-200">
                {player.photo ? (
                  <Image
                    src={player.photo}
                    alt={`${player.first} ${player.last}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-gray-200 to-gray-300">
                    <svg
                      className="w-16 h-16 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                )}
              </div>
              <div className="p-3">
                <p className="font-bold text-sm text-diablo-dark leading-tight">
                  {player.last}
                </p>
                <p className="text-sm text-gray-600 leading-tight">
                  {player.first}
                </p>
                {player.positions && (
                  <p className="text-xs text-diablo-red font-semibold mt-1 uppercase tracking-wider">
                    {player.positions}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-500 py-8">
            No players found for this filter.
          </p>
        )}
      </section>

      {/* Varsity roster link */}
      <section className="bg-diablo-dark">
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <p className="text-gray-400 text-sm mb-4">
            View the full varsity roster with stats on MaxPreps
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
