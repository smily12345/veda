import React, { createContext, useState, useContext } from 'react';
import en from '../i18n/en.json';
import hi from '../i18n/hi.json';
import te from '../i18n/te.json';
import mr from '../i18n/mr.json';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [mode, setMode] = useState('text'); // 'text' or 'listen'

  const translations = {
    en,
    hi,
    te,
    mr
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    for (let k of keys) {
      if (value === undefined) return key;
      value = value[k];
    }
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, mode, setMode, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
