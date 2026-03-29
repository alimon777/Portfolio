"use client";
import { useRef, useState } from "react";
import { PROJECT_GROUPS } from "@/lib/portfolio-data";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { ProjectItem } from "@/types/portfolio";

interface ProjectCardProps extends ProjectItem {
  onTagClick: (tag: string) => void;
  onBadgeClick: (badge: string) => void;
}

const ProjectCard = ({ title, badge, badgeIcon, desc, tags, appLink, codeUrl, onTagClick, onBadgeClick }: ProjectCardProps) => {
  return (
    <div
      role={appLink ? "link" : undefined}
      tabIndex={appLink ? 0 : undefined}
      onClick={() => { if (appLink) window.open(appLink, "_blank", "noopener,noreferrer"); }}
      onKeyDown={(e) => { if (appLink && (e.key === "Enter" || e.key === " ")) window.open(appLink, "_blank", "noopener,noreferrer"); }}
      className="rounded-xl p-8 flex flex-col h-full transition-colors duration-200 no-underline"
      style={{ background: "var(--c-bg-card)", cursor: appLink ? "pointer" : "default" }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "var(--c-bg-card-hover)")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "var(--c-bg-card)")}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-[20px]" style={{ color: "var(--c-accent)" }}>{badgeIcon}</span>
          {badge && (
            <span
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); onBadgeClick(badge); }}
              className="font-mono text-[0.6875rem] py-1 px-2.5 rounded tracking-[0.06em] uppercase cursor-pointer transition-opacity hover:opacity-70"
              style={{ background: "var(--c-badge-bg)", color: "var(--c-badge-fg)" }}
              title={`Filter by "${badge}"`}
            >
              {badge}
            </span>
          )}
        </div>
        {appLink && (
          <span className="material-symbols-outlined text-[18px]" style={{ color: "var(--c-fg-muted)" }}>open_in_new</span>
        )}
      </div>
      <h3 className="text-xl font-semibold mb-3" style={{ color: "var(--c-fg)" }}>{title}</h3>
      <p className="text-sm leading-[1.65] mb-6 flex-1" style={{ color: "var(--c-fg-secondary)" }}>{desc}</p>
      <div className="flex items-center gap-2 flex-wrap">
        {tags.map((tag) => (
          <span
            key={tag}
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); onTagClick(tag); }}
            className="font-mono text-[0.6875rem] tracking-[0.05em] cursor-pointer transition-opacity hover:opacity-60"
            style={{ color: "var(--c-accent)" }}
            title={`Filter by #${tag}`}
          >
            #{tag}
          </span>
        ))}
        {codeUrl && (
          <a
            href={codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="ml-auto flex items-center gap-1.5 text-[0.8125rem] transition-opacity hover:opacity-70"
            style={{ color: "var(--c-fg-secondary)" }}
            title="View source code"
          >
            <span className="material-symbols-outlined text-[14px]">code_blocks</span>
          </a>
        )}
      </div>
    </div>
  );
};

export const ProjectsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeGroup, setActiveGroup] = useState(0);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const addFilter = (tag: string) => {
    setActiveFilters((prev) => (prev.includes(tag) ? prev : [...prev, tag]));
  };
  const removeFilter = (tag: string) => {
    setActiveFilters((prev) => prev.filter((f) => f !== tag));
  };

  const allProjects = PROJECT_GROUPS[activeGroup].projects;
  const filteredProjects =
    activeFilters.length === 0
      ? allProjects
      : allProjects.filter((p) =>
          activeFilters.some((f) => p.tags.includes(f) || p.badge === f)
        );

  const scroll = (dir: "prev" | "next") => {
    if (!scrollRef.current) return;
    const child = scrollRef.current.firstElementChild as HTMLElement | null;
    const step = (child?.offsetWidth ?? 340) + 24;
    scrollRef.current.scrollBy({ left: dir === "next" ? step : -step, behavior: "smooth" });
  };

  return (
    <section id="projects" className="px-4 sm:px-8 py-32" style={{ background: "var(--c-bg-alt)" }}>
      <div className="max-w-7xl mx-auto">
        <SectionLabel index="02" name="Selected Works" />
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-6 sm:mb-8">
          <h2 className="text-[2.5rem] font-bold tracking-[-0.02em]" style={{ color: "var(--c-fg)" }}>{'Project\u00A0Nexus'}</h2>
          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => scroll("prev")}
              aria-label="Previous projects"
              className="w-10 h-10 rounded-lg border flex items-center justify-center transition-colors hover:border-[var(--c-border-hover)]"
              style={{ borderColor: "var(--c-border-strong)", color: "var(--c-fg-muted)" }}
            >
              <span className="material-symbols-outlined text-[20px]">chevron_left</span>
            </button>
            <button
              onClick={() => scroll("next")}
              aria-label="Next projects"
              className="w-10 h-10 rounded-lg border flex items-center justify-center transition-colors hover:border-[var(--c-border-hover)]"
              style={{ borderColor: "var(--c-border-strong)", color: "var(--c-fg-muted)" }}
            >
              <span className="material-symbols-outlined text-[20px]">chevron_right</span>
            </button>
          </div>
        </div>

        {/* Group tabs */}
        <div className="flex gap-3 mb-6 flex-wrap">
          {PROJECT_GROUPS.map((group, i) => (
            <button
              key={group.name}
              onClick={() => {
                setActiveGroup(i);
                setActiveFilters([]);
                scrollRef.current?.scrollTo({ left: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-2 py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200"
              style={{
                background: activeGroup === i ? "var(--c-accent)" : "var(--c-bg-card)",
                color: activeGroup === i ? "var(--c-btn-text)" : "var(--c-fg-muted)",
                border: activeGroup === i ? "none" : "1px solid var(--c-border)",
              }}
            >
              <span className="material-symbols-outlined text-[16px]">{group.icon}</span>
              {group.name}
            </button>
          ))}
        </div>

        {/* Active filter chips */}
        {activeFilters.length > 0 && (
          <div className="flex items-center gap-2 flex-wrap mb-6">
            <span className="text-xs font-mono" style={{ color: "var(--c-fg-muted)" }}>Filters:</span>
            {activeFilters.map((f) => (
              <span
                key={f}
                className="inline-flex items-center gap-1 text-xs font-mono py-1 px-3 rounded-full"
                style={{
                  background: "rgba(94,234,212,0.10)",
                  color: "var(--c-accent)",
                  border: "1px solid rgba(94,234,212,0.28)",
                }}
              >
                {f}
                <button
                  onClick={() => removeFilter(f)}
                  aria-label={`Remove filter ${f}`}
                  className="ml-0.5 flex items-center hover:opacity-60 transition-opacity"
                >
                  <span className="material-symbols-outlined text-[13px]">close</span>
                </button>
              </span>
            ))}
            <button
              onClick={() => setActiveFilters([])}
              className="text-xs font-mono hover:opacity-60 transition-opacity"
              style={{ color: "var(--c-fg-muted)" }}
            >
              Clear all
            </button>
          </div>
        )}

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar pb-2"
          style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none" }}
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((p) => (
              <div
                key={p.title}
                className="flex-shrink-0 flex flex-col"
                style={{ width: "min(340px, 80vw)", scrollSnapAlign: "start" }}
              >
                <ProjectCard {...p} onTagClick={addFilter} onBadgeClick={addFilter} />
              </div>
            ))
          ) : (
            <p className="py-12 text-sm" style={{ color: "var(--c-fg-muted)" }}>
              No projects match the selected filters.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
