// src/data/responses.js
export const keywordGroups = [
  {
    keywords: ["register", "registration", "voter id", "epic", "enroll", "how to vote"],
    response: {
      explanation: "Voter registration is the process of enrolling your name in the Electoral Roll so you can vote in elections.",
      steps: [
        "Step 1: Visit voters.eci.gov.in or download the Voter Helpline App",
        "Step 2: Fill Form 6 with your details (name, age, address)",
        "Step 3: Upload documents: Age proof + Address proof + Photo",
        "Step 4: Submit and note your reference number",
        "Final: You'll receive your Voter ID (EPIC) card within 30 days"
      ],
      timeline: {
        before: "Registration opens 90 days before election",
        during: "Voter list is frozen — no new registrations",
        after: "Update details using Form 8 after election"
      },
      keyNotes: [
        "Minimum age: 18 years",
        "Documents needed: Aadhaar, birth certificate, passport photo",
        "You can also register at your local BLO (Booth Level Officer)",
        "Check your name at electoralsearch.eci.gov.in"
      ],
      followUp: "Would you like to know what documents are needed for voter registration?"
    }
  },
  {
    keywords: ["evm", "electronic voting", "voting machine", "how to vote", "booth"],
    response: {
      explanation: "EVM stands for Electronic Voting Machine. It is used in all Indian elections to record votes electronically and securely.",
      steps: [
        "Step 1: Enter the polling booth with your Voter ID",
        "Step 2: Officer verifies your identity and gives you a slip",
        "Step 3: Go to the EVM and press the button next to your chosen candidate",
        "Step 4: A beep confirms your vote is recorded",
        "Final: VVPAT machine prints a slip showing your vote for 7 seconds"
      ],
      timeline: {
        before: "EVMs are tested and sealed before election day",
        during: "EVMs used at all polling booths from 7AM to 6PM",
        after: "EVMs sealed and kept in secure storage until counting"
      },
      keyNotes: [
        "EVM has two units: Ballot Unit + Control Unit",
        "VVPAT = Voter Verifiable Paper Audit Trail",
        "Each EVM can record up to 2000 votes",
        "EVMs are manufactured by BEL and ECIL",
        "You get only ONE vote per election"
      ],
      followUp: "Would you like to know more about VVPAT and how votes are counted?"
    }
  },
  {
    keywords: ["timeline", "schedule", "when", "date", "phase", "process"],
    response: {
      explanation: "Indian elections follow a structured timeline announced by the Election Commission of India.",
      steps: [
        "Step 1: Election Commission announces the schedule (Model Code of Conduct begins)",
        "Step 2: Nomination of candidates (filing + scrutiny + withdrawal)",
        "Step 3: Election campaign period (posters, rallies, speeches)",
        "Step 4: Voting day — citizens cast votes at polling booths",
        "Final: Vote counting and result declaration"
      ],
      timeline: {
        before: "Voter registration, candidate nominations, campaign period",
        during: "Voting day — polling booths open 7AM to 6PM",
        after: "Vote counting, result declaration, new government formation"
      },
      keyNotes: [
        "Lok Sabha elections held every 5 years",
        "India has multi-phase elections due to large population",
        "Model Code of Conduct restricts government announcements during elections",
        "Election Commission is an independent constitutional body"
      ],
      followUp: "Would you like to know about the Model Code of Conduct?"
    }
  },
  {
    keywords: ["eligible", "eligibility", "can i vote", "age", "18", "qualify"],
    response: {
      explanation: "To vote in India, you must meet certain eligibility criteria set by the Constitution.",
      steps: [
        "Step 1: Check if you are 18 years or older on January 1 of the election year",
        "Step 2: Must be a citizen of India",
        "Step 3: Must be a resident of the constituency where you want to vote",
        "Step 4: Register your name in the Electoral Roll",
        "Final: Obtain your Voter ID (EPIC) card"
      ],
      timeline: {
        before: "Register 90 days before election deadline",
        during: "Carry Voter ID or approved alternate ID to booth",
        after: "Update address if you move using Form 8A"
      },
      keyNotes: [
        "Age: 18+ as on January 1 of the qualifying year",
        "Must be Indian citizen",
        "Not disqualified under any law",
        "NRIs can also register to vote in India",
        "12 alternate IDs accepted if Voter ID is lost"
      ],
      followUp: "Would you like to check your eligibility based on your age and state?"
    }
  },
  {
    keywords: ["result", "counting", "count", "winner", "declare", "outcome"],
    response: {
      explanation: "After voting ends, all EVMs are transported to counting centers where votes are tallied under strict supervision.",
      steps: [
        "Step 1: EVMs brought to counting center on counting day",
        "Step 2: Candidates and their agents present during counting",
        "Step 3: EVM results displayed round by round",
        "Step 4: Candidate with highest votes wins (First Past the Post system)",
        "Final: Returning Officer declares the winner officially"
      ],
      timeline: {
        before: "Counting day announced with election schedule",
        during: "Counting happens in rounds — each round covers one booth",
        after: "Winner gets certificate of election, new government formed"
      },
      keyNotes: [
        "India uses First Past the Post (FPTP) system",
        "No minimum percentage needed to win",
        "Postal ballots counted first",
        "Results available live on ECI website",
        "Losing candidate can request recount"
      ],
      followUp: "Would you like to know how the government is formed after election results?"
    }
  }
];

export const defaultResponse = {
  explanation: "I'm ElectionGuide AI! I can help you learn about Indian elections.",
  steps: [
    "Try asking me about: Voter Registration",
    "Or ask about: How EVM works",
    "Or ask about: Election Timeline",
    "Or ask about: Voting Eligibility",
    "Or ask about: Vote Counting Process"
  ],
  timeline: {
    before: "Learn about elections before they happen",
    during: "Know your rights on voting day",
    after: "Understand results and government formation"
  },
  keyNotes: [
    "I only answer questions about Indian elections",
    "I am neutral and unbiased",
    "Ask me anything about the voting process!",
    "Use the Timeline page to see the full election journey",
    "Try the Quiz to test your knowledge!"
  ],
  followUp: "What would you like to learn about Indian elections today?"
};

export const getResponse = (query) => {
  if (!query) return defaultResponse;
  
  const lowerQuery = query.toLowerCase();
  
  for (const group of keywordGroups) {
    for (const keyword of group.keywords) {
      if (lowerQuery.includes(keyword)) {
        return group.response;
      }
    }
  }
  
  return defaultResponse;
};
