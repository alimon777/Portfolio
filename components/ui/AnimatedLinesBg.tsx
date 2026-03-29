import { cn } from "@/lib/utils";

interface AnimatedLinesBgProps {
  className?: string;
}

// One continuous river-like path snaking from top (y=0) to bottom (y=900)
// confined to the right ~45% of the viewBox (x: 95–200).
// Three short tributaries branch off and rejoin the main channel.
// viewBox "0 0 200 900" + preserveAspectRatio="none" lets the SVG stretch
// to fill the full page height so the river passes through every section.

const TRUNK =
  "M 185 0 L 185 38 Q 185 50 173 50 L 147 50 Q 135 50 135 62 L 135 118 Q 135 130 147 130 L 175 130 Q 187 130 187 142 L 187 218 Q 187 230 175 230 L 145 230 Q 133 230 133 242 L 133 342 Q 133 354 145 354 L 178 354 Q 190 354 190 366 L 190 440 Q 190 452 178 452 L 158 452 Q 146 452 146 464 L 146 574 Q 146 586 158 586 L 180 586 Q 192 586 192 598 L 192 680 Q 192 692 180 692 L 158 692 Q 146 692 146 704 L 146 900";

const RIGHT_LINE =
  "M 135 88 L 200 88";

const TRIB2 =
  "M 133 280 L 112 280 Q 100 280 100 292 L 100 332 Q 100 344 112 344 L 133 344";

const TRIB3 =
  "M 146 510 L 120 510 Q 108 510 108 522 L 108 562 Q 108 574 120 574 L 146 574";

export const AnimatedLinesBg = ({ className }: AnimatedLinesBgProps) => (
  <svg
    className={cn("pointer-events-none", className)}
    width="100%"
    height="100%"
    viewBox="0 0 200 900"
    preserveAspectRatio="none"
  >
    {/* ── River channel strokes ── */}
    <g stroke="currentColor" fill="none" strokeWidth="0.12" strokeOpacity="0.12" color="var(--c-accent)">
      <path d={TRUNK} />
      <path d={RIGHT_LINE} />
      <path d={TRIB2} />
      <path d={TRIB3} />
    </g>

    {/* ── Four orbs staggered along the main trunk ── */}
    <g mask="url(#lm-trunk)"><circle className="animated-line trunk-1" cx="0" cy="0" r="25" fill="url(#lg-cyan)"   /></g>
    <g mask="url(#lm-trunk)"><circle className="animated-line trunk-2" cx="0" cy="0" r="25" fill="url(#lg-blue)"   /></g>
    <g mask="url(#lm-trunk)"><circle className="animated-line trunk-3" cx="0" cy="0" r="25" fill="url(#lg-purple)" /></g>
    <g mask="url(#lm-trunk)"><circle className="animated-line trunk-4" cx="0" cy="0" r="25" fill="url(#lg-cyan)"   /></g>

    {/* ── One orb per tributary ── */}
    <g mask="url(#lm-right)"><circle className="animated-line right-1" cx="0" cy="0" r="15" fill="url(#lg-pink)"   /></g>
    <g mask="url(#lm-trib2)"><circle className="animated-line trib-2" cx="0" cy="0" r="15" fill="url(#lg-green)"  /></g>
    <g mask="url(#lm-trib3)"><circle className="animated-line trib-3" cx="0" cy="0" r="15" fill="url(#lg-yellow)" /></g>

    <defs>
      {/* Masks MUST exactly match the stroke paths above */}
      <mask id="lm-trunk"><path d={TRUNK} stroke="white" strokeWidth="1.2" fill="none" /></mask>
      <mask id="lm-right"><path d={RIGHT_LINE} stroke="white" strokeWidth="1.2" fill="none" /></mask>
      <mask id="lm-trib2"><path d={TRIB2} stroke="white" strokeWidth="1.2" fill="none" /></mask>
      <mask id="lm-trib3"><path d={TRIB3} stroke="white" strokeWidth="1.2" fill="none" /></mask>

      <radialGradient id="lg-cyan"   fx="1"><stop offset="0%" stopColor="#5eead4" stopOpacity="0.30" /><stop offset="100%" stopColor="transparent" /></radialGradient>
      <radialGradient id="lg-blue"   fx="1"><stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.25" /><stop offset="100%" stopColor="transparent" /></radialGradient>
      <radialGradient id="lg-yellow" fx="1"><stop offset="0%" stopColor="#fbbf24" stopOpacity="0.22" /><stop offset="100%" stopColor="transparent" /></radialGradient>
      <radialGradient id="lg-pink"   fx="1"><stop offset="0%" stopColor="#f97316" stopOpacity="0.22" /><stop offset="100%" stopColor="transparent" /></radialGradient>
      <radialGradient id="lg-green"  fx="1"><stop offset="0%" stopColor="#34d399" stopOpacity="0.25" /><stop offset="100%" stopColor="transparent" /></radialGradient>
      <radialGradient id="lg-purple" fx="1"><stop offset="0%" stopColor="#14b8a6" stopOpacity="0.28" /><stop offset="100%" stopColor="transparent" /></radialGradient>
    </defs>
  </svg>
);
