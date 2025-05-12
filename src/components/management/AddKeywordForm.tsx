import React, { useState } from "react";
import { useTranslation } from "context/TranslationContext";

export const AddKeywordForm: React.FC = () => {
  const { state, addKeyword } = useTranslation();
  const [keyword, setKeyword] = useState("");
  const [translation, setTranslation] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (keyword.trim() && translation.trim()) {
      addKeyword(keyword.trim(), state.selectedLanguage, translation.trim());
      setKeyword("");
      setTranslation("");
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-5 mb-6 border border-gray-100">
      <h2 className="text-lg font-medium text-gray-800 mb-4">
        Add New Keyword
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="keyword"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Keyword
            </label>
            <input
              type="text"
              id="keyword"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter new keyword"
              required
            />
          </div>

          <div>
            <label
              htmlFor="translation"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Translation ({state.selectedLanguage})
            </label>
            <input
              type="text"
              id="translation"
              value={translation}
              onChange={(e) => setTranslation(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={`Enter ${state.selectedLanguage} translation`}
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          Add Keyword
        </button>
      </form>
    </div>
  );
};
