export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] min-h-[500px] overflow-hidden flex items-center justify-center">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://aebq0sqdorvktonm.public.blob.vercel-storage.com/jumbotron%20final.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <p className="text-diablo-gold text-sm md:text-base font-bold uppercase tracking-[0.3em] mb-4">
          Mission Driven
        </p>

        {/* Diamond divider */}
        <div className="diamond-divider text-white/70 mb-6">
          <span className="diamond" />
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light uppercase tracking-wider mb-6">
          Tradition Never Graduates
        </h1>

        <p className="text-diablo-gold text-sm md:text-lg font-bold uppercase tracking-[0.2em]">
          Over 50 Years of Excellence
        </p>
      </div>
    </section>
  );
}
