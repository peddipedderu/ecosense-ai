import { EnvironmentalReport, CommunityMetric } from './types';

export const initialReports: EnvironmentalReport[] = [
  {
    id: 'eco-101',
    title: 'Industrial Dye Run-Off in Lower Basin Canal',
    description: 'Heavy purple and crimson coloration observed spanning 2.4km downstream. Local fish displaying signs of acute hypoxia and surface gasping. Suspected discharge from upstream textile processing facility during unmonitored night hours.',
    category: 'Water Quality & Marine',
    severity: 'Critical',
    status: 'Verified Active',
    latitude: -1.286389,
    longitude: 36.817223,
    locationName: 'Nairobi River Basin, Industrial Zone B',
    reportedBy: 'Amina O. (High School Eco-Club Lead)',
    reportedAt: '2026-10-18T14:30:00Z',
    evidenceImageUrl: 'https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?auto=format&fit=crop&w=800&q=80',
    upvotes: 48,
    actionVolunteers: 24,
    biologicalImpact: {
      riskScore: 92,
      affectedEcosystem: 'Riparian Wetland & Aquatic Macrophytes',
      keyBiologicalTaxa: ['Tilapia zillii (Native Cichlid)', 'Potamonautes (River Crab)', 'Typha domingensis'],
      chemicalParameters: {
        'Dissolved Oxygen': '1.8 mg/L (Critical Anoxia)',
        'pH': '9.4 (Alkaline Toxicity)',
        'Chemical Oxygen Demand': '420 mg/L',
        'Suspended Solids': '340 ppm'
      },
      mitigationPriority: 'Immediate (24-48h)',
      recommendedAction: 'Deploy sorbent turbidity booms, immediately activate biological sampling protocols, and file Emergency Citizen Injunction with National Environmental Management Authority.',
      regulatoryCode: 'EMCA 1999 Sec 72 / EPA Clean Water Act Sec 301',
      officialNotificationDraft: 'URGENT REGULATORY NOTICE: Immediate investigation requested for unauthorized effluent discharge at GPS [-1.286389, 36.817223]. Critical aquatic bioindicator mortality observed.'
    }
  },
  {
    id: 'eco-102',
    title: 'Dense Particulate Smog Spike near School Transit Corridor',
    description: 'Autonomous low-cost student sensor array detected sustained PM2.5 concentrations exceeding 185 ug/m3 during peak morning bus idling. School clinic reports 34% increase in student inhaler requests.',
    category: 'Air Pollution & Emissions',
    severity: 'High',
    status: 'Community Action Scheduled',
    latitude: 40.712776,
    longitude: -74.005974,
    locationName: 'South Bronx Transit Crossway, New York',
    reportedBy: 'Marcus C. (Youth Clean Air Taskforce)',
    reportedAt: '2026-10-19T08:15:00Z',
    evidenceImageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
    upvotes: 39,
    actionVolunteers: 18,
    biologicalImpact: {
      riskScore: 78,
      affectedEcosystem: 'Urban Canopy & Respiratory Health Biome',
      keyBiologicalTaxa: ['Homo sapiens (Pediatric Populations)', 'Lichen Biomonitors (Flavoparmelia caperata)', 'Quercus palustris'],
      chemicalParameters: {
        'PM 2.5': '185 ug/m3 (Very Unhealthy)',
        'PM 10': '260 ug/m3',
        'NO2 Exposure Index': '74 ppb'
      },
      mitigationPriority: 'Immediate (24-48h)',
      recommendedAction: 'Institute 100-meter school idle-free zone, petition city transit for rerouting heavy diesel corridors, and plant multi-layered particulate-trapping vegetative buffer hedges.',
      regulatoryCode: 'Clean Air Act NAAQS 40 CFR Part 50',
      officialNotificationDraft: 'PETITION FOR URBAN IDLING REGULATION: Student monitoring documented hazardous PM2.5 spikes adjacent to educational facilities. Requesting immediate traffic enforcement.'
    }
  },
  {
    id: 'eco-103',
    title: 'Illegal High-Density Polyethylene & Microplastic Dumping',
    description: 'Over 4 tons of commercial plastic waste, shredded PVC, and electronic casings discarded along freshwater marsh embankment. Leaching observed during recent rainfall.',
    category: 'Illegal Waste & Plastics',
    severity: 'High',
    status: 'Verified Active',
    latitude: 34.052235,
    longitude: -118.243683,
    locationName: 'Whittier Narrows Riparian Reserve, California',
    reportedBy: 'Elena R. (High School Environmental Research Team)',
    reportedAt: '2026-10-17T11:20:00Z',
    evidenceImageUrl: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=800&q=80',
    upvotes: 61,
    actionVolunteers: 45,
    biologicalImpact: {
      riskScore: 84,
      affectedEcosystem: 'Palustrine Emergent Wetland',
      keyBiologicalTaxa: ['Ardea herodias (Great Blue Heron)', 'Pseudacris regilla (Pacific Tree Frog)', 'Benthic Invertebrates'],
      chemicalParameters: {
        'Microplastic Density': '2,400 particles/kg soil',
        'Phthalate Leaching Index': 'Elevated',
        'Soil Salinity': '4.1 dS/m'
      },
      mitigationPriority: 'Immediate (24-48h)',
      recommendedAction: 'Mobilize weekend student community cleanup with hazardous containment gear; install geotextile sediment barriers to prevent plastic migration into the main river channel.',
      regulatoryCode: 'RCRA Subtitle D 42 U.S.C. s/6941 / California Fish & Game Code 5650',
      officialNotificationDraft: 'MUNICIPAL SOLID WASTE VIOLATION REPORT: Significant uncontained plastic dumping threatens protected riparian corridor. Community cleanup scheduled; requesting waste disposal skip bins.'
    }
  },
  {
    id: 'eco-104',
    title: 'Unauthorized Old-Growth Buffer Clear-cutting',
    description: 'Felling of indigenous acacia and cedar grove in designated erosion buffer zone. Drone aerial surveys confirm 1.8 hectares stripped without municipal permits.',
    category: 'Deforestation & Land Degradation',
    severity: 'High',
    status: 'Under Investigation',
    latitude: -0.303099,
    longitude: 36.080025,
    locationName: 'Mau Forest Fringe, Rift Escarpment',
    reportedBy: 'Kiprotich B. (Student Drone Mapping Club)',
    reportedAt: '2026-10-16T16:45:00Z',
    evidenceImageUrl: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=800&q=80',
    upvotes: 72,
    actionVolunteers: 32,
    biologicalImpact: {
      riskScore: 89,
      affectedEcosystem: 'Montane Indigenous Canopy & Watershed Sponge',
      keyBiologicalTaxa: ['Colobus guereza (Mantled Guereza)', 'Juniperus procera (African Pencil Cedar)', 'Nectarinia johnstoni'],
      chemicalParameters: {
        'Soil Organic Carbon Loss': 'Est. 48% in top 30cm',
        'Surface Run-off Velocity': '+310% post-canopy loss',
        'Erosion Vulnerability': 'Extreme'
      },
      mitigationPriority: 'Elevated (1-2 weeks)',
      recommendedAction: 'Submit urgent injunction to Forest Service; begin propagating 1,500 indigenous seedlings in high school nursery for terrace bio-stabilization.',
      regulatoryCode: 'Forest Conservation and Management Act 2016',
      officialNotificationDraft: 'COMPLAINT REGARDING ILLEGAL TIMBER EXTRACTION: Remote sensing and ground truthing by student researchers demonstrate unauthorized clearing in designated catchment reserve.'
    }
  },
  {
    id: 'eco-105',
    title: 'Invasive Water Hyacinth Choking Municipal Reservoir',
    description: 'Rapid proliferation of Eichhornia crassipes now covers 68% of the western reservoir surface. Complete light blockage causing sub-canopy submerged vegetation die-off.',
    category: 'Biodiversity & Wildlife Threat',
    severity: 'Moderate',
    status: 'Community Action Scheduled',
    latitude: 51.507351,
    longitude: -0.127758,
    locationName: 'Lee Valley Marshlands & Water Reserve',
    reportedBy: 'Sophia L. (Youth Riverkeeper)',
    reportedAt: '2026-10-15T09:00:00Z',
    evidenceImageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    upvotes: 34,
    actionVolunteers: 28,
    biologicalImpact: {
      riskScore: 68,
      affectedEcosystem: 'Lacustrine Freshwater Ecosystem',
      keyBiologicalTaxa: ['Eichhornia crassipes (Invasive Vector)', 'Salmo trutta (Brown Trout)', 'Potamogeton natans (Native Pondweed)'],
      chemicalParameters: {
        'Dissolved Oxygen (Benthic)': '2.9 mg/L',
        'Water Temperature Differential': '-3.2 C beneath mat',
        'Light Penetration': '<4% of ambient'
      },
      mitigationPriority: 'Elevated (1-2 weeks)',
      recommendedAction: 'Mechanical harvesting via student volunteer watercraft; biomass repurposing trial for agricultural organic composting and bio-fertilizer.',
      regulatoryCode: 'Invasive Alien Species Regulation (EU/UK 1143/2014)',
      officialNotificationDraft: 'INVASIVE SPECIES CONTAINMENT ACTION: Ecological mapping indicates critical threshold. Community biomass recovery initiative mobilized for upcoming Saturday.'
    }
  },
  {
    id: 'eco-106',
    title: 'Extreme Urban Heat Island (UHI) Thermal Hotspot',
    description: 'Thermal infrared drone scan revealed asphalt parking lots reaching 58.4C surface temp (14.2C above baseline vegetated zones). Complete absence of canopy cover within 400m radius of low-income housing complex.',
    category: 'Urban Heat Island & Energy',
    severity: 'Moderate',
    status: 'Verified Active',
    latitude: 29.760427,
    longitude: -95.369803,
    locationName: 'East End District, Houston, Texas',
    reportedBy: 'Jayden T. (STEM Urban Climate Fellows)',
    reportedAt: '2026-10-14T15:10:00Z',
    evidenceImageUrl: 'https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=800&q=80',
    upvotes: 41,
    actionVolunteers: 22,
    biologicalImpact: {
      riskScore: 62,
      affectedEcosystem: 'Anthropogenic Dense Urban Microclimate',
      keyBiologicalTaxa: ['Urban Avian Nestlings', 'Pollinator Colonies (Apis mellifera)', 'High-Risk Vulnerable Resident Populations'],
      chemicalParameters: {
        'Peak Surface Temperature': '58.4 C (137.1 F)',
        'Ambient Air Differential': '+7.1 C vs. Memorial Park',
        'Albedo Rating': '0.08 (Extreme Absorption)'
      },
      mitigationPriority: 'Long-term Monitoring',
      recommendedAction: 'Initiate "Pocket Forest" native shade tree planting campaign; advocate for reflective cool-roof coatings with local school district and municipal housing authorities.',
      regulatoryCode: 'EPA Urban Heat Island Mitigation Advisory Guidelines',
      officialNotificationDraft: 'MUNICIPAL ADVISORY: Microclimate spatial analysis reveals extreme heat vulnerability. Recommending priority canopy allocation under City Climate Action Plan.'
    }
  }
];

// Persistent state holder in runtime
let globalReports: EnvironmentalReport[] = [...initialReports];

export function getReports(): EnvironmentalReport[] {
  return globalReports;
}

export function addReport(report: Omit<EnvironmentalReport, 'id' | 'reportedAt' | 'upvotes' | 'actionVolunteers'>): EnvironmentalReport {
  const newReport: EnvironmentalReport = {
    ...report,
    id: `eco-${Date.now().toString().slice(-4)}`,
    reportedAt: new Date().toISOString(),
    upvotes: 1,
    actionVolunteers: 1,
  };
  globalReports = [newReport, ...globalReports];
  return newReport;
}

export function upvoteReport(id: string): EnvironmentalReport | null {
  const item = globalReports.find(r => r.id === id);
  if (item) {
    item.upvotes += 1;
    return item;
  }
  return null;
}

export function volunteerForReport(id: string): EnvironmentalReport | null {
  const item = globalReports.find(r => r.id === id);
  if (item) {
    item.actionVolunteers += 1;
    return item;
  }
  return null;
}

export function getCommunityMetrics(): CommunityMetric {
  const total = globalReports.length;
  const resolved = globalReports.filter(r => r.status === 'Resolved & Monitored').length;
  const volunteers = globalReports.reduce((acc, r) => acc + r.actionVolunteers, 0);
  
  return {
    totalReports: total + 1284,
    resolvedIncidents: resolved + 412,
    activeStudentVolunteers: volunteers + 1890,
    monitoredWaterways: 48,
    treesPlanted: 14200,
    wasteDivertedTons: 86.4
  };
}
