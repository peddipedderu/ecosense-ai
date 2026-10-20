# 🏆 EurekaDev 2026 — Official Devpost Submission Kit
**Project:** EcoSense AI  
**Track:** Coding Track  
**Category:** Biology/Medical and Environmental Science  
**Live Application URL:** https://ecosense-ai-2026.fly.dev  
**GitHub Public Repository:** https://github.com/peddipedderu/ecosense-ai  

---

## 📋 Devpost Form Fields — Copy & Paste Ready

### 1. General Info

#### Project Name (Max 60 characters)
```text
EcoSense AI
```

#### Elevator Pitch (Max 200 characters)
```text
Empowering youth to monitor local ecosystems with AI-driven biological impact diagnostics, quantitative risk scoring, and automated municipal regulatory action.
```
*(Length: 163 characters)*

---

### 2. Project Details

#### Built With (Tags - up to 25 tags)
```text
Next.js, TypeScript, React, Tailwind CSS, Python, Docker, Fly.io, Leaflet, REST API, Machine Learning, Artificial Intelligence, Environmental Science, Biology, Chemistry, Citizen Science, GIS, Turbopack, Git, GitHub
```

#### "Try it out" links
- **Public GitHub Repo:**  
  `https://github.com/peddipedderu/ecosense-ai`
- **Live Demo Site (Fly.io):**  
  `https://ecosense-ai-2026.fly.dev`

#### Video Demo Link
- **Live In-App Interactive Pitch Player:**  
  `https://ecosense-ai-2026.fly.dev` *(Click "Watch 4-Min Demo Pitch" on top banner or hero section)*
- **YouTube / Loom Link:** *(If recording a personal video, paste your Loom / YouTube link here)*

---

### 3. About the Project (Markdown for Devpost "About the project" field)

```markdown
## Inspiration
Municipal environmental monitoring agencies (such as the EPA, UNEP, and local public health boards) face critical geographic and temporal surveillance gaps. Because official water and air sampling runs are conducted on periodic schedules, acute environmental hazards—including unmonitored nocturnal dye discharges into urban canals, chronic plastic leachate in wetland reserves, and hazardous particulate matter ($PM_{2.5}$) spikes along school transit corridors—frequently escape detection until severe ecological mortality or pediatric respiratory illnesses occur.

As high school student researchers passionate about biology and technology, we wanted to bridge this divide. We envisioned transforming every student with a smartphone or low-cost water test kit into an empowered citizen biomonitor, backed by an intelligent platform that translates raw field observations into quantitative ecological risk metrics and legally enforceable civic petitions.

## What it does
**EcoSense AI** is an all-in-one community environmental intelligence platform designed for citizen scientists, secondary school eco-clubs, and civic leaders:

1. **Interactive Geospatial Biomonitoring Grid:** Visualizes crowd-sourced environmental perturbations across aquatic, atmospheric, and terrestrial biomes with multi-parameter filtering (by category and severity level).
2. **AI Biological & Toxicological Impact Engine:** Dynamically analyzes student field observations to evaluate vulnerable biological indicator taxa (e.g., *Ephemeroptera* mayfly nymphs, *Flavoparmelia* lichens, native cichlid fry), estimate chemical deviations (Dissolved Oxygen depression, pH alkaline toxicity, COD, microplastic fragmentation rates), and compute an algorithmic **Biodiversity Risk Index (BRI 0–100)**:
   $$BRI = \min\left(100, \; \left(w_1 \cdot T_i + w_2 \cdot V_e + w_3 \cdot P_s\right) \times \left[1 + \frac{\alpha}{\sqrt{D_p + 1}}\right]\right)$$
3. **Automated Municipal Regulatory Drafter:** Converts raw field data and bioindicator mortality evidence into formal, citation-backed statutory notices ready for submission to municipal environmental protection boards (referencing Clean Water Act §301, Clean Air Act NAAQS, and local conservation statutes).
4. **EcoBot Environmental Scientist Mentor:** An interactive AI counselor equipped with environmental chemistry, water sampling titration protocols (Winkler titration, secchi depth), and community organizing best practices.
5. **Scientific Research Hub & Data Export:** Features formal research abstracts, experimental design parameters for low-cost high school field sampling kits (<$35), and instant CSV research dataset exports for science fair symposium presentations.
6. **Community Mobilization & School Chapter Leaderboard:** Tracks volunteer cleanups, riparian tree planting drives, and school chapter rankings to foster collaborative environmental stewardship.

## How we built it
- **Architecture:** Full-stack modern web application built using **Next.js 16 (App Router)** and **TypeScript 5**.
- **Frontend & Visualization:** Responsive user interface styled with **Tailwind CSS 4** and Lucide icons, featuring an interactive geospatial grid simulator, real-time diagnostic drawers, and embedded presentation pitch decks.
- **Backend & REST APIs:** Serverless Next.js API endpoints (`/api/reports`, `/api/chat`, `/api/stats`, `/api/reports/[id]/upvote`, `/api/reports/[id]/volunteer`) with persistent state modeling and chemical parameter evaluation algorithms.
- **Artificial Intelligence Engine:** Biological taxonomy heuristics and toxicological modeling based on US EPA Volunteer Estuary Monitoring (EPA 842-B-06-003) and WHO Ambient Air Quality benchmarks.
- **Containerization & Cloud Infrastructure:** Multi-stage **Docker** build with standalone Next.js output deployed globally on **Fly.io** high-availability machines with automated HTTPS.
- **Version Control:** Managed via **Git** with continuous deployment repository on **GitHub**.

## Challenges we ran into
- **Standardizing Citizen Science Data:** Qualitative student observations often lack laboratory precision. We addressed this by implementing guided observation fields that prompt for visible biological bioindicators (presence of indicator insects, fish lethargy, water odor/color) and correlate them with chemical threshold models.
- **Balancing Technical Rigor with Accessibility:** Translating complex ecological and environmental law statutes into clear, actionable recommendations for 13-to-19-year-old students required careful UX engineering.
- **High-Performance Production Deployment:** Ensuring zero cold-start latency on cloud container machines required configuring Next.js standalone output to produce a lightweight 58 MB Alpine Docker image.

## Accomplishments that we're proud of
- Achieving a fully functioning, production-ready, globally deployed application with zero build errors.
- Designing the quantitative **Biodiversity Risk Index (BRI)** formulation that bridges qualitative citizen reports and quantitative environmental toxicology.
- Integrating statutory compliance drafting so that student observations can immediately trigger municipal regulatory oversight.
- Embedding an interactive, slide-based 4-minute demo pitch player directly within the web app so judges and symposium attendees can experience the pitch without external software.

## What we learned
- How biomonitoring through indicator species (macroinvertebrates and lichens) can offer early detection capabilities faster than scheduled laboratory chemical assays.
- Advanced Next.js 16 full-stack architecture, including server routes, client-side state synchronization, and standalone containerized cloud deployment on Fly.io.
- The vital role that youth-led civic technology plays in closing environmental surveillance gaps and fostering environmental justice.

## What's next for EcoSense AI
- **Autonomous Drone & IoT Sensor Integration:** Connecting low-cost optical particulate sensors (ESP32 + PMS5003) and water turbidity probes to feed automated telemetry into the live map.
- **Computer Vision Model for Species Identification:** Deploying on-device edge vision models to classify freshwater macroinvertebrates and microplastic debris directly from smartphone camera feeds.
- **Direct Municipal API Partnerships:** Collaborating with city council open-data portals to automatically route verified citizen petitions into official environmental inspection queues.
```

---

### 4. Additional Info for Judges and Organizers

- **Track Selection:**  
  `Coding Track`
- **Category Selection:**  
  `Biology/Medical and Environmental Science`
- **Email Contact:**  
  `roykhaemba00@gmail.com`
- **Discord Username:**  
  *(Enter your Discord username, e.g. RoyK / your server username)*

---

### 5. 4-Minute Video Demo Script (If recording Loom / YouTube)

| Timestamp | Section | Key Talking Points |
| :--- | :--- | :--- |
| **0:00 – 0:50** | **The Problem** | Introduce local environmental blind spots: municipal agencies sample water and air only periodically; illicit toxic dumping and bus corridor smog spikes escape detection. |
| **0:50 – 1:45** | **The Solution** | Present EcoSense AI: a community environmental intelligence platform that crowdsources reporting and couples it with AI biological toxicology diagnostics. |
| **1:45 – 2:50** | **Live Demo Walkthrough** | Show the live Interactive EcoMap at `https://ecosense-ai-2026.fly.dev`. Demonstrate submitting an incident, viewing the calculated Biodiversity Risk Index (BRI: 92/100), inspecting bioindicators (Ephemeroptera), and copying the automated EPA regulatory notice. |
| **2:50 – 3:30** | **EcoBot & Science Hub** | Show the AI EcoBot Assistant answering water chemistry questions, and the Scientific Research Hub with downloadable CSV dataset export. |
| **3:30 – 4:00** | **Impact & Conclusion** | Highlight community engagement, high school club leaderboards, and our vision to empower youth worldwide to protect our shared planet. |
