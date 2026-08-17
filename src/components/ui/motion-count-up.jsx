import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react"
import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

function CountUp({
  target,
  suffix = "",
  prefix = "",
  duration = 1.6,
  className,
  once = true,
  ...props
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: "0px 0px -60px 0px" })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => Math.round(v))
  const display = useTransform(rounded, (v) => `${prefix}${v}${suffix}`)

  useEffect(() => {
    if (!isInView) return
    const controls = animate(count, target, {
      duration,
      ease: [0.16, 1, 0.3, 1],
    })
    return controls.stop
  }, [isInView, count, target, duration])

  return (
    <motion.span
      ref={ref}
      data-slot="count-up"
      className={cn("tabular-nums", className)}
      {...props}
    >
      {display}
    </motion.span>
  )
}

export { CountUp }
