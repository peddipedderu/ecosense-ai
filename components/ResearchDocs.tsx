'use client';

import React from 'react';
import { BookOpen, Download, ExternalLink, Award, CheckCircle2, FileText, FlaskConical, Scale } from 'lucide-react';
import { initialReports } from '@/lib/data';

export default function ResearchDocs() {
  const handleExportCSV = () => {
    const headers = ['ID', 'Title', 'Category', 'Severity', 'Location', 'Latitude', 'Longitude', 'RiskScore', 'AffectedEcosystem', 'RegulatoryCode'];
    const rows = initialReports.map(r => [
      r.id,
      `"${r.title}"`,
      `"${r.category}"`,
      r.severity,
      `"${r.locationName}"`,
      r.latitude,
      r.longitude,
      r.biologicalImpact.riskScore,
      `"${r.biologicalImpact.affectedEcosystem}"`,
      `"${r.biologicalImpact.regulatoryCode}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'ecosense_ai_research_dataset_2026.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto text-xs">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-teal-950 to-slate-950 border border-emerald-800/40 rounded-3xl p-6 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold px-3 py-1 rounded-full mb-2">
            <FlaskConical className="w-3.5 h-3.5" />
            EurekaDev 2026 Symposium Scientific Paper
          </div>
          <h2 className="text-2xl font-black text-white tracking-tight">
            Scientific Methodology & Research Framework
          </h2>
          <p className="text-xs text-emerald-300/80 max-w-2xl mt-1 leading-relaxed">
            Standardized citizen biomonitoring protocols, algorithmic Biodiversity Risk Index (BRI) derivation, and statutory environmental policy integration.
          </p>
        </div>

        <button
          onClick={handleExportCSV}
          className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-2 transition-all whitespace-nowrap shrink-0"
        >
          <Download className="w-4 h-4" />
          Export Research CSV
        </button>
      </div>

      {/* Main Research Sections */}
      <div className="space-y-6">
        
        {/* Abstract */}
        <div className="bg-slate-900/90 border border-emerald-800/40 rounded-2xl p-6 shadow-xl space-y-3">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <FileText className="w-4 h-4 text-emerald-400" />
            1. Scientific Abstract
          </h3>
          <p className="text-slate-300 leading-relaxed text-xs">
            Global municipal environmental surveillance faces critical temporal and spatial monitoring gaps, leaving localized effluent discharges, particulate smog spikes, and microplastic hotspots undetected until acute ecological degradation occurs. <strong>EcoSense AI</strong> bridges this divide through an integrated crowdsourced citizen-science architecture coupled with automated machine learning toxicological diagnostics. By equipping secondary school researchers with standardized biomonitoring protocols (macroinvertebrate indices, optical particle counters, and benthic secchi depth metrics), the platform computes a quantitative <em>Biodiversity Risk Index (BRI)</em> and dynamically drafts statutory enforcement petitions under municipal environmental legislation (e.g., Clean Water Act §301, Clean Air Act NAAQS).
          </p>
        </div>

        {/* Mathematical Modeling */}
        <div className="bg-slate-900/90 border border-emerald-800/40 rounded-2xl p-6 shadow-xl space-y-3">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <Scale className="w-4 h-4 text-teal-400" />
            2. Algorithmic Formulation of Biodiversity Risk Index (BRI)
          </h3>
          <p className="text-slate-300 leading-relaxed">
            The Biodiversity Risk Index (\(BRI\)) scales non-linearly from 0 to 100 as a weighted composite of toxicological intensity (\(T_i\)), ecological trophic vulnerability (\(V_e\)), spatial persistence (\(P_s\)), and population proximity (\(D_p\)):
          </p>
          
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center text-emerald-300 font-mono text-xs sm:text-sm">
            {`BRI = min(100, (w₁·Tᵢ + w₂·Vₑ + w₃·Pₛ) × [1 + α / √(Dₚ + 1)])`}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-300 pt-2 text-[11px]">
            <div className="bg-slate-800/50 p-3 rounded-xl border border-slate-700/50">
              <strong className="text-emerald-300 block mb-1">\(T_i\) — Toxicological Intensity:</strong>
              Empirical deviation from WHO / EPA baseline thresholds in dissolved oxygen (DO), particulate matter (PM2.5), or chemical oxygen demand (COD).
            </div>
            <div className="bg-slate-800/50 p-3 rounded-xl border border-slate-700/50">
              <strong className="text-teal-300 block mb-1">\(V_e\) — Bioindicator Sensitivity:</strong>
              Presence or acute mortality of sensitive indicator taxa (Ephemeroptera nymphs, Flavoparmelia lichens, native cichlids).
            </div>
          </div>
        </div>

        {/* Literature Review */}
        <div className="bg-slate-900/90 border border-emerald-800/40 rounded-2xl p-6 shadow-xl space-y-4">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-cyan-400" />
            3. Literature Review & Statutory Authorities
          </h3>

          <div className="space-y-3 text-slate-300">
            <div className="border-l-2 border-emerald-500 pl-3">
              <p className="font-semibold text-white">United States Environmental Protection Agency (US EPA) — Volunteer Estuary Monitoring (EPA 842-B-06-003)</p>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Demonstrates that secondary school student data collectors achieve 94.2% concordance with certified state agency laboratory benchmarks when utilizing standardized optical and reagent titration protocols.
              </p>
            </div>

            <div className="border-l-2 border-teal-500 pl-3">
              <p className="font-semibold text-white">World Health Organization (WHO) — Global Air Quality Guidelines (2021 Update)</p>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Establishes the revised annual safe threshold for fine particulate matter (\(PM_{2.5}\)) at 5 µg/m³ and 24-hour peak exposure at 15 µg/m³, linking chronic localized idling corridors directly to pediatric asthma morbidity.
              </p>
            </div>

            <div className="border-l-2 border-cyan-500 pl-3">
              <p className="font-semibold text-white">United Nations Environment Programme (UNEP) — Marine Litter & Microplastics Global Assessment</p>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Identifies freshwater river mouth tributaries as the primary transport conduit conveying over 80% of terrestrial synthetic polymer debris into marine benthic sinks.
              </p>
            </div>
          </div>
        </div>

        {/* Student Research Kit */}
        <div className="bg-slate-900/90 border border-emerald-800/40 rounded-2xl p-6 shadow-xl space-y-3">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            4. High School Field Implementation Kit
          </h3>
          <p className="text-slate-300 leading-relaxed">
            High school clubs participating in EurekaDev 2026 can deploy EcoSense AI with accessible, low-cost field instrumentation:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-slate-300 pt-1 text-[11px]">
            <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700">
              <strong className="text-emerald-300 block mb-1">Aquatic Kit ($25)</strong>
              Secchi disk, LaMotte dissolved oxygen titration tablets, pH colorimetric strips, and 500µm kick-net for macroinvertebrates.
            </div>
            <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700">
              <strong className="text-teal-300 block mb-1">Atmospheric Kit ($35)</strong>
              ESP32 micro-controller, Plantower PMS5003 laser particulate sensor, DHT22 temperature/humidity probe, and solar LiPo battery.
            </div>
            <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700">
              <strong className="text-cyan-300 block mb-1">Spatial Mapping Kit ($0)</strong>
              OpenStreetMap mobile geolocation, smartphone photographic geotagging, and EcoSense AI progressive web platform.
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
