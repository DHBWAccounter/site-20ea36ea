"use client";

export function Hero() {
  return (
    <section className="relative w-full h-[500px] lg:h-[580px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1731266806784-123YYCP5HJCJDHFQ19NH/BAS_background_winter1.jpg?format=2500w"
          alt="Swiss Alps at sunset"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <h1 className="text-white text-lg md:text-xl lg:text-[18px] font-semibold tracking-[0.15em] text-center max-w-4xl uppercase leading-relaxed">
          A BRIGHT NEW DAWN FOR DIGITAL TRANSFERS, SOUND MONEY AND PERSONAL FREEDOM.
        </h1>
      </div>
    </section>
  );
}
