import React, { useState } from "react";
import { useTranslation } from "../../context/TranslationContext";

interface KeywordItemProps {
  keyword: Keyword;
  index: number;
  dragHandleProps: unknown;
}

export const KeywordItem: React.FC<KeywordItemProps> = ({
  keyword,
  index,
  dragHandleProps,
}) => {
  const { state, updateTranslation } = useTranslation();
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState("");

  const currentTranslation = keyword.translations[state.selectedLanguage] || "";

  const handleEdit = () => {
    setEditValue(currentTranslation);
    setIsEditing(true);
  };

  const handleSave = () => {
    updateTranslation(keyword.id, state.selectedLanguage, editValue);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className="p-4 mb-3 bg-white rounded-lg shadow-sm border border-gray-100 flex items-center transition-all hover:shadow-md">
      <div
        {...dragHandleProps}
        className="cursor-grab mr-3 text-gray-400 hover:text-gray-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="9" cy="5" r="1" />
          <circle cx="9" cy="12" r="1" />
          <circle cx="9" cy="19" r="1" />
          <circle cx="15" cy="5" r="1" />
          <circle cx="15" cy="12" r="1" />
          <circle cx="15" cy="19" r="1" />
        </svg>
      </div>

      <div className="flex-1 grid md:grid-cols-3 gap-4 items-center">
        <div className="font-medium text-gray-800">{keyword.keyword}</div>

        <div className="md:col-span-2">
          {isEditing ? (
            <div className="flex items-center">
              <input
                type="text"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                autoFocus
              />
              <div className="flex ml-2">
                <button
                  onClick={handleSave}
                  className="px-3 py-1 bg-green-500 text-white rounded-md mr-2 hover:bg-green-600 transition-colors"
                >
                  Save
                </button>
                <button
                  onClick={handleCancel}
                  className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center">
              <span
                className={`flex-1 ${
                  currentTranslation ? "text-gray-700" : "text-gray-400 italic"
                }`}
              >
                {currentTranslation || "No translation"}
              </span>
              <button
                onClick={handleEdit}
                className="ml-2 p-1 text-blue-500 hover:text-blue-700 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
