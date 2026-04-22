// src/pages/Timeline.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { timelineData } from '../data/timelineData';
import StepCard from '../components/StepCard';

const Timeline = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="min-h-screen bg-slate-50 py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl 3xl:max-w-7xl mx-auto">
        
        <div className="text-center mb-12 sm:mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl lg:text-6xl 3xl:text-8xl font-poppins font-extrabold text-gray-800 mb-4"
          >
            Election Journey 🗳️
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl 3xl:text-3xl text-gray-500 font-inter max-w-2xl mx-auto"
          >
            From Registration to Results: Understanding the democratic process step by step.
          </motion.p>
        </div>

        {/* Desktop Horizontal Stepper Context */}
        <div className="hidden lg:flex justify-between items-center mb-12 relative max-w-4xl mx-auto px-8">
          <div className="absolute top-1/2 left-8 right-8 h-1 bg-gray-200 -z-10 -translate-y-1/2 rounded-full"></div>
          
          {timelineData.map((step, index) => {
            const isCompleted = index <= activeStep;
            return (
              <div 
                key={step.id} 
                className="flex flex-col items-center cursor-pointer relative"
                onClick={() => setActiveStep(index)}
              >
                <motion.div 
                  className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-xl transition-all duration-300 border-4 border-slate-50 z-10 ${
                    isCompleted ? step.color + ' text-white scale-110' : 'bg-gray-200 text-gray-500'
                  }`}
                  whileHover={{ scale: 1.15 }}
                >
                  {step.icon}
                </motion.div>
                <div className={`mt-3 font-poppins font-semibold ${isCompleted ? 'text-gray-800' : 'text-gray-400'}`}>
                  Step {index + 1}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Vertical Indicator inside StepCards list */}
        <div className="relative pb-10">
          <div className="lg:hidden absolute left-6 sm:left-8 top-8 bottom-8 w-1 bg-gray-200 rounded-full z-0"></div>
          
          <div className="space-y-6 sm:space-y-8 relative z-10">
            {timelineData.map((step, index) => (
              <StepCard
                key={step.id}
                step={step}
                index={index}
                isActive={activeStep}
                setActiveStep={setActiveStep}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Timeline;
