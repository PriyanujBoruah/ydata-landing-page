import React, { useState } from "react";
import { agentPersonas } from "../data";
import { Table, ShieldAlert, TrendingUp, FileCheck, Truck, Terminal, User, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function PersonaIntelligence() {
  const [selectedAgentId, setSelectedAgentId] = useState<string>("data-analyst");

  const selectedAgent = agentPersonas.find(a => a.id === selectedAgentId) || agentPersonas[0];

  const iconMap = {
    Table: Table,
    Fingerprint: ShieldAlert,
    TrendingUp: TrendingUp,
    FileCheck: FileCheck,
    Truck: Truck
  };

  return (
    <div className="bg-white border border-slate-100 rounded-3xl p-6 md:p-8" id="persona-section">
      
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-8 max-w-4xl mx-auto">
        <div>
          <span className="text-xs font-bold text-orange-600 bg-orange-100/50 px-3 py-1 rounded-full border border-orange-200 uppercase tracking-widest">
            Modular Expert Brains
          </span>
          <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mt-2">
            Deploy specialized virtual experts tailored to your business
          </h3>
          <p className="text-slate-600 text-sm mt-2 max-w-lg">
            Unlike standard general LLMs, YData features an extensible Agentic Layer. Each persona is loaded with custom rules, schemas & local logic to interpret transactions accurately.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-5xl mx-auto">
        
        {/* Selector Menu sidebar */}
        <div className="lg:col-span-5 space-y-2">
          {agentPersonas.map((agent) => {
            const IconComponent = iconMap[agent.icon as keyof typeof iconMap] || Table;
            const isSelected = selectedAgentId === agent.id;
            return (
              <button
                key={agent.id}
                onClick={() => setSelectedAgentId(agent.id)}
                className={`w-full text-left p-4 rounded-xl border transition-all flex items-center gap-3.5 group ${
                  isSelected 
                    ? "bg-orange-500 border-orange-500 text-white shadow-lg shadow-orange-500/10 scale-102" 
                    : "bg-slate-50 border-slate-100/80 text-slate-700 hover:bg-orange-50 hover:text-orange-600 hover:border-orange-100"
                }`}
              >
                <div className={`p-2.5 rounded-lg flex items-center justify-center ${
                  isSelected ? "bg-white/15 text-white" : "bg-white text-slate-500 shadow-xs group-hover:text-orange-500"
                }`}>
                  <IconComponent className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-xs md:text-sm tracking-tight leading-snug">{agent.name}</h4>
                  <p className={`text-[10px] mt-0.5 font-medium ${isSelected ? "text-orange-100" : "text-slate-400 group-hover:text-orange-500"}`}>
                    {agent.role}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Display details viewport with mock terminal execution */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedAgentId}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="bg-slate-900 text-slate-100 rounded-2xl p-5 md:p-6 flex flex-col justify-between h-full border border-slate-800 shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
                      <User className="w-5 h-5 text-orange-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-white">{selectedAgent.name}</h4>
                      <p className="text-[10px] text-orange-400 uppercase font-semibold tracking-wider">
                        {selectedAgent.role}
                      </p>
                    </div>
                  </div>
                  <span className="text-[9px] bg-slate-800 text-slate-300 font-mono border border-slate-700 px-2 py-0.5 rounded">
                    CPU Partition: Sandboxed
                  </span>
                </div>

                <div className="space-y-3">
                  <div>
                    <h5 className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Expertise Scope</h5>
                    <p className="text-xs text-slate-300 leading-relaxed mt-1">{selectedAgent.description}</p>
                  </div>
                  
                  <div>
                    <h5 className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Algorithm Focus</h5>
                    <p className="text-xs text-orange-200 mt-1">{selectedAgent.specialty}</p>
                  </div>
                </div>
              </div>

              {/* Simulated Script output block */}
              <div className="mt-6 space-y-3">
                <div className="bg-slate-950 font-mono rounded-lg border border-slate-800 overflow-hidden text-[10px]">
                  <div className="bg-slate-800 px-3 py-1.5 text-slate-400 font-sans flex items-center justify-between text-[9px] font-bold">
                    <span className="flex items-center gap-1"><Terminal className="w-3 h-3 text-orange-400 font-mono" /> Agent Sandboxed Sandbox Code Query</span>
                    <span className="text-rose-400">● Live Stream</span>
                  </div>
                  <div className="p-3 text-slate-300 space-y-2">
                    <p className="text-slate-500">YData_Shell &gt; {selectedAgent.sampleInput}</p>
                    <p className="text-emerald-400 leading-normal font-medium">{selectedAgent.sampleAnalysis}</p>
                  </div>
                </div>
                
                <div className="text-[9px] text-slate-500 flex items-center gap-1.5 justify-end">
                  <BookOpen className="w-3 h-3" /> Underpinned by mathematical archives at Harvard Dataverse (doi.org/10.7910/DVN/FZMD31)
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>

    </div>
  );
}
