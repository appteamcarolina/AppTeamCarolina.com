import { motion } from 'framer-motion'

const STROKE = '#4b8cb8'
const ANIM = {
  initial: { pathLength: 0.3, opacity: 0.6 },
  animate: { pathLength: 1, opacity: [0.3, 0.65, 0.3], pathOffset: [0, 1, 0] as [number, number, number] },
  transition: (id: number) => ({ duration: 20 + (id % 7) * 3, repeat: Infinity, ease: 'linear' as const }),
}

// ── About: top-right → bottom-left (mirror of home) ───────────────────────────
function AboutFloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 24 }, (_, i) => ({
    id: i,
    d: `M${1076 + i * 5 * position} -${189 + i * 6}C${1076 + i * 5 * position} -${189 + i * 6} ${1008 + i * 5 * position} ${216 - i * 6} ${544 + i * 5 * position} ${343 - i * 6}C${80 + i * 5 * position} ${470 - i * 6} ${12 + i * 5 * position} ${875 - i * 6} ${12 + i * 5 * position} ${875 - i * 6}`,
    width: 0.5 + i * 0.038,
    opacity: 0.06 + i * 0.018,
  }))
  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 696 316" fill="none">
        {paths.map((p) => (
          <motion.path key={p.id} d={p.d} stroke={STROKE} strokeWidth={p.width} strokeOpacity={p.opacity}
            initial={ANIM.initial} animate={ANIM.animate} transition={ANIM.transition(p.id)} />
        ))}
      </svg>
    </div>
  )
}
export function AboutBackgroundPaths() {
  return <div className="absolute inset-0 overflow-hidden pointer-events-none"><AboutFloatingPaths position={1} /><AboutFloatingPaths position={-1} /></div>
}

// ── Learning: horizontal sine waves that travel fully off both edges ──────────
function LearningFloatingPaths({ flip }: { flip?: boolean }) {
  const paths = Array.from({ length: 24 }, (_, i) => {
    const cy = 20 + i * 8
    const amp = 34 + i * 5
    const f = flip ? -1 : 1
    return {
      id: i,
      d: `M-400 ${cy} C-80 ${cy - amp * f} 200 ${cy + amp * f} 348 ${cy} C496 ${cy - amp * f} 780 ${cy + amp * f} 1096 ${cy}`,
      width: 0.5 + i * 0.038,
      opacity: 0.06 + i * 0.018,
    }
  })
  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 696 316" fill="none">
        {paths.map((p) => (
          <motion.path key={p.id} d={p.d} stroke={STROKE} strokeWidth={p.width} strokeOpacity={p.opacity}
            initial={ANIM.initial} animate={ANIM.animate} transition={ANIM.transition(p.id)} />
        ))}
      </svg>
    </div>
  )
}
export function LearningBackgroundPaths() {
  return <div className="absolute inset-0 overflow-hidden pointer-events-none"><LearningFloatingPaths /><LearningFloatingPaths flip /></div>
}

// ── Production: elegant flowing S-curves, gently rising left→right ────────────
function ProductionFloatingPaths({ invert }: { invert?: boolean }) {
  const paths = Array.from({ length: 24 }, (_, i) => {
    const f = invert ? -1 : 1
    const startY = 20 + i * 9
    const rise = (30 + i * 5) * f
    const amp  = (50 + i * 6) * f
    return {
      id: i,
      d: `M-400 ${startY + rise} C-80 ${startY - amp} 280 ${startY + amp} 548 ${startY} C760 ${startY - amp * 0.5} 920 ${startY + amp * 0.3} 1100 ${startY - rise}`,
      width: 0.5 + i * 0.038,
      opacity: 0.06 + i * 0.018,
    }
  })
  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 696 316" fill="none">
        {paths.map((p) => (
          <motion.path key={p.id} d={p.d} stroke={STROKE} strokeWidth={p.width} strokeOpacity={p.opacity}
            initial={ANIM.initial} animate={ANIM.animate} transition={ANIM.transition(p.id)} />
        ))}
      </svg>
    </div>
  )
}
export function ProductionBackgroundPaths() {
  return <div className="absolute inset-0 overflow-hidden pointer-events-none"><ProductionFloatingPaths /><ProductionFloatingPaths invert /></div>
}

// ── Apps: grass-in-wind — rise from bottom, fan upward and right ──────────────
function AppsFloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M${-100 + i * 22 * position} ${600 + i * 4} C${-60 + i * 18 * position} ${380 + i * 3} ${200 + i * 14 * position} ${160 + i * 2} ${560 + i * 16 * position} ${-200 - i * 4}`,
    width: 0.5 + i * 0.038,
    opacity: 0.06 + i * 0.018,
  }))
  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 696 316" fill="none">
        {paths.map((p) => (
          <motion.path key={p.id} d={p.d} stroke={STROKE} strokeWidth={p.width} strokeOpacity={p.opacity}
            initial={ANIM.initial} animate={ANIM.animate} transition={ANIM.transition(p.id)} />
        ))}
      </svg>
    </div>
  )
}
export function AppsBackgroundPaths() {
  return <div className="absolute inset-0 overflow-hidden pointer-events-none"><AppsFloatingPaths position={1} /><AppsFloatingPaths position={-1} /></div>
}

// ── Apply: centered upward sweep with softer opposing cross-currents ──────────
function ApplyFloatingPaths({ invert }: { invert?: boolean }) {
  const paths = Array.from({ length: 22 }, (_, i) => {
    const f = invert ? -1 : 1
    return {
      id: i,
      d: `M${-120 + i * 16} ${540 + i * 7} C${40 + i * 10} ${360 - i * 2 * f} ${260 + i * 8} ${210 + i * 4 * f} ${530 + i * 10} ${40 - i * 7}`,
      width: 0.45 + i * 0.035,
      opacity: 0.05 + i * 0.016,
    }
  })
  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 696 316" fill="none">
        {paths.map((p) => (
          <motion.path
            key={p.id}
            d={p.d}
            stroke={STROKE}
            strokeWidth={p.width}
            strokeOpacity={p.opacity}
            initial={ANIM.initial}
            animate={ANIM.animate}
            transition={ANIM.transition(p.id)}
          />
        ))}
      </svg>
    </div>
  )
}
export function ApplyBackgroundPaths() {
  return <div className="absolute inset-0 overflow-hidden pointer-events-none"><ApplyFloatingPaths /><ApplyFloatingPaths invert /></div>
}
