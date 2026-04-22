// src/components/EligibilityCard.jsx
import React from 'react';
import { motion } from 'framer-motion';

const EligibilityCard = ({ result }) => {
  if (!result) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`mt-6 p-6 sm:p-8 rounded-2xl shadow-lg border-2 text-center 3xl:p-12 ${result.color}`}
    >
      <span className="text-4xl sm:text-5xl 3xl:text-7xl block mb-4">{result.icon}</span>
      <h3 className="text-xl sm:text-2xl 3xl:text-5xl font-poppins font-bold">
        {result.message}
      </h3>
      {result.eligible && (
        <p className="mt-3 text-sm sm:text-base 3xl:text-2xl font-inter opacity-90">
          Make sure your name is on the Electoral Roll!
        </p>
      )}
    </motion.div>
  );
};

export default EligibilityCard;
