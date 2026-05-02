import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { AudioPlayer } from '../components/AudioPlayer';
import { AlertCircle, ShieldCheck } from 'lucide-react';

const scenarios = [
  {
    id: 1,
    title: 'Selling Votes',
    desc: 'Someone offers you money or gifts in exchange for your vote.',
    isGood: false,
    feedback: 'Accepting money for a vote is illegal and unethical. Your vote decides the future of governance for the next 5 years. Do not sell it for short-term benefits.'
  },
  {
    id: 2,
    title: 'Voting based on Development',
    desc: 'You vote for a candidate based on their past development work, education initiatives, and healthcare improvements.',
    isGood: true,
    feedback: 'Excellent! Evaluating leaders based on their work, integrity, and focus on public service is the mark of a responsible voter.'
  },
  {
    id: 3,
    title: 'Not voting because "it does not matter"',
    desc: 'You decide to stay home on voting day because you think one vote will not change anything.',
    isGood: false,
    feedback: 'Every single vote counts. If many people think like this, the wrong leaders might get elected. It is your democratic right and duty.'
  }
];

const Awareness = () => {
  const { t } = useLanguage();
  const [selectedScenario, setSelectedScenario] = useState(null);

  return (
    <div className="animate-fade-in flex flex-col items-center">
      <h2>Responsible Voting Awareness</h2>
      <p>Understand scenarios and the impact of your decisions.</p>

      <div className="grid grid-cols-2 gap-4 mt-4" style={{ width: '100%', maxWidth: '800px' }}>
        {scenarios.map((s) => (
          <div 
            key={s.id} 
            className="glass-panel" 
            style={{ padding: '1.5rem', cursor: 'pointer', transition: 'transform 0.2s', border: selectedScenario?.id === s.id ? '2px solid var(--primary-color)' : '' }}
            onClick={() => setSelectedScenario(s)}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'} 
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <h3>{s.title}</h3>
            <p style={{ fontSize: '0.9rem' }}>{s.desc}</p>
          </div>
        ))}
      </div>

      {selectedScenario && (
        <div className="glass-panel animate-fade-in mt-4" style={{ padding: '2rem', width: '100%', maxWidth: '800px', background: selectedScenario.isGood ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)' }}>
          <div className="flex justify-between items-start mb-4">
             <div className="flex items-center gap-2">
               {selectedScenario.isGood ? <ShieldCheck size={24} color="var(--secondary-color)" /> : <AlertCircle size={24} color="var(--danger-color)" />}
               <h3 style={{ margin: 0, color: selectedScenario.isGood ? 'var(--secondary-color)' : 'var(--danger-color)' }}>
                 {selectedScenario.isGood ? 'Good Practice' : 'Harmful Practice'}
               </h3>
             </div>
             <AudioPlayer text={selectedScenario.feedback} />
          </div>
          <p style={{ fontSize: '1.1rem' }}>{selectedScenario.feedback}</p>
        </div>
      )}
    </div>
  );
};

export default Awareness;
