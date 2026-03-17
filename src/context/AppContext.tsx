'use client'
// src/context/AppContext.tsx
// Manages dark/light theme + EN/AR language switching

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import type { Lang } from '@/lib/translations'

interface AppContextType {
  lang: Lang
  setLang: (l: Lang) => void
  theme: 'dark' | 'light'
  toggleTheme: () => void
  isRTL: boolean
}

const AppContext = createContext<AppContextType>({
  lang: 'en',
  setLang: () => {},
  theme: 'dark',
  toggleTheme: () => {},
  isRTL: false,
})

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en')
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [mounted, setMounted] = useState(false)

  // Hydrate from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('3mourcar-theme') as 'dark' | 'light' | null
    const savedLang = localStorage.getItem('3mourcar-lang') as Lang | null
    if (savedTheme) setTheme(savedTheme)
    if (savedLang) setLangState(savedLang)
    setMounted(true)
  }, [])

  // Apply theme class to <html>
  useEffect(() => {
    if (!mounted) return
    const root = document.documentElement
    if (theme === 'light') {
      root.classList.add('light')
      root.classList.remove('dark')
    } else {
      root.classList.add('dark')
      root.classList.remove('light')
    }
    localStorage.setItem('3mourcar-theme', theme)
  }, [theme, mounted])

  // Apply RTL + Arabic font to <html>
  useEffect(() => {
    if (!mounted) return
    const root = document.documentElement
    root.setAttribute('lang', lang)
    root.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr')
    localStorage.setItem('3mourcar-lang', lang)
  }, [lang, mounted])

  function toggleTheme() {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  }

  function setLang(l: Lang) {
    setLangState(l)
  }

  return (
    <AppContext.Provider value={{ lang, setLang, theme, toggleTheme, isRTL: lang === 'ar' }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  return useContext(AppContext)
}
