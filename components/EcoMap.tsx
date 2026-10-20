'use client';

import React, { useState } from 'react';
import { EnvironmentalReport, IncidentCategory } from '@/lib/types';
import { 
  MapPin, 
  AlertTriangle, 
  Droplets, 
  Wind, 
  Trash2, 
  TreePine, 
  ShieldAlert, 
  Flame, 
  ThumbsUp, 
  Users, 
  ExternalLink,
  Filter,
  CheckCircle2,
  FileText
} from 'lucide-react';

interface EcoMapProps {
  reports: EnvironmentalReport[];
  selectedReport: EnvironmentalReport | null;
  onSelectReport: (report: EnvironmentalReport) => void;
  onUpvote: (id: string) => void;
  onVolunteer: (id: string) => void;
  onOpenReportModal: () => void;
}

export default function EcoMap({
  reports,
  selectedReport,
  onSelectReport,
  onUpvote,
  onVolunteer,
  onOpenReportModal
}: EcoMapProps) {
  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [filterSeverity, setFilterSeverity] = useState<string>('All');

  const filteredReports = reports.filter(r => {
    if (filterCategory !== 'All' && r.category !== filterCategory) return false;
    if (filterSeverity !== 'All' && r.severity !== filterSeverity) return false;
    return true;
  });

  const getCategoryIcon = (category: IncidentCategory) => {
    switch (category) {
      case 'Water Quality & Marine':
        return <Droplets className="w-4 h-4 text-cyan-400" />;
      case 'Air Pollution & Emissions':
        return <Wind className="w-4 h-4 text-purple-400" />;
      case 'Illegal Waste & Plastics':
        return <Trash2 className="w-4 h-4 text-amber-400" />;
      case 'Deforestation & Land Degradation':
        return <TreePine className="w-4 h-4 text-emerald-400" />;
      case 'Biodiversity & Wildlife Threat':
        return <ShieldAlert className="w-4 h-4 text-rose-400" />;
      case 'Urban Heat Island & Energy':
        return <Flame className="w-4 h-4 text-orange-400" />;
      default:
        return <AlertTriangle className="w-4 h-4 text-yellow-400" />;
    }
  };

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case 'Critical':
        return <span className="bg-rose-500/20 text-rose-300 border border-rose-500/40 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Critical</span>;
      case 'High':
        return <span className="bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">High</span>;
      case 'Moderate':
        return <span className="bg-yellow-500/20 text-yellow-300 border border-yellow-500/40 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Moderate</span>;
      default:
        return <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Low</span>;
    }
  };

  return (
    <div className="flex flex-col h-full space-y-4">
      {/* Filters Bar */}
      <div className="bg-emerald-950/70 border border-emerald-800/40 rounded-2xl p-4 shadow-xl flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-emerald-300 flex items-center gap-1 font-semibold mr-1">
            <Filter className="w-3.5 h-3.5" /> Filter by:
          </span>

          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="bg-emerald-900/60 border border-emerald-700/50 text-white rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-emerald-400"
          >
            <option value="All">All Categories ({reports.length})</option>
            <option value="Water Quality & Marine">Water Quality & Marine</option>
            <option value="Air Pollution & Emissions">Air Pollution & Emissions</option>
            <option value="Illegal Waste & Plastics">Illegal Waste & Plastics</option>
            <option value="Deforestation & Land Degradation">Deforestation & Land</option>
            <option value="Biodiversity & Wildlife Threat">Biodiversity & Wildlife</option>
            <option value="Urban Heat Island & Energy">Urban Heat Island</option>
          </select>

          <select
            value={filterSeverity}
            onChange={(e) => setFilterSeverity(e.target.value)}
            className="bg-emerald-900/60 border border-emerald-700/50 text-white rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-emerald-400"
          >
            <option value="All">All Severities</option>
            <option value="Critical">Critical Only</option>
            <option value="High">High Only</option>
            <option value="Moderate">Moderate Only</option>
            <option value="Low">Low Only</option>
          </select>

          <span className="text-emerald-400/80 pl-2">
            Showing <strong className="text-white">{filteredReports.length}</strong> active monitors
          </span>
        </div>

        <button
          onClick={onOpenReportModal}
          className="bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold px-3 py-1.5 rounded-lg text-xs flex items-center gap-1.5 transition-all"
        >
          <MapPin className="w-3.5 h-3.5" />
          Pin New Issue
        </button>
      </div>

      {/* Main Grid: Interactive Map Visualizer & Details Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 flex-1 min-h-[580px]">
        
        {/* Interactive Map Canvas Simulation */}
        <div className="lg:col-span-7 bg-slate-950 border border-emerald-800/40 rounded-2xl p-4 shadow-2xl relative overflow-hidden flex flex-col justify-between">
          {/* Map Header Overlay */}
          <div className="absolute top-4 left-4 z-10 bg-slate-900/80 backdrop-blur-md border border-emerald-700/40 rounded-xl px-3 py-2 text-xs flex items-center gap-2 text-emerald-200">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Live Geospatial Grid • Satellite & Citizen Biomonitoring Feed</span>
          </div>

          <div className="absolute top-4 right-4 z-10 flex gap-2">
            <span className="bg-slate-900/80 backdrop-blur-md border border-slate-700 text-slate-300 text-[11px] px-2.5 py-1 rounded-lg">
              Lat/Long Coordinate Grid
            </span>
          </div>

          {/* Map Background SVG & Pin Layer */}
          <div className="w-full h-full min-h-[460px] relative flex items-center justify-center bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] rounded-xl overflow-hidden">
            {/* World Landmass Silhouettes (Stylized SVG Map) */}
            <svg 
              className="w-full h-full opacity-30 absolute inset-0 pointer-events-none" 
              viewBox="0 0 1000 500" 
              preserveAspectRatio="xMidYMid slice"
            >
              {/* Simplified stylized world landmass paths */}
              <path d="M150,120 Q220,100 280,140 Q250,220 200,240 Q130,220 150,120 Z" fill="#10b981" />
              <path d="M220,270 Q300,280 280,410 Q220,440 210,360 Q190,300 220,270 Z" fill="#10b981" />
              <path d="M450,110 Q540,100 550,180 Q480,240 430,190 Z" fill="#10b981" />
              <path d="M480,210 Q580,220 570,390 Q500,420 460,330 Q440,260 480,210 Z" fill="#10b981" />
              <path d="M570,100 Q800,80 850,220 Q750,290 640,240 Q580,180 570,100 Z" fill="#10b981" />
              <path d="M750,330 Q860,320 840,430 Q760,440 730,380 Z" fill="#10b981" />
            </svg>

            {/* Simulated Grid Scan Line */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent h-20 w-full animate-bounce pointer-events-none opacity-40"></div>

            {/* Dynamic Interactive Pin Elements */}
            <div className="absolute inset-0 p-8 flex items-center justify-center">
              {filteredReports.map((report, index) => {
                // Generate distributed positions across the interactive map canvas
                const posX = 15 + ((index * 37 + 13) % 70);
                const posY = 18 + ((index * 43 + 27) % 65);
                const isSelected = selectedReport?.id === report.id;

                return (
                  <button
                    key={report.id}
                    onClick={() => onSelectReport(report)}
                    style={{ left: `${posX}%`, top: `${posY}%` }}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 group transition-all duration-300 z-20 ${
                      isSelected ? 'scale-125 z-30' : 'hover:scale-115'
                    }`}
                  >
                    {/* Ripple on active/critical */}
                    {report.severity === 'Critical' && (
                      <span className="absolute -inset-2 rounded-full bg-rose-500/30 animate-ping"></span>
                    )}

                    {/* Pin Head */}
                    <div className={`p-2 rounded-xl shadow-xl flex items-center gap-1.5 border transition-all ${
                      isSelected 
                        ? 'bg-emerald-400 text-emerald-950 border-white ring-4 ring-emerald-500/40' 
                        : report.severity === 'Critical'
                          ? 'bg-rose-950/90 text-rose-300 border-rose-500/80 hover:bg-rose-900'
                          : report.severity === 'High'
                            ? 'bg-amber-950/90 text-amber-300 border-amber-500/80 hover:bg-amber-900'
                            : 'bg-emerald-950/90 text-emerald-300 border-emerald-500/80 hover:bg-emerald-900'
                    }`}>
                      {getCategoryIcon(report.category)}
                      <span className="text-[10px] font-bold tracking-tight max-w-[90px] truncate hidden sm:inline">
                        {report.title.split(' ')[0]}
                      </span>
                    </div>

                    {/* Pin Stem */}
                    <div className="w-0.5 h-3 bg-emerald-400/60 mx-auto"></div>

                    {/* Hover Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:flex flex-col bg-slate-900 text-white text-[11px] p-2 rounded-lg border border-emerald-500/50 shadow-2xl w-48 pointer-events-none z-50">
                      <span className="font-bold text-emerald-300">{report.title}</span>
                      <span className="text-slate-400 text-[10px]">{report.locationName}</span>
                      <div className="flex justify-between items-center mt-1 pt-1 border-t border-slate-800 text-[10px]">
                        <span>Risk Score: <strong className="text-amber-400">{report.biologicalImpact.riskScore}/100</strong></span>
                        <span>{report.severity}</span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Map Footer Legend */}
          <div className="mt-3 pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between text-[11px] text-slate-400 gap-2">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span> Critical Risk</span>
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span> High Risk</span>
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span> Moderate</span>
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> Low / Monitored</span>
            </div>
            <span>Click any map pin or select from list</span>
          </div>
        </div>

        {/* Selected Incident Deep-Dive Panel */}
        <div className="lg:col-span-5 flex flex-col space-y-4">
          {selectedReport ? (
            <div className="bg-emerald-950/80 border border-emerald-700/50 rounded-2xl p-5 shadow-2xl flex flex-col h-full overflow-y-auto">
              
              {/* Header Badge Row */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  {getSeverityBadge(selectedReport.severity)}
                  <span className="text-xs text-emerald-300/80 bg-emerald-900/50 px-2 py-0.5 rounded-md border border-emerald-700/40">
                    {selectedReport.category}
                  </span>
                </div>
                <span className="text-[11px] text-emerald-400/80">
                  {new Date(selectedReport.reportedAt).toLocaleDateString()}
                </span>
              </div>

              {/* Title & Location */}
              <h3 className="text-lg font-bold text-white tracking-tight mb-1">
                {selectedReport.title}
              </h3>
              <p className="text-xs text-emerald-300 flex items-center gap-1.5 mb-3">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                {selectedReport.locationName}
              </p>

              {/* Photo Evidence Thumbnail */}
              {selectedReport.evidenceImageUrl && (
                <div className="relative h-40 w-full rounded-xl overflow-hidden mb-3 border border-emerald-800/60 group">
                  <img
                    src={selectedReport.evidenceImageUrl}
                    alt={selectedReport.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                  />
                  <div className="absolute bottom-2 left-2 bg-black/70 backdrop-blur-md px-2 py-0.5 rounded text-[10px] text-emerald-200">
                    Citizen Field Verification Photo
                  </div>
                </div>
              )}

              {/* Description */}
              <p className="text-xs text-slate-300 leading-relaxed mb-4 bg-emerald-900/20 p-3 rounded-xl border border-emerald-800/30">
                {selectedReport.description}
              </p>

              {/* AI Ecological Diagnostics Box */}
              <div className="bg-slate-900/90 border border-emerald-600/50 rounded-xl p-3.5 mb-4 shadow-inner">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    AI Biological Impact Diagnostics
                  </div>
                  <span className="text-xs font-mono font-bold text-amber-300 bg-amber-950/60 border border-amber-600/40 px-2 py-0.5 rounded">
                    BRI: {selectedReport.biologicalImpact.riskScore}/100
                  </span>
                </div>

                <div className="text-[11px] space-y-1.5 text-slate-300">
                  <div>
                    <strong className="text-emerald-200">Vulnerable Bioindicators: </strong>
                    <span>{selectedReport.biologicalImpact.keyBiologicalTaxa.join(', ')}</span>
                  </div>
                  <div>
                    <strong className="text-emerald-200">Affected Ecosystem: </strong>
                    <span>{selectedReport.biologicalImpact.affectedEcosystem}</span>
                  </div>
                  <div>
                    <strong className="text-emerald-200">Mitigation Protocol: </strong>
                    <span>{selectedReport.biologicalImpact.recommendedAction}</span>
                  </div>
                </div>

                {/* Chemical Parameters Table if available */}
                {selectedReport.biologicalImpact.chemicalParameters && (
                  <div className="mt-2.5 pt-2 border-t border-slate-800 grid grid-cols-2 gap-2 text-[10px]">
                    {Object.entries(selectedReport.biologicalImpact.chemicalParameters).map(([param, val]) => (
                      <div key={param} className="bg-slate-800/60 p-1.5 rounded border border-slate-700/50">
                        <span className="text-slate-400 block">{param}:</span>
                        <strong className="text-emerald-300">{val}</strong>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Upvote & Volunteer Action Buttons */}
              <div className="flex items-center gap-2 mt-auto pt-2 border-t border-emerald-800/40">
                <button
                  onClick={() => onUpvote(selectedReport.id)}
                  className="flex-1 bg-emerald-900/60 hover:bg-emerald-800/70 border border-emerald-700/50 text-emerald-200 font-semibold py-2 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-all"
                >
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span>Upvote ({selectedReport.upvotes})</span>
                </button>

                <button
                  onClick={() => onVolunteer(selectedReport.id)}
                  className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-emerald-950 font-bold py-2 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-all shadow-md"
                >
                  <Users className="w-3.5 h-3.5" />
                  <span>Volunteer ({selectedReport.actionVolunteers})</span>
                </button>
              </div>

            </div>
          ) : (
            <div className="bg-emerald-950/40 border border-emerald-800/30 rounded-2xl p-8 text-center flex flex-col items-center justify-center h-full text-emerald-300/80">
              <MapPin className="w-10 h-10 text-emerald-500 mb-2 animate-bounce" />
              <h4 className="font-bold text-white text-base">Select an Environmental Pin</h4>
              <p className="text-xs text-emerald-300/60 max-w-xs mt-1">
                Explore monitored water bodies, emission corridors, and ecological reserves to inspect real-time AI biological impact diagnostics.
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
