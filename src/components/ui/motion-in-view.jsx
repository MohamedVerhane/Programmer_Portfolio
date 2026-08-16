import { motion, useReducedMotion } from "motion/react"
import { cn } from "@/lib/utils"

function InView({
  children,
  variants,
  transition = { duration: 0.4, ease: "easeOut" },
  delay = 0,
  className,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion()
  const transitionDuration = transition?.duration ?? 0.4

  return (
    <motion.div
      data-slot="in-view"
      variants={
        variants ?? {
          hidden: {
            opacity: 0,
            y: shouldReduceMotion ? 0 : 24,
            transition: { duration: transitionDuration },
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: transitionDuration },
          },
        }
      }
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ ...transition, delay }}
      className={cn("will-change-transform", className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export { InView }
