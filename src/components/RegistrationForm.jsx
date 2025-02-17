import { useState } from 'react'

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    institucion: '',
    telefono: '',
    ubicacion: '',
    experiencia: ''
  })

  const [errors, setErrors] = useState({})

  const validateField = (name, value) => {
    let error = ''
    
    switch(name) {
      case 'nombre':
        if (!value.trim()) error = 'El nombre es obligatorio'
        break
      case 'email':
        if (!value.trim()) error = 'El correo es obligatorio'
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
          error = 'Correo electrónico inválido'
        }
        break
      case 'telefono':
        if (!value.trim()) error = 'El teléfono es obligatorio'
        else if (!/^\+?[\d\s-]{10,}$/.test(value)) {
          error = 'Formato de teléfono inválido'
        }
        break
      default:
        if (!value.trim()) error = 'Este campo es obligatorio'
    }
    
    setErrors(prev => ({...prev, [name]: error}))
    return !error
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let isValid = true
    
    // Validar todos los campos
    Object.entries(formData).forEach(([key, value]) => {
      if (!validateField(key, value)) isValid = false
    })
    
    if (isValid) {
      try {
        const response = await fetch('http://localhost:3001/api/save-registration', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })

        if (response.ok) {
          alert('¡Registro exitoso!')
          setFormData({
            nombre: '',
            email: '',
            institucion: '',
            telefono: '',
            ubicacion: '',
            experiencia: ''
          })
        } else {
          throw new Error('Error al guardar el registro')
        }
      } catch (error) {
        alert('Hubo un error al procesar tu registro. Por favor, intenta nuevamente.')
        console.error('Error:', error)
      }
    }
  }

  return (
    <section className="py-16 px-4 bg-indigo-50 dark:bg-gray-500">
      <div className="container mx-auto max-w-3xl bg-slate-100 dark:bg-gray-700 rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold mb-8 text-center text-indigo-600 dark:text-indigo-300">
          Solicitud de Inscripción
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nombre completo */}
          <div>
            <label className="block mb-2 font-medium text-gray-700 dark:text-gray-200">
              Nombre completo *
            </label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={(e) => setFormData({...formData, nombre: e.target.value})}
              onBlur={(e) => validateField('nombre', e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-500 
                bg-white dark:bg-gray-600 text-gray-900 dark:text-white 
                focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400
                transition-colors duration-300"
              placeholder="Ingresa tu nombre completo"
            />
            {errors.nombre && <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>}
          </div>

          {/* Correo electrónico */}
          <div>
            <label className="block mb-2 font-medium text-gray-700 dark:text-gray-200">
              Correo electrónico *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              onBlur={(e) => validateField('email', e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-500 
                bg-white dark:bg-gray-600 text-gray-900 dark:text-white 
                focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400
                transition-colors duration-300"
              placeholder="tu@correo.com"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Institución académica */}
          <div>
            <label className="block mb-2 font-medium text-gray-700 dark:text-gray-200">
              Institución académica *
            </label>
            <input
              type="text"
              name="institucion"
              value={formData.institucion}
              onChange={(e) => setFormData({...formData, institucion: e.target.value})}
              onBlur={(e) => validateField('institucion', e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-500 
                bg-white dark:bg-gray-600 text-gray-900 dark:text-white 
                focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400
                transition-colors duration-300"
              placeholder="Nombre de tu institución"
            />
            {errors.institucion && <p className="text-red-500 text-sm mt-1">{errors.institucion}</p>}
          </div>

          {/* Teléfono */}
          <div>
            <label className="block mb-2 font-medium text-gray-700 dark:text-gray-200">
              Teléfono *
            </label>
            <input
              type="tel"
              name="telefono"
              value={formData.telefono}
              onChange={(e) => setFormData({...formData, telefono: e.target.value})}
              onBlur={(e) => validateField('telefono', e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-500 
                bg-white dark:bg-gray-600 text-gray-900 dark:text-white 
                focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400
                transition-colors duration-300"
              placeholder="+52 123 456 7890"
            />
            {errors.telefono && <p className="text-red-500 text-sm mt-1">{errors.telefono}</p>}
          </div>

          {/* Ciudad y país */}
          <div>
            <label className="block mb-2 font-medium text-gray-700 dark:text-gray-200">
              Ciudad y país de residencia *
            </label>
            <input
              type="text"
              name="ubicacion"
              value={formData.ubicacion}
              onChange={(e) => setFormData({...formData, ubicacion: e.target.value})}
              onBlur={(e) => validateField('ubicacion', e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-500 
                bg-white dark:bg-gray-600 text-gray-900 dark:text-white 
                focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400
                transition-colors duration-300"
              placeholder="Ciudad, País"
            />
            {errors.ubicacion && <p className="text-red-500 text-sm mt-1">{errors.ubicacion}</p>}
          </div>

          {/* Experiencia con GenAI */}
          <div>
            <label className="block mb-2 font-medium text-gray-700 dark:text-gray-200">
              Experiencia usando la GenAI *
            </label>
            <textarea
              name="experiencia"
              value={formData.experiencia}
              onChange={(e) => {
                if (e.target.value.split(' ').length <= 100) {
                  setFormData({...formData, experiencia: e.target.value})
                }
              }}
              onBlur={(e) => validateField('experiencia', e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-500 
                bg-white dark:bg-gray-600 text-gray-900 dark:text-white h-32
                focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400
                transition-colors duration-300"
              placeholder="Describe tu experiencia (máximo 100 palabras)"
            />
            <div className="flex justify-between mt-1">
              {errors.experiencia && <p className="text-red-500 text-sm">{errors.experiencia}</p>}
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {formData.experiencia.split(' ').length}/100 palabras
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full font-bold py-3 px-4 rounded-lg 
              bg-indigo-600 hover:bg-indigo-700 
              dark:bg-indigo-500 dark:hover:bg-indigo-600
              text-white transition-all duration-300
              transform hover:scale-[1.02]"
          >
            Enviar Solicitud
          </button>
        </form>

        {/* Nueva sección de información de pago */}
        <div className="mt-8 p-4 bg-blue-50 dark:bg-gray-600 rounded-lg border-l-4 border-blue-500 dark:border-blue-400">
          <p className="text-gray-700 dark:text-gray-200 text-sm leading-relaxed">
            <span className="font-bold block mb-2 text-blue-700 dark:text-blue-300">
              Información importante:
            </span>
            Una vez enviada su solicitud, recibirá un correo electrónico con:
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>Las instrucciones detalladas para realizar el pago del curso.</li>
              <li>Después de confirmar su pago, le enviaremos:</li>
              <ul className="list-circle ml-5 mt-1 space-y-1">
                <li>• Las fechas y horarios específicos de las sesiones.</li>
                <li>• La información de acceso a la plataforma virtual.</li>
                <li>• Los materiales preliminares del curso.</li>
              </ul>
            </ul>
            Agradecemos su confianza y esperamos que el curso sea de gran beneficio para su práctica docente.
          </p>
        </div>
      </div>
    </section>
  )
}