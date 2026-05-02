import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Education from './pages/Education';
import Simulation from './pages/Simulation';
import Eligibility from './pages/Eligibility';
import Quiz from './pages/Quiz';
import Awareness from './pages/Awareness';
import Parties from './pages/Parties';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="education" element={<Education />} />
            <Route path="simulation" element={<Simulation />} />
            <Route path="eligibility" element={<Eligibility />} />
            <Route path="quiz" element={<Quiz />} />
            <Route path="awareness" element={<Awareness />} />
            <Route path="parties" element={<Parties />} />
          </Route>
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
