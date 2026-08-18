import { useCallback, useMemo } from "react"
import { useAppSelector, useAppDispatch } from "@/store/hooks"
import { setLang as setLangAction, selectLang } from "@/store/slices/languageSlice"
import { translations } from "@/lib/translations"
import { useEffect } from "react"

export function useLanguage() {
  const lang = useAppSelector(selectLang)
  const dispatch = useAppDispatch()

  const setLang = useCallback(
    (l) => dispatch(setLangAction(l)),
    [dispatch],
  )

  const t = useCallback(
    (key) => translations[lang][key] ?? translations.en[key] ?? key,
    [lang],
  )

  return useMemo(() => ({ lang, setLang, t }), [lang, setLang, t])
}

export function LanguageEffect() {
  const lang = useAppSelector(selectLang)

  useEffect(() => {
    const dir = lang === "ar" ? "rtl" : "ltr"
    document.documentElement.dir = dir
    document.documentElement.lang = lang
    localStorage.setItem("lang", lang)
    document.title = translations[lang]["meta.title"]
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", translations[lang]["meta.description"])
  }, [lang])

  return null
}
