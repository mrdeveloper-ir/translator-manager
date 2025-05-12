import React, { useState } from "react";
import { useTranslation } from "context/TranslationContext";
import { motion } from "framer-motion";
import { SearchInput } from "./SearchInput";

export const PublicKeywordList: React.FC = () => {
  const { state } = useTranslation();
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredKeywords = state.keywords.filter((keyword) =>
    keyword.keyword.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="mt-6 max-w-3xl mx-auto">
      <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="grid gap-4">
        {filteredKeywords.map((keyword) => {
          const translation =
            keyword.translations[state.selectedLanguage] || "";

          return (
            <motion.div
              key={keyword.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-sm p-5 border border-gray-100"
            >
              <div className="flex flex-col md:flex-row md:items-center">
                <h3 className="text-lg font-medium text-gray-800 md:w-1/3 mb-2 md:mb-0">
                  {keyword.keyword}
                </h3>
                <div className="md:w-2/3 md:pl-6">
                  <p
                    className={`${
                      translation ? "text-gray-700" : "text-gray-400 italic"
                    } text-lg`}
                  >
                    {translation || "No translation available"}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
