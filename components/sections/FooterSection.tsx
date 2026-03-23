export const FooterSection = () => (
  <footer className="border-t border-[rgba(70,69,84,0.3)] px-8 py-8 bg-[#0b0f11]">
    <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-4">
      <div className="flex items-center gap-3.5">
        <span className="material-symbols-outlined text-[#c0c1ff] text-[18px]">
          deployed_code
        </span>
        <span className="text-[#e1e3e6] font-semibold text-sm">
          Alimon N A
        </span>
        <span className="text-[#464554]">·</span>
        <span className="text-[#908fa0] text-[0.8125rem]">
          © 2026 Alimon N A. All rights reserved.
        </span>
      </div>
      <div className="flex items-center gap-6">
        <a
          href="#"
          className="text-[#908fa0] text-[0.8125rem] no-underline hover:text-[#c7c4d7] transition-colors"
        >
          Privacy
        </a>
        <a
          href="#"
          className="text-[#908fa0] text-[0.8125rem] no-underline hover:text-[#c7c4d7] transition-colors"
        >
          Terms
        </a>
        <div className="flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-[#4ae176] inline-block" />
          <span className="text-[#908fa0] font-mono text-xs">Status: 200</span>
        </div>
      </div>
    </div>
  </footer>
);
