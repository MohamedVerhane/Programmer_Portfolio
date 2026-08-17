import { motion, useReducedMotion } from "motion/react"
import { cn } from "@/lib/utils"

function Float({
  children,
  y = 8,
  duration = 3,
  delay = 0,
  className,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className} {...props}>{children}</div>
  }

  return (
    <motion.div
      data-slot="float"
      animate={{ y: [0, -y, 0] }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      className={cn("will-change-transform", className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export { Float }
