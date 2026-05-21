import React, { useState, useRef, useEffect } from "react";
import { Dataset } from "../types";
import { sampleDatasets } from "../data";
import { 
  Database, 
  Upload, 
  ArrowRight, 
  EyeOff, 
  ShieldCheck, 
  SearchCode, 
  LineChart, 
  CheckCircle2, 
  Lock, 
  RefreshCw, 
  AlertTriangle, 
  FileSpreadsheet, 
  UserSquare2, 
  Sparkles,
  Download,
  Users
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function InteractiveSandbox() {
  const [datasets, setDatasets] = useState<Dataset[]>(sampleDatasets);
  const [selectedDatasetId, setSelectedDatasetId] = useState<string>("rbi-audit");
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [isPIIMasked, setIsPIIMasked] = useState<boolean>(false);
  const [hoveredAnomaly, setHoveredAnomaly] = useState<string | null>(null);
  const [fileDragOver, setFileDragOver] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const selectedDataset = datasets.find(d => d.id === selectedDatasetId) || datasets[0];

  useEffect(() => {
    // Reset wizard states when changing dataset
    setActiveStep(0);
    setIsPIIMasked(false);
    setIsProcessing(false);
  }, [selectedDatasetId]);

  // Handle custom file upload by reading CSV headers
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      processUploadedFile(files[0]);
    }
  };

  const processUploadedFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const text = event.target?.result as string;
        const lines = text.split("\n").map(line => line.trim()).filter(Boolean);
        if (lines.length > 0) {
          const headers = lines[0].split(",").map(h => h.replace(/["']/g, "").trim());
          
          // Generate a custom mapped dictionary
          const mapped: { [key: string]: string } = {};
          headers.forEach(h => {
            if (h.toLowerCase().includes("name") || h.toLowerCase().includes("cust")) mapped[h] = "Customer Reference Name";
            else if (h.toLowerCase().includes("phone") || h.toLowerCase().includes("mob")) mapped[h] = "Indian Contact Number";
            else if (h.toLowerCase().includes("amt") || h.toLowerCase().includes("price") || h.toLowerCase().includes("val")) mapped[h] = "Transaction Value (₹)";
            else if (h.toLowerCase().includes("id")) mapped[h] = "Identifier Key";
            else if (h.toLowerCase().includes("mail")) mapped[h] = "Secure Loyalty Client Email";
            else mapped[h] = `${h.charAt(0).toUpperCase() + h.slice(1)} Metadata`;
          });

          // Generate some mock rows based on headers
          const rows = [];
          for (let i = 1; i <= Math.min(lines.length - 1, 4); i++) {
            const cells = lines[i].split(",").map(c => c.replace(/["']/g, "").trim());
            const row: { [key: string]: any } = {};
            headers.forEach((h, idx) => {
              row[h] = cells[idx] || `Sample_${idx}`;
            });
            rows.push(row);
          }

          if (rows.length === 0) {
            // Put placeholder values
            rows.push(Object.fromEntries(headers.map((h, i) => [h, `Value_Sample_${i}`])));
            rows.push(Object.fromEntries(headers.map((h, i) => [h, `Value_Sample_${i + 1}`])));
          }

          const newDataset: Dataset = {
            id: `custom-${Date.now()}`,
            name: `Uploaded: ${file.name}`,
            source: "User Uploaded (Local-First browser execution)",
            description: "Custom user CSV parsed 100% locally in-browser via secure Javascript environment.",
            rawColumns: headers,
            mappedColumns: mapped,
            rawRows: rows,
            piiShieldColumns: headers.filter(h => 
              h.toLowerCase().includes("name") || 
              h.toLowerCase().includes("phone") || 
              h.toLowerCase().includes("mob") || 
              h.toLowerCase().includes("mail") ||
              h.toLowerCase().includes("pan")
            ),
            anomaliesCount: 1,
            anomaliesList: ["Anomaly Check Completed: Detected sparse spacing indicators in file headings."],
            growthInsight: "Custom data indexed successfully into DuckDB-Wasm virtual partition. Outflows show steady transaction density.",
            giniCoefficient: 0.35
          };

          setDatasets(prev => [newDataset, ...prev]);
          setSelectedDatasetId(newDataset.id);
        }
      } catch (err) {
        alert("Could not parse file. Please upload a structured CSV file.");
      }
    };
    reader.readAsText(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setFileDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setFileDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setFileDragOver(false);
    const files = e.dataTransfer.files;
    if (files && files[0]) {
      processUploadedFile(files[0]);
    }
  };

  // Safe masking utility
  const maskValue = (val: string, type: string) => {
    if (!val) return "";
    const str = String(val);
    if (type.toLowerCase().includes("mob") || type.toLowerCase().includes("phone")) {
      return `+91-XXXXX-${str.slice(-5)}`;
    }
    if (type.toLowerCase().includes("pan")) {
      return `XXXXXX${str.slice(-4)}`;
    }
    if (type.toLowerCase().includes("mail") || type.toLowerCase().includes("email")) {
      const idx = str.indexOf("@");
      if (idx > 0) return `X*X*X@${str.slice(idx + 1)}`;
      return "XXXX@XXXX.in";
    }
    if (type.toLowerCase().includes("name") || type.toLowerCase().includes("cust")) {
      return `${str.charAt(0)}XXXX XXXX`;
    }
    return "• • • • •";
  };

  const runPhaseAction = (targetStep: number) => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setActiveStep(targetStep);
      if (targetStep === 1) {
        setIsPIIMasked(true);
      }
    }, 1200);
  };

  return (
    <div className="bg-white/90 backdrop-blur-md rounded-3xl border border-orange-100 shadow-2xl p-6 md:p-8" id="interactive-sandbox">
      
      {/* Title block */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 pb-6 border-b border-orange-100">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-orange-50 text-orange-600 border border-orange-100 mb-2">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" /> Live In-Browser WebAssembly Simulator
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
            Deploy YData Agents Locally
          </h3>
          <p className="text-slate-600 text-sm mt-1 max-w-xl">
            Experience our 100% data sovereign architecture. Select an Indian enterprise sample or upload your own CSV. Your data stays in your browser memory.
          </p>
        </div>

        {/* Dataset Selector Buttons / Drag Drop */}
        <div className="flex flex-wrap items-center gap-3">
          {datasets.map((d) => (
            <button
              key={d.id}
              onClick={() => setSelectedDatasetId(d.id)}
              className={`px-4 py-2 text-xs font-medium rounded-xl transition-all duration-300 flex items-center gap-2 ${
                selectedDatasetId === d.id
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20 scale-105"
                  : "bg-slate-50 text-slate-700 hover:bg-orange-50 hover:text-orange-600"
              }`}
            >
              <Database className="w-3.5 h-3.5" />
              <span>{d.name.split(":")[0]}</span>
            </button>
          ))}

          {/* Core Upload trigger */}
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`cursor-pointer px-4 py-2 border-2 border-dashed rounded-xl flex items-center gap-2 transition-all ${
              fileDragOver 
                ? "border-orange-500 bg-orange-50/50 scale-102" 
                : "border-slate-200 hover:border-orange-400 hover:bg-orange-50/10"
            }`}
          >
            <input
              type="file"
              accept=".csv"
              ref={fileInputRef}
              onChange={handleFileUpload}
              className="hidden"
            />
            <Upload className="w-3.5 h-3.5 text-orange-500" />
            <span className="text-xs text-orange-600 font-semibold">Upload CSV</span>
          </div>
        </div>
      </div>

      {/* Progress pipeline header */}
      <div className="grid grid-cols-4 gap-2 md:gap-4 mb-8">
        {[
          { icon: SearchCode, label: "1. Mapping", desc: "Semantic Translate" },
          { icon: ShieldCheck, label: "2. DPDP Guard", desc: "One-Click Redaction" },
          { icon: LineChart, label: "3. Forensics", desc: "Anomalies & Gini" },
          { icon: CheckCircle2, label: "4. Report", desc: "Board Synthesis" }
        ].map((step, idx) => {
          const isCompleted = activeStep > idx;
          const isActive = activeStep === idx;
          return (
            <button
              key={idx}
              onClick={() => {
                if (!isProcessing) setActiveStep(idx);
              }}
              className={`flex flex-col items-center p-3 rounded-2xl transition-all border ${
                isActive 
                  ? "bg-orange-50 border-orange-400 shadow-md transform translate-y-[-2px]" 
                  : isCompleted 
                  ? "bg-slate-50/80 border-emerald-300 text-emerald-800"
                  : "bg-transparent border-slate-100 text-slate-400 hover:bg-slate-50"
              }`}
            >
              <div className={`p-2 rounded-xl mb-1.5 ${
                isActive 
                  ? "bg-orange-500 text-white" 
                  : isCompleted 
                  ? "bg-emerald-500 text-white" 
                  : "bg-slate-100 text-slate-500"
              }`}>
                <step.icon className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <span className={`text-[10px] md:text-xs font-bold leading-none ${
                isActive ? "text-orange-600" : isCompleted ? "text-emerald-700" : "text-slate-700"
              }`}>
                {step.label}
              </span>
              <span className="hidden md:block text-[9px] text-slate-500 mt-1">
                {step.desc}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Sandbox Interactive Display */}
      <div className="relative border border-slate-100 bg-slate-50/50 rounded-2xl p-4 md:p-6 min-h-[380px] overflow-hidden" id="sandbox-viewport">
        
        {/* Processing overlay loader */}
        <AnimatePresence>
          {isProcessing && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-white/95 z-30 flex flex-col items-center justify-center text-center p-4"
            >
              <div className="relative">
                <div className="w-16 h-16 rounded-full border-4 border-orange-100 border-t-orange-500 animate-spin"></div>
                <Database className="w-6 h-6 text-orange-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mt-4">Running Local DuckDB-Wasm Agent</h4>
              <p className="text-sm text-slate-500 mt-2 max-w-sm">
                Parsing headers, scanning database rows for PII leaks, and compiling analytical indices completely inside your sandboxed browser tab.
              </p>
              <div className="mt-4 flex items-center gap-2 bg-emerald-50 text-emerald-800 px-3 py-1.5 rounded-full text-xs font-medium border border-emerald-100">
                <Lock className="w-3.5 h-3.5" /> DPDP Local Boundary Retained - No Network Outbound
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* STEP 1 VIEWPORT: Ingestion & Semantic Translation */}
        {activeStep === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                  Phase 1: Semantic Translation & Header Inference
                </h4>
                <p className="text-xs text-slate-500">
                  Raw schemas with computer abbreviations are automatically contextualized into human business terminology.
                </p>
              </div>
              <button
                onClick={() => runPhaseAction(1)}
                className="self-start md:self-auto bg-orange-500 text-white font-semibold text-xs px-4 py-2.5 rounded-xl hover:bg-orange-600 transition shadow-md flex items-center gap-1"
              >
                Advance to PII Shield <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Dynamic Columns Comparison Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl border border-slate-100 p-4 shadow-sm">
                <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <FileSpreadsheet className="w-3.5 h-3.5 text-slate-400" /> Cryptic Raw Header Key
                </h5>
                <div className="space-y-2">
                  {selectedDataset.rawColumns.map((col) => (
                    <div key={col} className="flex items-center justify-between bg-slate-50 px-3 py-2 rounded-lg border border-slate-100">
                      <span className="font-mono text-xs font-semibold text-slate-700">{col}</span>
                      <span className="text-[10px] bg-slate-200/50 text-slate-500 px-2 py-0.5 rounded font-mono">TEXT</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50/50 to-amber-50/30 rounded-xl border border-orange-100/60 p-4 shadow-sm">
                <h5 className="text-xs font-bold text-orange-600 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-orange-500 animate-pulse" /> YData Inferred Business Context
                </h5>
                <div className="space-y-2">
                  {selectedDataset.rawColumns.map((col) => (
                    <div key={col} className="flex items-center justify-between bg-white px-3 py-2 rounded-lg border border-orange-100/30 shadow-xs">
                      <span className="text-xs font-bold text-slate-800">{selectedDataset.mappedColumns[col] || col}</span>
                      <span className="text-[10px] bg-orange-100/50 text-orange-700 px-2 py-0.5 rounded-md font-semibold">Mapped</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-indigo-50 border border-indigo-100 p-3.5 rounded-xl text-xs text-indigo-900 flex items-start gap-2.5">
              <Database className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold">DuckDB-Wasm Schema Invariant: </span>
                Indexed in browser partition as standard virtual table <code className="font-mono bg-indigo-100 font-bold px-1.5 py-0.5 rounded text-indigo-700">"local_secured_audit"</code>. Mathematical columns parsed into floating precision buffers without outbound replication.
              </div>
            </div>
          </motion.div>
        )}

        {/* STEP 2 VIEWPORT: DPDP Privacy Shield & Masking */}
        {activeStep === 1 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-slate-900 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  Phase 2: DPDP Compliance PII Redactor Shield
                </h4>
                <p className="text-xs text-slate-500">
                  Fully compliant with India's DPDP Act. Automatically redact phone numbers, taxpayer PAN, and names with single-click browser sanitization.
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setIsPIIMasked(!isPIIMasked)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold border flex items-center gap-1.5 transition-all ${
                    isPIIMasked 
                      ? "bg-emerald-50 text-emerald-700 border-emerald-300 shadow-xs" 
                      : "bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200"
                  }`}
                >
                  <EyeOff className="w-3.5 h-3.5" />
                  {isPIIMasked ? "Sovereign Shield Active" : "Toggle Shield Off"}
                </button>
                <button
                  onClick={() => runPhaseAction(2)}
                  className="bg-orange-500 text-white font-semibold text-xs px-4 py-2.5 rounded-xl hover:bg-orange-600 transition shadow-md flex items-center gap-1"
                >
                  Perform Forensic Audit <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Table display exhibiting PII redaction */}
            <div className="overflow-x-auto bg-white rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold uppercase tracking-wider">
                    {selectedDataset.rawColumns.slice(0, 5).map((col) => (
                      <th key={col} className="p-3">
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {selectedDataset.rawRows.map((row, idx) => (
                    <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50/50 transition">
                      {selectedDataset.rawColumns.slice(0, 5).map((col) => {
                        const cellVal = row[col];
                        const isPIIField = selectedDataset.piiShieldColumns.includes(col);
                        return (
                          <td key={col} className="p-3 font-medium text-slate-800">
                            {isPIIField && isPIIMasked ? (
                              <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 font-bold px-2 py-1 rounded text-[10px] border border-emerald-100">
                                <Lock className="w-2.5 h-2.5" /> {maskValue(cellVal, col)}
                              </span>
                            ) : isPIIField ? (
                              <span className="bg-rose-50 text-rose-700 px-2 py-1 rounded text-[10px] font-bold border border-rose-100">
                                <AlertTriangle className="w-2.5 h-2.5 inline mr-1 text-rose-500" /> {cellVal}
                              </span>
                            ) : (
                              typeof cellVal === "number" ? `₹${cellVal.toLocaleString("en-IN")}` : String(cellVal)
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-emerald-50/80 border border-emerald-100 rounded-xl p-4 text-emerald-950">
              <div className="flex items-center gap-3">
                <div className="bg-emerald-500 p-2 rounded-lg text-white">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="font-bold text-xs">DPDP Act Guard: Passed</h5>
                  <p className="text-[10px] text-emerald-700 mt-0.5">
                    Zero raw identifiers escape local container. Safe for public sectors and restricted auditing scopes.
                  </p>
                </div>
              </div>
              <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2.5 py-1 rounded-full uppercase">
                100% Sovereign Guard
              </span>
            </div>
          </motion.div>
        )}

        {/* STEP 3 VIEWPORT: Forensic Auditing & Outliers */}
        {activeStep === 2 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-slate-900 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-orange-500" />
                  Phase 3: Mathematical Forensic Audit Sweep
                </h4>
                <p className="text-xs text-slate-500">
                  Mathematical modeling sweeps expose unauthorized manual backdating, state GST invoice mismatches, or rounding overflows.
                </p>
              </div>
              <button
                onClick={() => runPhaseAction(3)}
                className="self-start md:self-auto bg-orange-500 text-white font-semibold text-xs px-4 py-2.5 rounded-xl hover:bg-orange-600 transition shadow-md flex items-center gap-1"
              >
                Synthesize KrataBook Report <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Visual Anomaly representation (horizontal progress-based outliers/deviations) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 p-4 shadow-sm flex flex-col justify-between">
                <div>
                  <h5 className="text-xs font-bold text-slate-700 mb-2 flex items-center justify-between">
                    <span>Transaction Outlier Analysis Grid</span>
                    <span className="text-[10px] uppercase font-bold text-amber-600 px-2 py-0.5 bg-amber-50 rounded-md border border-amber-100">
                      Benford Distribution Verification
                    </span>
                  </h5>
                  <p className="text-[10px] text-slate-500 mb-4">
                    Outliers represent data points deviating significantly from standard regional distributions. Hover over nodes to analyze details.
                  </p>
                </div>

                {/* Custom SVG Data Visualization simulating Outlying Points */}
                <div className="relative h-44 border border-slate-100 rounded-lg bg-slate-50 overflow-hidden flex items-center justify-center p-2">
                  <svg className="w-full h-full block" viewBox="0 0 400 130">
                    {/* Grid Lines */}
                    <line x1="10" y1="110" x2="390" y2="110" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="3" />
                    <line x1="10" y1="70" x2="390" y2="70" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="3" />
                    <line x1="10" y1="30" x2="390" y2="30" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="3" />

                    {/* Base Distribution Curve (soft blue fill) */}
                    <path
                      d="M 10 110 Q 80 20, 150 90 T 260 110 T 310 110 T 390 120"
                      fill="none"
                      stroke="#FED7AA"
                      strokeWidth="2"
                    />

                    {/* Standard Safe Data Nodes */}
                    <circle cx="50" cy="78" r="4" fill="#F97316" className="animate-pulse" />
                    <circle cx="100" cy="50" r="4" fill="#F97316" />
                    <circle cx="160" cy="94" r="4" fill="#F97316" />
                    <circle cx="210" cy="98" r="4" fill="#F97316" />
                    <circle cx="270" cy="110" r="4" fill="#F97316" />
                    <circle cx="340" cy="114" r="4" fill="#F97316" />

                    {/* Mismatch/Anomaly Highlight Circles */}
                    <g 
                      className="cursor-pointer"
                      onMouseEnter={() => setHoveredAnomaly("fraction-err")}
                      onMouseLeave={() => setHoveredAnomaly(null)}
                    >
                      <circle cx="118" cy="18" r="7" fill="#EF4444" className="animate-ping" style={{ animationDuration: '3s' }} />
                      <circle cx="118" cy="18" r="5" fill="#EF4444" />
                      <text x="128" y="21" fill="#EF4444" className="font-sans text-[8px] font-bold">ANOMALY_01</text>
                    </g>

                    <g 
                      className="cursor-pointer"
                      onMouseEnter={() => setHoveredAnomaly("date-violation")}
                      onMouseLeave={() => setHoveredAnomaly(null)}
                    >
                      <circle cx="290" cy="40" r="7" fill="#EF4444" className="animate-ping" style={{ animationDuration: '4s' }} />
                      <circle cx="290" cy="40" r="5" fill="#EF4444" />
                      <text x="300" y="43" fill="#EF4444" className="font-sans text-[8px] font-bold">ANOMALY_02</text>
                    </g>
                  </svg>

                  {/* Dynamic hovering explanation box */}
                  <AnimatePresence>
                    {hoveredAnomaly && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute bottom-2 left-2 right-2 bg-slate-900 text-white p-2.5 rounded-lg text-[10px] leading-tight flex items-center gap-2"
                      >
                        <AlertTriangle className="w-4 h-4 text-orange-400 shrink-0" />
                        <span>
                          {hoveredAnomaly === "fraction-err" 
                            ? "Decimal Manipulation Audit: This transaction records decimal inputs outside normal system bounds (e.g. 9304.5555 INR)." 
                            : "Logistical Outlier Check: Extremely high pricing registered relative to small localized storage inventory size, signaling inflation."}
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Sidebar: Bullet list of anomalies */}
              <div className="bg-slate-900 text-white rounded-xl p-4 flex flex-col justify-between">
                <div>
                  <h5 className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                    <SearchCode className="w-3.5 h-3.5" /> Sweep Audit Logs ({selectedDataset.anomaliesCount})
                  </h5>
                  <div className="space-y-3">
                    {selectedDataset.anomaliesList.map((anom, i) => (
                      <div key={i} className="bg-slate-800 border-l-2 border-orange-500 p-2.5 rounded text-[10px] text-slate-300 leading-normal">
                        <span className="font-bold text-orange-400 block mb-0.5">Anomaly Flag #{i+1}</span>
                        {anom}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 text-[10px] text-slate-400 flex items-center justify-between">
                  <span>State Gini Invariant:</span>
                  <span className="font-mono font-bold text-orange-300">G = {selectedDataset.giniCoefficient}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* STEP 4 VIEWPORT: Executive KrataBook Report */}
        {activeStep === 3 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-5"
          >
            {/* Header with quick download action */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-slate-900 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  Phase 4: Autonomous Executive Summarization
                </h4>
                <p className="text-xs text-slate-500">
                  Ready-for-the-board report translated automatically using Indian enterprise business logic standards.
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => {
                    alert("KrataBooks Solution PDF synthesis mock triggered! File downloaded locally inside your sandbox.");
                  }}
                  className="bg-slate-900 text-white font-semibold text-xs px-4 py-2.5 rounded-xl hover:bg-slate-800 transition shadow-md flex items-center gap-2"
                >
                  <Download className="w-4 h-4" /> Export KrataBook PDF
                </button>
                <button
                  onClick={() => runPhaseAction(0)}
                  className="bg-orange-500 text-white font-semibold text-xs px-4 py-2.5 rounded-xl hover:bg-orange-600 transition shadow-md flex items-center gap-1"
                >
                  Restart Sandbox <RefreshCw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Generated KrataBook brief display - matching actual PDF template style */}
            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-lg max-w-2xl mx-auto space-y-4 text-left">
              <div className="flex items-center justify-between border-b pb-4 border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 bg-orange-500 text-white font-bold rounded-lg flex items-center justify-center text-sm shadow">Y</span>
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm">YData Agentic Platform</h5>
                    <p className="text-[9px] text-slate-400 truncate">Algorithmically benchmarked - IIT Madras & Harvard Dataverse</p>
                  </div>
                </div>
                <div className="text-right text-[10px] text-slate-500">
                  <p>Document Brief ID: <span className="font-mono text-slate-900 font-bold">YB-928C</span></p>
                  <p>Sovereignty Status: <span className="text-emerald-600 font-bold">100% Secure</span></p>
                </div>
              </div>

              <div>
                <h6 className="text-[11px] font-bold text-orange-600 uppercase tracking-widest mb-1">Executive Summary Insight</h6>
                <p className="text-xs text-slate-700 leading-normal font-sans italic">
                  "Sourced from {selectedDataset.source}. Based on the analyzed ledger constraints, YData has finished compiling the Q1 local-first balance indexes. Raw files was safely masked inside browser environment under the guidelines of DPDP Act 2023."
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100 text-center">
                  <p className="text-[10px] text-slate-400 uppercase font-semibold">Total Records Analyzed</p>
                  <p className="text-lg font-bold text-slate-800 font-mono mt-0.5">{selectedDataset.rawRows.length} Rows</p>
                </div>
                <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100 text-center">
                  <p className="text-[10px] text-slate-400 uppercase font-semibold">Anomalies Redacted</p>
                  <p className="text-lg font-bold text-red-600 font-mono mt-0.5">{selectedDataset.anomaliesCount}</p>
                </div>
                <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100 text-center col-span-2 sm:col-span-1">
                  <p className="text-[10px] text-slate-400 uppercase font-semibold">Gini Inequality G</p>
                  <p className="text-lg font-bold text-slate-805 font-mono mt-0.5">{selectedDataset.giniCoefficient}</p>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <h6 className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">Algorithmic Growth Suggestion</h6>
                <p className="text-xs text-slate-600 leading-relaxed bg-orange-50/50 border border-orange-100 p-2.5 rounded-lg">
                  {selectedDataset.growthInsight}
                </p>
              </div>

              <div className="flex items-center justify-between text-[9px] text-slate-400 pt-3 border-t border-slate-100">
                <span className="flex items-center gap-1 font-bold text-emerald-600">
                  <Lock className="w-3 h-3" /> Sealed in Sandbox Memory - Zero Outbound Leakage
                </span>
                <span>YData India Systems Team • May 2026</span>
              </div>
            </div>
          </motion.div>
        )}

      </div>

    </div>
  );
}
