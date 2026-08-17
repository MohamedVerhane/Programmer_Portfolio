import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react"
import { useRef } from "react"
import { cn } from "@/lib/utils"

function Magnetic({
  children,
  strength = 0.3,
  spring = { stiffness: 300, damping: 20 },
  className,
  ...props
}) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, spring)
  const springY = useSpring(y, spring)
  const shouldReduceMotion = useReducedMotion()

  const handleMouseMove = (e) => {
    if (shouldReduceMotion) return
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) * strength)
    y.set((e.clientY - centerY) * strength)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      data-slot="magnetic"
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn("will-change-transform", className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export { Magnetic }
