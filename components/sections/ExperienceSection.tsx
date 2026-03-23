import { TIMELINE } from "@/lib/portfolio-data";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const ExperienceSection = () => (
  <section id="experience" className="px-8 py-32 max-w-7xl mx-auto">
    <SectionLabel index="03" name="The Journey" />
    <h2 className="text-[2.5rem] font-bold tracking-[-0.02em] mb-14">
      Professional Journey
    </h2>
    <div>
      {TIMELINE.map((job) => (
        <div
          key={job.company}
          className="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-4 sm:gap-12 py-10 border-t border-[rgba(70,69,84,0.3)]"
        >
          <div>
            <div className="text-[#908fa0] font-mono text-xs tracking-[0.05em] mb-1.5">
              {job.period}
            </div>
            <div className="text-[#c7c4d7] text-sm font-medium">
              {job.company}
            </div>
          </div>
          <div>
            <h3 className="text-[#e1e3e6] text-xl font-semibold mb-3">
              {job.role}
            </h3>
            <p className="text-[#908fa0] text-sm leading-[1.7]">{job.desc}</p>
          </div>
        </div>
      ))}
      <div className="border-b border-[rgba(70,69,84,0.3)]" />
    </div>
  </section>
);
