import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { AudioPlayer } from '../components/AudioPlayer';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const steps = [
  {
    id: 'registration',
    title: 'Voter Registration',
    content: 'To vote, you must first register. You can register online through the Election Commission portal or offline by filling Form 6.',
  },
  {
    id: 'voterId',
    title: 'Voter ID (EPIC)',
    content: 'Once registered, you will receive an Electors Photo Identity Card (EPIC). You must carry this or another valid ID to the polling station.',
  },
  {
    id: 'polling',
    title: 'At the Polling Station',
    content: 'Stand in queue. The polling officer will check your name in the voter list and verify your ID.',
  },
  {
    id: 'evm',
    title: 'Using the EVM',
    content: 'Press the blue button next to your chosen candidate. You will hear a beep sound, and the VVPAT machine will show a slip confirming your vote.',
  },
  {
    id: 'counting',
    title: 'Counting and Results',
    content: 'After all phases are complete, EVMs are opened on counting day and votes are tallied to declare the winner.',
  }
];

const Education = () => {
  const { t, language } = useLanguage();
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) setCurrentStep(prev => prev + 1);
  };

  const handlePrev = () => {
    if (currentStep > 0) setCurrentStep(prev => prev - 1);
  };

  const step = steps[currentStep];

  return (
    <div className="animate-fade-in flex flex-col items-center">
      <h2>{t('nav.education')} - Election Process</h2>
      
      <div className="glass-panel" style={{ padding: '2rem', width: '100%', maxWidth: '700px', marginTop: '2rem' }}>
        <div className="flex justify-between items-center mb-4">
           <h3>Step {currentStep + 1} of {steps.length}: {t(`education.${step.id}.title`) !== `education.${step.id}.title` ? t(`education.${step.id}.title`) : step.title}</h3>
           <AudioPlayer text={t(`education.${step.id}.content`) !== `education.${step.id}.content` ? t(`education.${step.id}.content`) : step.content} />
        </div>
        
        <p style={{ fontSize: '1.2rem', minHeight: '100px' }}>
          {t(`education.${step.id}.content`) !== `education.${step.id}.content` ? t(`education.${step.id}.content`) : step.content}
        </p>
        
        <div className="flex justify-between mt-4">
          <button className="btn-secondary" onClick={handlePrev} disabled={currentStep === 0} style={{ opacity: currentStep === 0 ? 0.5 : 1 }}>
            <ChevronLeft size={20} /> Previous
          </button>
          <button className="btn-primary" onClick={handleNext} disabled={currentStep === steps.length - 1} style={{ opacity: currentStep === steps.length - 1 ? 0.5 : 1 }}>
            Next <ChevronRight size={20} />
          </button>
        </div>
      </div>
      
      {/* Progress indicators */}
      <div className="flex gap-2 mt-4">
         {steps.map((_, idx) => (
           <div key={idx} style={{ width: '12px', height: '12px', borderRadius: '50%', background: idx === currentStep ? 'var(--primary-color)' : 'var(--border-color)' }}></div>
         ))}
      </div>
    </div>
  );
};

export default Education;
