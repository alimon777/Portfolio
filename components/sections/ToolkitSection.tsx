import { TOOLKIT } from "@/lib/portfolio-data";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const ToolkitSection = () => (
  <section id="toolkit" className="px-8 py-32 bg-[#191c1e]">
    <div className="max-w-7xl mx-auto">
      <SectionLabel index="04" name="Infrastructure" />
      <h2 className="text-[2.5rem] font-bold tracking-[-0.02em] mb-14">
        The Forge Toolkit
      </h2>
      <div className="flex flex-wrap gap-4">
        {TOOLKIT.map((t) => (
          <div
            key={t.label}
            className="flex items-center gap-2.5 bg-[#1d2022] py-3 px-[1.375rem] rounded-lg"
          >
            <span className="material-symbols-outlined text-[#c0c1ff] text-[18px]">
              {t.icon}
            </span>
            <span className="text-[#c7c4d7] text-[0.9375rem] font-medium">
              {t.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);
