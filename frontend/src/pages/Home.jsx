import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { AudioPlayer } from '../components/AudioPlayer';
import { BookOpen, CheckSquare, Target, HelpCircle, Activity, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const { t, language, setLanguage, mode, setMode } = useLanguage();

  return (
    <div className="animate-fade-in flex flex-col items-center" style={{ gap: '2rem' }}>
      
      <div className="text-center">
        <h1 style={{ fontSize: '3rem', background: 'linear-gradient(to right, var(--secondary-color), var(--primary-color))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          {t('home.title')}
        </h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          {t('home.subtitle')}
        </p>
        <div className="mt-4 flex justify-center">
          <AudioPlayer text={t('home.subtitle')} />
        </div>
      </div>

      <div className="glass-panel" style={{ padding: '2rem', width: '100%', maxWidth: '600px' }}>
        <h3 className="text-center">{t('home.selectLanguage')}</h3>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <button className={`btn-secondary ${language === 'en' ? 'btn-primary' : ''}`} onClick={() => setLanguage('en')}>English</button>
          <button className={`btn-secondary ${language === 'hi' ? 'btn-primary' : ''}`} onClick={() => setLanguage('hi')}>हिंदी (Hindi)</button>
          <button className={`btn-secondary ${language === 'te' ? 'btn-primary' : ''}`} onClick={() => setLanguage('te')}>తెలుగు (Telugu)</button>
          <button className={`btn-secondary ${language === 'mr' ? 'btn-primary' : ''}`} onClick={() => setLanguage('mr')}>मराठी (Marathi)</button>
        </div>

        <h3 className="text-center" style={{ marginTop: '2rem' }}>{t('home.selectMode')}</h3>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <button className={`btn-secondary ${mode === 'text' ? 'btn-primary' : ''}`} onClick={() => setMode('text')}>
             📖 {t('home.modeText')}
          </button>
          <button className={`btn-secondary ${mode === 'listen' ? 'btn-primary' : ''}`} onClick={() => setMode('listen')}>
             🔊 {t('home.modeListen')}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4" style={{ width: '100%', maxWidth: '800px', marginTop: '1rem' }}>
        <Link to="/education" className="glass-panel text-center" style={{ padding: '1.5rem', textDecoration: 'none', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', transition: 'transform 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
          <BookOpen size={32} color="var(--primary-color)" />
          <h3>{t('nav.education')}</h3>
        </Link>
        <Link to="/simulation" className="glass-panel text-center" style={{ padding: '1.5rem', textDecoration: 'none', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', transition: 'transform 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
          <CheckSquare size={32} color="var(--primary-color)" />
          <h3>{t('nav.simulation')}</h3>
        </Link>
        <Link to="/eligibility" className="glass-panel text-center" style={{ padding: '1.5rem', textDecoration: 'none', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', transition: 'transform 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
          <Target size={32} color="var(--primary-color)" />
          <h3>{t('nav.eligibility')}</h3>
        </Link>
        <Link to="/parties" className="glass-panel text-center" style={{ padding: '1.5rem', textDecoration: 'none', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', transition: 'transform 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
          <Users size={32} color="var(--primary-color)" />
          <h3>{t('nav.parties')}</h3>
        </Link>
      </div>

    </div>
  );
};

export default Home;
