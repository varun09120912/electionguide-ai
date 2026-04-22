// src/pages/Profile.jsx
import React, { useState } from 'react';
import { MapPin, User, CalendarDays } from 'lucide-react';
import { stateData } from '../data/stateData';
import { checkEligibility } from '../utils/eligibility';
import { useLocalStorage } from '../hooks/useLocalStorage';
import EligibilityCard from '../components/EligibilityCard';
import { motion } from 'framer-motion';

const Profile = () => {
  const [profile, setProfile] = useLocalStorage('election-user-profile', {
    name: '',
    age: '',
    state: ''
  });

  const [eligibilityResult, setEligibilityResult] = useState(() => {
    return profile.age ? checkEligibility(profile.age) : null;
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleCheck = (e) => {
    e.preventDefault();
    if(profile.age) {
      setEligibilityResult(checkEligibility(profile.age));
    }
  };

  const selectedStateInfo = stateData.find(s => s.name === profile.state);

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-slate-50 py-12 px-4 sm:px-6">
      <div className="max-w-4xl 3xl:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 3xl:gap-16">
        
        {/* Form Section */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-3xl shadow-xl p-8 3xl:p-12 border border-gray-100"
        >
          <h2 className="text-2xl sm:text-3xl 3xl:text-5xl font-poppins font-bold text-primary-deep mb-6">
            Your Voter Profile
          </h2>
          
          <form onSubmit={handleCheck} className="space-y-6">
            <div>
              <label className="block text-sm sm:text-base 3xl:text-2xl font-inter text-gray-700 mb-2">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <User size={18} className="3xl:w-6 3xl:h-6" />
                </div>
                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 3xl:py-5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition-all"
                  placeholder="Enter your name"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm sm:text-base 3xl:text-2xl font-inter text-gray-700 mb-2">Age</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <CalendarDays size={18} className="3xl:w-6 3xl:h-6" />
                </div>
                <input
                  type="number"
                  name="age"
                  min="1"
                  max="120"
                  value={profile.age}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-10 pr-4 py-3 3xl:py-5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition-all"
                  placeholder="Enter your age"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm sm:text-base 3xl:text-2xl font-inter text-gray-700 mb-2">State / UT</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <MapPin size={18} className="3xl:w-6 3xl:h-6" />
                </div>
                <select
                  name="state"
                  value={profile.state}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 3xl:py-5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition-all appearance-none bg-white"
                >
                  <option value="" disabled>Select your state or UT</option>
                  {stateData.map((s, idx) => (
                    <option key={idx} value={s.name}>{s.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-primary-blue text-white font-bold py-4 rounded-xl shadow-md hover:bg-blue-700 hover:shadow-lg transition-all 3xl:text-2xl"
            >
              Check My Eligibility
            </button>
          </form>

          <EligibilityCard result={eligibilityResult} />
        </motion.div>

        {/* State Info Section */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col"
        >
          {selectedStateInfo ? (
            <div className="bg-gradient-to-br from-indigo-600 to-primary-deep text-white rounded-3xl shadow-xl p-8 3xl:p-12 h-full">
              <h2 className="text-3xl sm:text-4xl 3xl:text-6xl font-poppins font-bold mb-8 pb-4 border-b border-white/20">
                {selectedStateInfo.name}
              </h2>
              
              <div className="space-y-6 3xl:space-y-10">
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-blue-200 font-semibold mb-1 3xl:text-xl">Lok Sabha Seats</h3>
                  <p className="text-4xl 3xl:text-6xl font-bold">{selectedStateInfo.seats}</p>
                </div>
                
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-blue-200 font-semibold mb-1 3xl:text-xl">Typical Voter Turnout</h3>
                  <p className="text-4xl 3xl:text-6xl font-bold text-green-300">{selectedStateInfo.turnout}</p>
                </div>

                <div className="pt-6 border-t border-white/20">
                  <h3 className="text-sm uppercase tracking-wider text-blue-200 font-semibold mb-2 flex items-center 3xl:text-xl">
                    <span className="mr-2">💡</span> Interesting Fact
                  </h3>
                  <p className="font-inter text-lg 3xl:text-3xl leading-relaxed italic opacity-90">
                    "{selectedStateInfo.fact}"
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-3xl shadow-md p-8 h-full flex flex-col items-center justify-center text-center border-2 border-dashed border-gray-300 text-gray-400">
              <MapPin size={64} className="mb-4 opacity-50" />
              <p className="text-xl 3xl:text-3xl font-inter">Select a state or UT to see its election statistics.</p>
            </div>
          )}
        </motion.div>

      </div>
    </div>
  );
};

export default Profile;
