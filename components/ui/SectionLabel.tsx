interface SectionLabelProps {
  index: string;
  name: string;
}

export const SectionLabel = ({ index, name }: SectionLabelProps) => (
  <div className="flex items-center gap-2.5 mb-4">
    <span className="text-[#c0c1ff] font-mono text-xs tracking-[0.1em]">
      {index} //
    </span>
    <span className="text-[#908fa0] font-mono text-xs tracking-[0.1em] uppercase">
      {name}
    </span>
  </div>
);
