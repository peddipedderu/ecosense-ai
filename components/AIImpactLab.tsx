'use client';

import React, { useState } from 'react';
import { Sparkles, FileText, CheckCircle2, Copy, Check, ArrowRight, ShieldAlert, Droplets, Wind, TreePine } from 'lucide-react';
import { IncidentCategory, BiologicalImpact } from '@/lib/types';
import { analyzeEnvironmentalIssue } from '@/lib/ai';

export default function AIImpactLab() {
  const [title, setTitle] = useState('Heavy foaming and fish lethargy in suburban tributary');
  const [category, setCategory] = useState<IncidentCategory>('Water Quality & Marine');
  const [locationName, setLocationName] = useState('Pine Creek Watershed, Sector 4');
  const [description, setDescription] = useState(
    'Thick white foam blankets 400m of the stream surface. Submerged rock periphyton coated in grey slime. Native crayfish crawling onto dry banks in respiratory distress.'
  );

  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<BiologicalImpact | null>(null);
  const [copied, setCopied] = useState(false);

  const handleRunAnalysis = async () => {
    setIsLoading(true);
    try {
      // Direct call to local AI analysis engine
      const impact = await analyzeEnvironmentalIssue({
        title,
        description,
        category,
        locationName
      });
      setResult(impact);
    } catch {
      alert('Analysis failed');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyNotice = () => {
    if (!result) return;
    navigator.clipboard.writeText(result.officialNotificationDraft);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const loadExample = (type: 'water' | 'air' | 'plastics' | 'forest') => {
    if (type === 'water') {
      setTitle('Agricultural fertilizer runoff causing cyanobacterial bloom');
      setCategory('Water Quality & Marine');
      setLocationName('Lake Victoria Winam Gulf, Kisumu');
      setDescription('Vibrant pea-green scum covering shoreline. Strong geosmin and sulfur odor. Dead Nile Perch fry washing ashore; surface temperature 28.5C.');
    } else if (type === 'air') {
      setTitle('Combustion soot and diesel exhaust accumulation near school sports field');
      setCategory('Air Pollution & Emissions');
      setLocationName('Highway 101 Overpass Corridor');
      setDescription('Prolonged idling of freight transport trucks produces acrid black carbon haze during cross-country team practices. Students complaining of throat burning.');
    } else if (type === 'plastics') {
      setTitle('Subsurface microplastic fragmentation in coastal mangrove nursery');
      setCategory('Illegal Waste & Plastics');
      setLocationName('Tudor Creek Estuary, Mombasa');
      setDescription('Accumulation of photodegraded single-use plastic sachets embedded in mangrove prop root pneumatophores. Fiddler crab burrow density decreased by 65%.');
    } else {
      setTitle('Riparian gallery forest encroachment and bank collapse');
      setCategory('Deforestation & Land Degradation');
      setLocationName('Athi River Riparian Zone');
      setDescription('Clearance of indigenous Ficus sycomorus for temporary charcoal kilns. Riverbank topsoil eroding directly into river channel during seasonal flash floods.');
    }
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-950 via-teal-950 to-slate-950 border border-emerald-800/40 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold px-3 py-1 rounded-full mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              Machine Learning & Environmental Toxicology Engine
            </div>
            <h2 className="text-2xl font-extrabold text-white tracking-tight">
              AI Ecological Impact & Regulatory Drafter
            </h2>
            <p className="text-xs text-emerald-300/80 max-w-2xl mt-1 leading-relaxed">
              Test any field observation to calculate the Biodiversity Risk Index (BRI), biological indicator vulnerability, chemical mechanism predictions, and automated municipal regulatory notifications.
            </p>
          </div>

          {/* Quick preset buttons */}
          <div className="flex flex-wrap gap-2 text-[11px]">
            <span className="text-slate-400 self-center mr-1">Sample cases:</span>
            <button
              onClick={() => loadExample('water')}
              className="bg-cyan-950/80 hover:bg-cyan-900 text-cyan-200 border border-cyan-700/50 px-2.5 py-1 rounded-lg transition-all"
            >
              Algal Bloom
            </button>
            <button
              onClick={() => loadExample('air')}
              className="bg-purple-950/80 hover:bg-purple-900 text-purple-200 border border-purple-700/50 px-2.5 py-1 rounded-lg transition-all"
            >
              School Smog
            </button>
            <button
              onClick={() => loadExample('plastics')}
              className="bg-amber-950/80 hover:bg-amber-900 text-amber-200 border border-amber-700/50 px-2.5 py-1 rounded-lg transition-all"
            >
              Microplastics
            </button>
            <button
              onClick={() => loadExample('forest')}
              className="bg-emerald-950/80 hover:bg-emerald-900 text-emerald-200 border border-emerald-700/50 px-2.5 py-1 rounded-lg transition-all"
            >
              Canopy Loss
            </button>
          </div>
        </div>
      </div>

      {/* Input / Output Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Input Form Column */}
        <div className="lg:col-span-5 bg-slate-900/90 border border-emerald-800/40 rounded-2xl p-5 shadow-xl text-xs space-y-4">
          <h3 className="text-sm font-bold text-white flex items-center gap-2 pb-2 border-b border-slate-800">
            <Droplets className="w-4 h-4 text-emerald-400" />
            Observation Parameters
          </h3>

          <div>
            <label className="block text-slate-300 font-semibold mb-1">Scenario Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as IncidentCategory)}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-2.5 py-2 text-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
              >
                <option value="Water Quality & Marine">Water Quality & Marine</option>
                <option value="Air Pollution & Emissions">Air Pollution & Emissions</option>
                <option value="Illegal Waste & Plastics">Illegal Waste & Plastics</option>
                <option value="Deforestation & Land Degradation">Deforestation & Land</option>
                <option value="Biodiversity & Wildlife Threat">Biodiversity Threat</option>
                <option value="Urban Heat Island & Energy">Urban Heat Island</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Location / Biome</label>
              <input
                type="text"
                value={locationName}
                onChange={(e) => setLocationName(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-slate-300 font-semibold mb-1">Detailed Field Observations</label>
            <textarea
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-white focus:outline-none focus:ring-1 focus:ring-emerald-500 leading-relaxed"
            />
          </div>

          <button
            onClick={handleRunAnalysis}
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-bold py-3 rounded-xl shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 transition-all"
          >
            {isLoading ? (
              <span>Evaluating Ecological Models...</span>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                Run AI Ecological Diagnostic
              </>
            )}
          </button>
        </div>

        {/* Output Diagnostic Results Column */}
        <div className="lg:col-span-7 space-y-4">
          {result ? (
            <div className="space-y-4">
              {/* Score & Ecosystem Header Card */}
              <div className="bg-slate-900/90 border border-emerald-600/50 rounded-2xl p-5 shadow-xl">
                <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
                  <div>
                    <span className="text-[10px] text-emerald-400 uppercase tracking-widest font-bold">
                      Calculated Ecological Metric
                    </span>
                    <h4 className="text-lg font-bold text-white">Biodiversity Risk Index (BRI)</h4>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <span className="text-2xl font-black text-amber-400">{result.riskScore}</span>
                      <span className="text-slate-400 text-xs">/100</span>
                    </div>
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full uppercase ${
                      result.riskScore > 80 ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40' : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                    }`}>
                      {result.mitigationPriority}
                    </span>
                  </div>
                </div>

                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/50">
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Affected Habitat</span>
                    <strong className="text-emerald-300">{result.affectedEcosystem}</strong>
                  </div>
                  <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/50">
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Governing Statute</span>
                    <strong className="text-teal-300">{result.regulatoryCode}</strong>
                  </div>
                </div>

                {/* Key Bioindicators */}
                <div className="mt-3 bg-emerald-950/40 p-3 rounded-xl border border-emerald-800/40 text-xs">
                  <span className="text-emerald-300 font-bold block mb-1">Critical Bioindicator Taxa at Risk:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {result.keyBiologicalTaxa.map((species, idx) => (
                      <span key={idx} className="bg-emerald-900/60 text-emerald-200 px-2 py-0.5 rounded-md border border-emerald-700/40 text-[11px]">
                        🌿 {species}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Chemical / Physical parameters */}
                {result.chemicalParameters && (
                  <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px]">
                    {Object.entries(result.chemicalParameters).map(([k, v]) => (
                      <div key={k} className="bg-slate-800/80 p-2 rounded-lg border border-slate-700">
                        <span className="text-slate-400 block truncate">{k}</span>
                        <strong className="text-white block mt-0.5">{v}</strong>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Regulatory Notice Generator Card */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl text-xs">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-cyan-400" />
                    <h4 className="font-bold text-white text-sm">Automated Regulatory Notice Draft</h4>
                  </div>
                  <button
                    onClick={handleCopyNotice}
                    className="bg-emerald-900/70 hover:bg-emerald-800 text-emerald-200 border border-emerald-700/60 px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all text-[11px]"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied to Clipboard' : 'Copy Notice'}</span>
                  </button>
                </div>

                <pre className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-[11px] text-slate-300 font-mono whitespace-pre-wrap leading-relaxed overflow-x-auto">
                  {result.officialNotificationDraft}
                </pre>
              </div>

            </div>
          ) : (
            <div className="bg-slate-900/50 border border-dashed border-slate-800 rounded-2xl p-12 text-center text-slate-400 flex flex-col items-center justify-center h-full">
              <Sparkles className="w-12 h-12 text-emerald-500 mb-3 animate-pulse" />
              <h4 className="text-base font-bold text-white">Awaiting Input Parameters</h4>
              <p className="text-xs text-slate-400 max-w-sm mt-1">
                Click &quot;Run AI Ecological Diagnostic&quot; or choose one of the sample scenarios above to view simulated biological impact models.
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
