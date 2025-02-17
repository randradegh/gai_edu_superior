import React, { useState } from 'react'
import HeroSection from './components/HeroSection'
import ProgramaSection from './components/ProgramaSection'
import RegistrationForm from './components/RegistrationForm'
import AdminLogin from './components/AdminLogin'
import AdminPanel from './components/AdminPanel'

function App() {
  const [isDark, setIsDark] = useState(() => {
    return document.documentElement.classList.contains('dark')
  })
  const [isAdmin, setIsAdmin] = useState(false)
  const [isAdminView, setIsAdminView] = useState(false)

  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)
    
    if (newIsDark) {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
    }
  }

  // Si estamos en la vista de admin
  if (isAdminView) {
    return isAdmin ? (
      <AdminPanel onLogout={() => {
        setIsAdmin(false)
        setIsAdminView(false)
      }} />
    ) : (
      <AdminLogin onLogin={(success) => setIsAdmin(success)} />
    )
  }

  return (
    <main className="min-h-screen bg-white dark:bg-slate-900">
      <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-300">
        {/* Contenedor para los botones */}
        <div className="fixed top-0 left-0 right-0 p-4 flex justify-between items-center z-50">
          {/* Botón de Admin */}
          <button
            onClick={() => setIsAdminView(true)}
            className="p-3 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 
              transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <span className="flex items-center gap-2">
              <span>👤</span>
              <span className="hidden sm:inline">Admin</span>
            </span>
          </button>

          {/* Botón de tema */}
          <button 
            onClick={toggleTheme}
            className="p-3 rounded-lg bg-blue-500 dark:bg-slate-700 text-white 
              hover:scale-105 transition-all duration-300 shadow-lg"
          >
            {isDark ? '🌞' : '🌙'}
          </button>
        </div>
        
        <HeroSection />
        <ProgramaSection />
        <RegistrationForm />
      </div>
    </main>
  )
}

export default App