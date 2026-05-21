import React, { useState, useEffect } from "react";
import { 
  ArrowUpRight, 
  BookOpen, 
  Building2, 
  CheckCheck, 
  CheckCircle,
  ChevronRight, 
  Cpu, 
  Database, 
  ExternalLink, 
  GraduationCap, 
  HelpCircle, 
  Info, 
  Lock, 
  Mail, 
  PhoneCall, 
  Scale, 
  Send, 
  ShieldCheck, 
  Sparkles, 
  Users, 
  Zap 
} from "lucide-react";
import ParticleBackground from "./components/ParticleBackground";
import InteractiveSandbox from "./components/InteractiveSandbox";
import OnboardedCustomersMap from "./components/OnboardedCustomersMap";
import ArchitectureDiagram from "./components/ArchitectureDiagram";
import PersonaIntelligence from "./components/PersonaIntelligence";
import ResearchProvenPlatform from "./components/ResearchProvenPlatform";
import { pricingTiers } from "./data";
import { motion } from "motion/react";

export default function App() {
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#FCFAF8] text-slate-900 font-sans min-h-screen relative overflow-x-hidden selection:bg-orange-100 selection:text-orange-900" id="applet-viewport">
      
      {/* Sleek Interface Theme: Indian-inspired Geometric Mesh background pattern */}
      <div className="absolute inset-x-0 top-0 bottom-0 opacity-[0.035] pointer-events-none z-0" id="sleek-mesh-pattern">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="pattern-hex" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M20 0L37.32 10V30L20 40L2.68 30V10L20 0Z" fill="none" stroke="#FF6B00" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pattern-hex)" />
        </svg>
      </div>

      {/* Top scroll-progress barometer indicator */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-rose-500 z-50 transition-all duration-100" 
        style={{ width: `${scrollProgress}%` }}
        id="scroll-barometer"
      />

      {/* Floating Dynamic Navbar */}
      <header 
        className="sticky top-0 z-40 bg-[#FCFAF8]/85 backdrop-blur-md border-b border-orange-100/50 py-3.5 px-4 md:px-8 transition-all"
        id="header-navigation-bar"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo Brand Block */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-xl bg-orange-500 text-white font-extrabold flex items-center justify-center text-base shadow-md shadow-orange-500/10">Y</span>
              <div>
                <span className="font-extrabold text-lg tracking-tight text-slate-900">YData</span>
                <span className="hidden sm:inline-block text-slate-300 mx-2 text-[10px] select-none">|</span>
                <span className="hidden sm:inline-block text-[9px] uppercase font-bold tracking-widest text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-md">
                  The Agentic Data Platform
                </span>
              </div>
            </div>
          </div>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-semibold text-slate-600">
            <button onClick={() => scrollToSection("interactive-sandbox")} className="hover:text-orange-500 transition cursor-pointer">Live Playground</button>
            <button onClick={() => scrollToSection("customers-section")} className="hover:text-orange-500 transition cursor-pointer">Onboarded Customers</button>
            <button onClick={() => scrollToSection("architecture-section")} className="hover:text-orange-500 transition cursor-pointer">Sovereign Architecture</button>
            <button onClick={() => scrollToSection("persona-section")} className="hover:text-orange-500 transition cursor-pointer">Agent minds</button>
            <button onClick={() => scrollToSection("research-section")} className="hover:text-orange-500 transition cursor-pointer">Research Origin</button>
            <button onClick={() => scrollToSection("pricing-section")} className="hover:text-orange-500 transition cursor-pointer">Investment Tiers</button>
          </nav>

          {/* Quick Action CTAs */}
          <div className="flex items-center gap-3">
            <a
              href="/brief.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-slate-700 hover:text-orange-600 transition flex items-center gap-1 border border-slate-200 hover:border-orange-200 bg-white px-3.5 py-2 rounded-xl shadow-xs"
            >
              <BookOpen className="w-4 h-4 text-orange-500" /> <span>Solution Brief</span>
            </a>
            <a
              href="mailto:contact@ydata.in?subject=Request YData Access"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs px-4 py-2 rounded-xl transition shadow-lg shadow-orange-500/10 flex items-center gap-1"
            >
              Request Access
            </a>
          </div>

        </div>
      </header>

      {/* Hero Section embedded with ParticleBackground */}
      <section 
        className="relative py-16 md:py-24 px-4 md:px-8 border-b border-orange-100 bg-gradient-to-b from-[#FAF9F6] via-orange-50/10 to-[#FAF9F6]"
        id="hero-banner-main"
      >
        
        {/* Absolute interactive particles behind text */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
          <ParticleBackground />
          {/* Subtle grid background to look like a high-tech technical wireframe */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#E2E8F0_1px,transparent_1px),linear-gradient(to_bottom,#E2E8F0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-6">
          
          {/* IIT Madras Tag */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-white border border-orange-100 shadow-sm">
            <GraduationCap className="w-4 h-4 text-orange-500" />
            <span className="text-[10px] md:text-xs font-bold text-slate-800">Developed at <strong>IIT Madras</strong></span>
            <span className="text-slate-200">|</span>
            <span className="text-[10px] md:text-xs font-bold text-slate-800">Researched in <strong>Harvard Dataverse</strong></span>
            
            {/* Indian flag colors decoration */}
            <span className="inline-flex items-center gap-1 py-0.5 px-2 bg-emerald-50 text-emerald-800 rounded-md border border-emerald-100 text-[9px] font-extrabold ml-1 uppercase">
              <span className="w-2 h-1.5 bg-gradient-to-r from-orange-400 via-white to-emerald-500 rounded-xs"></span>
              Made in INDIA
            </span>
          </div>

          {/* Huge displays heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] max-w-4xl mx-auto">
            Autonomous &amp; Domain-Specific <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-rose-600 bg-clip-text text-transparent">Agentic AI Data Workforce</span> for Indian Enterprises
          </h1>

          {/* Detailed subtitle description */}
          <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Eliminate operational bottleneck bottlenecks. Under the guidelines of the 
            <strong> Digital Personal Data Protection (DPDP) Act, 2023</strong>, 
            YData brings the AI "brain" right to the local browser tab. Local OCR, SQL indexing (DuckDB-Wasm) &amp; mathematical forensics with zero outbound data replication to third-party endpoints.
          </p>

          {/* Quick metrics ticker badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto pt-4">
            {[
              { val: "100%", label: "Data Sovereignty", sub: "DPDP Act Compliant" },
              { val: "5x", label: "Auditing Velocity", sub: "Forensic Sweep" },
              { val: "10x", label: "Business Intel Speed", sub: "KrataBooks Report" },
              { val: "Zero", label: "Compute server cost", sub: "Runs in In-browser tab" }
            ].map((stat, i) => (
              <div key={i} className="bg-white/80 backdrop-blur-xs border border-orange-100 rounded-2xl p-3 shadow-xs">
                <p className="text-xl md:text-2xl font-black text-orange-600 tracking-tight font-mono">{stat.val}</p>
                <p className="text-xs font-bold text-slate-800 mt-1">{stat.label}</p>
                <p className="text-[9px] text-slate-400 mt-0.5">{stat.sub}</p>
              </div>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-6">
            <button
              onClick={() => scrollToSection("interactive-sandbox")}
              className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-sm px-7 py-3 rounded-2xl shadow-xl shadow-orange-500/20 hover:scale-102 transition duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Zap className="w-4 h-4 fill-white text-orange-200" /> Start Interactive Sandbox
            </button>
            <a
              href="/brief.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-800 font-extrabold text-sm px-6 py-3 rounded-2xl border border-slate-200 shadow-sm hover:border-orange-300 transition duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-orange-500" /> Read Solution Brief
            </a>
          </div>

          <div className="text-[11px] text-slate-400 pt-3 flex items-center justify-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Safe sandboxed playpen evaluated against Reserve Bank of India &amp; OGD data platforms.
          </div>

        </div>
      </section>

      {/* Core Interactive Sandbox Section (Wasm Playpen) */}
      <section className="py-12 md:py-16 px-4 md:px-8 max-w-7xl mx-auto space-y-12 bg-white/50 rounded-3xl my-6 border border-slate-100 shadow-xs">
        
        <div id="interactive-playground">
          <InteractiveSandbox />
        </div>

      </section>

      {/* Onboarded Customers Indian Heatmap Section */}
      <section className="py-12 md:py-16 px-4 md:px-8 max-w-7xl mx-auto" id="customers-section">
        <OnboardedCustomersMap />
      </section>

      {/* Architectural Diagram Section */}
      <section className="py-12 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <ArchitectureDiagram />
      </section>

      {/* Agent Minds Persona Section */}
      <section className="py-12 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <PersonaIntelligence />
      </section>

      {/* India Regional Impact Map / Case Studies Section */}
      <section className="py-12 md:py-16 px-4 md:px-8 max-w-7xl mx-auto bg-slate-900 text-white rounded-3xl relative overflow-hidden" id="india-focus-section">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#F97316,transparent_30%)] opacity-30 pointer-events-none" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-bold text-orange-400 tracking-wider bg-slate-800/80 px-3 py-1 rounded-full border border-slate-700 uppercase">
              BHARAT RE-IMAGINED
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight">
              A Sovereign AI Workforce Engineered explicitly for Indian Business Realities
            </h3>
            <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
              Standard SaaS models evaluate data with Western, generic tax/logistics templates. YData has been pre-trained on domestic transactional contexts, allowing precise double-entry matching for local workflows:
            </p>

            <div className="space-y-3.5 py-2">
              {[
                { title: "GST Slab Reconciliation", d: "Instantly audits 5%, 12%, 18%, and 28% Input Tax Credits (ITC) variance." },
                { title: "Sovereign In-Browser Security", d: "Eliminates legal penalties under Section 33 of the Indian Personal Data Act (DPDP Act, 2023)." },
                { title: "Tier-2/3 Retail Profiling", d: "Interprets pincodes, festive business season spikes (Diwali/pre-monsoon), and last-mile transport data across domestic national highways." }
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <span className="w-5 h-5 rounded-full bg-orange-500/20 text-orange-400 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">✓</span>
                  <div>
                    <h5 className="font-bold text-xs text-white">{item.title}</h5>
                    <p className="text-[11px] text-slate-400 mt-0.5">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 bg-slate-800/55 rounded-2xl p-5 md:p-6 border border-slate-700/60 shadow-lg space-y-4">
            <h4 className="font-bold text-sm text-orange-400 uppercase tracking-widest flex items-center gap-1.5">
              <Building2 className="w-4 h-4" /> Domestic Regional Deployments Verified
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              
              <div className="bg-slate-900 border border-slate-700 p-4.5 rounded-xl space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-white text-xs">Andhra APMC Hubs</span>
                  <span className="text-[9px] bg-emerald-500/20 text-emerald-400 font-bold px-2 py-0.5 rounded uppercase">Optimized</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-normal">
                  Kurnool chili APMC records successfully audited. Spotting 4.1x outflow storage capacity anomalies on extreme damp-season days.
                </p>
              </div>

              <div className="bg-slate-900 border border-slate-700 p-4.5 rounded-xl space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-white text-xs">State Retail Gini Auditing</span>
                  <span className="text-[9px] bg-emerald-500/20 text-emerald-400 font-bold px-2 py-0.5 rounded uppercase">Active</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-normal">
                  Automated Gini Coefficient calculations identify 80/20 concentration segments inside leading retail stores across Pune and Chennai.
                </p>
              </div>

            </div>

            <div className="bg-slate-950 p-4 rounded-xl text-center space-y-2">
              <p className="text-xs text-slate-300">
                Are you an enterprise operating in regulated sectors such as Banking, Microfinance, Agriculture, or Public Logistics?
              </p>
              <a
                href="/brief.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs px-4 py-2 rounded-lg transition inline-block text-center"
              >
                Review Verified Compliance Document
              </a>
            </div>

          </div>

        </div>

      </section>

      {/* India's First Research Proven Agentic Data Platform Section */}
      <section className="py-12 md:py-16 px-4 md:px-8 max-w-7xl mx-auto" id="research-section">
        <ResearchProvenPlatform />
      </section>

      {/* Licensing (Pricing) Tiers Section */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto" id="pricing-section">
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs font-bold text-orange-600 bg-orange-100 px-3 py-1 rounded-full border border-orange-200 uppercase tracking-widest">
            Investment Structure
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
            Licensing &amp; Deployment Investment Tiers
          </h2>
          <p className="text-slate-600 text-xs md:text-sm mt-2">
            Join a limited cohort of enterprises deploying IIT developed agentic intelligence to automate data analytics, compliance forensics, and strategic reporting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {pricingTiers.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-3xl border p-6 flex flex-col justify-between transition-all duration-300 relative ${
                tier.popular
                  ? "bg-white border-orange-500 shadow-2xl scale-102 lg:translate-y-[-4px] ring-2 ring-orange-500/10"
                  : "bg-white/80 border-slate-200/75 hover:bg-white hover:border-orange-200 shadow-lg"
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-rose-600 text-white font-black text-[10px] px-3.5 py-1 rounded-full uppercase tracking-wider shadow-md">
                  Most Popular business standard
                </span>
              )}

              <div className="space-y-4">
                <div>
                  <h4 className="font-extrabold text-sm text-slate-500 uppercase tracking-wider">{tier.name}</h4>
                  <p className="text-xs text-slate-400 font-medium mt-0.5">{tier.subtitle}</p>
                </div>

                <div className="py-2">
                  <p className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">{tier.investment}</p>
                  <p className="text-[11px] text-orange-600 font-bold mt-1 uppercase font-mono">{tier.discount}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{tier.capacity}</p>
                </div>

                <ul className="space-y-2 pt-2 border-t border-slate-100">
                  {tier.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 leading-normal">
                      <CheckCheck className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => window.location.href = `mailto:contact@ydata.in?subject=Request YData Deployment - ${encodeURIComponent(tier.name)} License`}
                  className={`w-full font-bold text-xs py-3 rounded-xl transition ${
                    tier.popular
                      ? "bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/10"
                      : "bg-slate-900 hover:bg-slate-800 text-white"
                  }`}
                >
                  Deploy {tier.name} mind
                </button>
              </div>

            </div>
          ))}
        </div>

      </section>

      {/* Structured Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-4 md:px-8 text-xs border-t border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-8">
          
          <div className="md:col-span-4 space-y-3.5">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 bg-orange-500 text-white font-extrabold flex items-center justify-center rounded-lg shadow-sm">Y</span>
              <span className="text-white font-extrabold text-base tracking-tight">YData India Inc</span>
            </div>
            <p className="leading-relaxed text-[11px]">
              YData is an indigenous, local-first agentic platform architected specifically for the Indian enterprise landscape. Co-developed at IIT Madras and built upon a proprietary mathematical framework archived at Harvard Dataverse, YData bridges the gap between world-class cloud safety and high-fidelity enterprise execution.
            </p>
            <div className="flex items-center gap-2 text-[10px] text-slate-300">
              <GraduationCap className="w-4 h-4 text-orange-400" />
              <span>Developed by Data Scientists and Researchers from IIT Madras</span>
            </div>
          </div>

          <div className="md:col-span-4 space-y-3">
            <h5 className="font-bold text-white text-xs uppercase tracking-widest text-[#F97316]">Academic references</h5>
            <div className="space-y-3 text-[11px]">
              <div className="space-y-1">
                <a href="https://doi.org/10.7910/DVN/FZMD31" target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:text-white flex items-center gap-1 transition font-semibold">
                  1. Zero Data Exposure Framework <ExternalLink className="w-3 h-3 text-orange-500 shrink-0" />
                </a>
                <span className="block text-slate-500 text-[10px]">Harvard Dataverse • Oct 28, 2025 • DOI: 10.7910/DVN/FZMD31</span>
              </div>
              <div className="space-y-1 border-t border-slate-800/60 pt-2">
                <a href="https://doi.org/10.7910/DVN/VH9JJA" target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:text-white flex items-center gap-1 transition font-semibold">
                  2. The Laws of Anomaly <ExternalLink className="w-3 h-3 text-orange-500 shrink-0" />
                </a>
                <span className="block text-slate-500 text-[10px]">Harvard Dataverse • Aug 28, 2025 • DOI: 10.7910/DVN/VH9JJA</span>
              </div>
              <div className="space-y-1 border-t border-slate-800/60 pt-2">
                <a href="https://doi.org/10.7910/DVN/TJ7WRT" target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:text-white flex items-center gap-1 transition font-semibold">
                  3. SMART-IMPUTE Algorithm <ExternalLink className="w-3 h-3 text-orange-500 shrink-0" />
                </a>
                <span className="block text-slate-500 text-[10px]">Harvard Dataverse • Oct 23, 2025 • DOI: 10.7910/DVN/TJ7WRT</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 space-y-3">
            <h5 className="font-bold text-white text-xs uppercase tracking-widest text-[#F97316]">Compliance &amp; Licensing</h5>
            <ul className="space-y-2 text-[11px]">
              <li>
                <span>Digital Personal Data Protection Act of India, 2023</span>
              </li>
              <li>
                <span>Standard SLA: 99.99% Node Execution Invariance</span>
              </li>
              <li>
                <span>Contact Email: <a href="mailto:contact@ydata.in" className="text-slate-200 underline hover:text-orange-400">contact@ydata.in</a></span>
              </li>
            </ul>
          </div>

        </div>

        <div className="max-w-7xl mx-auto pt-6 border-t border-slate-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-500">
          <p>© 2026 YData Sovereign platform. Implementation framework developed under original research ID. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="/brief.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white cursor-pointer select-none">Review Solution Brief PDF</a>
            <span className="select-none">|</span>
            <span className="text-emerald-500 font-bold flex items-center gap-1"><Lock className="w-3 h-3" /> Fully sovereign browser layer</span>
          </div>
        </div>
      </footer>

      {/* Main Solution Brief Document Reference */}

    </div>
  );
}
