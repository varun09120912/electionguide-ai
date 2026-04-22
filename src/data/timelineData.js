// src/data/timelineData.js
export const timelineData = [
  {
    id: 1,
    title: "Voter Registration",
    icon: "📋",
    color: "bg-blue-500",
    description: "The first step is enrolling in the Electoral Roll.",
    details: [
      "Must be 18+ years on Jan 1 of the qualifying year",
      "Fill Form 6 via Voter Helpline App or NVSP portal",
      "Requires Address Proof, Age Proof, and a Photo",
      "Process closes around 90 days before elections"
    ]
  },
  {
    id: 2,
    title: "Campaign Period",
    icon: "📣",
    color: "bg-orange-500",
    description: "Candidates promote their agendas following ECI rules.",
    details: [
      "Model Code of Conduct (MCC) comes into effect",
      "Candidates file their nomination papers",
      "Parties hold speeches, distribute pamphlets and rally",
      "Campaigning stops 48 hours before voting day"
    ]
  },
  {
    id: 3,
    title: "Voting Day",
    icon: "🗳️",
    color: "bg-green-500",
    description: "Citizens cast their votes securely at pooling booths.",
    details: [
      "Carry Voter ID (EPIC) or approved alternate ID",
      "Identify yourself to the Polling Officer",
      "Use EVM (Electronic Voting Machine) to cast vote",
      "VVPAT will print a slip showing your vote for 7 seconds"
    ]
  },
  {
    id: 4,
    title: "Results & Declaration",
    icon: "📊",
    color: "bg-indigo-500",
    description: "Votes are counted and winners are announced.",
    details: [
      "EVMs are taken to secure counting centers",
      "Counting happens in rounds per constituency",
      "Based on First Past the Post (FPTP) system",
      "Winning candidate helps form the new government"
    ]
  }
];
