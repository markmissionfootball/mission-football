"use client";

import { useState, useMemo } from "react";
import { honors, records, allPlayers, allYears } from "../../data/programHistory";
import type { HistoryHonor, ProgramRecord } from "../../data/programHistory";

type ViewMode = "category" | "timeline" | "players";

// ── Category display order & labels ──────────────────────────────
const categoryOrder = [
  "All-State",
  "Cal-Hi All-State",
  "CIF-SS",
  "All-County",
  "All-League",
];

function categoryLabel(cat: string): string {
  return cat;
}

// ── Group helpers ────────────────────────────────────────────────
function groupBy<T>(items: T[], key: (item: T) => string): Record<string, T[]> {
  const map: Record<string, T[]> = {};
  for (const item of items) {
    const k = key(item);
    if (!map[k]) map[k] = [];
    map[k].push(item);
  }
  return map;
}

function groupByNumber<T>(items: T[], key: (item: T) => number): Record<number, T[]> {
  const map: Record<number, T[]> = {};
  for (const item of items) {
    const k = key(item);
    if (!map[k]) map[k] = [];
    map[k].push(item);
  }
  return map;
}

// ── Record Card ──────────────────────────────────────────────────
function RecordCard({ record }: { record: ProgramRecord }) {
  return (
    <div className="bg-[#2a2a2a] rounded-sm p-5 border-l-4 border-diablo-gold">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <p className="text-white font-medium text-sm leading-tight">{record.title}</p>
          {record.holder && (
            <p className="text-diablo-gold text-xs mt-1">{record.holder}</p>
          )}
          {record.year && (
            <p className="text-white/40 text-xs mt-0.5">{record.year}</p>
          )}
        </div>
        <span className="bg-diablo-red text-white text-xs font-bold px-2 py-1 rounded-sm whitespace-nowrap">
          {record.value}
        </span>
      </div>
    </div>
  );
}

// ── Honor Row ────────────────────────────────────────────────────
function HonorRow({ honor }: { honor: HistoryHonor }) {
  return (
    <div className="flex items-start gap-3 py-2">
      <span className="w-1.5 h-1.5 rounded-full bg-diablo-red mt-2 flex-shrink-0" />
      <div className="flex-1 min-w-0">
        <p className="text-white text-sm font-medium">{honor.playerName}</p>
        <p className="text-white/50 text-xs">
          {honor.level}
          {honor.side && honor.side !== "N/A" ? ` · ${honor.side}` : ""}
          {honor.position ? ` · ${honor.position}` : ""}
        </p>
      </div>
    </div>
  );
}

// ── Category View ────────────────────────────────────────────────
function CategoryView() {
  const [expandedCat, setExpandedCat] = useState<string | null>(null);
  const [expandedRecCat, setExpandedRecCat] = useState<string | null>(null);

  const honorsByCat = useMemo(() => groupBy(honors, (h) => h.category), []);
  const recordsByCat = useMemo(() => groupBy(records, (r) => r.category), []);

  const sortedCategories = useMemo(() => {
    const cats = Object.keys(honorsByCat);
    cats.sort((a, b) => {
      const ai = categoryOrder.indexOf(a);
      const bi = categoryOrder.indexOf(b);
      if (ai !== -1 && bi !== -1) return ai - bi;
      if (ai !== -1) return -1;
      if (bi !== -1) return 1;
      return a.localeCompare(b);
    });
    return cats;
  }, [honorsByCat]);

  return (
    <div className="space-y-8">
      {/* Records Section */}
      <div>
        <h2 className="text-2xl md:text-3xl font-light uppercase tracking-wider text-diablo-red border-l-4 border-diablo-red pl-4 mb-6">
          Records
        </h2>
        <div className="space-y-3">
          {Object.entries(recordsByCat).map(([cat, recs]) => (
            <div key={cat} className="bg-[#222] rounded-sm overflow-hidden">
              <button
                onClick={() => setExpandedRecCat(expandedRecCat === cat ? null : cat)}
                className="w-full flex items-center justify-between px-5 py-4 hover:bg-[#2a2a2a] transition-colors"
              >
                <span className="text-diablo-gold font-semibold text-sm uppercase tracking-wider">
                  {cat}
                </span>
                <div className="flex items-center gap-3">
                  <span className="bg-diablo-red/20 text-diablo-red text-xs font-bold px-2 py-0.5 rounded-full">
                    {recs.length}
                  </span>
                  <svg
                    className={`w-4 h-4 text-white/40 transition-transform ${expandedRecCat === cat ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              {expandedRecCat === cat && (
                <div className="px-5 pb-5 grid gap-3 sm:grid-cols-2">
                  {recs.map((r, i) => (
                    <RecordCard key={i} record={r} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Honors Section */}
      <div>
        <h2 className="text-2xl md:text-3xl font-light uppercase tracking-wider text-diablo-red border-l-4 border-diablo-red pl-4 mb-6">
          Honors &amp; Awards
        </h2>
        <div className="space-y-3">
          {sortedCategories.map((cat) => {
            const catHonors = honorsByCat[cat];
            const byYear = groupByNumber(catHonors, (h) => h.year);
            const years = Object.keys(byYear)
              .map(Number)
              .sort((a, b) => b - a);

            return (
              <div key={cat} className="bg-[#222] rounded-sm overflow-hidden">
                <button
                  onClick={() => setExpandedCat(expandedCat === cat ? null : cat)}
                  className="w-full flex items-center justify-between px-5 py-4 hover:bg-[#2a2a2a] transition-colors"
                >
                  <span className="text-diablo-gold font-semibold text-sm uppercase tracking-wider">
                    {categoryLabel(cat)}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="bg-diablo-red/20 text-diablo-red text-xs font-bold px-2 py-0.5 rounded-full">
                      {catHonors.length}
                    </span>
                    <svg
                      className={`w-4 h-4 text-white/40 transition-transform ${expandedCat === cat ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                {expandedCat === cat && (
                  <div className="px-5 pb-5 space-y-6">
                    {years.map((year) => (
                      <div key={year}>
                        <h4 className="text-diablo-gold/70 text-xs font-bold uppercase tracking-widest mb-2">
                          {year}
                        </h4>
                        <div className="divide-y divide-white/5">
                          {byYear[year].map((h, i) => (
                            <HonorRow key={i} honor={h} />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ── Timeline View ────────────────────────────────────────────────
function TimelineView() {
  const honorsByYear = useMemo(() => groupByNumber(honors, (h) => h.year), []);

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-[19px] top-0 bottom-0 w-px bg-diablo-gold/20" />

      <div className="space-y-6">
        {allYears.map((year) => {
          const yearHonors = honorsByYear[year] || [];
          if (yearHonors.length === 0) return null;

          const byCat = groupBy(yearHonors, (h) => h.category);

          return (
            <div key={year} className="relative flex gap-4">
              {/* Timeline dot */}
              <div className="relative z-10 flex-shrink-0 w-10 flex justify-center pt-5">
                <div className="w-3 h-3 rounded-full bg-diablo-gold border-2 border-diablo-dark" />
              </div>

              {/* Year card */}
              <div className="flex-1 bg-[#222] rounded-sm border-l-4 border-diablo-gold p-5">
                <div className="flex items-baseline justify-between mb-4">
                  <h3 className="text-diablo-gold text-2xl font-light tracking-wider">{year}</h3>
                  <span className="text-white/30 text-xs">
                    {yearHonors.length} honor{yearHonors.length !== 1 ? "s" : ""}
                  </span>
                </div>

                <div className="space-y-4">
                  {Object.entries(byCat).map(([cat, catHonors]) => (
                    <div key={cat}>
                      <h4 className="text-diablo-red text-xs font-bold uppercase tracking-widest mb-2">
                        {cat}
                      </h4>
                      <div className="divide-y divide-white/5">
                        {catHonors.map((h, i) => (
                          <HonorRow key={i} honor={h} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Players View ─────────────────────────────────────────────────
function PlayersView() {
  const [search, setSearch] = useState("");
  const [selectedPlayer, setSelectedPlayer] = useState<string | null>(null);

  const filteredPlayers = useMemo(() => {
    if (!search.trim()) return allPlayers;
    const q = search.toLowerCase();
    return allPlayers.filter((p) => p.toLowerCase().includes(q));
  }, [search]);

  // Group by first letter
  const playersByLetter = useMemo(() => {
    const map: Record<string, string[]> = {};
    for (const p of filteredPlayers) {
      const letter = p[0]?.toUpperCase() || "#";
      if (!map[letter]) map[letter] = [];
      map[letter].push(p);
    }
    return map;
  }, [filteredPlayers]);

  const selectedHonors = useMemo(() => {
    if (!selectedPlayer) return [];
    return honors
      .filter((h) => h.playerName === selectedPlayer)
      .sort((a, b) => b.year - a.year);
  }, [selectedPlayer]);

  const selectedYears = useMemo(() => {
    if (selectedHonors.length === 0) return "";
    const years = selectedHonors.map((h) => h.year);
    const min = Math.min(...years);
    const max = Math.max(...years);
    return min === max ? `${min}` : `${min}–${max}`;
  }, [selectedHonors]);

  return (
    <div>
      {/* Search bar */}
      <div className="sticky top-0 z-10 bg-diablo-dark pb-4">
        <div className="relative">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-diablo-gold"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search players..."
            className="w-full bg-[#2a2a2a] text-white pl-11 pr-10 py-3 rounded-sm text-sm placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-diablo-gold/50"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
        <p className="text-white/30 text-xs mt-2">
          {filteredPlayers.length} player{filteredPlayers.length !== 1 ? "s" : ""}
        </p>
      </div>

      {/* Player list */}
      <div className="space-y-6">
        {Object.entries(playersByLetter)
          .sort(([a], [b]) => a.localeCompare(b))
          .map(([letter, players]) => (
            <div key={letter}>
              <h3 className="text-diablo-gold font-bold text-sm mb-2 sticky top-[72px] bg-diablo-dark py-1 z-[5]">
                {letter}
              </h3>
              <div className="space-y-1">
                {players.map((player) => {
                  const count = honors.filter((h) => h.playerName === player).length;
                  return (
                    <button
                      key={player}
                      onClick={() => setSelectedPlayer(player)}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-sm hover:bg-[#2a2a2a] transition-colors text-left"
                    >
                      <div className="w-8 h-8 rounded-full bg-diablo-red/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-diablo-red text-xs font-bold">
                          {player[0]}
                        </span>
                      </div>
                      <span className="text-white text-sm flex-1">{player}</span>
                      <span className="text-diablo-gold/60 text-xs">{count}</span>
                      <svg className="w-4 h-4 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
      </div>

      {/* Player detail modal */}
      {selectedPlayer && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/60"
          onClick={() => setSelectedPlayer(null)}
        >
          <div
            className="w-full max-w-2xl bg-[#1a1a1a] rounded-t-xl max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Handle bar */}
            <div className="flex justify-center pt-3 pb-2">
              <div className="w-10 h-1 bg-white/20 rounded-full" />
            </div>

            <div className="px-6 pb-8">
              {/* Player header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-diablo-red flex items-center justify-center">
                  <span className="text-white text-lg font-bold">{selectedPlayer[0]}</span>
                </div>
                <div>
                  <h3 className="text-white text-xl font-semibold">{selectedPlayer}</h3>
                  <p className="text-white/40 text-sm">
                    {selectedYears} · {selectedHonors.length} honor{selectedHonors.length !== 1 ? "s" : ""}
                  </p>
                </div>
              </div>

              {/* Honors grouped by year */}
              {(() => {
                const byYear = groupByNumber(selectedHonors, (h) => h.year);
                const years = Object.keys(byYear)
                  .map(Number)
                  .sort((a, b) => b - a);

                return (
                  <div className="space-y-5">
                    {years.map((year) => (
                      <div key={year}>
                        <h4 className="text-diablo-gold text-sm font-bold mb-2">{year}</h4>
                        <div className="space-y-2">
                          {byYear[year].map((h, i) => (
                            <div key={i} className="flex items-start gap-3 pl-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-diablo-red mt-1.5 flex-shrink-0" />
                              <div>
                                <p className="text-white text-sm">{h.category} — {h.level}</p>
                                <p className="text-white/40 text-xs">
                                  {h.side && h.side !== "N/A" ? h.side : ""}
                                  {h.position ? ` · ${h.position}` : ""}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                );
              })()}

              {/* Close button */}
              <button
                onClick={() => setSelectedPlayer(null)}
                className="mt-6 w-full py-3 bg-diablo-red text-white text-sm font-bold uppercase tracking-wider rounded-sm hover:bg-diablo-red/90 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Main Page ────────────────────────────────────────────────────
export default function ProgramHistoryPage() {
  const [view, setView] = useState<ViewMode>("category");

  const tabs: { key: ViewMode; label: string }[] = [
    { key: "category", label: "By Category" },
    { key: "timeline", label: "Timeline" },
    { key: "players", label: "Players" },
  ];

  return (
    <main className="min-h-screen bg-diablo-dark">
      {/* Hero Banner */}
      <section className="relative h-[340px] md:h-[420px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-diablo-dark" />
        <div className="absolute inset-0 bg-[url('/field-bg.jpg')] bg-cover bg-center opacity-30" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-light uppercase tracking-wider text-diablo-red">
            Program History
          </h1>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-12 h-px bg-diablo-gold" />
            <div className="w-2 h-2 bg-diablo-gold rotate-45" />
            <div className="w-12 h-px bg-diablo-gold" />
          </div>
          <p className="text-white/60 text-sm md:text-base mt-4 max-w-xl mx-auto">
            Over five decades of excellence — 1,100+ individual honors from 1966 to 2022
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="sticky top-0 z-20 bg-diablo-dark border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setView(tab.key)}
                className={`flex-1 py-4 text-xs font-bold uppercase tracking-widest transition-colors border-b-2 ${
                  view === tab.key
                    ? "text-diablo-gold border-diablo-gold"
                    : "text-white/40 border-transparent hover:text-white/60"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {view === "category" && <CategoryView />}
        {view === "timeline" && <TimelineView />}
        {view === "players" && <PlayersView />}
      </div>

      {/* Footer stats */}
      <section className="bg-[#111] py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-diablo-gold text-3xl font-light">{honors.length}</p>
              <p className="text-white/40 text-xs uppercase tracking-wider mt-1">Total Honors</p>
            </div>
            <div>
              <p className="text-diablo-gold text-3xl font-light">{records.length}</p>
              <p className="text-white/40 text-xs uppercase tracking-wider mt-1">Records</p>
            </div>
            <div>
              <p className="text-diablo-gold text-3xl font-light">{allPlayers.length}</p>
              <p className="text-white/40 text-xs uppercase tracking-wider mt-1">Players</p>
            </div>
            <div>
              <p className="text-diablo-gold text-3xl font-light">{allYears.length}</p>
              <p className="text-white/40 text-xs uppercase tracking-wider mt-1">Years</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
