const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080; // ⚠️ Cloud Run uses 8080

app.use(cors());
app.use(express.json());

// ------------------- API DATA -------------------

const partiesData = [
  {
    id: 'partyA',
    name: 'National Democratic Party',
    leader: 'A. Sharma',
    focus: 'Infrastructure, Digitalization',
    schemes: ['Digital India', 'National Highway Expand'],
    performance: 'Built 10,000 km of roads, digitized 50% of rural services.'
  },
  {
    id: 'partyB',
    name: 'United Progressive Alliance',
    leader: 'R. Singh',
    focus: 'Welfare, Rural Employment',
    schemes: ['Rural Job Guarantee', 'Free Health Access'],
    performance: 'Provided employment to 5 million rural youth, opened 1000 clinics.'
  },
  {
    id: 'partyC',
    name: 'Regional Development Front',
    leader: 'K. Reddy',
    focus: 'State Agriculture, Education',
    schemes: ['Farmer Support Fund', 'Smart Classrooms'],
    performance: 'Increased state crop yield by 15%, upgraded 500 state schools.'
  }
];

// ------------------- API ROUTES -------------------

app.get('/api/parties', (req, res) => {
  res.json(partiesData);
});

app.post('/api/quiz', (req, res) => {
  const { score, userId } = req.body;
  console.log(`Score: ${score}, User: ${userId || 'anonymous'}`);
  res.status(201).json({ message: 'Score saved successfully (mock).' });
});

app.post('/api/tts', (req, res) => {
  const { text, language } = req.body;
  console.log(`TTS: ${text} (${language})`);
  res.json({ message: 'TTS handled on frontend.' });
});

// ------------------- SERVE FRONTEND -------------------

app.use(express.static(path.join(__dirname, 'dist')));

// React routing fix
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// ------------------- START SERVER -------------------

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});