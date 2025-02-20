import React, { useState } from 'react'
import HeroSection from './components/HeroSection'
import ProgramaSection from './components/ProgramaSection'

function App() {
  const [isDark, setIsDark] = useState(() => {
    return document.documentElement.classList.contains('dark')
  })

  const toggleDarkMode = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <main className="min-h-screen bg-white dark:bg-slate-900">
      <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-300">
        {/* Contenedor para el botón de tema */}
        <div className="fixed top-0 left-0 right-0 p-4 flex justify-end items-center z-50">
          <button
            onClick={toggleDarkMode}
            className="px-4 py-2 rounded-lg bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors duration-300"
          >
            {isDark ? '☀️' : '🌙'}
          </button>
        </div>
        
        <HeroSection />
        <ProgramaSection />
        
        {/* Sección de Instrucciones de registro */}
        <section className="py-16 px-4 bg-blue-900 dark:bg-blue-950 text-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-blue-300 mb-8 text-center">
              Instrucciones para registrarse al curso
            </h2>
            
            <div className="bg-blue-800/50 rounded-xl p-8">
              <p className="text-lg mb-6">
                Para inscribirse al curso, por favor envíe un correo electrónico a:{' '}
                <span className="text-yellow-400 font-bold">randradedev@gmail.com</span>
              </p>
              
              <div className="space-y-6">
                <p className="text-lg">Su correo debe incluir los siguientes datos:</p>
                
                <ul className="space-y-4 text-lg pl-6">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-300">📝</span>
                    <span>Nombre completo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-300">📧</span>
                    <span>Correo electrónico</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-300">🏫</span>
                    <span>Escuela en la que trabaja</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-300">📚</span>
                    <span>Nivel en el que imparte docencia</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-300">🌎</span>
                    <span>Ciudad y país de residencia</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-300">🤖</span>
                    <span>¿Qué experiencia tiene usando inteligencia artificial generativa?</span>
                  </li>
                </ul>
                
                <div className="bg-blue-950/30 p-6 rounded-lg border border-blue-400/30 mt-8">
                  <p className="text-blue-300 text-center">
                    <span className="text-2xl">💡</span>
                    <br />
                    <span className="font-bold">Importante:</span> Menciona en el asunto del correo 
                    "Inscripción al Curso de IA en Docencia"
                    <br />
                    <br />
                    <b>En respuesta al correo recibirá las instrucciones para pagar el curso y 
                    una vez realizado el pago, recibirá el enlace para acceder al curso y 
                    otros detalles necesarios para su participación.</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default App