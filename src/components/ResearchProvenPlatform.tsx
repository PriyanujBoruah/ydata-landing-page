import React, { useState } from "react";
import { GraduationCap, BookOpen, ShieldCheck, Scale, ExternalLink, Sparkles, ArrowUpRight, FileText, CheckCircle2 } from "lucide-react";

export default function ResearchProvenPlatform() {
  const [activePaperIndex, setActivePaperIndex] = useState(0);

  const papers = [
    {
      id: "privacy-framework",
      tabLabel: "1. Zero Data Exposure",
      title: "Zero Data Exposure: A New Framework for Enabling Generative AI on Private Enterprise Data",
      subtitle: "Published: October 28, 2025 • Privacy & Security",
      date: "Oct 28, 2025",
      id_attr: "paper-zero-data",
      doi: "10.7910/DVN/FZMD31",
      registry: "Harvard Dataverse",
      datasets: "4 Class Methods / High-Stakes Focus",
      peerConsensus: "SGL-1 Security Standards",
      quote: "This research addresses the central security challenge preventing the adoption of Generative AI in the enterprise: the unacceptable risk of exposing sensitive data. It introduces a formal framework for evaluating privacy-preserving AI strategies along three critical axes.",
      linkText: "Show Publication",
      findings: [
        {
          name: "SGL, Utility & Overhead Framework",
          info: "Introduces three critical evaluation axes: Security Guarantee Level (SGL), Contextual Fidelity, and Performance Overhead."
        },
        {
          name: "Public Approaches Flawed",
          info: "Analysis conclusively demonstrates that all common public approaches are fundamentally flawed for high-stakes enterprise use."
        },
        {
          name: "High-Security Tradeoffs",
          info: "Methods offering the highest security guarantees (SGL-1) are analytically weak, while high-fidelity models are insecure (SGL-2) and slow."
        },
        {
          name: "The Research Benchmark Gap",
          info: "Formally identifies a critical 'research gap' and establishes a rigorous benchmark for a secure class of private data solutions."
        }
      ]
    },
    {
      id: "anomaly",
      tabLabel: "2. The Laws of Anomaly",
      title: "The Laws of Anomaly: A Framework for Regression Model Selection Based on a Large Scale Empirical Study of Structural Data Challenges",
      subtitle: "Published: August 28, 2025 • Regression Analysis",
      date: "Aug 28, 2025",
      doi: "10.7910/DVN/VH9JJA",
      registry: "Harvard Dataverse",
      datasets: "100+ High-Volume Datasets",
      peerConsensus: "20+ Regressive Models Analyzed",
      quote: "Robust estimators like Huber Regressors serve as a silver bullet for data with hidden outliers, achieving over 1500% performance margins over classical models under high-dimensional data anomalies.",
      linkText: "Show Publication",
      findings: [
        {
          name: "EMSF Integration",
          info: "Novel Efficiency-Based Model Selection aligns distinct regressions with structural constraints."
        },
        {
          name: "Law of Ensemble Dominance",
          info: "Tree-based ensembles represent the maximum efficiency outcome in over 70% of high-volume tasks."
        },
        {
          name: "Law of Anomaly Supremacy",
          info: "KNN and Huber Regressors outperform complex ensembles by 1500%+ margins under extreme outlier conditions."
        },
        {
          name: "Law of Predictive Futility",
          info: "Systematic benchmarks capture lack of predictive signals, shifting process safely back to features."
        }
      ]
    },
    {
      id: "impute",
      tabLabel: "3. Smart-Impute",
      title: "SMART-IMPUTE: A Time-Efficient, ANN-Based Algorithm for Practical Imputation with Empirical and Theoretical Validation",
      subtitle: "Published: October 23, 2025 • Neural & Imputation Algorithms",
      date: "Oct 23, 2025",
      doi: "10.7910/DVN/TJ7WRT",
      registry: "Harvard Dataverse",
      datasets: "Large-Scale Enterprise Benchmarks",
      peerConsensus: "12.2x Faster than standard KNN",
      quote: "This research introduces Smart-Impute, a novel High-Performance Robust Imputer with a formal O(N log N) time complexity, resolving the trade-off between speed and statistical robustness.",
      linkText: "Show Publication",
      findings: [
        {
          name: "Massive Performance Gains",
          info: "Smart-Impute is up to 12.2x faster than the standard KNN imputer, turning hours of missing data processing into minutes."
        },
        {
          name: "Superior Scalability",
          info: "Formal mathematical proof of its O(N log N) time complexity ensures performance scales gracefully with dataset growth."
        },
        {
          name: "State-of-the-Art Robustness",
          info: "Architected to natively handle high-cardinality features and mixed data types common in real-world enterprise data."
        },
        {
          name: "Practical Integrity",
          info: "Saves valuable engineering time, increases team productivity, and enables agile data analysis without compromising statistical validity."
        }
      ]
    }
  ];

  const activePaper = papers[activePaperIndex];

  const corePillars = [
    {
      title: "Decentralized Coordination",
      badge: "Harvard Dataverse",
      desc: "Architected using formal mathematical modeling of multi-agent state machines. Validated alongside the Harvard Dataverse thesis archive under domestic computational guidelines.",
      icon: GraduationCap,
      color: "text-orange-600 bg-orange-100/50 border-orange-200"
    },
    {
      title: "Zero-Knowledge Invariance",
      badge: "DPDP Act Compliant",
      desc: "Formally verified boundary layers ensure zero outbound merchant logs or transaction details, executing absolute sandboxed privacy at the municipal franchise scale.",
      icon: ShieldCheck,
      color: "text-emerald-600 bg-emerald-100/50 border-emerald-200"
    },
    {
      title: "Local-First Gini Coefficient Audit",
      badge: "Verified Algorithm",
      desc: "Algorithms evaluate retail customer concentration ratios locally within browser caches, scaling down complex global workloads to fast, sub-millisecond edge operations.",
      icon: Scale,
      color: "text-indigo-600 bg-indigo-100/40 border-indigo-200"
    }
  ];

  return (
    <div className="bg-white/80 backdrop-blur-md rounded-3xl border border-orange-100 p-6 md:p-8 shadow-xl" id="research-proven-section">
      
      {/* Upper Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Interactive Research Document Card mockup */}
        <div className="lg:col-span-6 space-y-4">
          
          {/* Document switcher tabs */}
          <div className="flex bg-slate-100 p-1 rounded-xl gap-1">
            {papers.map((paper, idx) => (
              <button
                key={paper.id}
                onClick={() => setActivePaperIndex(idx)}
                className={`flex-1 text-center py-2 px-3 text-[11px] md:text-xs font-bold rounded-lg transition-all duration-250 cursor-pointer ${
                  activePaperIndex === idx
                    ? "bg-white text-slate-950 shadow-sm"
                    : "text-slate-500 hover:text-slate-900 hover:bg-slate-50/50"
                }`}
              >
                {paper.tabLabel}
              </button>
            ))}
          </div>

          <div className="bg-[#FAF8F5] border border-orange-150/60 rounded-2xl p-6 relative overflow-hidden shadow-sm transition-all duration-300">
            
            {/* Stamp Detail */}
            <div className="absolute top-4 right-4 w-12 h-12 rounded-full border-4 border-orange-500/10 flex items-center justify-center text-[8px] font-black uppercase text-orange-500/20 rotate-12 select-none pointer-events-none">
              VERIFIED
            </div>

            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-orange-50 text-orange-700 border border-orange-150 font-mono">
                <BookOpen className="w-3.5 h-3.5" /> HARVARD DATAVERSE ARCHIVE
              </span>

              <div className="space-y-1">
                <h4 className="font-extrabold text-slate-900 text-base md:text-lg leading-tight tracking-tight">
                  {activePaper.title}
                </h4>
                <p className="text-[11px] text-slate-500 font-semibold">
                  {activePaper.subtitle}
                </p>
              </div>

              {/* Research Metadata Checklist */}
              <div className="border-t border-b border-orange-150/40 py-3 space-y-2 text-xs text-slate-600">
                <div className="flex justify-between">
                  <span className="text-slate-400 font-medium">Archive Registry:</span>
                  <strong className="text-slate-800 font-bold">{activePaper.registry}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 font-medium">Document ID / DOI:</span>
                  <a 
                    href={`https://doi.org/${activePaper.doi}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-orange-600 font-bold hover:underline flex items-center gap-0.5"
                  >
                    doi.org/{activePaper.doi} <ExternalLink className="w-3 h-3 text-orange-500" />
                  </a>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 font-medium">Audited Datasets:</span>
                  <strong className="text-slate-800 font-bold">{activePaper.datasets}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 font-medium">Validation Metric:</span>
                  <strong className="text-emerald-600 font-extrabold font-mono text-[11px] uppercase">
                    {activePaper.peerConsensus}
                  </strong>
                </div>
              </div>

              {/* DOI Reference Quote */}
              <div className="bg-orange-50/30 border-l-2 border-orange-400 p-3 rounded-r-xl">
                <p className="text-[11px] italic text-slate-600 leading-relaxed font-mono">
                  &ldquo;{activePaper.quote}&rdquo;
                </p>
              </div>

              {/* Dynamic bullets for finding insights */}
              <div className="space-y-2">
                <h5 className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest font-mono">
                  Key Findings &amp; Proofs
                </h5>
                <div className="grid grid-cols-1 gap-2">
                  {activePaper.findings.map((f, fi) => (
                    <div key={fi} className="flex gap-2 text-[11px] items-start">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-800 font-bold">{f.name}:</strong>{" "}
                        <span className="text-slate-500">{f.info}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3">
                <a 
                  href={`https://doi.org/${activePaper.doi}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs py-2.5 px-4 rounded-xl transition shadow-xs"
                >
                  <span>{activePaper.linkText}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-orange-400" />
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* Right Side: Showcase grid of Research Proven Details */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-orange-50 text-orange-600 border border-orange-100 mb-2">
              <Sparkles className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" /> Peer-Reviewed Research Architecture
            </span>
            <h3 className="text-2xl md:text-3.5xl font-black text-[#1E293B] tracking-tight leading-tight">
              Decentralized Mathematical Safety Engineered from Ground Up
            </h3>
            <p className="text-slate-500 text-xs md:text-sm mt-3 leading-relaxed">
              YData is engineered on rigorous foundations. It is the premier deployment of our published agentic data cleanroom and algorithm efficiency research, complying with strict digital privacy guidelines of the modern era.
            </p>
          </div>

          <div className="space-y-4">
            {corePillars.map((pillar, i) => {
              const IconComp = pillar.icon;
              return (
                <div 
                  key={i} 
                  className="flex flex-col sm:flex-row gap-4 items-start p-4 bg-white hover:bg-orange-50/[0.15] border border-slate-100 hover:border-orange-200 transition-all rounded-2xl"
                >
                  <div className={`p-2.5 rounded-xl border shrink-0 ${pillar.color}`}>
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="font-extrabold text-slate-800 text-sm tracking-tight">{pillar.title}</h4>
                      <span className="text-[9px] font-black bg-slate-100 text-slate-600 uppercase px-2 py-0.5 rounded border border-slate-200">
                        {pillar.badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

    </div>
  );
}
