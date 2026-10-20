import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { message } = await request.json();
    if (!message) {
      return NextResponse.json({ success: false, error: 'Message is required' }, { status: 400 });
    }

    const query = message.toLowerCase();
    let reply = '';

    if (query.includes('water') || query.includes('river') || query.includes('ph') || query.includes('oxygen')) {
      reply = `🔬 **Water Ecosystem Analysis & Field Testing Protocol**
1. **Dissolved Oxygen (DO):** Crucial for aquatic life. Levels above 6.5 mg/L support healthy fish populations; below 4.0 mg/L causes severe stress; < 2.0 mg/L leads to hypoxic fish kills. High school students can test this using standard Winkler titration kits or optical DO probes.
2. **pH & Alkalinity:** Normal freshwater ranges between 6.5 – 8.5. Run-off from concrete washing or industrial dye facilities can push pH > 9.0 (alkaline burns), while acid mine drainage drops pH < 5.0.
3. **Biological Macroinvertebrate Index:** Turn over submerged rocks! Stonefly (Plecoptera) and Mayfly (Ephemeroptera) nymphs only survive in clean, well-oxygenated water. An abundance of bloodworms and leeches indicates organic contamination.
4. **Action:** Log your GPS readings in EcoSense AI to generate an automated EPA compliance report!`;
    } else if (query.includes('air') || query.includes('pm2.5') || query.includes('smog') || query.includes('inhaler')) {
      reply = `🌬️ **Urban Atmospheric Monitoring & Health Protection**
1. **PM2.5 Penetration:** Particulate matter < 2.5 micrometers bypasses nasal cilia and enters human alveolar sacs, passing into bloodstream capillaries. WHO 24-hour safe guideline is 15 µg/m³.
2. **Biomonitoring with Lichens:** You can study local trees! Bushy and leafy lichens (Fruticose/Foliose) disappear in high SO2 and NOx areas, leaving only crustose (crust-like) lichens.
3. **Student Mitigation:** Low-cost optical dust sensors (e.g. PMS5003 / Plantower) connected to ESP32 microcontrollers can be mounted around school perimeters to advocate for designated "Zero-Idling School Bus Zones".`;
    } else if (query.includes('plastic') || query.includes('waste') || query.includes('microplastic')) {
      reply = `♻️ **Plastics Degradation & Soil Microfauna Disruption**
1. **Fragmentation Mechanism:** UV photolysis and physical abrasion break macroplastics into microscopic particles (< 5mm) within 3–6 months in tropical and temperate water bodies.
2. **Chemical Leaching:** Plasticizers such as phthalates and bisphenols mimic estrogenic hormones, disrupting endocrine systems in amphibians (e.g., Xenopus and Rana tadpoles).
3. **Citizen Science Protocol:** High school students can sample sand/soil using saturated brine (NaCl) density separation: microplastics float while mineral sediments sink. Filter through 300 µm mesh for stereomicroscope counting.`;
    } else if (query.includes('tree') || query.includes('plant') || query.includes('forest') || query.includes('heat')) {
      reply = `🌳 **Urban Forestry & Heat Island Mitigation**
1. **Evapotranspiration Cooling:** A single mature deciduous tree can transpire over 100 gallons of water daily, producing a net cooling effect equivalent to 10 room-sized air conditioners running 20 hours a day.
2. **Canopy Density vs. Asphalt:** Black asphalt surfaces reach 50°C–65°C under direct solar radiation (albedo 0.05–0.10). Planting indigenous canopy species reduces localized surface temps by up to 12°C.
3. **Recommended Native Tree Guilds:** Choose high-canopy, drought-tolerant species with deep taproots to avoid infrastructure damage while maximizing particulate sequestration.`;
    } else {
      reply = `🌱 **EcoSense AI Environmental Advisor:**
I am here to help you design scientific fair experiments, conduct field biomonitoring, and mobilize youth community remediation!
- Ask me: *"How can high school students test for agricultural nutrient runoff?"*
- Ask me: *"What bio-indicators reveal chronic urban air pollution?"*
- Ask me: *"How do I draft an official environmental petition to our city council?"*

Every observation you record on EcoSense AI equips your community with actionable scientific evidence.`;
    }

    return NextResponse.json({ success: true, reply });
  } catch {
    return NextResponse.json({ success: false, error: 'Failed to process chat' }, { status: 500 });
  }
}
