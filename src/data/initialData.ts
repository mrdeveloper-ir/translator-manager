export const initialData: TranslationState = {
  languages: ["English", "Spanish", "Persian"],
  selectedLanguage: "English",
  keywords: [
    {
      id: 1,
      keyword: "Hello",
      translations: {
        English: "Hello",
        Spanish: "Hola",
        Persian: "سلام",
      },
    },
    {
      id: 2,
      keyword: "Goodbye",
      translations: {
        English: "Goodbye",
        Spanish: "Adiós",
        Persian: "خداحافظ",
      },
    },
    {
      id: 3,
      keyword: "Thank you",
      translations: {
        English: "Thank you",
        Spanish: "Gracias",
        Persian: "متشکرم",
      },
    },
    {
      id: 4,
      keyword: "Please",
      translations: {
        English: "Please",
        Spanish: "Por favor",
        Persian: "لطفا",
      },
    },
    {
      id: 5,
      keyword: "Welcome",
      translations: {
        English: "Welcome",
        Spanish: "Bienvenido",
        Persian: "خوش آمدید",
      },
    },
  ],
};
