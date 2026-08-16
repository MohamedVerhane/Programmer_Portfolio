import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext({ theme: "dark", setTheme: () => {} })

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem("theme")
    if (stored) return stored
    return window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark"
  })

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
    localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
