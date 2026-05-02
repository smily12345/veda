import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Volume2 } from 'lucide-react';

export const AudioPlayer = ({ text, languageOverride }) => {
  const { language, mode, t } = useLanguage();

  const handlePlay = () => {
    if (!('speechSynthesis' in window)) {
      alert("Text-to-speech is not supported in this browser.");
      return;
    }

    window.speechSynthesis.cancel(); // Stop any ongoing speech

    const utterance = new SpeechSynthesisUtterance(text);
    
    // Map our language codes to standard ones
    const langMap = {
      'en': 'en-IN',
      'hi': 'hi-IN',
      'te': 'te-IN',
      'mr': 'mr-IN'
    };
    
    utterance.lang = langMap[languageOverride || language] || 'en-IN';
    utterance.rate = 0.9; // Slightly slower for better understanding

    window.speechSynthesis.speak(utterance);
  };

  // If we are in 'listen' mode, we might want to auto-play or make the button more prominent.
  // For now, it's a prominent button.

  return (
    <button 
      onClick={handlePlay}
      className="btn-secondary"
      aria-label="Listen to text"
      title="Listen"
      style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}
    >
      <Volume2 size={18} />
      <span>{t('listen')}</span>
    </button>
  );
};
