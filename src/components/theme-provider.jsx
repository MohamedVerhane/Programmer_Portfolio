import { useCallback, useMemo } from "react"
import { useAppSelector, useAppDispatch } from "@/store/hooks"
import { setTheme as setThemeAction } from "@/store/slices/themeSlice"
import { useEffect } from "react"

export function useTheme() {
  const theme = useAppSelector((s) => s.theme.value)
  const dispatch = useAppDispatch()

  const setTheme = useCallback(
    (value) => dispatch(setThemeAction(value)),
    [dispatch],
  )

  return useMemo(() => ({ theme, setTheme }), [theme, setTheme])
}

export function ThemeEffect() {
  const theme = useAppSelector((s) => s.theme.value)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
    localStorage.setItem("theme", theme)
  }, [theme])

  return null
}
