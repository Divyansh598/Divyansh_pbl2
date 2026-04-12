/**
 * AI Service — Mock responses for demo, structured for easy swap to real Claude API
 * To use real API: set VITE_AI_MODE=api in .env and configure backend proxy
 */

const MOCK_DELAY = 1500; // Simulates AI thinking time

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Promise analysis responses
const promiseAnalyses = {
  1: "This promise has significant credibility concerns. While Phase 1 covering 120 hotspots in central Delhi is documented, the original commitment was for all 543 constituencies — making current progress only 22%. The RTI response showing zero budget allocation for outer constituencies is particularly damaging. The government's BSNL excuse lacks supporting documentation. Verdict: Promise is substantially unfulfilled with weak justification for delays.",
  2: "This promise shows genuine progress with 61% completion documented through official PMGSY reports and state audits. The road construction is verifiable through satellite imagery and ground-level inspections. However, the deadline of March 2025 has passed with 39% remaining. While the effort is credible, the timeline commitment was not met. The evidence quality from the government side is strong, which positively affects the credibility score.",
  3: "This is one of the most clearly broken promises on the platform. The target was 5 crore jobs but CMIE data shows only 40 lakh created — just 8% of the promise. The politician's office has submitted zero employment data and has not responded to any of the 5 public debates. The complete absence of evidence combined with contradictory third-party data makes this a definitive case of a broken promise.",
  4: "NABARD survey data shows farmer income grew by 34% against the promised 100% doubling. While the MSP revision notification from 2023 shows some action was taken, the gap of 66% is substantial. The politician has engaged with public debates, which positively affects their response rate score, but the fundamental commitment remains unmet. This is a clear case of over-promising on a complex economic indicator.",
  5: "This is a model case of a promise fulfilled with strong evidence. Enrollment data covering 2.1 lakh households, hospital empanelment lists for 47 facilities, and state health department verification all corroborate completion. The evidence chain is comprehensive and independently verified. This promise demonstrates what accountability looks like when both commitment and documentation standards are maintained.",
  6: "Progress at 47% with a December 2024 deadline passed represents a significant shortfall. The JJM progress report documents some work, but 53% of households still rely on tankers and open wells. The gap between promise and delivery is substantial. While some infrastructure has been built, the 'every rural household' commitment remains far from achieved. Additional evidence on completion timelines would be needed to justify maintaining an 'In Progress' status.",
  7: "Only 23 of 100 promised schools were built — a 77% failure rate. More concerning, the government's completion certificate was found to reference a different scheme entirely, suggesting either administrative incompetence or deliberate misdirection. The public's RTI and satellite evidence was decisive in the debate. This promise has been permanently marked Broken with high confidence.",
  8: "This promise was debunked through grassroots citizen evidence. 38 citizens from 12 villages submitted field photos showing ongoing open defecation despite the government's ODF certification. The critical finding was that the certification was self-reported without any third-party verification — a systematic accountability failure. The gap between paper compliance and ground reality is stark.",
  9: "The most evidence-rich public victory on VaadaTracker. Seven citizens systematically documented 340+ potholes with geotagged photos across Mumbai South, directly contradicting the government's '98% completion' claim. The government never responded to the debate, leading to a unanimous public verdict. The politician's accountability score dropped 23 points as a result.",
  10: "This promise is universally recognized as unfulfilled and was publicly disowned by the party itself. No policy mechanism was ever established to implement it, and it was later characterized as 'election rhetoric.' With 245 citizen votes against and a credibility score of 2, this represents the most clear-cut broken promise on the platform. Zero evidence has ever been submitted in its defense.",
  11: "Mixed progress on the Clean Ganga commitment. Sewage treatment capacity has genuinely increased and STP commissioning photos are verified. However, CPCB data shows 4 out of 7 monitoring points still below bathing water standards. Industrial discharge — a major pollution source — hasn't been adequately addressed. The promise shows real effort but falls short of the 'clean by 2024' commitment.",
  12: "Successfully delivered with strong documentation. 14,500 laptops distributed across 23 colleges with distribution records and a third-party audit confirming delivery and working condition. This is one of the few promises with complete end-to-end evidence from commitment to verified delivery. The constituency-level focus made this achievable and measurable."
};

const debateResponses = [
  "Your argument raises valid points. The evidence you've cited — {evidence_type} — adds important context to this debate. However, for maximum impact, consider supplementing this with official data sources such as RTI responses or government audit reports. The current debate thread shows the government has not addressed the specific claims you've raised. We encourage the politician's office to respond with documented evidence.",
  "Thank you for your contribution to this debate. Your observation about the gap between the promise and ground reality is noted. To strengthen your position, verifiable evidence such as geotagged photos, official documents, or independent audit reports would significantly increase the credibility of your argument. The government's previous response in this thread has been evaluated and found partially supported by the evidence they submitted.",
  "Your argument has been analyzed against the existing evidence in this debate thread. The points you raise are consistent with other citizen submissions and publicly available data. The government side has yet to provide a comprehensive response to these specific concerns. A strong debate requires both sides to present documented evidence — we encourage continued participation with supporting documentation.",
  "This is a substantive contribution to the debate. The claims you've made can be cross-referenced with existing evidence on the platform. Based on the current evidence balance, the citizen side has presented more documented, verifiable claims than the government side. However, the debate remains open for government response. Additional supporting evidence would further strengthen your position."
];

const evidenceAnalyses = {
  "RTI Response": "Authenticity Likelihood: High — RTI responses are official government documents with legal standing under the Right to Information Act, 2005. This type of evidence is among the strongest on the platform, as it carries legal weight and cannot be easily dismissed. The evidence directly addresses the promise's claimed status and provides concrete data that can be independently verified. To make this evidence airtight, cross-reference the RTI response with CMIE data, independent audit reports, or satellite imagery where applicable.",
  "Photos/Video": "Authenticity Likelihood: Medium — Photographic and video evidence is valuable but requires geotagging, timestamps, and contextual metadata to achieve high credibility. The evidence provides visual documentation of ground reality. To strengthen this submission, ensure photos have EXIF data intact showing location and date, and if possible, submit alongside a notarized affidavit or witness statement confirming the location and timing.",
  "Government Document": "Authenticity Likelihood: High — Official government documents carry institutional weight. However, their relevance to the specific promise must be carefully evaluated, as documents from related but different schemes are sometimes submitted as evidence. This evidence can be verified against public records. For maximum impact, pair this with ground-level verification showing the document's claims match reality.",
  "News Article": "Authenticity Likelihood: Medium — News articles from established media outlets provide independent reporting that can corroborate or challenge official claims. The credibility depends on the publication's reputation and whether the reporting is based on primary investigation or official statements. To strengthen this evidence, submit articles from multiple independent sources covering the same issue.",
  "Satellite Data": "Authenticity Likelihood: High — Satellite imagery provides objective, timestamped, and independently verifiable evidence of infrastructure projects, land use changes, and environmental conditions. This is among the most powerful forms of evidence on VaadaTracker, as it cannot be manipulated at the source. Consider pairing satellite data with ground-level photos for a comprehensive evidence package."
};

const politicianResponses = {
  "mukesh sharma": "Mukesh Sharma has an accountability score of 29/100, which is among the lowest on VaadaTracker. Here's the breakdown: Promise fulfillment contributes only 9.5% (2 out of 21 promises fulfilled, weighted at 40%). Evidence quality scores 3.75% (virtually no evidence submitted, weighted at 25%). Response rate adds just 2.4% (responds to only 12% of public contests, weighted at 20%). Deadline adherence contributes 1.5% (10% adherence, weighted at 15%). His most damaging entries are the ₹15 lakh promise (credibility score: 2) and 5 crore jobs promise (credibility score: 12).",
  "arvind singh": "Arvind Singh leads with a score of 78/100 — the highest on the platform. His promise fulfillment rate of 70.6% (12 of 17) contributes 28.2% to his score. Evidence quality at 85% adds 21.25%. His 88% response rate to public debates contributes 17.6%, and 72% deadline adherence adds 10.8%. His strongest area is healthcare promises, all of which are fulfilled with verified evidence. His weakest area is the farmer income doubling promise, which has hurt his otherwise strong record.",
  "padma pillai": "Padma Pillai scores 65/100 with a balanced profile. 9 of 17 promises fulfilled (52.9%) contributes 21.2%. Evidence quality at 78% adds 19.5%. Response rate of 76% contributes 15.2%. Deadline adherence at 60% adds 9.0%. Her standout achievements are the Ayushman Bharat expansion (credibility score 95) and laptop distribution (credibility score 92) — both with comprehensive third-party verified evidence. Her 5 broken promises bring down the average.",
  "rohini kapoor": "Rohini Kapoor has a mid-range score of 51/100 with many promises still in progress. 6 of 18 fulfilled (33.3%) contributes 13.3%. Evidence quality at 55% adds 13.75%. Response rate at 60% contributes 12.0%. Deadline adherence at 45% adds 6.75%. Her score is being dragged down by 8 in-progress promises that have missed their original deadlines. If even half of these are completed with evidence, her score could rise significantly.",
  "neeta singh": "Neeta Singh scores 44/100. 4 of 16 promises fulfilled (25%) contributes 10.0%. Evidence quality at 40% adds 10.0%. Response rate at 45% contributes 9.0%. Deadline adherence at 35% adds 5.25%. Her score took a major hit from the school construction promise where the completion certificate was found to reference a different scheme. The 50,000 km road promise is her strongest ongoing project at 61% completion.",
};

export async function analyzePromise(promise) {
  await delay(MOCK_DELAY);
  return promiseAnalyses[promise.id] || 
    `Analysis for "${promise.title}": This promise by ${promise.politician} (${promise.party}) is currently at ${promise.progress}% completion with a status of ${promise.status}. Based on the evidence submitted and verified on the platform, the credibility score is ${promise.credibilityScore}/100. ${promise.evidenceMissing ? 'Key concern: ' + promise.evidenceMissing : 'Evidence documentation is adequate for the claimed progress level.'}`;
}

export async function moderateDebate(argument, debateContext) {
  await delay(MOCK_DELAY);
  const response = debateResponses[Math.floor(Math.random() * debateResponses.length)];
  return response.replace('{evidence_type}', 'citizen testimony and observation');
}

export async function analyzeEvidence(evidenceType, description) {
  await delay(MOCK_DELAY);
  const baseAnalysis = evidenceAnalyses[evidenceType] || evidenceAnalyses["Government Document"];
  return `${baseAnalysis} Regarding your specific submission: "${description.substring(0, 100)}${description.length > 100 ? '...' : ''}" — this evidence has been flagged for review and will be added to the promise's evidence chain upon verification.`;
}

export async function askAboutPolitician(question) {
  await delay(MOCK_DELAY);
  const q = question.toLowerCase();
  
  for (const [key, response] of Object.entries(politicianResponses)) {
    if (q.includes(key)) {
      return response;
    }
  }
  
  if (q.includes('lowest') || q.includes('worst') || q.includes('bad')) {
    return politicianResponses["mukesh sharma"].replace("Mukesh Sharma has", "The lowest-scoring politician, Mukesh Sharma, has");
  }
  if (q.includes('highest') || q.includes('best') || q.includes('top')) {
    return politicianResponses["arvind singh"].replace("Arvind Singh leads", "The highest-scoring politician, Arvind Singh, leads");
  }
  
  return "Based on the VaadaTracker database, the accountability scores range from 21 (Arun Desai, Mumbai South) to 78 (Arvind Singh, Lucknow). The average score across all tracked politicians is 45.9/100, indicating significant room for improvement in political accountability. The most common reason for low scores is failure to submit evidence for completion claims (25% weight) and non-response to public debates (20% weight). Politicians who actively engage with the platform and submit verified evidence consistently maintain higher scores.";
}
