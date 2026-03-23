export const NavBar = () => (
  <nav className="fixed inset-x-0 top-0 z-50 backdrop-blur-[20px] bg-[rgba(50,53,56,0.70)]">
    <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-16">
      <div className="flex items-center gap-2">
        <span className="text-[#c0c1ff] font-bold text-xl">Alimon</span>
        <span className="text-[#908fa0] font-mono text-[0.6875rem] tracking-[0.08em]">
          SWE-II
        </span>
      </div>
      <div className="flex items-center gap-4 sm:gap-8">
        <a
          href="#expertise"
          className="hidden sm:block text-[#c7c4d7] text-sm no-underline hover:text-[#e1e3e6] transition-colors"
        >
          Expertise
        </a>
        <a
          href="#projects"
          className="hidden sm:block text-[#c7c4d7] text-sm no-underline hover:text-[#e1e3e6] transition-colors"
        >
          Portfolio
        </a>
        <a
          href="#experience"
          className="hidden sm:block text-[#c7c4d7] text-sm no-underline hover:text-[#e1e3e6] transition-colors"
        >
          Journey
        </a>
        <a
          href="#toolkit"
          className="hidden sm:block text-[#c7c4d7] text-sm no-underline hover:text-[#e1e3e6] transition-colors"
        >
          Toolkit
        </a>
        <a
          href="mailto:alimonna777@gmail.com"
          className="bg-[#c0c1ff] text-[#1000a9] py-2 px-3 sm:px-[1.125rem] rounded-[6px] font-semibold text-sm no-underline hover:opacity-90 transition-opacity"
        >
          Contact Me
        </a>
      </div>
    </div>
  </nav>
);
