'use client';

import React from 'react';
import { Leaf, Award, MapPin, Sparkles, MessageSquare, BookOpen, Users, Play } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenReportModal: () => void;
  onOpenVideoModal: () => void;
}

export default function Navbar({ activeTab, setActiveTab, onOpenReportModal, onOpenVideoModal }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 bg-emerald-950/90 backdrop-blur-md border-b border-emerald-800/40 text-white">
      {/* EurekaDev Hackathon Top Ribbon */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 py-1.5 px-4 text-xs font-medium text-center text-white flex items-center justify-center gap-3">
        <span className="flex items-center gap-1.5 font-semibold tracking-wide">
          <Award className="w-4 h-4 text-amber-300" />
          EurekaDev 2026 Submission
        </span>
        <span className="hidden sm:inline text-emerald-100">|</span>
        <span className="hidden sm:inline bg-emerald-900/40 px-2 py-0.5 rounded text-[11px] font-mono">
          Coding Track • Biology/Medical & Environmental Science
        </span>
        <span className="hidden md:inline text-emerald-100">|</span>
        <button 
          onClick={onOpenVideoModal}
          className="underline hover:text-amber-200 transition-colors flex items-center gap-1 font-semibold"
        >
          <Play className="w-3 h-3 fill-current" />
          Watch 4-Min Demo Pitch
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('map')}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <Leaf className="w-6 h-6 text-emerald-950" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white via-emerald-100 to-teal-200 bg-clip-text text-transparent">
                  EcoSense AI
                </span>
                <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  v2.0 Live
                </span>
              </div>
              <p className="text-[11px] text-emerald-300/70 hidden sm:block">
                Community Environmental Intelligence Platform
              </p>
            </div>
          </div>

          {/* Nav Tabs */}
          <nav className="hidden lg:flex items-center gap-1 bg-emerald-900/40 p-1 rounded-xl border border-emerald-800/50">
            <button
              onClick={() => setActiveTab('map')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                activeTab === 'map'
                  ? 'bg-emerald-500 text-emerald-950 font-semibold shadow-sm'
                  : 'text-emerald-200 hover:text-white hover:bg-emerald-800/50'
              }`}
            >
              <MapPin className="w-3.5 h-3.5" />
              Interactive EcoMap
            </button>
            <button
              onClick={() => setActiveTab('impact-lab')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                activeTab === 'impact-lab'
                  ? 'bg-emerald-500 text-emerald-950 font-semibold shadow-sm'
                  : 'text-emerald-200 hover:text-white hover:bg-emerald-800/50'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              AI Impact Lab
            </button>
            <button
              onClick={() => setActiveTab('assistant')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                activeTab === 'assistant'
                  ? 'bg-emerald-500 text-emerald-950 font-semibold shadow-sm'
                  : 'text-emerald-200 hover:text-white hover:bg-emerald-800/50'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5" />
              EcoBot Advisor
            </button>
            <button
              onClick={() => setActiveTab('research')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                activeTab === 'research'
                  ? 'bg-emerald-500 text-emerald-950 font-semibold shadow-sm'
                  : 'text-emerald-200 hover:text-white hover:bg-emerald-800/50'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              Science Research
            </button>
            <button
              onClick={() => setActiveTab('community')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                activeTab === 'community'
                  ? 'bg-emerald-500 text-emerald-950 font-semibold shadow-sm'
                  : 'text-emerald-200 hover:text-white hover:bg-emerald-800/50'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              Community Action
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={onOpenReportModal}
              className="bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-emerald-950 font-bold px-3.5 py-2 rounded-xl text-xs shadow-lg shadow-emerald-500/20 flex items-center gap-1.5 transition-all transform active:scale-95"
            >
              <span className="text-sm leading-none">+</span>
              Report Incident
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav bar row */}
      <div className="lg:hidden flex overflow-x-auto gap-1 px-3 py-2 bg-emerald-950 border-t border-emerald-900/50 text-xs scrollbar-none">
        <button
          onClick={() => setActiveTab('map')}
          className={`px-3 py-1 rounded-md whitespace-nowrap ${
            activeTab === 'map' ? 'bg-emerald-500 text-emerald-950 font-bold' : 'text-emerald-200'
          }`}
        >
          EcoMap
        </button>
        <button
          onClick={() => setActiveTab('impact-lab')}
          className={`px-3 py-1 rounded-md whitespace-nowrap ${
            activeTab === 'impact-lab' ? 'bg-emerald-500 text-emerald-950 font-bold' : 'text-emerald-200'
          }`}
        >
          AI Lab
        </button>
        <button
          onClick={() => setActiveTab('assistant')}
          className={`px-3 py-1 rounded-md whitespace-nowrap ${
            activeTab === 'assistant' ? 'bg-emerald-500 text-emerald-950 font-bold' : 'text-emerald-200'
          }`}
        >
          EcoBot
        </button>
        <button
          onClick={() => setActiveTab('research')}
          className={`px-3 py-1 rounded-md whitespace-nowrap ${
            activeTab === 'research' ? 'bg-emerald-500 text-emerald-950 font-bold' : 'text-emerald-200'
          }`}
        >
          Science Docs
        </button>
        <button
          onClick={() => setActiveTab('community')}
          className={`px-3 py-1 rounded-md whitespace-nowrap ${
            activeTab === 'community' ? 'bg-emerald-500 text-emerald-950 font-bold' : 'text-emerald-200'
          }`}
        >
          Community
        </button>
      </div>
    </header>
  );
}
