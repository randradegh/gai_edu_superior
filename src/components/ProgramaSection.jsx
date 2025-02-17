export default function ProgramaSection() {
  return (
    <section className="py-16 px-4 bg-white dark:bg-gray-700 transition-colors duration-300">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Programa del Curso
        </h2>

        <div className="space-y-6">
          {/* Módulo 1 */}
          <div className="bg-slate-50 dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300 flex items-center gap-2">
              <span className="bg-blue-100 dark:bg-blue-900 w-8 h-8 rounded-full flex items-center justify-center">1</span>
              Introducción a la IA generativa en el ámbito educativo y de negocios (2 horas)
            </h3>
            <ul className="mt-3 space-y-2 text-gray-700 dark:text-gray-300 ml-12">
              <li>1.1. Definición y evolución de la IA generativa.</li>
              <li>1.2. Principales modelos LLM y casos de uso en educación y negocios.</li>
              <li>1.3. Revisión de ejemplos y aplicaciones reales.</li>
            </ul>
          </div>

          {/* Módulo 2 */}
          <div className="bg-slate-50 dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300 flex items-center gap-2">
              <span className="bg-blue-100 dark:bg-blue-900 w-8 h-8 rounded-full flex items-center justify-center">2</span>
              Generación de peticiones de alta calidad (3 horas)
            </h3>
            <ul className="mt-3 space-y-2 text-gray-700 dark:text-gray-300 ml-12">
              <li>2.1. Fundamentos del prompt engineering.</li>
              <li>2.2. Técnicas para formular peticiones precisas y efectivas.</li>
              <li>2.3. Taller práctico: creación y validación de prompts utilizando distintos LLM.</li>
              <li>2.4. Referencia: Se recomienda revisar artículos recientes en Arxiv para profundizar en métodos de prompt engineering.</li>
            </ul>
          </div>

          {/* Módulo 3 */}
          <div className="bg-slate-50 dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300 flex items-center gap-2">
              <span className="bg-blue-100 dark:bg-blue-900 w-8 h-8 rounded-full flex items-center justify-center">3</span>
              Creación de recursos educativos con GenAI (3 horas)
            </h3>
            <ul className="mt-3 space-y-2 text-gray-700 dark:text-gray-300 ml-12">
              <li>3.1. Herramientas y plataformas para el desarrollo de contenido educativo.</li>
              <li>3.2. Diseño de casos y materiales didácticos a partir de GenAI.</li>
              <li>3.3. Integración de artículos y estudios de Harvard Business Review o fuentes equivalentes.</li>
              <li>3.4. Taller práctico: elaboración de un recurso educativo basado en IA.</li>
            </ul>
          </div>

          {/* Módulo 4 */}
          <div className="bg-slate-50 dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300 flex items-center gap-2">
              <span className="bg-blue-100 dark:bg-blue-900 w-8 h-8 rounded-full flex items-center justify-center">4</span>
              Evaluación de sesiones de casos y ensayos generados por alumnos (2 horas)
            </h3>
            <ul className="mt-3 space-y-2 text-gray-700 dark:text-gray-300 ml-12">
              <li>4.1. Criterios y rúbricas para evaluar trabajos y casos generados con IA.</li>
              <li>4.2. Uso de GenAI para retroalimentación y corrección de ensayos.</li>
              <li>4.3. Análisis de casos de estudio: ejemplos prácticos y discusión en grupo.</li>
            </ul>
          </div>

          {/* Módulo 5 */}
          <div className="bg-slate-50 dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300 flex items-center gap-2">
              <span className="bg-blue-100 dark:bg-blue-900 w-8 h-8 rounded-full flex items-center justify-center">5</span>
              Planificación de lecciones integrando GenAI (3 horas)
            </h3>
            <ul className="mt-3 space-y-2 text-gray-700 dark:text-gray-300 ml-12">
              <li>5.1. Estrategias para incorporar GenAI en la planificación y desarrollo de clases.</li>
              <li>5.2. Diseño de acciones interactivas y personalizadas con apoyo de herramientas de IA.</li>
              <li>5.3. Taller práctico: desarrollo de un plan de lección utilizando modelos LLM y recursos generados digitalmente.</li>
              <li>5.4. Evaluación de la efectividad de la integración de IA en la enseñanza.</li>
            </ul>
          </div>

          {/* Módulo 6 */}
          <div className="bg-slate-50 dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300 flex items-center gap-2">
              <span className="bg-blue-100 dark:bg-blue-900 w-8 h-8 rounded-full flex items-center justify-center">6</span>
              Ética y consideraciones legales en el uso de GenAI (2 horas)
            </h3>
            <ul className="mt-3 space-y-2 text-gray-700 dark:text-gray-300 ml-12">
              <li>6.1. Principios éticos en la aplicación de tecnologías generativas.</li>
              <li>6.2. Aspectos legales y de privacidad en la utilización de GenAI en el ámbito educativo y empresarial.</li>
              <li>6.3. Discusión de casos reales y análisis de dilemas éticos.</li>
              <li>6.4. Revisión de recomendaciones y buenas prácticas publicadas en fuentes académicas.</li>
            </ul>
          </div>
          {/* Mensaje final */}
          <div className="bg-blue-50 dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <p className="text-lg text-indigo-800 dark:text-indigo-300">
              Cada módulo combina conceptos teóricos con sesiones prácticas y ejemplos del mundo real para garantizar la aplicación directa en el contexto de una maestría en negocios. Se fomentará la discusión y el intercambio de experiencias para adaptar las técnicas de GenAI a diversas asignaturas.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 