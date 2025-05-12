# Translator Manager

A React-based translation management dashboard that allows users to manage and showcase translations for different keywords across multiple languages. The project is built using modern tools like Vite, TypeScript, TailwindCSS, and React Router.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Usage](#usage)
  - [Public View](#public-view)
  - [Management View](#management-view)
- [Components](#components)
- [State Management](#state-management)
- [Technologies Used](#technologies-used)
- [License](#license)
- [Contact](#contact)

## Features

- **Public View**: View translations for keywords in different languages.
- **Management View**: Add, edit, reorder, and manage translations for keywords.
- **Language Selector**: Switch between languages to view or edit translations.
- **Drag-and-Drop**: Reorder keywords in the management view.
- **Search**: Filter keywords by search query.
- **Persistent State**: Save translation data to `localStorage`.

## Project Structure

```
translator-manager/
├── src/
│   ├── components/       # Reusable UI components
│   ├── context/          # Context manager of Application
│   ├── data/             # initial data
│   ├── pages/            # Application pages
│   └── App.tsx           # Application Router and context provider
│   └── main.tsx          # Application Entry Point
├── package.json          # Project dependencies and scripts
└── README.md             # Project documentation
```

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mrdeveloper-ir/translator-manager.git
   cd translator-manager
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the application:
   ```bash
   npm run dev
   ```

## Usage

- **Public View**:
  Accessible at /.
  Displays a list of keywords and their translations for the selected language.
  Use the Language Selector to switch between languages.
  Use the Search Input to filter keywords.
- **Management View**:
  Accessible at /management.
  Allows adding, editing, and reordering keywords.
  Use the Add Keyword Form to add new keywords and translations.
  Drag and drop keywords to reorder them.
  Changes are automatically saved to localStorage.

## Components

Key Components

- **Header**: Navigation between Public and Management views.
- **LanguageSelector**: Buttons to switch between languages.
- **PublicKeywordList**: Displays translations in the public view.
- **AddKeywordForm**: Form to add new keywords in the management view.
- **DraggableKeywordList**: List of keywords with drag-and-drop functionality.
- **KeywordItem**: Editable keyword item in the management view.

## State Management

The application uses React Context for global state management. The TranslationContext provides the following:

- **state**: Current state of translations, languages, and selected language.
- **setSelectedLanguage(language: string)**: Updates the selected language.
- **updateTranslation(keywordId: number, language: string, value: string)**: Updates a translation for a keyword.
- **addKeyword(keyword: string, language: string, translation: string)**: Adds a new keyword with translations.
- **reorderKeywords(newOrder: Keyword[])**: Reorders the keywords.

## Technologies Used

- **React**: UI library for building components.
- **TypeScript**: Static typing for JavaScript.
- **Vite**: Fast build tool for modern web projects.
- **TailwindCSS**: Utility-first CSS framework.
- **React** Router: Routing library for navigation.
- **Framer** Motion: Animation library for React.
- **localStorage**: Persistent storage for translations.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For questions or support, please contact [mrdeveloper.reza@gmail.com].
