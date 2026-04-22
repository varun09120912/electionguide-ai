// src/components/StepCard.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const StepCard = ({ step, index, isActive, setActiveStep }) => {
  const isExpanded = isActive === index;

  return (
    <motion.div 
      className={`relative w-full max-w-2xl mx-auto rounded-2xl transition-all duration-300 ${
        isExpanded ? 'shadow-2xl scale-[1.02] border-2 border-primary-blue' : 'shadow-md border border-gray-200'
      } bg-white overflow-hidden mb-6`}
      whileHover={!isExpanded ? { y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" } : {}}
    >
      <div 
        className="p-6 cursor-pointer flex items-center justify-between"
        onClick={() => setActiveStep(isExpanded ? null : index)}
      >
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-xl sm:text-3xl text-white font-bold shadow-lg ${step.color}`}>
            {index + 1}
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl 3xl:text-4xl 4xl:text-5xl font-poppins font-bold text-gray-800 flex items-center gap-2">
              {step.title} <span className="hidden sm:inline">{step.icon}</span>
            </h3>
            <p className="text-sm sm:text-base 3xl:text-xl 4xl:text-3xl text-gray-500 font-inter mt-1 truncate max-w-[200px] sm:max-w-md">
              {step.description}
            </p>
          </div>
        </div>
        <div>
          {isExpanded ? (
            <ChevronUp className="w-6 h-6 sm:w-8 sm:h-8 text-primary-blue" />
          ) : (
            <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
          )}
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-gray-100 bg-gray-50/50"
          >
            <div className="p-6 sm:pl-24">
              <h4 className="font-semibold text-gray-700 mb-3 3xl:text-2xl 4xl:text-4xl">Key Details:</h4>
              <ul className="space-y-3">
                {step.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">✦</span>
                    <span className="text-gray-600 font-inter 3xl:text-xl 4xl:text-3xl">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default StepCard;
