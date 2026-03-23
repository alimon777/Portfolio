import { STATS } from "@/lib/portfolio-data";

export const HeroSection = () => (
  <section className="min-h-screen flex flex-col justify-center px-8 pt-32 pb-16 max-w-7xl mx-auto">
    <div className="flex items-center gap-2 mb-7">
      <span className="size-2 rounded-full bg-[#4ae176] inline-block" />
      <span className="text-[#908fa0] font-mono text-xs tracking-[0.12em] uppercase">
        Software Engineer II · Kochi, India
      </span>
    </div>

    <h1 className="text-[clamp(2.5rem,5.5vw,5rem)] font-bold tracking-[-0.02em] leading-[1.08] mb-6 max-w-[820px]">
      Building Scalable Systems
      <br />
      <span className="text-[#c0c1ff]">Powered by AI.</span>
    </h1>

    <p className="text-[#c7c4d7] text-lg leading-[1.7] max-w-[540px] mb-10">
      Software Engineer with 2+ years delivering enterprise applications,
      agentic AI pipelines, and cloud-native backends using Java, Python, and
      Spring Boot.
    </p>

    <div className="flex items-center gap-4 mb-20 flex-wrap">
      <a
        href="#projects"
        className="bg-[#c0c1ff] text-[#1000a9] py-3 px-6 rounded-[6px] font-semibold no-underline flex items-center gap-1.5 text-[0.9375rem] hover:opacity-90 transition-opacity"
      >
        Explore Portfolio
        <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
      </a>
      <a
        href="https://github.com/alimon777"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#c7c4d7] py-3 px-6 rounded-[6px] border border-[rgba(70,69,84,0.5)] no-underline text-sm hover:border-[rgba(70,69,84,0.8)] transition-colors"
      >
        GitHub
      </a>
      <a
        href="https://linkedin.com/in/alimon-na"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#c7c4d7] py-3 px-6 rounded-[6px] border border-[rgba(70,69,84,0.5)] no-underline text-sm hover:border-[rgba(70,69,84,0.8)] transition-colors"
      >
        LinkedIn
      </a>
    </div>

    <div className="grid grid-cols-4 gap-8 border-t border-[rgba(70,69,84,0.35)] pt-8">
      {STATS.map((s) => (
        <div key={s.label}>
          <div className="text-[2rem] font-bold text-[#c0c1ff] font-mono tracking-[-0.02em]">
            {s.value}
          </div>
          <div className="text-[#908fa0] text-sm mt-1">{s.label}</div>
        </div>
      ))}
    </div>
  </section>
);
