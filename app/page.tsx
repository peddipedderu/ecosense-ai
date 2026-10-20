'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import EcoMap from '@/components/EcoMap';
import AIImpactLab from '@/components/AIImpactLab';
import ChatAssistant from '@/components/ChatAssistant';
import ResearchDocs from '@/components/ResearchDocs';
import CommunityLeaderboard from '@/components/CommunityLeaderboard';
import ReportModal from '@/components/ReportModal';
import DemoVideoModal from '@/components/DemoVideoModal';
import { EnvironmentalReport, CommunityMetric } from '@/lib/types';
import { initialReports } from '@/lib/data';
import { 
  Leaf, 
  MapPin, 
  Sparkles, 
  MessageSquare, 
  BookOpen, 
  Users, 
  Play, 
  Award, 
  ExternalLink,
  ShieldCheck,
  Activity,
  Heart,
  GitBranch
} from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>('map');
  const [reports, setReports] = useState<EnvironmentalReport[]>(initialReports);
  const [selectedReport, setSelectedReport] = useState<EnvironmentalReport | null>(initialReports[0]);
  const [metrics, setMetrics] = useState<CommunityMetric | null>(null);

  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Fetch live reports and stats
  useEffect(() => {
    fetch('/api/reports')
      .then(res => res.json())
      .then(data => {
        if (data.success && data.reports) {
          setReports(data.reports);
          if (!selectedReport) setSelectedReport(data.reports[0]);
        }
      })
      .catch(() => {});

    fetch('/api/stats')
      .then(res => res.json())
      .then(data => {
        if (data.success && data.stats) {
          setMetrics(data.stats);
        }
      })
      .catch(() => {});
  }, []);

  const handleUpvote = async (id: string) => {
    try {
      const res = await fetch(`/api/reports/${id}/upvote`, { method: 'POST' });
      const data = await res.json();
      if (data.success) {
        setReports(prev => prev.map(r => r.id === id ? data.report : r));
        if (selectedReport?.id === id) setSelectedReport(data.report);
      }
    } catch {}
  };

  const handleVolunteer = async (id: string) => {
    try {
      const res = await fetch(`/api/reports/${id}/volunteer`, { method: 'POST' });
      const data = await res.json();
      if (data.success) {
        setReports(prev => prev.map(r => r.id === id ? data.report : r));
        if (selectedReport?.id === id) setSelectedReport(data.report);
      }
    } catch {}
  };

  const handleNewReportSuccess = (newReport: EnvironmentalReport) => {
    setReports(prev => [newReport, ...prev]);
    setSelectedReport(newReport);
    setActiveTab('map');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-slate-950">
      
      {/* Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenReportModal={() => setIsReportModalOpen(true)}
        onOpenVideoModal={() => setIsVideoModalOpen(true)}
      />

      {/* Hero Header Banner */}
      <div className="bg-gradient-to-b from-emerald-950/60 via-slate-950 to-slate-950 border-b border-emerald-900/30 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[11px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-amber-300" />
                EurekaDev 2026 Innovation Challenge
              </span>
              <span className="text-slate-400 text-xs hidden sm:inline">•</span>
              <span className="text-xs text-emerald-300/80 font-mono">
                Track: Coding Track • Category: Biology & Environmental Science
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              EcoSense <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">AI</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mt-1.5 leading-relaxed">
              Empowering student researchers and communities to document localized ecological threats, evaluate biological toxicology via AI, and enforce environmental accountability.
            </p>
          </div>

          {/* Quick Metrics Capsule */}
          <div className="flex items-center gap-4 bg-slate-900/90 border border-emerald-800/40 p-3 rounded-2xl shadow-xl shrink-0 text-xs">
            <div className="text-center px-3 border-r border-slate-800">
              <span className="text-[10px] text-slate-400 block font-bold uppercase">Monitors</span>
              <strong className="text-emerald-400 text-base">{reports.length + 1284}</strong>
            </div>
            <div className="text-center px-3 border-r border-slate-800">
              <span className="text-[10px] text-slate-400 block font-bold uppercase">Bio-Score</span>
              <strong className="text-amber-400 text-base">92/100</strong>
            </div>
            <div className="text-center px-2">
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-3 py-1.5 rounded-xl flex items-center gap-1.5 transition-all text-xs"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Pitch Video</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Tab Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6">
        {activeTab === 'map' && (
          <EcoMap
            reports={reports}
            selectedReport={selectedReport}
            onSelectReport={(r) => setSelectedReport(r)}
            onUpvote={handleUpvote}
            onVolunteer={handleVolunteer}
            onOpenReportModal={() => setIsReportModalOpen(true)}
          />
        )}

        {activeTab === 'impact-lab' && <AIImpactLab />}

        {activeTab === 'assistant' && <ChatAssistant />}

        {activeTab === 'research' && <ResearchDocs />}

        {activeTab === 'community' && <CommunityLeaderboard metrics={metrics} />}
      </main>

      {/* Modals */}
      <ReportModal
        isOpen={isReportModalOpen}
        onClose={() => setIsReportModalOpen(false)}
        onSubmitSuccess={handleNewReportSuccess}
      />

      <DemoVideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-emerald-900/40 py-8 px-4 sm:px-6 lg:px-8 text-xs text-slate-400 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Leaf className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-white">EcoSense AI</span>
              <p className="text-[11px] text-slate-500">
                Created for EurekaDev 2026 • Eureka Institute & UnivaDev
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <a
              href="https://github.com/peddipedderu/ecosense-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-300 flex items-center gap-1.5 transition-colors"
            >
              <GitBranch className="w-4 h-4 text-emerald-400" />
              GitHub Repository
            </a>
            <button
              onClick={() => setIsVideoModalOpen(true)}
              className="hover:text-emerald-300 flex items-center gap-1.5 transition-colors"
            >
              <Play className="w-3.5 h-3.5" />
              Demo Pitch Presentation
            </button>
            <button
              onClick={() => setActiveTab('research')}
              className="hover:text-emerald-300 flex items-center gap-1.5 transition-colors"
            >
              <BookOpen className="w-3.5 h-3.5" />
              Scientific Framework
            </button>
          </div>
        </div>
      </footer>

    </div>
  );
}
