import { initialData } from "data/initialData";
import React, { createContext, useContext, useEffect, useState } from "react";

interface TranslationContextType {
  state: TranslationState;
  setSelectedLanguage: (language: string) => void;
  updateTranslation: (
    keywordId: number,
    language: string,
    value: string
  ) => void;
  addKeyword: (keyword: string, language: string, translation: string) => void;
  reorderKeywords: (newOrder: Keyword[]) => void;
}

const TranslationContext = createContext<TranslationContextType | undefined>(
  undefined
);

export const TranslationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useState<TranslationState>(() => {
    const savedData = localStorage.getItem("translationData");
    return savedData ? JSON.parse(savedData) : initialData;
  });

  useEffect(() => {
    localStorage.setItem("translationData", JSON.stringify(state));
  }, [state]);

  const setSelectedLanguage = (language: string) => {
    setState((prev) => ({ ...prev, selectedLanguage: language }));
  };

  const updateTranslation = (
    keywordId: number,
    language: string,
    value: string
  ) => {
    setState((prev) => {
      const updatedKeywords = prev.keywords.map((keyword) => {
        if (keyword.id === keywordId) {
          return {
            ...keyword,
            translations: {
              ...keyword.translations,
              [language]: value,
            },
          };
        }
        return keyword;
      });
      return { ...prev, keywords: updatedKeywords };
    });
  };

  const addKeyword = (
    keyword: string,
    language: string,
    translation: string
  ) => {
    setState((prev) => {
      const newKeyword: Keyword = {
        id: Date.now(),
        keyword,
        translations: {
          [language]: translation,
        },
      };

      // Initialize empty translations for other languages
      prev.languages.forEach((lang) => {
        if (lang !== language) {
          newKeyword.translations[lang] = "";
        }
      });

      return {
        ...prev,
        keywords: [...prev.keywords, newKeyword],
      };
    });
  };

  const reorderKeywords = (newOrder: Keyword[]) => {
    setState((prev) => ({
      ...prev,
      keywords: newOrder,
    }));
  };

  return (
    <TranslationContext.Provider
      value={{
        state,
        setSelectedLanguage,
        updateTranslation,
        addKeyword,
        reorderKeywords,
      }}
    >
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return context;
};
