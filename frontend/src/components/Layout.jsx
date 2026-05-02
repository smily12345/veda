import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Globe, BookOpen, CheckSquare, Target, HelpCircle, Activity, Users } from 'lucide-react';

const Layout = () => {
  const { t, language, setLanguage, mode, setMode } = useLanguage();

  return (
    <div className="flex flex-col" style={{ minHeight: '100vh' }}>
      {/* Navigation */}
      <nav className="glass-panel" style={{ borderRadius: 0, borderBottom: '1px solid var(--border-color)', position: 'sticky', top: 0, zIndex: 50 }}>
        <div className="container flex justify-between items-center" style={{ padding: '1rem' }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
             <Globe size={24} color="var(--secondary-color)" />
             VEDA
          </Link>
          
          <div className="flex items-center gap-4" style={{ overflowX: 'auto', paddingBottom: '4px' }}>
            <Link to="/education" className="nav-link" style={{color: 'white', textDecoration: 'none'}}><BookOpen size={16}/> <span className="hide-mobile">{t('nav.education')}</span></Link>
            <Link to="/simulation" className="nav-link" style={{color: 'white', textDecoration: 'none'}}><CheckSquare size={16}/> <span className="hide-mobile">{t('nav.simulation')}</span></Link>
            <Link to="/eligibility" className="nav-link" style={{color: 'white', textDecoration: 'none'}}><Target size={16}/> <span className="hide-mobile">{t('nav.eligibility')}</span></Link>
            <Link to="/quiz" className="nav-link" style={{color: 'white', textDecoration: 'none'}}><HelpCircle size={16}/> <span className="hide-mobile">{t('nav.quiz')}</span></Link>
            <Link to="/awareness" className="nav-link" style={{color: 'white', textDecoration: 'none'}}><Activity size={16}/> <span className="hide-mobile">{t('nav.awareness')}</span></Link>
            <Link to="/parties" className="nav-link" style={{color: 'white', textDecoration: 'none'}}><Users size={16}/> <span className="hide-mobile">{t('nav.parties')}</span></Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1" style={{ padding: '2rem 1rem' }}>
        <div className="container" style={{ padding: 0 }}>
           <Outlet />
        </div>
      </main>

      {/* Footer disclaimer */}
      <footer style={{ background: 'rgba(0,0,0,0.5)', padding: '1rem', textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
        <p>{t('disclaimer')}</p>
      </footer>

      {/* CSS specific to layout */}
      <style>{`
        .nav-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem;
          border-radius: 8px;
          transition: background 0.2s;
        }
        .nav-link:hover {
          background: rgba(255,255,255,0.1);
        }
        @media (max-width: 768px) {
          .hide-mobile { display: none; }
        }
      `}</style>
    </div>
  );
};

export default Layout;
