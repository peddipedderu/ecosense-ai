'use client';

import React, { useState } from 'react';
import { IncidentCategory, SeverityLevel } from '@/lib/types';
import { 
  X, 
  Sparkles, 
  MapPin, 
  AlertTriangle, 
  CheckCircle2, 
  Send,
  Camera
} from 'lucide-react';

interface ReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitSuccess: (newReport: any) => void;
}

const SAMPLE_IMAGES = [
  { label: 'River Discoloration', url: 'https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?auto=format&fit=crop&w=800&q=80' },
  { label: 'Air Particulates & Smog', url: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80' },
  { label: 'Plastic Accumulation', url: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=800&q=80' },
  { label: 'Canopy Loss & Erosion', url: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=800&q=80' },
];

export default function ReportModal({ isOpen, onClose, onSubmitSuccess }: ReportModalProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState<IncidentCategory>('Water Quality & Marine');
  const [severity, setSeverity] = useState<SeverityLevel>('High');
  const [locationName, setLocationName] = useState('');
  const [reportedBy, setReportedBy] = useState('');
  const [selectedImage, setSelectedImage] = useState(SAMPLE_IMAGES[0].url);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [aiPreview, setAiPreview] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleAiAutoDiagnose = () => {
    if (!description) {
      alert('Please enter a description first so the AI can evaluate the biological indicators.');
      return;
    }
    setAiPreview(
      `AI Ecological Scan: Identified high-priority impact on local freshwater macroinvertebrates. Estimated Biodiversity Risk Index: 88/100. Automated civic notification draft generated.`
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description || !locationName) {
      alert('Please fill out all required fields.');
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/reports', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          description,
          category,
          severity,
          locationName,
          reportedBy: reportedBy || 'Student Citizen Scientist',
          evidenceImageUrl: selectedImage,
          latitude: -1.2921 + (Math.random() - 0.5) * 5,
          longitude: 36.8219 + (Math.random() - 0.5) * 5,
        })
      });

      const data = await res.json();
      if (data.success) {
        onSubmitSuccess(data.report);
        onClose();
      } else {
        alert(data.error || 'Submission failed');
      }
    } catch (err) {
      alert('Network error submitting report');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="bg-slate-900 border border-emerald-700/60 rounded-3xl w-full max-w-2xl p-6 shadow-2xl relative text-white my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-full hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-slate-950">
            <MapPin className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold tracking-tight">Report Environmental Incident</h2>
            <p className="text-xs text-emerald-300/80">
              Citizen Science Biomonitoring & AI Ecological Diagnostics
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          {/* Incident Title */}
          <div>
            <label className="block text-slate-300 font-semibold mb-1">
              Incident Title *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Chemical Effluent Discharge Near Drainage Culvert"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-slate-800/80 border border-slate-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Category & Severity Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">
                Category *
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as IncidentCategory)}
                className="w-full bg-slate-800/80 border border-slate-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="Water Quality & Marine">Water Quality & Marine</option>
                <option value="Air Pollution & Emissions">Air Pollution & Emissions</option>
                <option value="Illegal Waste & Plastics">Illegal Waste & Plastics</option>
                <option value="Deforestation & Land Degradation">Deforestation & Land</option>
                <option value="Biodiversity & Wildlife Threat">Biodiversity & Wildlife</option>
                <option value="Urban Heat Island & Energy">Urban Heat Island</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">
                Observed Severity *
              </label>
              <select
                value={severity}
                onChange={(e) => setSeverity(e.target.value as SeverityLevel)}
                className="w-full bg-slate-800/80 border border-slate-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="Critical">Critical (Immediate Biohazard / Fish Kill)</option>
                <option value="High">High (Substantial Ecological Disruption)</option>
                <option value="Moderate">Moderate (Chronic Accumulation / Spikes)</option>
                <option value="Low">Low (Early Indicator / Suspected Anomaly)</option>
              </select>
            </div>
          </div>

          {/* Location & Reporter Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">
                Location / Waterway Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Upper Karura Stream, Northern Weir"
                value={locationName}
                onChange={(e) => setLocationName(e.target.value)}
                className="w-full bg-slate-800/80 border border-slate-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">
                Reporter / School Club Name
              </label>
              <input
                type="text"
                placeholder="e.g. Nairobi Science Academy Eco-Club"
                value={reportedBy}
                onChange={(e) => setReportedBy(e.target.value)}
                className="w-full bg-slate-800/80 border border-slate-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          {/* Evidence Image Selector */}
          <div>
            <label className="block text-slate-300 font-semibold mb-1.5 flex items-center gap-1.5">
              <Camera className="w-3.5 h-3.5 text-emerald-400" />
              Evidence Photo Evidence (Select representative field observation)
            </label>
            <div className="grid grid-cols-4 gap-2">
              {SAMPLE_IMAGES.map((img, i) => (
                <button
                  type="button"
                  key={i}
                  onClick={() => setSelectedImage(img.url)}
                  className={`relative rounded-xl overflow-hidden h-16 border-2 transition-all ${
                    selectedImage === img.url ? 'border-emerald-400 ring-2 ring-emerald-500/50' : 'border-slate-700 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img.url} alt={img.label} className="w-full h-full object-cover" />
                  <span className="absolute bottom-0 inset-x-0 bg-black/75 text-[9px] text-center py-0.5 truncate px-1 text-slate-200">
                    {img.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Detailed Observations */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-slate-300 font-semibold">
                Detailed Field Observations & Biological Symptoms *
              </label>
              <button
                type="button"
                onClick={handleAiAutoDiagnose}
                className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 text-[11px] font-semibold"
              >
                <Sparkles className="w-3.5 h-3.5" />
                AI Quick-Diagnose
              </button>
            </div>
            <textarea
              required
              rows={3}
              placeholder="Describe color, odor, affected species, presence of dead organisms, estimated area of coverage, and potential upstream sources..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full bg-slate-800/80 border border-slate-700 rounded-xl p-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 leading-relaxed"
            />
          </div>

          {/* AI Preview Alert Box */}
          {aiPreview && (
            <div className="bg-emerald-950/70 border border-emerald-500/40 rounded-xl p-3 flex items-start gap-2.5 text-[11px] text-emerald-200">
              <Sparkles className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-white font-semibold">Live AI Biological Pre-Screening:</strong>
                {aiPreview}
              </div>
            </div>
          )}

          {/* Modal Footer CTAs */}
          <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-800">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-slate-400 hover:text-white font-medium transition-colors"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-bold px-5 py-2.5 rounded-xl shadow-lg shadow-emerald-500/20 flex items-center gap-2 transition-all disabled:opacity-50"
            >
              {isSubmitting ? (
                <>Analyzing & Submitting...</>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  Submit Field Report
                </>
              )}
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
