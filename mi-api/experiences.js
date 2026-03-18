const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3002;

// Middlewares
app.use(cors());
app.use(express.json());

// Base de datos en memoria
let experiences = [
  {
    id: 1,
    company: 'UFM',
    role: 'FULL STACK',
    startDate: '2025',
    endDate: null,
    description: 'Desarrollo de interfaces web modernas',
    tech: ['Angular', 'TypeScript'],
    highlights: ['Mejoré rendimiento', 'UI responsiva']
  }
];

let nextId = 2;

// 🔹 Validación básica
function validateExperience(data) {
  const { company, role, startDate, description, tech, highlights } = data;

  if (!company || !role || !startDate || !description) {
    return 'Campos obligatorios faltantes';
  }

  if (!Array.isArray(tech) || !Array.isArray(highlights)) {
    return 'tech y highlights deben ser arrays';
  }

  return null;
}

// GET /
app.get('/', (req, res) => {
  res.json({ message: 'API de Experiencia Laboral' });
});

// GET /experiences
app.get('/experiences', (req, res) => {
  res.json(experiences);
});

// GET /experiences/:id
app.get('/experiences/:id', (req, res) => {
  const exp = experiences.find(e => e.id === parseInt(req.params.id));

  if (!exp) {
    return res.status(404).json({ error: 'Experiencia no encontrada' });
  }

  res.json(exp);
});

// POST /experiences
app.post('/experiences', (req, res) => {
  const error = validateExperience(req.body);

  if (error) {
    return res.status(422).json({ error });
  }

  const newExp = {
    id: nextId++,
    ...req.body,
    endDate: req.body.endDate || null
  };

  experiences.push(newExp);
  res.status(201).json(newExp);
});

// PATCH /experiences/:id
app.patch('/experiences/:id', (req, res) => {
  const index = experiences.findIndex(e => e.id === parseInt(req.params.id));

  if (index === -1) {
    return res.status(404).json({ error: 'Experiencia no encontrada' });
  }

  experiences[index] = {
    ...experiences[index],
    ...req.body
  };

  res.json(experiences[index]);
});

// DELETE /experiences/:id
app.delete('/experiences/:id', (req, res) => {
  const index = experiences.findIndex(e => e.id === parseInt(req.params.id));

  if (index === -1) {
    return res.status(404).json({ error: 'Experiencia no encontrada' });
  }

  const deleted = experiences.splice(index, 1);

  res.json({
    message: 'Experiencia eliminada',
    experience: deleted[0]
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});