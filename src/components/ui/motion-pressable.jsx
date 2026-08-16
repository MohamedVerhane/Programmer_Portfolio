import { motion } from "motion/react"

function Pressable({ children, ...props }) {
  return (
    <motion.button
      data-slot="pressable"
      whileTap={{ scale: 0.96 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.15 }}
      className="cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      {...props}
    >
      {children}
    </motion.button>
  )
}

export { Pressable }
