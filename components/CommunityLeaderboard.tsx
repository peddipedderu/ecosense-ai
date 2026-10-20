'use client';

import React from 'react';
import { Users, Award, TreePine, Droplets, Trash2, CheckCircle2, Calendar, MapPin, Heart } from 'lucide-react';
import { CommunityMetric } from '@/lib/types';

interface CommunityLeaderboardProps {
  metrics: CommunityMetric | null;
}

const UPCOMING_ACTIONS = [
  {
    title: 'Nairobi River Riparian Wetland Restoration & Willow Planting',
    date: 'Saturday, Oct 24 • 09:00 AM',
    location: 'Mathare Basin Weir Zone',
    participants: 48,
    category: 'Water & Canopy'
  },
  {
    title: 'School Transit Corridor Anti-Idling Sensor Installation',
    date: 'Wednesday, Oct 28 • 03:30 PM',
    location: 'District Central High School Bus Loop',
    participants: 22,
    category: 'Clean Air'
  },
  {
    title: 'Estuary Microplastics Extraction & Sieve Sampling Drive',
    date: 'Sunday, Nov 01 • 10:00 AM',
    location: 'Coastal Saltmarsh Preserve',
    participants: 64,
    category: 'Plastics Remediation'
  }
];

const TOP_CLUBS = [
  { rank: 1, name: 'EcoWarriors STEM Club', school: 'Nairobi Academy', reports: 142, trees: 1800, score: '9,840 pts' },
  { rank: 2, name: 'Youth Clean Air Taskforce', school: 'South Bronx Collegiate', reports: 118, trees: 920, score: '8,420 pts' },
  { rank: 3, name: 'Green Horizons Research Lab', school: 'Pacific Coast High', reports: 94, trees: 1250, score: '7,610 pts' },
  { rank: 4, name: 'Rift Valley Eco-Monitors', school: 'Nakuru Secondary', reports: 88, trees: 2100, score: '7,150 pts' },
];

export default function CommunityLeaderboard({ metrics }: CommunityLeaderboardProps) {
  return (
    <div className="space-y-6 max-w-5xl mx-auto text-xs">
      {/* Top Banner Stats */}
      <div className="bg-gradient-to-r from-emerald-950 via-teal-950 to-slate-950 border border-emerald-800/40 rounded-3xl p-6 shadow-2xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold px-3 py-1 rounded-full mb-2">
              <Users className="w-3.5 h-3.5" />
              Global Youth Grassroots Network
            </div>
            <h2 className="text-2xl font-black text-white tracking-tight">
              Community Environmental Action Hub
            </h2>
            <p className="text-xs text-emerald-300/80 max-w-xl mt-1">
              Connecting student researchers, local conservation groups, and municipal public health directors to convert citizen data into measurable habitat recovery.
            </p>
          </div>
        </div>

        {/* Global Impact Counter Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-2xl text-center">
            <span className="text-[10px] text-slate-400 block uppercase font-bold">Total Reports</span>
            <span className="text-xl font-black text-emerald-400 mt-1 block">
              {metrics?.totalReports || 1289}
            </span>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-2xl text-center">
            <span className="text-[10px] text-slate-400 block uppercase font-bold">Waterways</span>
            <span className="text-xl font-black text-cyan-400 mt-1 block">
              {metrics?.monitoredWaterways || 48}
            </span>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-2xl text-center">
            <span className="text-[10px] text-slate-400 block uppercase font-bold">Trees Planted</span>
            <span className="text-xl font-black text-emerald-400 mt-1 block">
              {metrics?.treesPlanted.toLocaleString() || '14,200'}
            </span>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-2xl text-center">
            <span className="text-[10px] text-slate-400 block uppercase font-bold">Waste Diverted</span>
            <span className="text-xl font-black text-amber-400 mt-1 block">
              {metrics?.wasteDivertedTons || 86.4}t
            </span>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-2xl text-center">
            <span className="text-[10px] text-slate-400 block uppercase font-bold">Volunteers</span>
            <span className="text-xl font-black text-teal-400 mt-1 block">
              {metrics?.activeStudentVolunteers.toLocaleString() || '1,914'}
            </span>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-2xl text-center">
            <span className="text-[10px] text-slate-400 block uppercase font-bold">Resolved</span>
            <span className="text-xl font-black text-white mt-1 block">
              {metrics?.resolvedIncidents || 412}
            </span>
          </div>
        </div>
      </div>

      {/* Grid: Action Calendar & High School Leaderboard */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Action Events */}
        <div className="bg-slate-900/90 border border-emerald-800/40 rounded-2xl p-5 shadow-xl space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <h3 className="font-bold text-white text-sm flex items-center gap-2">
              <Calendar className="w-4 h-4 text-emerald-400" />
              Upcoming Student Mobilizations
            </h3>
            <span className="text-[11px] text-emerald-400 font-semibold">Join Free</span>
          </div>

          <div className="space-y-3">
            {UPCOMING_ACTIONS.map((action, i) => (
              <div key={i} className="bg-slate-800/60 p-3.5 rounded-xl border border-slate-700/60 hover:border-emerald-500/50 transition-all">
                <div className="flex items-center justify-between text-[11px] text-emerald-300 font-semibold mb-1">
                  <span>{action.date}</span>
                  <span className="bg-slate-900/80 px-2 py-0.5 rounded text-[10px] text-slate-300">
                    {action.category}
                  </span>
                </div>
                <h4 className="font-bold text-white text-xs mb-1">{action.title}</h4>
                <div className="flex items-center justify-between text-[11px] text-slate-400 mt-2">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-emerald-400" />
                    {action.location}
                  </span>
                  <span className="flex items-center gap-1 text-teal-300">
                    <Users className="w-3 h-3" />
                    {action.participants} Registered
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* School Leaderboard */}
        <div className="bg-slate-900/90 border border-emerald-800/40 rounded-2xl p-5 shadow-xl space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <h3 className="font-bold text-white text-sm flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-400" />
              High School Chapter Leaderboard
            </h3>
            <span className="text-[11px] text-amber-400 font-semibold">2026 Season</span>
          </div>

          <div className="space-y-2.5">
            {TOP_CLUBS.map((club) => (
              <div
                key={club.rank}
                className={`p-3 rounded-xl border flex items-center justify-between ${
                  club.rank === 1
                    ? 'bg-amber-950/30 border-amber-500/40'
                    : 'bg-slate-800/40 border-slate-700/50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs ${
                    club.rank === 1 ? 'bg-amber-400 text-slate-950' : 'bg-slate-700 text-slate-300'
                  }`}>
                    {club.rank}
                  </span>
                  <div>
                    <h4 className="font-bold text-white text-xs">{club.name}</h4>
                    <span className="text-[11px] text-slate-400">{club.school}</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="font-bold text-emerald-300 block text-xs">{club.score}</span>
                  <span className="text-[10px] text-slate-400">{club.reports} reports • {club.trees} trees</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
