export const CtaSection = () => (
  <section className="px-8 py-32 text-center max-w-7xl mx-auto">
    <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-bold tracking-[-0.02em] mb-5">
      Open to new
      <br />
      opportunities.
    </h2>
    <p className="text-[#c7c4d7] text-base leading-[1.7] max-w-[480px] mx-auto mb-12">
      Available for backend, full-stack, and AI engineering roles. Let&apos;s
      build something impactful — reach out via email or connect on LinkedIn.
    </p>
    <div className="flex items-center justify-center gap-4 flex-wrap">
      <a
        href="mailto:alimonna777@gmail.com"
        className="bg-[#c0c1ff] text-[#1000a9] py-3.5 px-8 rounded-[6px] font-semibold text-[0.9375rem] no-underline hover:opacity-90 transition-opacity"
      >
        Email Me
      </a>
      <a
        href="https://linkedin.com/in/alimon-na"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#c7c4d7] py-3.5 px-6 rounded-[6px] border border-[rgba(70,69,84,0.5)] no-underline text-sm hover:border-[rgba(70,69,84,0.8)] transition-colors"
      >
        LinkedIn
      </a>
      <a
        href="https://github.com/alimon777"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#c7c4d7] py-3.5 px-6 rounded-[6px] border border-[rgba(70,69,84,0.5)] no-underline text-sm hover:border-[rgba(70,69,84,0.8)] transition-colors"
      >
        GitHub
      </a>
    </div>
  </section>
);
