import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { AudioPlayer } from '../components/AudioPlayer';

const mockCandidates = [
  { id: 1, name: 'Candidate A', symbol: '🌻' },
  { id: 2, name: 'Candidate B', symbol: '🚲' },
  { id: 3, name: 'Candidate C', symbol: '🐘' },
  { id: 4, name: 'NOTA', symbol: '❌' }
];

const Simulation = () => {
  const { t } = useLanguage();
  const [selected, setSelected] = useState(null);
  const [voted, setVoted] = useState(false);

  const handleVote = (candidate) => {
    setSelected(candidate.id);
    setVoted(true);

    // Audio feedback using Speech API directly for immediate feedback
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const text = `You selected ${candidate.name}`;
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleReset = () => {
    setSelected(null);
    setVoted(false);
  };

  return (
    <div className="animate-fade-in flex flex-col items-center">
      <h2>{t('nav.simulation')}</h2>
      <p>Practice voting on our mock Electronic Voting Machine (EVM)</p>

      <div className="glass-panel" style={{ padding: '2rem', width: '100%', maxWidth: '500px', marginTop: '2rem', background: '#e2e8f0', color: '#0f172a' }}>
        <h3 className="text-center" style={{ color: '#0f172a', marginBottom: '1.5rem' }}>EVM Simulator</h3>
        
        <div className="grid gap-2">
          {mockCandidates.map((candidate) => (
            <div key={candidate.id} className="flex justify-between items-center" style={{ background: '#f8fafc', padding: '1rem', border: '1px solid #cbd5e1', borderRadius: '4px' }}>
               <div className="flex items-center gap-4">
                 <span style={{ fontSize: '2rem' }}>{candidate.symbol}</span>
                 <span style={{ fontWeight: 'bold' }}>{candidate.name}</span>
               </div>
               <button 
                 onClick={() => handleVote(candidate)}
                 disabled={voted}
                 style={{ 
                   width: '40px', height: '40px', borderRadius: '50%', 
                   background: selected === candidate.id ? 'var(--primary-color)' : '#94a3b8',
                   border: 'none', cursor: voted ? 'not-allowed' : 'pointer',
                   boxShadow: selected === candidate.id ? '0 0 10px var(--primary-color)' : 'inset 0 2px 4px rgba(0,0,0,0.3)'
                 }}
               ></button>
            </div>
          ))}
        </div>

        {voted && (
          <div className="animate-fade-in text-center mt-4 p-4" style={{ background: 'rgba(16, 185, 129, 0.2)', borderRadius: '8px', border: '1px solid var(--secondary-color)' }}>
             <p style={{ color: 'var(--secondary-color)', fontWeight: 'bold' }}>Vote Recorded successfully! *Beep*</p>
             <button className="btn-secondary mt-4" style={{ color: '#0f172a' }} onClick={handleReset}>Vote Again</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Simulation;
