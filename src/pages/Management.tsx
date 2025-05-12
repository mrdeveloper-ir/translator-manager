import React from "react";
import { LanguageSelector } from "components";
import { AddKeywordForm, DraggableKeywordList } from "components/management";

export const Management: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">
          Translation Management
        </h1>
        <LanguageSelector />
      </div>

      <div className="bg-gray-50 p-4 rounded-lg mb-6 text-sm text-gray-600">
        <p>
          Select a language to edit translations. Add new keywords or modify
          existing ones. Drag and drop keywords to change their order. All
          changes are automatically saved.
        </p>
      </div>

      <AddKeywordForm />
      <DraggableKeywordList />
    </div>
  );
};
