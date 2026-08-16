import { AnimatePresence, motion } from "motion/react"
import { cn } from "@/lib/utils"

function Collapse({ className, open = true, children, ...props }) {
  return (
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          data-slot="collapse"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className={cn("overflow-hidden", className)}
          {...props}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export { Collapse }
