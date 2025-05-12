/// <reference types="vite/client" />

interface Translation {
  [language: string]: string;
}

interface Keyword {
  id: number;
  keyword: string;
  translations: Translation;
}

interface TranslationState {
  keywords: Keyword[];
  languages: string[];
  selectedLanguage: string;
}
