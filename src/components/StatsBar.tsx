const stats = [
  { value: "2x", label: "State Champions", variant: "red" as const },
  { value: "26x", label: "South Coast League Champions", variant: "gold" as const },
  { value: "8x", label: "CIF Champions", variant: "red" as const },
];

export default function StatsBar() {
  return (
    <section className="py-10 px-4 max-w-4xl mx-auto">
      <div className="flex flex-col gap-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className={`relative overflow-hidden rounded-sm py-10 px-6 text-center ${
              stat.variant === "red" ? "stat-card-red" : "stat-card-gold"
            }`}
          >
            {/* Diamond divider */}
            <div
              className={`diamond-divider mb-4 ${
                stat.variant === "red" ? "text-white/60" : "text-black/40"
              }`}
            >
              <span className="diamond" />
            </div>

            <h3
              className={`text-2xl md:text-3xl font-light uppercase tracking-[0.15em] ${
                stat.variant === "red" ? "text-white" : "text-gray-800"
              }`}
            >
              {stat.value} {stat.label}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
