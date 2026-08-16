import { motion } from "motion/react"
import { createContext, useContext } from "react"
import { cn } from "@/lib/utils"

const StaggerContext = createContext({
  childVariants: {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  },
})

function useStagger() {
  return useContext(StaggerContext)
}

function Stagger({
  children,
  className,
  stagger = 0.08,
  delay = 0,
  childVariants,
  ...props
}) {
  return (
    <StaggerContext.Provider
      value={{
        childVariants: childVariants ?? {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
        },
      }}
    >
      <motion.div
        data-slot="stagger"
        variants={{
          initial: { opacity: 0, y: 24 },
          animate: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: stagger, delayChildren: delay },
          },
        }}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "0px 0px -80px 0px" }}
        className={cn("will-change-transform", className)}
        {...props}
      >
        {children}
      </motion.div>
    </StaggerContext.Provider>
  )
}

function StaggerItem({ className, ...props }) {
  const { childVariants } = useStagger()
  return (
    <motion.div
      data-slot="stagger-item"
      variants={childVariants}
      className={cn("will-change-transform", className)}
      {...props}
    />
  )
}

export { Stagger, StaggerItem }
