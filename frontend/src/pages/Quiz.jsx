import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { AudioPlayer } from '../components/AudioPlayer';

const questions = [
  {
    id: 1,
    q: 'What is the minimum voting age?',
    options: ['16', '18', '21', '25'],
    answer: '18'
  },
  {
    id: 2,
    q: 'What document is primarily used for voting identification?',
    options: ['Ration Card', 'Passport', 'Voter ID (EPIC)', 'Driving License'],
    answer: 'Voter ID (EPIC)'
  },
  {
    id: 3,
    q: 'What does EVM stand for?',
    options: ['Electronic Voting Machine', 'Election Verification Module', 'Electronic Voter Memory', 'Election Validation Machine'],
    answer: 'Electronic Voting Machine'
  },
  {
    id: 4,
    q: 'Can you vote if your name is not on the voter list?',
    options: ['Yes, with any ID', 'No', 'Yes, with money', 'Yes, if you argue'],
    answer: 'No'
  },
  {
    id: 5,
    q: 'What is NOTA?',
    options: ['None of the Above', 'National Option for Targeting All', 'New Order of Taking Action', 'No Other Time Allowed'],
    answer: 'None of the Above'
  }
];

const Quiz = () => {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[current].answer) setScore(score + 1);
    
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrent(0);
    setScore(0);
    setShowResult(false);
  };

  if (showResult) {
    return (
      <div className="animate-fade-in flex flex-col items-center">
        <h2>Quiz Results</h2>
        <div className="glass-panel text-center" style={{ padding: '2rem', width: '100%', maxWidth: '500px', marginTop: '2rem' }}>
          <h3>You scored {score} out of {questions.length}</h3>
          <p className="mt-4">
            {score < 3 
              ? 'We recommend reviewing the Education section again to learn more.' 
              : 'Great job! You have a good understanding of the voting process.'}
          </p>
          <button className="btn-primary mt-4" onClick={handleRestart}>Retake Quiz</button>
        </div>
      </div>
    );
  }

  const q = questions[current];

  return (
    <div className="animate-fade-in flex flex-col items-center">
      <h2>{t('nav.quiz')}</h2>
      
      <div className="glass-panel" style={{ padding: '2rem', width: '100%', maxWidth: '600px', marginTop: '2rem' }}>
        <div className="flex justify-between items-center mb-4">
          <span style={{ color: 'var(--text-muted)' }}>Question {current + 1} of {questions.length}</span>
          <AudioPlayer text={q.q} />
        </div>
        
        <h3 className="mb-4">{q.q}</h3>
        
        <div className="flex flex-col gap-2">
          {q.options.map((opt, idx) => (
            <button 
              key={idx} 
              className="btn-secondary" 
              style={{ justifyContent: 'flex-start', padding: '1rem' }}
              onClick={() => handleAnswer(opt)}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
