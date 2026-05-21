import React, { useState, useEffect } from "react";
import { Database, Cpu, ShieldCheck, Table, Play, Pause, ChevronRight, Zap } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function ArchitectureDiagram() {
  const [activeNode, setActiveNode] = useState<string>("duckdb");
  const [isSimulating, setIsSimulating] = useState<boolean>(true);

  const nodes = {
    sources: {
      id: "sources",
      title: "1. Raw Data Files",
      badge: "Local Ingestion",
      desc: "Securely ingests local enterprise CSVs, master tables, Excel spreadsheets, state-wise APMC files, or banking statement ledgers locally in memory.",
      color: "border-amber-300 text-amber-600 bg-amber-50/50",
      glowColor: "shadow-amber-500/10",
      accent: "from-amber-400 to-orange-500",
      icon: Table
    },
    duckdb: {
      id: "duckdb",
      title: "2. Local DuckDB-Wasm",
      badge: "SQL Indexing",
      desc: "An ultra-fast, relational columnar database running 100% inside your sandbox tab. Data is indexed into in-memory parquet vectors for rapid analytical queries.",
      color: "border-orange-300 text-orange-600 bg-orange-50/50",
      glowColor: "shadow-orange-500/15",
      accent: "from-orange-500 to-rose-500",
      icon: Database
    },
    agents: {
      id: "agents",
      title: "3. YData Agent Workforce",
      badge: "Expert Inference",
      desc: "Autonomous, memory-sandboxed expert agents evaluate data schemas, audit high decimal float irregularities, detect tax discrepancies, and verify regional trends.",
      color: "border-indigo-300 text-indigo-600 bg-indigo-50/50",
      glowColor: "shadow-indigo-500/10",
      accent: "from-indigo-500 to-amber-600",
      icon: Cpu
    },
    output: {
      id: "output",
      title: "4. KrataBook Summary",
      badge: "Boardroom Output",
      desc: "Outputs pristine compliance briefs, comprehensive PDF reports, Gini coefficients, and interactive visualizations. Zero outbound logs, 100% security.",
      color: "border-emerald-300 text-emerald-600 bg-emerald-50/50",
      glowColor: "shadow-emerald-500/15",
      accent: "from-amber-500 to-emerald-500",
      icon: ShieldCheck
    }
  };

  const nodeKeys = ["sources", "duckdb", "agents", "output"];

  // Handle pipeline simulation loop
  useEffect(() => {
    if (!isSimulating) return;

    const interval = setInterval(() => {
      setActiveNode((prev) => {
        const currentIndex = nodeKeys.indexOf(prev);
        const nextIndex = (currentIndex + 1) % nodeKeys.length;
        return nodeKeys[nextIndex];
      });
    }, 4500); // Shift every 4.5 seconds for readable pace

    return () => clearInterval(interval);
  }, [isSimulating]);

  return (
    <div className="bg-white/80 backdrop-blur-md border border-orange-100 rounded-3xl p-6 md:p-8 shadow-xl relative overflow-hidden" id="architecture-section">
      
      {/* Background visual detail */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center mb-10">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-orange-150/10 text-orange-600 border border-orange-200 uppercase tracking-widest">
          <Zap className="w-3.5 h-3.5 animate-pulse" /> Local-First Sovereign Flowchart
        </span>
        <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mt-2.5">
          Step-by-Step Sovereign Pipeline Architecture
        </h3>
        <p className="text-slate-600 text-xs md:text-sm mt-2">
          Watch data stream completely within your browser. Select a node or play the simulator to inspect how YData parses, sanitizes, reasons, and synthesizes intelligence locally.
        </p>
      </div>

      {/* Control panel for the animated flow */}
      <div className="flex items-center justify-center gap-3 mb-8">
        <button
          onClick={() => setIsSimulating(!isSimulating)}
          className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm border ${
            isSimulating 
              ? "bg-slate-900 text-white border-transparent" 
              : "bg-white text-slate-700 border-slate-200"
          }`}
        >
          {isSimulating ? (
            <>
              <Pause className="w-3.5 h-3.5 text-orange-400 fill-orange-400" />
              <span>Pause Interactive Flow</span>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5 text-emerald-500 fill-emerald-500" />
              <span>Simulate Pipeline Flow</span>
            </>
          )}
        </button>

        {isSimulating && (
          <span className="flex items-center gap-1 text-[10px] text-orange-600 font-bold uppercase animate-pulse">
            <span className="w-2 h-2 rounded-full bg-orange-500"></span>
            Simulating Stream
          </span>
        )}
      </div>

      {/* Interactive Flowchart Container */}
      <div className="relative mb-10 max-w-5xl mx-auto">
        
        {/* DESKTOP CONNECTIVITY SVG STREAM LINES */}
        <div className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0" style={{ height: '140px' }}>
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="flow-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F97316" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#818CF8" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#10B981" stopOpacity="0.8" />
              </linearGradient>
            </defs>

            {/* Connecting line 1 (Sources -> DuckDB) */}
            <line
              x1="19%"
              y1="70"
              x2="31%"
              y2="70"
              fill="none"
              stroke="#E2E8F0"
              strokeWidth="4"
              strokeLinecap="round"
            />
            {isSimulating && (
              <>
                <line
                  x1="19%"
                  y1="70"
                  x2="31%"
                  y2="70"
                  fill="none"
                  stroke="url(#flow-grad)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray="6 6"
                >
                  <animate attributeName="stroke-dashoffset" from="0" to="-24" dur="1.5s" repeatCount="indefinite" />
                </line>
                <circle r="4" fill="#F97316" cy="70">
                  <animate attributeName="cx" from="19%" to="31%" dur="1.5s" repeatCount="indefinite" />
                </circle>
                <circle r="8" fill="#F97316" fillOpacity="0.3" cy="70">
                  <animate attributeName="cx" from="19%" to="31%" dur="1.5s" repeatCount="indefinite" />
                </circle>
              </>
            )}

            {/* Connecting line 2 (DuckDB -> Agents) */}
            <line
              x1="44%"
              y1="70"
              x2="56%"
              y2="70"
              fill="none"
              stroke="#E2E8F0"
              strokeWidth="4"
              strokeLinecap="round"
            />
            {isSimulating && (
              <>
                <line
                  x1="44%"
                  y1="70"
                  x2="56%"
                  y2="70"
                  fill="none"
                  stroke="url(#flow-grad)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray="6 6"
                >
                  <animate attributeName="stroke-dashoffset" from="0" to="-24" dur="1.5s" repeatCount="indefinite" />
                </line>
                <circle r="4" fill="#818CF8" cy="70">
                  <animate attributeName="cx" from="44%" to="56%" dur="1.5s" repeatCount="indefinite" />
                </circle>
                <circle r="8" fill="#818CF8" fillOpacity="0.3" cy="70">
                  <animate attributeName="cx" from="44%" to="56%" dur="1.5s" repeatCount="indefinite" />
                </circle>
              </>
            )}

            {/* Connecting line 3 (Agents -> Output) */}
            <line
              x1="69%"
              y1="70"
              x2="81%"
              y2="70"
              fill="none"
              stroke="#E2E8F0"
              strokeWidth="4"
              strokeLinecap="round"
            />
            {isSimulating && (
              <>
                <line
                  x1="69%"
                  y1="70"
                  x2="81%"
                  y2="70"
                  fill="none"
                  stroke="url(#flow-grad)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray="6 6"
                >
                  <animate attributeName="stroke-dashoffset" from="0" to="-24" dur="1.5s" repeatCount="indefinite" />
                </line>
                <circle r="4" fill="#10B981" cy="70">
                  <animate attributeName="cx" from="69%" to="81%" dur="1.5s" repeatCount="indefinite" />
                </circle>
                <circle r="8" fill="#10B981" fillOpacity="0.3" cy="70">
                  <animate attributeName="cx" from="69%" to="81%" dur="1.5s" repeatCount="indefinite" />
                </circle>
              </>
            )}
          </svg>
        </div>

        {/* Dynamic Nodes Grid Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-4 relative z-10">
          
          {nodeKeys.map((key) => {
            const node = nodes[key as keyof typeof nodes];
            const isActive = activeNode === key;
            const IconComp = node.icon;

            return (
              <div key={key} className="relative flex flex-col items-center">
                <button
                  onClick={() => {
                    setActiveNode(key);
                    setIsSimulating(false); // Pause auto rotation on click
                  }}
                  className={`w-full max-w-[280px] lg:max-w-full text-left p-5 rounded-2xl border transition-all duration-300 relative group flex flex-col items-center justify-center text-center ${
                    isActive
                      ? `bg-white border-orange-500 ${node.glowColor} scale-105 ring-2 ring-orange-500/10 shadow-lg`
                      : "bg-white/60 border-slate-200 hover:bg-white hover:border-orange-300 shadow-sm"
                  }`}
                >
                  {/* Glowing halo indicator when active */}
                  {isActive && (
                    <span className="absolute -top-2.5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-rose-600 text-white font-black text-[9px] px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow">
                      {node.badge}
                    </span>
                  )}

                  {/* Icon Block */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-colors ${
                    isActive ? "bg-orange-500 text-white" : "bg-slate-100 text-slate-500 group-hover:text-orange-500"
                  }`}>
                    <IconComp className="w-6 h-6" />
                  </div>

                  <h4 className={`font-extrabold text-sm tracking-tight transition ${
                    isActive ? "text-orange-600" : "text-slate-800"
                  }`}>
                    {node.title}
                  </h4>
                  
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1 block">
                    {node.badge}
                  </span>

                  {/* Flow state light dot indicator */}
                  <div className="absolute right-3 top-3 flex items-center gap-1.5">
                    <span className={`w-2 h-2 rounded-full ${
                      isActive ? "bg-emerald-500 animate-ping" : "bg-slate-300"
                    }`}></span>
                  </div>
                </button>

                {/* Mobile view downward stream line */}
                {key !== "output" && (
                  <div className="lg:hidden h-8 w-1 flex flex-col items-center relative my-1">
                    <div className="w-1 bg-slate-200 h-full"></div>
                    {isSimulating && (
                      <div className="absolute inset-0 w-1 bg-gradient-to-b from-orange-500 to-rose-500 h-full animate-pulse"></div>
                    )}
                  </div>
                )}
              </div>
            );
          })}

        </div>

      </div>

      {/* Structured animated detail content container */}
      <div className="max-w-2xl mx-auto relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeNode}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="bg-white border border-orange-100 rounded-2xl p-5 md:p-6 shadow-md flex items-start gap-4"
          >
            <div className="bg-orange-50 text-orange-600 p-3 rounded-xl shrink-0 mt-0.5 shadow-sm border border-orange-100/40">
              {React.createElement(nodes[activeNode as keyof typeof nodes].icon, { className: "w-5 h-5" })}
            </div>
            <div className="space-y-1.5 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase font-mono font-bold tracking-wider px-2 py-0.5 bg-orange-100 text-orange-700 rounded-md">
                  {nodes[activeNode as keyof typeof nodes].badge}
                </span>
                <span className="text-slate-300">|</span>
                <span className="text-[10px] uppercase font-bold text-slate-400">Pipeline Step</span>
              </div>
              
              <h4 className="font-extrabold text-slate-900 text-base">
                {nodes[activeNode as keyof typeof nodes].title}
              </h4>
              
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                {nodes[activeNode as keyof typeof nodes].desc}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  );
}
