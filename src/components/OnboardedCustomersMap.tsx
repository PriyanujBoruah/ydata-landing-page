import React from "react";
import { Users, ShoppingBag, Truck, Store, Network } from "lucide-react";

export default function OnboardedCustomersMap() {
  // Static regional hubs with coordinates mapping
  const regionalHubs = [
    { name: "Bengaluru Hub", lat: 380, lng: 165, count: 42 },
    { name: "Mumbai & Pune", lat: 290, lng: 120, count: 35 },
    { name: "Delhi & NCR", lat: 160, lng: 170, count: 28 },
    { name: "Chennai & TN", lat: 400, lng: 195, count: 16 },
    { name: "Hyderabad Hub", lat: 325, lng: 180, count: 12 },
    { name: "Kolkata & East", lat: 255, lng: 295, count: 8 }
  ];

  // Concise industry sector breakdown
  const sectors = [
    {
      title: "D2C Brands & E-Commerce",
      count: "50+ Brands",
      desc: "Instant local ledger processing and retention funnel visualizations executed completely within the local browser sandbox.",
      icon: ShoppingBag,
      color: "border-orange-150 bg-orange-50/50 text-orange-600"
    },
    {
      title: "3PL & Regional Fleets",
      count: "35+ Partners",
      desc: "End-of-day trip logistics audits and high-precision decimal margin calculations filtered at the edge pre-transmission.",
      icon: Truck,
      color: "border-indigo-150 bg-indigo-50/50 text-indigo-600"
    },
    {
      title: "FMCG Distributors & Consumer Goods",
      count: "30+ Networks",
      desc: "Multi-party GST invoice matching and regional wholesale demand sensing executed seamlessly with zero server roundtrips.",
      icon: Store,
      color: "border-amber-150 bg-amber-50/50 text-amber-600"
    },
    {
      title: "Multi-City & Quick-Commerce Hubs",
      count: "20+ Hubs",
      desc: "Dynamic stock distribution optimizations and real-time localized delivery speed visualizers running on memory-isolated states.",
      icon: Network,
      color: "border-rose-150 bg-rose-50/50 text-rose-600"
    }
  ];

  return (
    <div className="bg-white/80 backdrop-blur-md rounded-3xl border border-orange-100 p-6 md:p-8 shadow-xl" id="customers-heatmap-section">
      
      {/* Upper content description banner */}
      <div className="max-w-3xl mb-8">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-orange-50 text-orange-600 border border-orange-100 mb-2">
          <Users className="w-3.5 h-3.5" /> Already Onboard Customers
        </span>
        <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
          Empowering 130+ Leading Indian Brands and Fleet Operators
        </h3>
        <p className="text-slate-600 text-xs md:text-sm mt-1">
          YData is deployed directly inside local browser environments across major commercial corridors, processing critical business metrics with total privacy and zero cloud overhead.
        </p>
      </div>

      {/* Two Column Grid layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Column: Clear Grid of Customer Industry Segments */}
        <div className="lg:col-span-7 grid grid-cols- sm:grid-cols-2 gap-4">
          {sectors.map((sec, i) => {
            const IconComp = sec.icon;
            return (
              <div 
                key={i}
                className="bg-white border border-slate-100 p-5 rounded-2xl shadow-xs space-y-3 hover:border-orange-200 transition-all duration-200"
              >
                <div className="flex items-center justify-between">
                  <div className={`p-2 rounded-xl border ${sec.color}`}>
                    <IconComp className="w-4 h-4" />
                  </div>
                  <span className="font-mono font-extrabold text-xs text-slate-900 bg-slate-50 px-2.5 py-1 rounded-full border border-slate-100">
                    {sec.count}
                  </span>
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-sm tracking-tight">{sec.title}</h4>
                  <p className="text-[11px] text-slate-500 mt-1.5 leading-relaxed">{sec.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Premium Sand-Beige Light Heatmap Visualization of India Map */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="bg-[#FAF8F5] border border-orange-100/80 rounded-3xl p-6 w-full relative overflow-hidden flex flex-col items-center justify-center min-h-[380px] shadow-sm">
            
            {/* Grid overlay for light design */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,107,0,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,107,0,0.015)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]" />

            {/* Soft Ambient Heat Rings in Grid Background */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-orange-400/5 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-indigo-400/5 rounded-full blur-2xl pointer-events-none" />

            <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 bg-white/95 border border-orange-100/60 shadow-xs px-2.5 py-1 rounded-md">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[9px] font-bold text-slate-700 uppercase tracking-wider block">
                130+ Enterprise Nodes Active
              </span>
            </div>

            {/* Heatmap Representation Map of India */}
            <svg 
              className="w-full max-w-[260px] h-[320px] relative z-10" 
              viewBox="0 0 400 500"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* India Landmass Path Outline in elegant Sand-Beige Light Tone */}
              <path
                d="M170,40 L195,45 L200,60 L180,90 L160,110 L155,130 L165,145 L155,155 L140,165 L115,185 L95,190 L90,210 L105,225 L120,230 L105,245 L80,245 L70,255 L80,265 L100,270 L115,290 L110,310 L125,325 L145,355 L150,380 L165,420 L180,450 L192,430 L198,390 L212,350 L205,330 L220,310 L235,290 L245,285 L260,285 L280,275 L300,260 L320,240 L310,210 L285,190 L250,175 L220,158 L240,125 L215,115 L195,110 L215,80 L205,70 L198,82 L185,65 L180,52 Z"
                fill="#F2EFEA"
                stroke="#E2DCD5"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />

              {/* Interstate route Representation Corridor line */}
              <path
                d="M170,80 L165,150 L140,195 L120,250 L145,325 L165,370 L180,430"
                fill="none"
                stroke="#FF6B00"
                strokeOpacity="0.2"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />

              {/* Regional clustering indicators */}
              {regionalHubs.map((cluster, idx) => {
                const baseRadius = 8 + (cluster.count / 8);
                const colors = ["#F97316", "#6366F1", "#F59E0B", "#F43F5E", "#E11D48", "#10B981"];
                const color = colors[idx % colors.length];

                return (
                  <g key={cluster.name}>
                    {/* Concentric glowing static radius fields */}
                    <circle
                      cx={cluster.lng}
                      cy={cluster.lat}
                      r={baseRadius * 1.8}
                      fill={color}
                      fillOpacity="0.1"
                      className="animate-pulse"
                    />
                    <circle
                      cx={cluster.lng}
                      cy={cluster.lat}
                      r={baseRadius * 1.1}
                      fill={color}
                      fillOpacity="0.18"
                    />

                    {/* Small crisp node center marker */}
                    <circle
                      cx={cluster.lng}
                      cy={cluster.lat}
                      r="4"
                      fill={color}
                      stroke="#FFFFFF"
                      strokeWidth="1"
                    />

                    {/* Text labels indicating hubs in high contrast dark slate */}
                    <text
                      x={cluster.lng}
                      y={cluster.lat - baseRadius - 6}
                      textAnchor="middle"
                      fill="#475569"
                      className="font-sans text-[9px] font-extrabold tracking-tight select-none pointer-events-none"
                    >
                      {cluster.name.split(" ")[0]} ({cluster.count})
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* Simplified Legend */}
            <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-center text-[9px] bg-white/95 border border-orange-100/60 shadow-xs py-1.5 rounded-lg text-slate-600">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                <span>Active geographic distribution with total client density</span>
              </span>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}
