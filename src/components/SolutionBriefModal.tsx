import React from "react";
import { X, Sparkles, Database, ShieldAlert, CheckCircle, Scale, GraduationCap, ArrowRight, Table, Fingerprint, TrendingUp, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface SolutionBriefModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SolutionBriefModal({ isOpen, onClose }: SolutionBriefModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          
          {/* Backdrop element */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/45 backdrop-blur-md transition-opacity"
          />

          <div className="flex min-h-screen items-center justify-center p-4 text-center sm:p-6 lg:p-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative transform overflow-hidden rounded-3xl bg-white text-left shadow-2xl transition-all w-full max-w-4xl border border-slate-100 flex flex-col h-[90vh]"
            >
              
              {/* Header inside modal */}
              <div className="sticky top-0 bg-slate-900 text-white px-6 py-5 flex items-center justify-between z-10 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-orange-500 font-extrabold text-white flex items-center justify-center shadow-lg">Y</span>
                  <div>
                    <h2 className="font-bold text-base tracking-tight text-white leading-none">YData Enterprise Brief</h2>
                    <p className="text-[10px] text-orange-400 font-medium mt-1">Official Solution Brief • IIT Madras Initiative</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2.5 py-1 rounded-full uppercase tracking-wider items-center gap-1 hidden sm:inline-flex">
                    <CheckCircle className="w-2.5 h-2.5" /> India DPDP Compliant
                  </span>
                  <button
                    onClick={onClose}
                    className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 p-6 md:p-8 overflow-y-auto space-y-8 text-slate-800">
                
                {/* Hero Head Banner */}
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 w-40 h-40 bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />
                  
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold">
                      <GraduationCap className="w-4 h-4 text-orange-500" />
                      <span>Developed at <strong>IIT Madras</strong></span>
                      <span className="text-slate-300">|</span>
                      <span>Researched in <strong>Harvard Dataverse</strong></span>
                    </div>

                    {/* Made in India Tricolor Badge */}
                    <div className="inline-flex items-center gap-2 py-1.5 px-3 bg-white border border-slate-200 rounded-full text-[10px] font-bold shadow-xs">
                      <span className="w-3.5 h-2 bg-gradient-to-r from-orange-500 via-white to-emerald-500 rounded-sm"></span>
                      <span>Made in INDIA</span>
                    </div>
                  </div>

                  <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    Autonomous and Domain-Specific Agentic AI Data Workforce for Indian Enterprises
                  </h3>
                  <p className="text-slate-500 text-xs mt-2 font-mono">
                    Published Research Registry Reference: <a href="https://doi.org/10.7910/DVN/FZMD31" target="_blank" rel="noopener noreferrer" className="text-orange-500 underline hover:text-orange-600">doi.org/10.7910/DVN/FZMD31</a>
                  </p>
                </div>

                {/* Body Paragraphs */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                  
                  {/* Left explanation column */}
                  <div className="md:col-span-7 space-y-4 text-xs md:text-sm text-slate-600 leading-relaxed">
                    <p>
                      Indian enterprises manage vast volumes of sensitive operational, financial, and customer data, traditionally processed through manual spreadsheets or fragmented BI tools. While Large Language Models (LLMs) offer revolutionary potential for data intelligence, traditional cloud-based AI deployments require the transfer of raw data to third-party servers.
                    </p>
                    <p className="font-bold text-slate-900 bg-orange-50/40 p-3 rounded-xl border border-orange-100/40">
                      This creates a critical conflict with the Digital Personal Data Protection (DPDP) Act of 2023 and poses significant risks to corporate sovereignty and proprietary intelligence. Enterprises must find a way to leverage agentic AI to eliminate technical debt and manual bottlenecks, but in a way that ensures data never leaves the organization's perimeter.
                    </p>
                    <p>
                      YData, developed at IIT Madras, resolves this conflict by deploying a sovereign, autonomous AI data workforce designed specifically for the Indian regulatory and business landscape. Built on a proprietary mathematical framework published at Harvard Dataverse, YData utilizes a sophisticated local-first engine to bring the AI "brain" to the data, rather than the data to the AI.
                    </p>
                    <p>
                      Its agentic engine autonomously assesses datasets to identify forensic anomalies, map technical schemas to business language, and uncover strategic growth segments, all while executing 100% of the mathematical processing within the user's secure browser environment.
                    </p>
                  </div>

                  {/* Right hand benefits cards */}
                  <div className="md:col-span-5 bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-5 shadow-lg border border-slate-800 flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-sm text-orange-400 border-b border-slate-800 pb-2.5 mb-3 uppercase tracking-wider">
                        Key Benefits of YData
                      </h4>
                      <ul className="space-y-2.5 text-xs">
                        {[
                          { text: "100% data sovereignty - Complies with Indian DPDP limits" },
                          { text: "5x faster auditing & systematic data validations" },
                          { text: "10x faster tactical business intelligence reports" },
                          { text: "100% Bharat-Ready regional taxonomy mapping" },
                          { text: "Zero technical prerequisites for spreadsheet business users" },
                          { text: "100% automated autonomous executive reporting" },
                          { text: "Zero infrastructure or high subscription cloud compute costs" }
                        ].map((b, i) => (
                          <li key={i} className="flex items-start gap-2 text-slate-200">
                            <span className="text-orange-400 font-bold">❖</span>
                            <span>{b.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-4 pt-4 border-t border-slate-800 flex flex-col gap-1 text-[10px] text-slate-400">
                      <p>Benchmark Datasets Verified Against:</p>
                      <div className="flex gap-2 font-mono font-bold text-slate-200 mt-1">
                        <span className="bg-slate-800 px-1.5 py-0.5 rounded border border-slate-700">Reserve Bank of India</span>
                        <span className="bg-slate-800 px-1.5 py-0.5 rounded border border-slate-700">data.gov.in</span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Four Distinct Agentic Flow Stages */}
                <div className="space-y-4 pt-4 border-t border-slate-100">
                  <h4 className="font-extrabold text-slate-950 text-base flex items-center gap-2">
                    <Scale className="w-5 h-5 text-orange-500" /> Executive Workflow Lifecycle
                  </h4>
                  <p className="text-xs text-slate-500">
                    Sovereign end-to-end automations: From unstructured ledger folders to verified boardroom metrics.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      {
                        step: "STEP 1",
                        name: "Ingestion & Schema Mapping",
                        items: [
                          "Multimodal OCR parsing of unstructured invoices alongside standard CSV/Excel files.",
                          "LLM-based column translation mapping obscure abbreviations (e.g. VAR99 to Net Sales).",
                          "Localized DB indexing in DuckDB-Wasm virtual container partitions."
                        ]
                      },
                      {
                        step: "STEP 2",
                        name: "Integrity, PII Shield & Governance",
                        items: [
                          "Auto-detection of crucial tax elements, Indian mobile contacts, and Gov IDs.",
                          "One-click complete browser obfuscation ensuring compliance with India's DPDP standard.",
                          "Statistical cleansing - autonomous imbalance detection and outlier reporting."
                        ]
                      },
                      {
                        step: "STEP 3",
                        name: "Strategic Discovery Analysis",
                        items: [
                          "Pareto Analysis (80/20 rule) using Gini coefficients to pinpoint whale segments.",
                          "Bharat Localized Intelligence tracking Indian tax slabs, GST adjustments, and festive calendars.",
                          "Outliers profiling to capture hyper-local trend spikes in Indian Tier-2 cities."
                        ]
                      },
                      {
                        step: "STEP 4",
                        name: "Autonomous Report Output",
                        items: [
                          "High fidelity KrataBooks PDF brief synthesis summarizing numerical and semantic details.",
                          "Interactive visual charts, sales/inventory funnels, and Gantt project matrices.",
                          "Zero server-side retention of raw files. Completely secure exports."
                        ]
                      }
                    ].map((st, i) => (
                      <div key={i} className="bg-slate-50 border border-slate-100/80 rounded-2xl p-4 space-y-2.5 hover:shadow-md transition">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold text-orange-600 bg-orange-100/50 px-2.5 py-0.5 rounded-full uppercase tracking-wider">{st.step}</span>
                          <span className="text-[10px] text-slate-400 font-semibold font-mono">Phase #{i+1}</span>
                        </div>
                        <h5 className="font-bold text-slate-900 text-sm">{st.name}</h5>
                        <ul className="space-y-1 text-slate-600 text-[11px] list-disc pl-4 leading-normal">
                          {st.items.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer and contact detail inside modal */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-900 text-white rounded-2xl p-5 border border-slate-800">
                  <div className="text-center sm:text-left">
                    <h5 className="text-xs font-bold text-orange-400 uppercase tracking-widest">Connect with Founding Developers</h5>
                    <p className="text-[11px] text-slate-300 mt-1">Questions on deploying private instances or custom model fine-tuning?</p>
                  </div>
                  <a
                    href="mailto:22f3000795@ds.study.iitm.ac.in"
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition shadow shadow-orange-500/20"
                  >
                    22f3000795@ds.study.iitm.ac.in
                  </a>
                </div>

              </div>

              {/* Bottom bar */}
              <div className="sticky bottom-0 bg-slate-50 px-6 py-4 flex items-center justify-between border-t border-slate-200 text-[10px] text-slate-400 z-10">
                <span>© 2026 YData India Inc. Published Academic Works Reserved.</span>
                <button
                  onClick={onClose}
                  className="text-slate-600 font-bold hover:text-orange-600 text-xs py-1 px-3 bg-white border border-slate-200 rounded-lg hover:border-orange-200 transition"
                >
                  Close Document
                </button>
              </div>

            </motion.div>
          </div>

        </div>
      )}
    </AnimatePresence>
  );
}
