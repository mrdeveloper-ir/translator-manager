import React from "react";
import { LanguageSelector } from "components";
import { PublicKeywordList } from "components/public";
import { motion } from "framer-motion";

export const Public: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
    >
      <div className="text-center mb-8">
        <motion.h1
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl font-bold text-gray-800 mb-4"
        >
          Translation Showcase
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-gray-600 max-w-2xl mx-auto"
        >
          Browse our collection of translated phrases. Select a language to see
          translations.
        </motion.p>
      </div>

      <LanguageSelector variant="public" />
      <PublicKeywordList />
    </motion.div>
  );
};
