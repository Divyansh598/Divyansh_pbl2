export const promises = [
  {
    id: 1,
    title: "Free WiFi in all 543 constituencies by 2023",
    politician: "Rajiv Sharma",
    party: "INC",
    constituency: "Delhi North",
    category: "Digital India",
    status: "contested",
    datePromised: "2021-04-15",
    deadline: "Dec 2023",
    electionContext: "2019 Lok Sabha",
    progress: 22,
    description: "Promised high-speed free public WiFi across all parliamentary constituencies within 2 years of election. Currently only partial rollout in 3 cities with 120 hotspots. Government claims Phase 1 is complete but the original promise covered all 543 constituencies.",
    evidence: [
      { type: "doc", label: "Phase 1 work order (partial)", date: "2022-06-15", verified: true },
      { type: "img", label: "Government press release 2022", date: "2022-08-20", verified: false }
    ],
    governmentProof: [
      { type: "doc", label: "WiFi deployment report — 120 hotspots in Central Delhi", date: "2022-08-01", verified: true },
      { type: "img", label: "Photo of WiFi zone inauguration in Connaught Place", date: "2022-07-15", verified: true }
    ],
    publicOpinion: {
      totalVotes: 1247,
      broken: 892,
      partial: 243,
      kept: 67,
      contested: 45,
      comments: [
        { user: "Priya M.", location: "Rohini, Delhi", text: "Zero WiFi in my area. Empty promise.", upvotes: 234, time: "2 days ago" },
        { user: "Amit K.", location: "CP, Delhi", text: "Works in Connaught Place but nowhere else.", upvotes: 156, time: "5 days ago" },
        { user: "Sunita R.", location: "Dwarka, Delhi", text: "RTI confirms no budget for outer constituencies.", upvotes: 342, time: "1 week ago" }
      ]
    },
    evidenceMissing: "No completion certificate for outer constituencies. RTI reveals zero budget allocation for Phase 2.",
    credibilityScore: 28,
    publicVotes: { citizen: 47, government: 12 },
    debateCount: 3,
    lastUpdated: "2026-03-15",
    reactions: { angry: 456, disappointed: 234, hopeful: 45, satisfied: 12 }
  },
  {
    id: 2,
    title: "Build 50,000 km of rural roads under PMGSY",
    politician: "Neeta Singh",
    party: "BJP",
    constituency: "Rajasthan East",
    category: "Infrastructure",
    status: "partial",
    datePromised: "2022-01-26",
    deadline: "Mar 2025",
    electionContext: "2022 Rajasthan Assembly",
    progress: 61,
    description: "Promised construction of 50,000 km of all-weather rural roads connecting villages with populations above 250 under the Pradhan Mantri Gram Sadak Yojana. Progress is documented but behind schedule.",
    evidence: [
      { type: "doc", label: "PMGSY progress report Q3 2024", date: "2024-10-01", verified: true },
      { type: "doc", label: "State audit report", date: "2024-12-15", verified: true }
    ],
    governmentProof: [
      { type: "doc", label: "30,500 km completion certificate from PWD", date: "2024-11-01", verified: true },
      { type: "img", label: "Satellite imagery of road completion in 3 districts", date: "2024-10-15", verified: true },
      { type: "doc", label: "Budget utilisation certificate — ₹4,200 Cr spent", date: "2024-09-30", verified: true }
    ],
    publicOpinion: {
      totalVotes: 856,
      broken: 189,
      partial: 478,
      kept: 134,
      contested: 55,
      comments: [
        { user: "Ramesh J.", location: "Tonk, Rajasthan", text: "Roads being built but quality is poor. Will they last monsoon?", upvotes: 89, time: "3 days ago" },
        { user: "Kavita S.", location: "Sawai Madhopur", text: "Our village finally got a pucca road. Late but done.", upvotes: 67, time: "1 week ago" }
      ]
    },
    evidenceMissing: null,
    credibilityScore: 62,
    publicVotes: { citizen: 23, government: 34 },
    debateCount: 1,
    lastUpdated: "2026-02-28",
    reactions: { angry: 89, disappointed: 156, hopeful: 334, satisfied: 178 }
  },
  {
    id: 3,
    title: "5 crore new jobs in manufacturing by 2024",
    politician: "Mukesh Sharma",
    party: "BJP",
    constituency: "Delhi South",
    category: "Employment",
    status: "broken",
    datePromised: "2019-03-20",
    deadline: "Dec 2024",
    electionContext: "2019 Lok Sabha",
    progress: 8,
    description: "Promised to create 5 crore new employment opportunities in the manufacturing sector under the Make in India initiative. CMIE data shows only 40 lakh jobs created — a mere 8% of the target.",
    evidence: [],
    governmentProof: [],
    publicOpinion: {
      totalVotes: 3456,
      broken: 3102,
      partial: 234,
      kept: 23,
      contested: 97,
      comments: [
        { user: "Vikas T.", location: "Mehrauli, Delhi", text: "Lost my factory job in 2023. Where are these 5 crore jobs?", upvotes: 567, time: "1 day ago" },
        { user: "Ananya P.", location: "Saket, Delhi", text: "CMIE data clearly shows job losses. This is the biggest lie.", upvotes: 891, time: "3 days ago" },
        { user: "Journalist", location: "IndiaToday", text: "Independent verification confirms only 8% target met.", upvotes: 1204, time: "5 days ago" }
      ]
    },
    evidenceMissing: "No employment data submitted by politician. CMIE data contradicts the claim entirely. Multiple RTI responses show no tracking mechanism was ever established.",
    credibilityScore: 12,
    publicVotes: { citizen: 89, government: 3 },
    debateCount: 5,
    lastUpdated: "2026-03-20",
    reactions: { angry: 1567, disappointed: 890, hopeful: 12, satisfied: 3 }
  },
  {
    id: 4,
    title: "Double farmer income by 2025",
    politician: "Arvind Singh",
    party: "SP",
    constituency: "Lucknow",
    category: "Agriculture",
    status: "broken",
    datePromised: "2020-02-01",
    deadline: "Mar 2025",
    electionContext: "2022 UP Assembly",
    progress: 34,
    description: "Promised to double the income of farmers through MSP revision, crop insurance, and direct benefit transfers by 2025. NABARD survey shows only 34% growth versus 100% promised.",
    evidence: [
      { type: "doc", label: "MSP revision notification 2023", date: "2023-06-01", verified: true }
    ],
    governmentProof: [
      { type: "doc", label: "MSP increase order — 12% hike for wheat", date: "2023-05-15", verified: true },
      { type: "doc", label: "PM-KISAN disbursement report — ₹6,000/year", date: "2024-01-10", verified: true }
    ],
    publicOpinion: {
      totalVotes: 2134,
      broken: 1567,
      partial: 345,
      kept: 89,
      contested: 133,
      comments: [
        { user: "Raju K.", location: "Barabanki, UP", text: "My income went up 15% in 5 years. Doubling was a dream.", upvotes: 456, time: "2 days ago" },
        { user: "Farmer Union", location: "Lucknow", text: "NABARD data is clear — 34% not 100%. Promise broken.", upvotes: 789, time: "4 days ago" }
      ]
    },
    evidenceMissing: "Income doubling not achieved per NABARD survey 2024. Gap of 66% remains unaddressed.",
    credibilityScore: 38,
    publicVotes: { citizen: 56, government: 18 },
    debateCount: 4,
    lastUpdated: "2026-03-01",
    reactions: { angry: 890, disappointed: 567, hopeful: 123, satisfied: 56 }
  },
  {
    id: 5,
    title: "Universal health coverage — Ayushman Bharat expansion",
    politician: "Padma Pillai",
    party: "DMK",
    constituency: "Chennai East",
    category: "Healthcare",
    status: "kept",
    datePromised: "2021-08-15",
    deadline: "Dec 2023",
    electionContext: "2021 TN Assembly",
    progress: 100,
    description: "Promised full coverage of Ayushman Bharat scheme to all households in constituency with free treatment up to ₹5 lakh per year. All targets met with verified enrollment and hospital empanelment.",
    evidence: [
      { type: "doc", label: "Enrollment certificate — 2.1 lakh households", date: "2023-11-15", verified: true },
      { type: "img", label: "Hospital empanelment list (47 hospitals)", date: "2023-12-01", verified: true },
      { type: "doc", label: "State health dept verification", date: "2024-01-10", verified: true }
    ],
    governmentProof: [
      { type: "doc", label: "Ayushman Bharat enrollment records — 2,10,345 families", date: "2023-11-15", verified: true },
      { type: "doc", label: "Hospital empanelment — 47 hospitals across constituency", date: "2023-12-01", verified: true },
      { type: "doc", label: "State health dept independent verification", date: "2024-01-10", verified: true },
      { type: "img", label: "Beneficiary testimonials and hospital visit logs", date: "2024-01-05", verified: true }
    ],
    publicOpinion: {
      totalVotes: 1890,
      broken: 56,
      partial: 123,
      kept: 1634,
      contested: 77,
      comments: [
        { user: "Lakshmi N.", location: "Tondiarpet, Chennai", text: "Got free heart surgery worth ₹3.5 lakh. This promise saved my life.", upvotes: 1245, time: "2 weeks ago" },
        { user: "Dr. Rajan", location: "GH Chennai", text: "As a government hospital doctor, I can confirm full enrollment.", upvotes: 567, time: "1 month ago" }
      ]
    },
    evidenceMissing: null,
    credibilityScore: 95,
    publicVotes: { citizen: 12, government: 67 },
    debateCount: 0,
    lastUpdated: "2024-01-10",
    reactions: { angry: 12, disappointed: 23, hopeful: 234, satisfied: 1567 }
  },
  {
    id: 6,
    title: "100% tap water connection to all rural homes by 2024",
    politician: "Rohini Kapoor",
    party: "NCP",
    constituency: "Mumbai North",
    category: "Water & Sanitation",
    status: "partial",
    datePromised: "2022-06-15",
    deadline: "Dec 2024",
    electionContext: "2022 Maharashtra Municipal",
    progress: 47,
    description: "Promised Jal Jeevan Mission coverage to every rural household in constituency. Currently 47% complete with 53% still relying on tankers and open wells.",
    evidence: [
      { type: "doc", label: "JJM progress report Aug 2024", date: "2024-08-20", verified: true }
    ],
    governmentProof: [
      { type: "doc", label: "JJM Phase 1 completion — 47% households connected", date: "2024-08-20", verified: true },
      { type: "img", label: "Water pipeline installation photos — 3 villages", date: "2024-07-15", verified: true }
    ],
    publicOpinion: {
      totalVotes: 1234,
      broken: 456,
      partial: 534,
      kept: 134,
      contested: 110,
      comments: [
        { user: "Meena D.", location: "Borivali, Mumbai", text: "Still waiting for water connection. 53% is not 100%.", upvotes: 234, time: "3 days ago" },
        { user: "Suresh P.", location: "Dahisar, Mumbai", text: "Our village got connected last month. Works intermittently.", upvotes: 123, time: "1 week ago" }
      ]
    },
    evidenceMissing: "53% households still uncovered as of Jan 2025. No timeline given for completion.",
    credibilityScore: 45,
    publicVotes: { citizen: 34, government: 21 },
    debateCount: 2,
    lastUpdated: "2026-01-15",
    reactions: { angry: 234, disappointed: 345, hopeful: 289, satisfied: 134 }
  },
  {
    id: 7,
    title: "Build 100 new government schools in Rajasthan",
    politician: "Neeta Singh",
    party: "BJP",
    constituency: "Jaipur Rural",
    category: "Education",
    status: "broken",
    datePromised: "2022-01-26",
    deadline: "Dec 2024",
    electionContext: "2022 Rajasthan Assembly",
    progress: 23,
    description: "Promised 100 new government schools with modern infrastructure. Only 23 schools built. Government's completion certificate covered a different scheme entirely.",
    evidence: [
      { type: "doc", label: "Construction tender documents", date: "2022-06-01", verified: true }
    ],
    governmentProof: [
      { type: "doc", label: "Completion certificate — but covers different scheme", date: "2024-06-01", verified: false }
    ],
    publicOpinion: {
      totalVotes: 1567,
      broken: 1234,
      partial: 189,
      kept: 45,
      contested: 99,
      comments: [
        { user: "RTI Activist", location: "Jaipur", text: "Completion cert is for Sarva Shiksha, not this promise. Fraud.", upvotes: 789, time: "1 week ago" },
        { user: "Parent", location: "Chomu, Rajasthan", text: "Nearest school is still 12km away for my children.", upvotes: 456, time: "2 weeks ago" }
      ]
    },
    evidenceMissing: "Only 23 of 100 schools built. Completion certificate was for a different scheme.",
    credibilityScore: 22,
    publicVotes: { citizen: 89, government: 12 },
    debateCount: 6,
    lastUpdated: "2026-02-14",
    reactions: { angry: 678, disappointed: 456, hopeful: 34, satisfied: 12 }
  },
  {
    id: 8,
    title: "Zero open defecation in all villages by 2022",
    politician: "Dinesh Rao",
    party: "JDU",
    constituency: "Bihar South",
    category: "Water & Sanitation",
    status: "broken",
    datePromised: "2019-10-02",
    deadline: "Dec 2022",
    electionContext: "2020 Bihar Assembly",
    progress: 41,
    description: "Promised complete elimination of open defecation across all villages. 38 citizens submitted field photos showing active open defecation. Government's ODF certified claim was self-certified.",
    evidence: [
      { type: "doc", label: "ODF self-certification (government)", date: "2022-12-01", verified: false }
    ],
    governmentProof: [
      { type: "doc", label: "ODF self-certification — no third-party audit", date: "2022-12-01", verified: false }
    ],
    publicOpinion: {
      totalVotes: 2345,
      broken: 2012,
      partial: 189,
      kept: 34,
      contested: 110,
      comments: [
        { user: "Village Head", location: "Gaya, Bihar", text: "ODF certificate is a lie. 4 villages in my block have no toilets.", upvotes: 678, time: "5 days ago" },
        { user: "NGO Worker", location: "Aurangabad, Bihar", text: "Submitted 38 photos proving open defecation continues.", upvotes: 890, time: "1 week ago" }
      ]
    },
    evidenceMissing: "Self-certification without third-party audit. 38 citizens submitted contrary field evidence.",
    credibilityScore: 18,
    publicVotes: { citizen: 94, government: 8 },
    debateCount: 7,
    lastUpdated: "2026-01-30",
    reactions: { angry: 1234, disappointed: 567, hopeful: 23, satisfied: 8 }
  },
  {
    id: 9,
    title: "Pothole-free roads in Mumbai by 2022",
    politician: "Arun Desai",
    party: "SS",
    constituency: "Mumbai South",
    category: "Infrastructure",
    status: "broken",
    datePromised: "2020-06-01",
    deadline: "Dec 2022",
    electionContext: "2019 Maharashtra Assembly",
    progress: 15,
    description: "Promised complete pothole repair across Mumbai South. 7 citizens documented 340+ potholes with geotagged photos in 2023.",
    evidence: [],
    governmentProof: [],
    publicOpinion: {
      totalVotes: 4567,
      broken: 4234,
      partial: 189,
      kept: 12,
      contested: 132,
      comments: [
        { user: "Commuter", location: "Worli, Mumbai", text: "Counted 47 potholes on my 8km drive to work today.", upvotes: 1234, time: "1 day ago" },
        { user: "Auto Driver", location: "Dadar, Mumbai", text: "My auto's suspension is destroyed. Who pays?", upvotes: 890, time: "3 days ago" }
      ]
    },
    evidenceMissing: "Government claimed 98% completion but 340+ geotagged potholes documented by citizens.",
    credibilityScore: 10,
    publicVotes: { citizen: 112, government: 5 },
    debateCount: 8,
    lastUpdated: "2026-01-20",
    reactions: { angry: 2345, disappointed: 1234, hopeful: 8, satisfied: 2 }
  },
  {
    id: 10,
    title: "₹15 lakh in every citizen's bank account",
    politician: "Mukesh Sharma",
    party: "BJP",
    constituency: "Delhi South",
    category: "Economy",
    status: "broken",
    datePromised: "2014-04-01",
    deadline: "Dec 2019",
    electionContext: "2014 Lok Sabha",
    progress: 0,
    description: "Famously promised that black money brought back from abroad would be deposited as ₹15 lakh in every citizen's bank account. Never implemented.",
    evidence: [],
    governmentProof: [],
    publicOpinion: {
      totalVotes: 8901,
      broken: 8567,
      partial: 123,
      kept: 5,
      contested: 206,
      comments: [
        { user: "Citizen", location: "India", text: "The most famous broken promise in Indian politics.", upvotes: 4567, time: "1 month ago" },
        { user: "Economist", location: "Delhi", text: "Was mathematically impossible from day one.", upvotes: 3456, time: "2 months ago" }
      ]
    },
    evidenceMissing: "Zero implementation. Promise was publicly disowned by the party.",
    credibilityScore: 2,
    publicVotes: { citizen: 245, government: 1 },
    debateCount: 12,
    lastUpdated: "2026-03-10",
    reactions: { angry: 4567, disappointed: 2345, hopeful: 2, satisfied: 1 }
  },
  {
    id: 11,
    title: "Clean Ganga by 2024 — Namami Gange Phase 2",
    politician: "Arvind Singh",
    party: "SP",
    constituency: "Lucknow",
    category: "Environment",
    status: "partial",
    datePromised: "2022-06-05",
    deadline: "Dec 2024",
    electionContext: "2022 UP Assembly",
    progress: 52,
    description: "Promised bathing-quality water in all Ganga stretches through Lucknow by 2024. Sewage treatment capacity increased but dissolved oxygen levels still below standards.",
    evidence: [
      { type: "doc", label: "CPCB water quality report Q4 2024", date: "2024-12-20", verified: true },
      { type: "img", label: "STP commissioning photos", date: "2024-09-15", verified: true }
    ],
    governmentProof: [
      { type: "doc", label: "STP capacity increase report — 120 MLD added", date: "2024-09-01", verified: true },
      { type: "doc", label: "CPCB partial improvement data", date: "2024-12-20", verified: true }
    ],
    publicOpinion: {
      totalVotes: 1567,
      broken: 567,
      partial: 678,
      kept: 189,
      contested: 133,
      comments: [
        { user: "Environmentalist", location: "Lucknow", text: "3 out of 7 monitoring points improved. 4 still failing.", upvotes: 345, time: "1 week ago" },
        { user: "Boatman", location: "Dashashwamedh Ghat", text: "Water looks cleaner near the new STP but still dirty downstream.", upvotes: 234, time: "2 weeks ago" }
      ]
    },
    evidenceMissing: "4 out of 7 monitoring points still below standards.",
    credibilityScore: 50,
    publicVotes: { citizen: 28, government: 31 },
    debateCount: 2,
    lastUpdated: "2026-02-10",
    reactions: { angry: 234, disappointed: 345, hopeful: 456, satisfied: 189 }
  },
  {
    id: 12,
    title: "Free laptops for all college students in Tamil Nadu",
    politician: "Padma Pillai",
    party: "DMK",
    constituency: "Chennai East",
    category: "Education",
    status: "kept",
    datePromised: "2021-04-06",
    deadline: "Mar 2024",
    electionContext: "2021 TN Assembly",
    progress: 100,
    description: "Promised free laptops to all government college students. 14,500 laptops distributed across 23 colleges with third-party audit.",
    evidence: [
      { type: "doc", label: "Distribution records — 14,500 units", date: "2024-02-15", verified: true },
      { type: "doc", label: "Third-party audit report", date: "2024-03-10", verified: true },
      { type: "img", label: "College distribution event photos", date: "2024-01-20", verified: true }
    ],
    governmentProof: [
      { type: "doc", label: "Laptop procurement order — 14,500 HP units", date: "2023-09-01", verified: true },
      { type: "doc", label: "College-wise distribution records with signatures", date: "2024-02-15", verified: true },
      { type: "doc", label: "Third-party audit by KPMG — all units delivered", date: "2024-03-10", verified: true },
      { type: "img", label: "Distribution ceremony photos — 23 colleges", date: "2024-01-20", verified: true }
    ],
    publicOpinion: {
      totalVotes: 2345,
      broken: 34,
      partial: 67,
      kept: 2134,
      contested: 110,
      comments: [
        { user: "Student", location: "Loyola College, Chennai", text: "Received my laptop. Works great. Thank you!", upvotes: 1567, time: "3 months ago" },
        { user: "Professor", location: "Pachaiyappa's College", text: "All 650 students in my department received laptops.", upvotes: 890, time: "4 months ago" }
      ]
    },
    evidenceMissing: null,
    credibilityScore: 92,
    publicVotes: { citizen: 8, government: 45 },
    debateCount: 0,
    lastUpdated: "2024-03-10",
    reactions: { angry: 5, disappointed: 12, hopeful: 345, satisfied: 2134 }
  }
];

export const categories = [
  { name: "Infrastructure", icon: "🏗️", color: "#1a5fa5", count: 0 },
  { name: "Healthcare", icon: "🏥", color: "#0F6E56", count: 0 },
  { name: "Education", icon: "🎓", color: "#854F0B", count: 0 },
  { name: "Economy", icon: "💰", color: "#534AB7", count: 0 },
  { name: "Employment", icon: "💼", color: "#A32D2D", count: 0 },
  { name: "Environment", icon: "🌿", color: "#2d7d2d", count: 0 },
  { name: "Digital India", icon: "📡", color: "#0891b2", count: 0 },
  { name: "Agriculture", icon: "🌾", color: "#b45309", count: 0 },
  { name: "Water & Sanitation", icon: "💧", color: "#0369a1", count: 0 },
  { name: "Women & Child", icon: "👩‍👧", color: "#be185d", count: 0 },
  { name: "Defence & Security", icon: "🛡️", color: "#4338ca", count: 0 },
  { name: "Housing", icon: "🏠", color: "#7c3aed", count: 0 },
  { name: "Transport", icon: "🚆", color: "#0d9488", count: 0 },
  { name: "Energy & Power", icon: "⚡", color: "#ea580c", count: 0 },
];

// Calculate counts dynamically
categories.forEach(cat => {
  cat.count = promises.filter(p => p.category === cat.name).length;
});

export const statusConfig = {
  broken: { label: "Broken", color: "#A32D2D", bgColor: "#FCEBEB", badgeClass: "badge-broken" },
  partial: { label: "In Progress", color: "#854F0B", bgColor: "#FEF3E2", badgeClass: "badge-partial" },
  kept: { label: "Fulfilled", color: "#2d7d2d", bgColor: "#EDFAED", badgeClass: "badge-kept" },
  contested: { label: "Contested", color: "#534AB7", bgColor: "#EEEDFE", badgeClass: "badge-contested" },
  pending: { label: "Pending", color: "#1a5fa5", bgColor: "#E8F1FD", badgeClass: "badge-pending" },
};

export function getStatusCounts() {
  const counts = { all: promises.length, broken: 0, partial: 0, kept: 0, contested: 0, pending: 0 };
  promises.forEach(p => { if (counts[p.status] !== undefined) counts[p.status]++; });
  return counts;
}

// Nearby political leaders (simulated based on location)
export const nearbyLeaders = [
  { id: 101, name: "Rajiv Sharma", party: "INC", role: "MP", constituency: "Delhi North", score: 34, promises: 8, broken: 5, img: null, initials: "RS", color: "#1a5fa5", distance: "2.3 km" },
  { id: 102, name: "Mukesh Sharma", party: "BJP", role: "MP", constituency: "Delhi South", score: 29, promises: 21, broken: 18, img: null, initials: "MS", color: "#A32D2D", distance: "5.1 km" },
  { id: 103, name: "Deepa Verma", party: "AAP", role: "MLA", constituency: "New Delhi", score: 56, promises: 12, broken: 4, img: null, initials: "DV", color: "#0891b2", distance: "3.8 km" },
  { id: 104, name: "Ramesh Gupta", party: "BJP", role: "Councillor", constituency: "Karol Bagh", score: 41, promises: 6, broken: 3, img: null, initials: "RG", color: "#854F0B", distance: "4.2 km" },
];

// Top political figures tracked globally
export const topLeaders = [
  { id: 201, name: "Narendra Modi", role: "Prime Minister", country: "India", party: "BJP", score: 45, promises: 156, kept: 52, broken: 67, img: null, initials: "NM", color: "#ea580c", trending: "down" },
  { id: 202, name: "Rahul Gandhi", role: "Leader of Opposition", country: "India", party: "INC", score: 38, promises: 89, kept: 24, broken: 41, img: null, initials: "RG", color: "#1a5fa5", trending: "up" },
  { id: 203, name: "Arvind Kejriwal", role: "Former CM", country: "India", party: "AAP", score: 52, promises: 67, kept: 31, broken: 19, img: null, initials: "AK", color: "#0891b2", trending: "stable" },
  { id: 204, name: "M.K. Stalin", role: "Chief Minister", country: "India", party: "DMK", score: 61, promises: 45, kept: 23, broken: 11, img: null, initials: "MKS", color: "#A32D2D", trending: "up" },
  { id: 205, name: "Yogi Adityanath", role: "Chief Minister", country: "India", party: "BJP", score: 39, promises: 78, kept: 22, broken: 38, img: null, initials: "YA", color: "#ea580c", trending: "down" },
  { id: 206, name: "Mamata Banerjee", role: "Chief Minister", country: "India", party: "TMC", score: 47, promises: 56, kept: 21, broken: 20, img: null, initials: "MB", color: "#2d7d2d", trending: "stable" },
];

// Live activity feed
export const activityFeed = [
  { type: "evidence", text: "Priya Mehta submitted RTI evidence against WiFi promise", time: "2 min ago", icon: "📄" },
  { type: "debate", text: "New debate opened: Clean Ganga progress challenged", time: "15 min ago", icon: "⚔️" },
  { type: "verdict", text: "AI Verdict: Pothole-free roads promise marked Broken", time: "1 hour ago", icon: "⚖️" },
  { type: "score", text: "Mukesh Sharma's score dropped to 29 after debate loss", time: "2 hours ago", icon: "📉" },
  { type: "evidence", text: "Government uploaded JJM Phase 2 completion report", time: "3 hours ago", icon: "📋" },
  { type: "vote", text: "1,247 citizens voted on WiFi promise — 72% say Broken", time: "4 hours ago", icon: "🗳️" },
  { type: "debate", text: "Public won debate: 100 schools promise in Rajasthan", time: "6 hours ago", icon: "🏆" },
  { type: "evidence", text: "Satellite data submitted for rural roads verification", time: "8 hours ago", icon: "🛰️" },
];

// Trending promises
export const trendingPromises = [
  { id: 10, title: "₹15 lakh in every bank account", votes: 8901, trend: "+1,234 votes this week", status: "broken" },
  { id: 9, title: "Pothole-free Mumbai roads", votes: 4567, trend: "+567 votes this week", status: "broken" },
  { id: 3, title: "5 crore manufacturing jobs", votes: 3456, trend: "+432 votes this week", status: "broken" },
  { id: 5, title: "Ayushman Bharat expansion", votes: 1890, trend: "+156 votes this week", status: "kept" },
];
