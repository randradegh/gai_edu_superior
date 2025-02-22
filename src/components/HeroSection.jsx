import profesorImage from '../assets/profesor-ia.jpg'

export default function HeroSection() {
  return (
    <>
      {/* Primera sección - Hero principal */}
      <section className="py-16 px-4 bg-slate-200 dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-300">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-start gap-12 max-w-7xl mx-auto">
            {/* Contenido principal - Ahora primero */}
            <div className="lg:w-7/12 text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Revoluciona tu Docencia con Inteligencia Artificial
              </h1>
              
              <div className="text-xl md:text-2xl space-y-8">
                <p className="font-semibold text-blue-700 dark:text-blue-300">
                  ¡Impulsa tu enseñanza con GenAI!
                </p>
                
                <p className="text-gray-700 dark:text-gray-200">
                  Descubre el poder transformador de la Inteligencia Artificial Generativa en la educación superior.
                </p>

                <div className="text-left space-y-4 px-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🎯</span>
                    <p>
                      <span className="font-bold">Innovación en el aula:</span> Incorpora tecnologías 
                      emergentes para revolucionar tus métodos de enseñanza.
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">⚡</span>
                    <p>
                      <span className="font-bold">Herramientas prácticas:</span> Aprende ingeniería 
                      de prompts y crea recursos pedagógicos impactantes.
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📊</span>
                    <p>
                      <span className="font-bold">Evaluación avanzada:</span> Domina técnicas para 
                      evaluar trabajos y fomentar el pensamiento crítico.
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📝</span>
                    <p>
                      <span className="font-bold">Planificación curricular:</span> Integra GenAI en 
                      el diseño de lecciones y actividades interactivas.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🔒</span>
                    <p>
                      <span className="font-bold">Ética y responsabilidad:</span> Analiza riesgos y 
                      establece protocolos para un uso responsable.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Imagen - Ahora a la derecha y más grande */}
            <div className="lg:w-7/12 w-full">
              <div className="relative w-full">
                <img
                  src={profesorImage}
                  alt="Profesor interactuando con interfaz de IA"
                  className="rounded-xl shadow-2xl w-full h-auto object-cover 
                    transform hover:scale-[1.02] transition-transform duration-300"
                  style={{
                    maxHeight: '800px',
                    objectPosition: 'center 20%'
                  }}
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Segunda sección - Características del curso */}
      <section className="py-16 px-4 bg-slate-800 dark:bg-gray-900 text-white">
        <div className="container mx-auto max-w-6xl">
          {/* Lista de características */}
          <div className="bg-slate-700/50 rounded-xl p-8 mb-12">
            <ul className="space-y-6 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-2xl">📚</span>
                <p>
                  Este curso intensivo de 15 horas (5 sesiones de 3 horas) está diseñado 
                  especialmente para profesores de diversas disciplinas.
                </p>
              </li>
              
              <li className="flex items-start gap-3">
                <span className="text-2xl">🔄</span>
                <p>
                  A lo largo de los módulos, explorarás un recorrido completo: desde los 
                  fundamentos de la IA generativa y la ingeniería de prompts hasta técnicas 
                  avanzadas de evaluación y planificación de lecciones potenciadas con 
                  <span className="text-blue-300 font-semibold"> inteligencia artificial generativa</span>.
                </p>
              </li>
              
              <li className="flex items-start gap-3">
                <span className="text-2xl">🎯</span>
                <p>
                  Mediante ejemplos prácticos y dinámicas colaborativas, desarrollarás las 
                  habilidades necesarias para transformar tu práctica docente y maximizar el 
                  potencial de la <span className="text-blue-300 font-semibold">inteligencia artificial generativa</span> en el entorno educativo.
                </p>
              </li>
            </ul>
          </div>
          {/* Información de inversión */}
          <div className="bg-slate-700/50 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-blue-300 mb-4 flex items-center gap-3">
              <span>💰</span>
              Inversión
            </h3>
            <div className="space-y-4">
              <p className="text-xl text-center">
                <span className="text-yellow-400 font-bold text-2xl">$2,000 MXN</span>
                <span className="text-gray-300 ml-2">por participante</span>
              </p>
              <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-400/30">
                <p className="text-blue-300 text-center">
                  <span className="font-bold text-orange-500">¡Descuento especial del 25% para docentes de la Maestría en Alta Dirección de la Facultad de Química de la UNAM!</span> 
                </p>
              </div>
            </div>
            
          </div>

          {/* Calendario */}
          <div className="bg-slate-700/50 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-blue-300 mb-4 flex items-center gap-3">
              <span>📅</span>
              Calendario
            </h3>
            <div className="space-y-4">
              <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-400/30">
                <p className="text-blue-300 text-center">
                  <span className="font-bold text-slate-400">10, 11, 12, 18 y 19 de marzo de 2025</span> 
                </p>
                <p className="text-blue-300 text-center">
                  <span className="font-bold text-blue-400">18 a 21 horas</span> 
                </p>
                <p className="text-blue-300 text-center">
                  <span className="font-bold text-orange-400">Vía Google Meet</span> 
                </p>
              </div>
            </div>
            
          </div>

          {/* Tarjetas de beneficios */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-700/50 p-6 rounded-xl hover:bg-slate-700/70 transition-colors">
              <span className="text-3xl mb-3 block">🎯</span>
              <h3 className="text-xl font-bold text-blue-300 mb-2">
                Evaluaciones Inteligentes
              </h3>
              <p className="text-gray-300">
                Genera y califica evaluaciones automáticamente
              </p>
            </div>
            
            <div className="bg-slate-700/50 p-6 rounded-xl hover:bg-slate-700/70 transition-colors">
              <span className="text-3xl mb-3 block">🤖</span>
              <h3 className="text-xl font-bold text-blue-300 mb-2">
                Tutorías Personalizadas
              </h3>
              <p className="text-gray-300">
                Asistencia continua para cada estudiante
              </p>
            </div>
            
            <div className="bg-slate-700/50 p-6 rounded-xl hover:bg-slate-700/70 transition-colors">
              <span className="text-3xl mb-3 block">📚</span>
              <h3 className="text-xl font-bold text-blue-300 mb-2">
                Contenido Dinámico
              </h3>
              <p className="text-gray-300">
                Materiales que evolucionan con tus alumnos
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105 
              bg-yellow-400 text-gray-900 
              shadow-lg hover:shadow-xl text-xl">
              ¡Transforma tu Docencia Ahora!
            </button>
          </div>
        </div>
      </section>
    </>
  )
}