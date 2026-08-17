import { motion, useReducedMotion } from "motion/react"
import { cn } from "@/lib/utils"

function TextReveal({
  children,
  as: Tag = "h1",
  className,
  stagger = 0.06,
  delay = 0,
  once = true,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion()
  const text = typeof children === "string" ? children : ""
  const words = text.split(" ")

  if (shouldReduceMotion) {
    return <Tag className={cn("will-change-transform", className)} {...props}>{children}</Tag>
  }

  return (
    <Tag className={cn("will-change-transform", className)} {...props}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden"
        >
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once, margin: "0px 0px -60px 0px" }}
            transition={{
              duration: 0.4,
              delay: delay + i * stagger,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && "\u00A0"}
        </motion.span>
      ))}
    </Tag>
  )
}

export { TextReveal }
