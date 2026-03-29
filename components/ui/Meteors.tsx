"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState, useMemo } from "react";

interface MeteorStyle {
  top: string;
  left: string;
  delay: string;
  duration: string;
}

interface MeteorsProps {
  number?: number;
  className?: string;
}

export const Meteors = ({ number = 20, className }: MeteorsProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  // Each meteor is a point that moves along rotate(35deg) — diagonally top-right to bottom-left.
  // The ::before tail extends behind the dot in the direction of travel.
  // top/left define where the LEADING EDGE ends up at translateX(0) i.e. the destination.
  // With rotate(35deg) translateX(-600px): dx = -600*cos35 ≈ -491, dy = -600*sin35 ≈ -344
  // so origin is 491px to the left and 344px above the destination — upper-left corner.
  const styles = useMemo<MeteorStyle[]>(
    () =>
      Array.from({ length: number }, () => ({
        // Destination spread across entire card width and lower 2/3
        top:  Math.floor(Math.random() * 60 + 40) + "%",
        left: Math.floor(Math.random() * 110 - 5) + "%",
        delay:    (Math.random() * 6).toFixed(2) + "s",
        duration: (Math.random() * 3 + 3).toFixed(1) + "s",
      })),
    [number]
  );

  if (!mounted) return null;

  return (
    <>
      {styles.map((s, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            // rotate(35deg) travels top-left → bottom-right
            "absolute h-px w-px rounded-full rotate-[35deg]",
            // tail behind the dot (trailing left = toward origin)
            "before:content-[''] before:absolute before:top-1/2 before:-translate-y-1/2 before:right-0 before:w-[80px] before:h-px before:bg-gradient-to-l before:from-[#5eead4] before:to-transparent",
            className
          )}
          style={{
            top: s.top,
            left: s.left,
            background: "#5eead4",
            boxShadow: "0 0 6px 2px rgba(94,234,212,0.6)",
            animation: `meteor ${s.duration} linear ${s.delay} infinite`,
          }}
        />
      ))}
    </>
  );
};
