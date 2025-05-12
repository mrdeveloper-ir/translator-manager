import React from 'react';
import { useTranslation } from '../context/TranslationContext';

interface LanguageSelectorProps {
  variant?: 'management' | 'public';
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ variant = 'management' }) => {
  const { state, setSelectedLanguage } = useTranslation();
  
  return (
    <div className={`flex ${variant === 'public' ? 'justify-center mb-8' : 'justify-end mb-4'}`}>
      <div className="inline-flex rounded-md shadow-sm" role="group">
        {state.languages.map(language => (
          <button
            key={language}
            type="button"
            onClick={() => setSelectedLanguage(language)}
            className={`px-4 py-2 text-sm font-medium ${
              state.selectedLanguage === language 
                ? 'bg-blue-500 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-50'
            } ${
              variant === 'public' ? 'border border-gray-200' : ''
            } first:rounded-l-lg last:rounded-r-lg transition-all duration-200`}
          >
            {language}
          </button>
        ))}
      </div>
    </div>
  );
};