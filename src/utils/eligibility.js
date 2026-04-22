// src/utils/eligibility.js
export const checkEligibility = (age) => {
  const numAge = parseInt(age, 10);
  if (isNaN(numAge)) return null;

  if (numAge >= 18) {
    return {
      eligible: true,
      message: "You are eligible to vote!",
      color: "bg-green-100 text-green-800 border-green-200",
      icon: "✅"
    };
  } else {
    const yearsLeft = 18 - numAge;
    return {
      eligible: false,
      message: `You'll be eligible in ${yearsLeft} year${yearsLeft > 1 ? 's' : ''}!`,
      color: "bg-blue-100 text-blue-800 border-blue-200",
      icon: "⏳"
    };
  }
};
