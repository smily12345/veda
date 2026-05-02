import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { AudioPlayer } from '../components/AudioPlayer';

const Eligibility = () => {
  const { t } = useLanguage();
  const [age, setAge] = useState('');
  const [citizen, setCitizen] = useState(false);
  const [result, setResult] = useState(null);

  const checkEligibility = (e) => {
    e.preventDefault();
    if (!age) return;

    let isEligible = false;
    let message = '';

    if (parseInt(age) >= 18 && citizen) {
      isEligible = true;
      message = 'Congratulations! You are eligible to vote. Please ensure you are registered.';
    } else if (!citizen) {
      message = 'You must be a citizen of the country to vote.';
    } else {
      message = 'You must be at least 18 years old to vote. You will be eligible in ' + (18 - parseInt(age)) + ' years.';
    }

    setResult({ isEligible, message });
    
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(new SpeechSynthesisUtterance(message));
    }
  };

  return (
    <div className="animate-fade-in flex flex-col items-center">
      <h2>{t('nav.eligibility')}</h2>
      
      <form onSubmit={checkEligibility} className="glass-panel flex flex-col gap-4" style={{ padding: '2rem', width: '100%', maxWidth: '500px', marginTop: '2rem' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Age</label>
          <input 
            type="number" 
            value={age} 
            onChange={(e) => setAge(e.target.value)} 
            style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--border-color)', background: 'rgba(255,255,255,0.1)', color: 'white' }}
            required
            min="1"
            max="120"
          />
        </div>
        
        <div className="flex items-center gap-2">
          <input 
            type="checkbox" 
            id="citizen" 
            checked={citizen} 
            onChange={(e) => setCitizen(e.target.checked)} 
            style={{ width: '20px', height: '20px' }}
          />
          <label htmlFor="citizen">Are you a citizen?</label>
        </div>

        <button type="submit" className="btn-primary mt-4 justify-center">Check Eligibility</button>
      </form>

      {result && (
        <div className="glass-panel mt-4 animate-fade-in" style={{ padding: '1.5rem', width: '100%', maxWidth: '500px', background: result.isEligible ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)', borderColor: result.isEligible ? 'var(--secondary-color)' : 'var(--danger-color)' }}>
          <div className="flex justify-between items-center mb-2">
            <h3 style={{ color: result.isEligible ? 'var(--secondary-color)' : 'var(--danger-color)' }}>
              {result.isEligible ? 'Eligible' : 'Not Eligible'}
            </h3>
            <AudioPlayer text={result.message} />
          </div>
          <p>{result.message}</p>
        </div>
      )}
    </div>
  );
};

export default Eligibility;
