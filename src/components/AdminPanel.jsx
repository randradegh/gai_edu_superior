import { useState, useEffect } from 'react'

export default function AdminPanel({ onLogout }) {
  const [registros, setRegistros] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchRegistros()
  }, [])

  const fetchRegistros = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/registros')
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.details || 'Error al cargar los datos')
      }
      const data = await response.json()
      console.log('Datos recibidos:', data); // Para debugging
      setRegistros(data)
      setLoading(false)
    } catch (err) {
      console.error('Error completo:', err); // Para debugging
      setError(err.message)
      setLoading(false)
    }
  }

  if (loading) return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 p-8">
      <div className="text-center text-gray-700 dark:text-gray-200">
        Cargando registros...
      </div>
    </div>
  )

  if (error) return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 p-8">
      <div className="text-center text-red-500">
        Error: {error}
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Panel de Administración
          </h2>
          <button
            onClick={onLogout}
            className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 
              transition-colors duration-300"
          >
            Cerrar Sesión
          </button>
        </div>

        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Nombre
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Institución
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Teléfono
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Ubicación
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-700 divide-y divide-gray-200 dark:divide-gray-600">
                {registros.map((registro, index) => (
                  <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-white">
                      {registro.nombre}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-white">
                      {registro.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-white">
                      {registro.institucion}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-white">
                      {registro.telefono}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-white">
                      {registro.ubicacion}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
} 