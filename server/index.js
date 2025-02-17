import express from 'express';
import cors from 'cors';
import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Asegurarse de que el archivo CSV existe con los encabezados
async function initializeCSV() {
  const csvPath = join(__dirname, 'data', 'alumnos_potenciales.csv');
  try {
    await fs.access(csvPath);
  } catch {
    // Si el directorio no existe, créalo
    await fs.mkdir(join(__dirname, 'data'), { recursive: true });
    // Crear el archivo con los encabezados
    const headers = 'Nombre,Email,Institución,Teléfono,Ubicación,Experiencia\n';
    await fs.writeFile(csvPath, headers);
  }
}

// Endpoint para guardar registros
app.post('/api/save-registration', async (req, res) => {
  try {
    const { nombre, email, institucion, telefono, ubicacion, experiencia } = req.body;
    
    // Escapar comas y comillas dobles en los valores
    const escapedValues = [nombre, email, institucion, telefono, ubicacion, experiencia]
      .map(value => `"${value.replace(/"/g, '""')}"`)
      .join(',');
    
    const csvPath = join(__dirname, 'data', 'alumnos_potenciales.csv');
    await fs.appendFile(csvPath, `${escapedValues}\n`);
    
    res.status(200).json({ message: 'Registro guardado exitosamente' });
  } catch (error) {
    console.error('Error al guardar el registro:', error);
    res.status(500).json({ error: 'Error al guardar el registro' });
  }
});

// Endpoint para obtener registros
app.get('/api/registros', async (req, res) => {
  try {
    const csvPath = join(__dirname, 'data', 'alumnos_potenciales.csv');
    
    // Verificar si el archivo existe
    try {
      await fs.access(csvPath);
    } catch {
      // Si el archivo no existe, crear uno con los encabezados
      const headers = 'nombre,email,institucion,telefono,ubicacion,experiencia\n';
      await fs.writeFile(csvPath, headers);
      return res.json([]); // Retornar array vacío
    }

    const fileContent = await fs.readFile(csvPath, 'utf-8');
    
    // Si el archivo está vacío o solo tiene encabezados
    if (!fileContent.trim() || fileContent.trim() === 'nombre,email,institucion,telefono,ubicacion,experiencia') {
      return res.json([]);
    }
    
    // Convertir CSV a JSON
    const lines = fileContent.split('\n');
    const headers = ['nombre', 'email', 'institucion', 'telefono', 'ubicacion', 'experiencia'];
    
    const registros = lines.slice(1)
      .filter(line => line.trim()) // Eliminar líneas vacías
      .map(line => {
        const values = line.split(',').map(value => 
          value.replace(/^"/, '').replace(/"$/, '').trim()
        );
        return headers.reduce((obj, header, index) => {
          obj[header] = values[index] || '';
          return obj;
        }, {});
      });

    console.log('Registros encontrados:', registros.length); // Para debugging
    console.log('Primer registro:', registros[0]); // Para ver la estructura de los datos
    res.json(registros);
  } catch (error) {
    console.error('Error detallado:', error);
    res.status(500).json({ 
      error: 'Error al obtener los registros',
      details: error.message 
    });
  }
});

// Inicializar el archivo CSV al arrancar el servidor
initializeCSV().catch(console.error);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
}); 