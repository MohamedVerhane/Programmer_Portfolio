import { createContext, useContext, useEffect, useState } from "react"
import { translations } from "../lib/translations"

const LanguageContext = createContext({
  lang: "en",
  setLang: () => {},
  t: (key) => key,
})

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(
    () => localStorage.getItem("lang") || "en"
  )

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

  const t = (key) => translations[lang][key] ?? translations.en[key] ?? key

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
