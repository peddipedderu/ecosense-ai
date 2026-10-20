# 🌿 EcoSense AI — Community Environmental Intelligence Platform

> **Official Submission for EurekaDev 2026 Global Innovation Challenge**  
> **Track:** Coding Track  
> **Category:** Biology/Medical and Environmental Science  
> **Hosts:** Eureka Institute & UnivaDev  
> **Live Demo:** [https://ecosense-ai-2026.fly.dev](https://ecosense-ai-2026.fly.dev)  
> **Repository:** [https://github.com/peddipedderu/ecosense-ai](https://github.com/peddipedderu/ecosense-ai)

---

## 🏆 Project Elevator Pitch
**EcoSense AI** bridges citizen science, artificial intelligence, and municipal environmental policy — empowering student researchers and communities to document localized ecological hazards, evaluate biological toxicology via AI, and enforce environmental accountability.

---

## 💡 Inspiration
Municipal environmental monitoring agencies (e.g. EPA, NEMA, WHO regional divisions) operate on sparse, scheduled sampling runs. As a result, critical ecological incidents — including nocturnal industrial dye discharges, unmonitored plastic dumping in wetlands, and dangerous particulate spikes around school transit corridors — often go undetected until catastrophic die-offs or human health crises occur.

As high school students passionate about environmental biology and technology, we asked:  
*What if every student with a smartphone or low-cost field test kit could act as a certified environmental biomonitor, equipped with an AI partner that transforms raw observations into actionable biological impact metrics and formal regulatory enforcement petitions?*

That is the vision behind **EcoSense AI**.

---

## 🚀 Key Features & Innovations

### 1. 🗺️ Interactive Geospatial Biomonitoring Grid
- Real-time mapping of citizen and student environmental reports across aquatic, atmospheric, and terrestrial biomes.
- Multi-dimensional filtering by category (*Water Quality & Marine, Air Pollution & Emissions, Illegal Waste & Plastics, Deforestation & Land Degradation, Biodiversity & Wildlife Threat, Urban Heat Island & Energy*) and severity (*Critical, High, Moderate, Low*).
- Interactive incident dossiers with field photography, GPS coordinates, affected species, and community upvoting.

### 2. 🧬 AI Biological & Toxicological Impact Engine
- Evaluates field observations against environmental toxicology heuristics to derive a quantitative **Biodiversity Risk Index (BRI)** on a 0–100 scale:
  $$\text{BRI} = \min\left(100, \; \left(w_1 \cdot T_i + w_2 \cdot V_e + w_3 \cdot P_s\right) \times \left[1 + \frac{\alpha}{\sqrt{D_p + 1}}\right]\right)$$
- Identifies sensitive bioindicator taxa (e.g., *Ephemeroptera* mayfly nymphs, *Flavoparmelia* lichens, benthic macroinvertebrates).
- Predicts biochemical perturbations (Dissolved Oxygen depression, PM2.5 alveolar penetration, pH alkaline toxicity, leachate conductivity).

### 3. ⚖️ Automated Regulatory Notice & Petition Drafter
- Instantly translates field observations and bioindicator data into formal, citation-backed statutory notices ready for submission to municipal environmental boards and public health authorities (referencing the Clean Water Act §301, Clean Air Act NAAQS, and local statutory codes).

### 4. 🤖 EcoBot Scientist & Policy Mentor
- Interactive conversational AI specialized in environmental chemistry, water sampling titration protocols, urban heat mitigation, and student community activism.

### 5. 🔬 Research Track Alignment & Scientific Framework
- Dedicated research documentation containing formal scientific abstracts, mathematical derivations of ecological vulnerability scores, literature citations (EPA, WHO, UNEP), and instant CSV data export for scientific symposium presentations.

### 6. 🤝 Community Action Hub & High School Leaderboard
- Mobilizes youth volunteer cleanups, riparian tree planting drives, and school eco-club competitions.

---

## 🛠️ Built With
- **Frontend & Backend Framework:** Next.js 16 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4 & PostCSS
- **Icons:** Lucide React
- **Artificial Intelligence:** Environmental Toxicology Diagnostic Engine
- **Deployment & Cloud:** Fly.io & Docker
- **Version Control:** Git & GitHub

---

## ⚡ Getting Started (Local Development)

### Prerequisites
- Node.js (v18.0 or higher)
- npm or yarn

### 1. Clone the repository
```bash
git clone https://github.com/peddipedderu/ecosense-ai.git
cd ecosense-ai
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to experience the platform.

### 4. Production Build
```bash
npm run build
npm start
```

---

## 📊 Scientific Methodology & High School Field Kit
High school science clubs can deploy EcoSense AI with accessible, low-cost field instrumentation:
- **Aquatic Sampling ($25):** Secchi disk, LaMotte dissolved oxygen titration tablets, pH colorimetric strips, 500µm kick-net.
- **Atmospheric Monitoring ($35):** ESP32 microcontroller, Plantower PMS5003 laser particulate sensor, DHT22 temperature/humidity probe.
- **Spatial Mapping ($0):** Smartphone photographic geotagging with EcoSense AI progressive web app.

---

## 🎥 4-Minute Demo Video Pitch
An interactive 4-minute presentation walkthrough is embedded directly inside the application!  
Click the **"Watch 4-Min Demo Pitch"** or **"Pitch Video"** button on the live application to step through the official problem, architecture, live workflow, and community impact slides.

---

## 👥 Authors & Team
- **Submitted by:** High School Student Innovators & Citizen Scientists
- **Contact / GitHub:** [@peddipedderu](https://github.com/peddipedderu)
- **Competition:** EurekaDev 2026 (September 27 – October 20, 2026)
- **Track & Category:** Coding Track — Biology/Medical and Environmental Science

*Dedicated to empowering student researchers worldwide to protect our planet's fragile ecosystems through science, code, and civic action.*
