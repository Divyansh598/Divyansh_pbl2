export const debates = [
  {
    id: 1,
    promiseId: 1,
    title: "Free WiFi in all 543 constituencies by 2023",
    politician: "Rajiv Sharma",
    constituency: "Delhi North",
    status: "live",
    daysOpen: 6,
    publicVotes: 47,
    govVotes: 12,
    messages: [
      {
        id: 1,
        role: "citizen",
        sender: "Priya Mehta",
        location: "Citizen, Delhi",
        text: "My ward in Rohini still has zero public WiFi in 2026. The government keeps saying 'work in progress' but no tenders have been floated in 3 years. I have an RTI response showing zero budget allocated to outer constituencies.",
        timestamp: "2026-03-09T10:30:00"
      },
      {
        id: 2,
        role: "government",
        sender: "Office of Rajiv Sharma",
        location: "MP, Delhi North",
        text: "Phase 1 covering 120 hotspots in central Delhi was completed in 2022. Phase 2 expansion to outer constituencies is delayed due to BSNL coordination issues. Work order documents are attached for verification.",
        timestamp: "2026-03-10T14:15:00"
      },
      {
        id: 3,
        role: "ai",
        sender: "AI Moderator",
        location: "VaadaTracker",
        text: "Citizen evidence: RTI document showing no budget in outer Delhi wards. Government evidence: Phase 1 work order (120 hotspots, central Delhi only). Assessment: Government's Phase 1 claim is supported, but the original promise covered \"all 543 constituencies\" — currently 78% unfulfilled. Verdict: Partially contested. Promise remains open.",
        timestamp: "2026-03-10T14:20:00"
      }
    ]
  },
  {
    id: 2,
    promiseId: 7,
    title: "Build 100 new government schools in Rajasthan",
    politician: "Neeta Singh",
    constituency: "Jaipur Rural",
    status: "closed",
    daysOpen: 0,
    closedDaysAgo: 14,
    publicVotes: 89,
    govVotes: 12,
    result: "public_won",
    summary: "AI verdict: Only 23 schools built out of 100 promised. Government's completion certificate covered a different scheme. Public evidence (RTI + satellite data) prevailed. Promise status permanently marked Broken.",
    messages: []
  },
  {
    id: 3,
    promiseId: 8,
    title: "Zero open defecation in all villages by 2022",
    politician: "Dinesh Rao",
    constituency: "Bihar South",
    status: "closed",
    daysOpen: 0,
    closedDaysAgo: 30,
    publicVotes: 94,
    govVotes: 8,
    result: "public_won",
    summary: "38 citizens submitted field photos from 12 villages showing active open defecation. Government's 'ODF certified' claim was found to be based on self-certification without third-party verification.",
    messages: []
  },
  {
    id: 4,
    promiseId: 9,
    title: "Pothole-free roads in Mumbai by 2022",
    politician: "Arun Desai",
    constituency: "Mumbai South",
    status: "won",
    daysOpen: 0,
    closedDaysAgo: 45,
    publicVotes: 112,
    govVotes: 5,
    result: "public_won",
    summary: "7 citizens submitted geotagged photos of 340+ potholes across Mumbai South in 2023. Government's '98% completion' claim rejected. Promise reversed to Broken. Politician accountability score dropped from 54 to 31.",
    messages: []
  },
  {
    id: 5,
    promiseId: 10,
    title: "₹15 lakh in every citizen's bank account",
    politician: "Mukesh Sharma",
    constituency: "Delhi South",
    status: "won",
    daysOpen: 0,
    closedDaysAgo: 120,
    publicVotes: 245,
    govVotes: 1,
    result: "public_won",
    summary: "The most one-sided debate on VaadaTracker. Promise was publicly disowned by the party itself. 245 citizens voted against with zero credible evidence from the government side. Promise permanently marked Broken with credibility score of 2.",
    messages: []
  }
];
