import { PROJECTS } from "@/lib/portfolio-data";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { ProjectItem } from "@/types/portfolio";

interface ProjectCardProps extends ProjectItem {}

const ProjectCard = ({
  title,
  badge,
  badgeIcon,
  desc,
  tags,
  link,
}: ProjectCardProps) => (
  <div className="bg-[#1d2022] rounded-xl p-8 flex flex-col transition-colors duration-200 hover:bg-[#272a2d]">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-3">
        <span className="material-symbols-outlined text-[#c0c1ff] text-[20px]">
          {badgeIcon}
        </span>
        {badge && (
          <span className="bg-[#3f465c] text-[#bec6e0] font-mono text-[0.6875rem] py-1 px-2.5 rounded tracking-[0.06em] uppercase">
            {badge}
          </span>
        )}
      </div>
      {link && (
        <span className="material-symbols-outlined text-[#908fa0] text-[18px] cursor-pointer">
          open_in_new
        </span>
      )}
    </div>
    <h3 className="text-[#e1e3e6] text-xl font-semibold mb-3">{title}</h3>
    <p className="text-[#c7c4d7] text-sm leading-[1.65] mb-6 flex-1">{desc}</p>
    <div className="flex items-center gap-2 flex-wrap">
      {tags.map((tag) => (
        <span
          key={tag}
          className="text-[#c0c1ff] font-mono text-[0.6875rem] tracking-[0.05em]"
        >
          #{tag}
        </span>
      ))}
      {link && (
        <span className="ml-auto flex items-center gap-1.5 text-[#c7c4d7] text-[0.8125rem] cursor-pointer">
          View Source
          <span className="material-symbols-outlined text-[14px]">
            open_in_new
          </span>
        </span>
      )}
    </div>
  </div>
);

export const ProjectsSection = () => (
  <section id="projects" className="px-8 py-32 bg-[#191c1e]">
    <div className="max-w-7xl mx-auto">
      <SectionLabel index="02" name="Selected Works" />
      <h2 className="text-[2.5rem] font-bold tracking-[-0.02em] mb-14">
        Project Nexus
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(340px,1fr))] gap-6">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </div>
  </section>
);
