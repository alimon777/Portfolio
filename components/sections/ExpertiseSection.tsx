import { EXPERTISE_CARDS } from "@/lib/portfolio-data";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { ExpertiseCardItem } from "@/types/portfolio";

interface ExpertiseCardProps extends ExpertiseCardItem {}

const ExpertiseCard = ({ icon, title, desc }: ExpertiseCardProps) => (
  <div className="bg-[#1d2022] rounded-xl p-8 transition-colors duration-200 hover:bg-[#272a2d]">
    <div className="bg-[#272a2d] rounded-lg p-2.5 inline-flex mb-5">
      <span className="material-symbols-outlined text-[#c0c1ff] text-[20px]">
        {icon}
      </span>
    </div>
    <h3 className="text-[#e1e3e6] text-lg font-semibold mb-2.5">{title}</h3>
    <p className="text-[#c7c4d7] text-sm leading-[1.65]">{desc}</p>
  </div>
);

export const ExpertiseSection = () => (
  <section id="expertise" className="px-8 py-32 max-w-7xl mx-auto">
    <SectionLabel index="01" name="Architecture" />
    <h2 className="text-[2.5rem] font-bold tracking-[-0.02em] mb-3">
      Core Expertise
    </h2>
    <p className="text-[#c7c4d7] text-base mb-14 max-w-[480px]">
      Bridging backend engineering with AI — from REST APIs and microservices
      to agentic RAG pipelines and cloud-native deployments.
    </p>
    <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
      {EXPERTISE_CARDS.map((card) => (
        <ExpertiseCard key={card.title} {...card} />
      ))}
    </div>
  </section>
);
