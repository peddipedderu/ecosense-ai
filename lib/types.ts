export type SeverityLevel = 'Low' | 'Moderate' | 'High' | 'Critical';

export type IncidentCategory = 
  | 'Water Quality & Marine'
  | 'Air Pollution & Emissions'
  | 'Illegal Waste & Plastics'
  | 'Deforestation & Land Degradation'
  | 'Biodiversity & Wildlife Threat'
  | 'Urban Heat Island & Energy';

export type IncidentStatus = 
  | 'Verified Active'
  | 'Community Action Scheduled'
  | 'Under Investigation'
  | 'Resolved & Monitored';

export interface BiologicalImpact {
  riskScore: number; // 0 - 100
  affectedEcosystem: string;
  keyBiologicalTaxa: string[];
  chemicalParameters?: { [param: string]: string };
  mitigationPriority: 'Immediate (24-48h)' | 'Elevated (1-2 weeks)' | 'Long-term Monitoring';
  recommendedAction: string;
  regulatoryCode: string;
  officialNotificationDraft: string;
}

export interface EnvironmentalReport {
  id: string;
  title: string;
  description: string;
  category: IncidentCategory;
  severity: SeverityLevel;
  status: IncidentStatus;
  latitude: number;
  longitude: number;
  locationName: string;
  reportedBy: string;
  reportedAt: string;
  evidenceImageUrl: string;
  upvotes: number;
  biologicalImpact: BiologicalImpact;
  actionVolunteers: number;
}

export interface CommunityMetric {
  totalReports: number;
  resolvedIncidents: number;
  activeStudentVolunteers: number;
  monitoredWaterways: number;
  treesPlanted: number;
  wasteDivertedTons: number;
}
