import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ElegantShape } from "@/components/ui/shape-landing-hero";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
  actions?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  className,
  actions,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden px-[var(--gutter)] pt-32 pb-16 md:pt-40 md:pb-24",
        className
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.18),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(244,63,94,0.12),transparent_24%),linear-gradient(180deg,#071017_0%,#0b151c_60%,#0b151c_100%)]" />
      <div className="absolute inset-0 opacity-70">
        <ElegantShape
          delay={0.2}
          width={460}
          height={110}
          rotate={-14}
          gradient="from-sky-400/[0.16]"
          className="-left-20 top-24"
        />
        <ElegantShape
          delay={0.35}
          width={320}
          height={84}
          rotate={18}
          gradient="from-fuchsia-400/[0.16]"
          className="right-0 top-20"
        />
        <ElegantShape
          delay={0.45}
          width={280}
          height={72}
          rotate={8}
          gradient="from-cyan-300/[0.14]"
          className="bottom-6 right-[18%]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400 shadow-[0_0_16px_rgba(251,113,133,0.8)]" />
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-white/65">
            {eyebrow}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 max-w-4xl text-5xl font-bold leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-8xl"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 max-w-2xl text-lg leading-8 text-white/62 md:text-xl"
        >
          {description}
        </motion.p>

        {actions && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            {actions}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-12 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-white/50"
        >
          <ArrowRight className="h-4 w-4" />
          Built bigger, cleaner, and more legible across every route
        </motion.div>
      </div>
    </section>
  );
}
