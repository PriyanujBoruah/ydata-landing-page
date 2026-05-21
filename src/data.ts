import { Dataset, AgentPersona, PricingTier } from "./types";

export const sampleDatasets: Dataset[] = [
  {
    id: "rbi-audit",
    name: "RBI Banking Secrecy & Audit Sample",
    source: "Reserve Bank of India (RBI)",
    description: "Transactional ledger of microfinance collections with suspicious manual ledger manipulations and rounding errors.",
    rawColumns: ["TXN_ID", "CUST_NAME", "MOB_NO", "PAN_NUM", "AMT_INR", "GST_RATE", "POSTED_DATE", "SEC_KEY", "FLAG_VAL"],
    mappedColumns: {
      "TXN_ID": "Transaction ID",
      "CUST_NAME": "Customer Name",
      "MOB_NO": "Mobile Number",
      "PAN_NUM": "Indian Income Tax Identifier (PAN)",
      "AMT_INR": "Amount Transacted (₹)",
      "GST_RATE": "GST slab applied (%)",
      "POSTED_DATE": "Posting Date",
      "SEC_KEY": "Encryption Key Hash",
      "FLAG_VAL": "Audit Flag Indicator"
    },
    rawRows: [
      {
        "TXN_ID": "TXN-90212",
        "CUST_NAME": "Karan Malhotra",
        "MOB_NO": "+91-98123-45678",
        "PAN_NUM": "BPKPM7283K",
        "AMT_INR": 182390,
        "GST_RATE": 18,
        "POSTED_DATE": "2026-04-12",
        "SEC_KEY": "hash_8d7c2a",
        "FLAG_VAL": "0"
      },
      {
        "TXN_ID": "TXN-90213",
        "CUST_NAME": "Meera Swaminathan",
        "MOB_NO": "+91-90456-12349",
        "PAN_NUM": "AGPPM1827C",
        "AMT_INR": 540000,
        "GST_RATE": 18,
        "POSTED_DATE": "2026-04-12",
        "SEC_KEY": "hash_fb329c",
        "FLAG_VAL": "0"
      },
      {
        "TXN_ID": "TXN-90214",
        "CUST_NAME": "Deepak Sharma (MANUAL ADJUST)",
        "MOB_NO": "+91-88771-00122",
        "PAN_NUM": "CHQPS9201A",
        "AMT_INR": 9304.5555, // Rounding error anomaly!
        "GST_RATE": 5,
        "POSTED_DATE": "2026-04-13",
        "SEC_KEY": "NOT_ENCRYPTED", // Security anomaly!
        "FLAG_VAL": "3"
      },
      {
        "TXN_ID": "TXN-90215",
        "CUST_NAME": "Ananya Joshi",
        "MOB_NO": "+91-77609-88112",
        "PAN_NUM": "DFRPA0192L",
        "AMT_INR": 23500,
        "GST_RATE": 12,
        "POSTED_DATE": "2026-04-14",
        "SEC_KEY": "hash_ef9120",
        "FLAG_VAL": "0"
      },
      {
        "TXN_ID": "TXN-90216",
        "CUST_NAME": "Rohan Deshmukh (BACKDATED)",
        "MOB_NO": "+91-91234-99881",
        "PAN_NUM": "KLNPD0023R",
        "AMT_INR": 820000,
        "GST_RATE": 18,
        "POSTED_DATE": "2025-11-30", // Backdated anomaly!
        "SEC_KEY": "hash_30129a",
        "FLAG_VAL": "9"
      }
    ],
    piiShieldColumns: ["CUST_NAME", "MOB_NO", "PAN_NUM"],
    anomaliesCount: 3,
    anomaliesList: [
      "Precision Rounding Error: TXN-90214 has an amount with 4 decimal places (9304.5555 INR), indicating system override.",
      "Insecure Hash: TXN-90214 has field SEC_KEY initialized as 'NOT_ENCRYPTED'.",
      "Backdated Ledger Record: TXN-90216 has a posting date in 2025-11, violating ledger continuity for the current Q1 2026 audit parameters."
    ],
    growthInsight: "Over 82.3% of transaction volume originates from Tier-2 cities in Maharashtra, showing high reliance on mobile agents. Correcting the rounding precision issue can prevent potential reconciliation leaks of ₹12,83,210 annually.",
    giniCoefficient: 0.42
  },
  {
    id: "ogd-agriculture",
    name: "data.gov.in (OGD) Agriculture Price Outliers",
    source: "OGD Platform India",
    description: "Socio-economic dataset tracking state-wide cold storage distribution and APMC price variance with weather trends.",
    rawColumns: ["APMC_ID", "DIST_NAME", "STATE_VAL", "CROP_CAT", "MKT_PRICE_AVG", "GST_SLAB", "FARM_MOB", "ST_CAP_MT", "OUT_RATIO"],
    mappedColumns: {
      "APMC_ID": "APMC Market Yard Identifier",
      "DIST_NAME": "District Name",
      "STATE_VAL": "Indian State Name",
      "CROP_CAT": "Crop Category Name",
      "MKT_PRICE_AVG": "Avg Market Price per Quintal (INR)",
      "GST_SLAB": "GST Exemption Category",
      "FARM_MOB": "Registered Farmer Mobile No",
      "ST_CAP_MT": "Storage Capacity (Metric Tonnes)",
      "OUT_RATIO": "Outflow Ratio Index"
    },
    rawRows: [
      {
        "APMC_ID": "APMC-IND-01",
        "DIST_NAME": "Amravati",
        "STATE_VAL": "Maharashtra",
        "CROP_CAT": "Cotton (Medium)",
        "MKT_PRICE_AVG": 7250,
        "GST_SLAB": "0%",
        "FARM_MOB": "+91-99882-77112",
        "ST_CAP_MT": 12000,
        "OUT_RATIO": 0.35
      },
      {
        "APMC_ID": "APMC-IND-02",
        "DIST_NAME": "Kurnool",
        "STATE_VAL": "Andhra Pradesh",
        "CROP_CAT": "Chillies (Teja)",
        "MKT_PRICE_AVG": 18900,
        "GST_SLAB": "0%",
        "FARM_MOB": "+91-90432-88190",
        "ST_CAP_MT": 8500,
        "OUT_RATIO": 1.45 // High Outflow ratio outlier!
      },
      {
        "APMC_ID": "APMC-IND-03",
        "DIST_NAME": "Ganganagar",
        "STATE_VAL": "Rajasthan",
        "CROP_CAT": "Mustard Seed",
        "MKT_PRICE_AVG": 5450,
        "GST_SLAB": "0%",
        "FARM_MOB": "+91-88990-11223",
        "ST_CAP_MT": 15000,
        "OUT_RATIO": 0.22
      },
      {
        "APMC_ID": "APMC-IND-04",
        "DIST_NAME": "Bathinda (ANOMALY)",
        "STATE_VAL": "Punjab",
        "CROP_CAT": "Basmati Paddy",
        "MKT_PRICE_AVG": 38100, // Price Gouging Outlier (normal is around 4000-5000)
        "FARM_MOB": "+91-95551-01019",
        "ST_CAP_MT": 40, // Extreme low capacity storage with extremely high price!
        "OUT_RATIO": 4.12
      }
    ],
    piiShieldColumns: ["FARM_MOB"],
    anomaliesCount: 2,
    anomaliesList: [
      "Severe Price Gouging: APMC-IND-04 registers a market price of ₹38,100 per quintal, 7.6x above region baseline.",
      "Capacity / Volume Mismatch: Cold storage ratio in Bathinda is critically undersized (40 MT capacity) for the claimed volume index (4.12)."
    ],
    growthInsight: "Cold storage infrastructure in Andhra Pradesh (Kurnool Chilli hub) requires immediate 2x expansion. Farmers registered under APMC-IND-02 exhibit high demand elasticity during pre-monsoon weeks.",
    giniCoefficient: 0.58
  },
  {
    id: "bharat-retail",
    name: "YData Bharat-Retail GST Master Ledger",
    source: "Direct Enterprise Store Ledger",
    description: "Multichannel consumer retail order records with mixed B2B GST tax credit claims and multi-tier district delivery tags.",
    rawColumns: ["ORD_ID", "GSTIN_VAL", "SP_STATE", "STORE_MGR_PH", "BILL_AMT", "GST_AMT_CALC", "RECON_STATUS", "RET_EMAIL", "CUST_PIN"],
    mappedColumns: {
      "ORD_ID": "Order Reference ID",
      "GSTIN_VAL": "GSTIN Identification Number",
      "SP_STATE": "State of Origin (Supply)",
      "STORE_MGR_PH": "Store Manager Contact",
      "BILL_AMT": "Gross Bill Invoice (₹)",
      "GST_AMT_CALC": "Auto-Calculated GST Amount",
      "RECON_STATUS": "ITC Reconciliation Flag",
      "RET_EMAIL": "Customer Loyalty Email",
      "CUST_PIN": "Customer Postal PIN Code"
    },
    rawRows: [
      {
        "ORD_ID": "ORD-110",
        "GSTIN_VAL": "27AAACR9201D1Z1",
        "SP_STATE": "Maharashtra",
        "STORE_MGR_PH": "+91-98601-55443",
        "BILL_AMT": 48200,
        "GST_AMT_CALC": 8676, // 18% GST matches perfectly
        "RECON_STATUS": "RECONCILED",
        "RET_EMAIL": "rahul.t@mumbai-ventures.co.in",
        "CUST_PIN": "400001"
      },
      {
        "ORD_ID": "ORD-111",
        "GSTIN_VAL": "33AABCS0129B1Z0",
        "SP_STATE": "Tamil Nadu",
        "STORE_MGR_PH": "+91-81200-99003",
        "BILL_AMT": 98100,
        "GST_AMT_CALC": 17658,
        "RECON_STATUS": "RECONCILED",
        "RET_EMAIL": "priya.n@chennaicorp.com",
        "CUST_PIN": "600004"
      },
      {
        "ORD_ID": "ORD-112 (MISMATCH)",
        "GSTIN_VAL": "07AAAAA9901Z1Z0", // Invalid mock GSTIN structure
        "SP_STATE": "Delhi",
        "STORE_MGR_PH": "+91-99110-33441",
        "BILL_AMT": 120500,
        "GST_AMT_CALC": 6025, // Calculated is 5%, but state profile mandates 18%
        "RECON_STATUS": "GST_MISMATCH",
        "RET_EMAIL": "claims@delhi-distribution.in",
        "CUST_PIN": "110001"
      },
      {
        "ORD_ID": "ORD-113",
        "GSTIN_VAL": "29AAACK1902E2Z8",
        "SP_STATE": "Karnataka",
        "STORE_MGR_PH": "+91-94480-11220",
        "BILL_AMT": 24000,
        "GST_AMT_CALC": 4320,
        "RECON_STATUS": "RECONCILED",
        "RET_EMAIL": "vignesh.r@bengaluruhub.org",
        "CUST_PIN": "560001"
      }
    ],
    piiShieldColumns: ["GSTIN_VAL", "STORE_MGR_PH", "RET_EMAIL"],
    anomaliesCount: 1,
    anomaliesList: [
      "Tax Slab Discrepancy: ORD-112 calculated tax is ₹6,025 (5%), while corporate registration requires ₹21,690 (18%). Potential auditor penalty flag."
    ],
    growthInsight: "B2B customers in Maharashtra and Tamil Nadu drive 72% of Input Tax Credits (ITC) claims. Aligning correct state-based HSN tags can unlock ₹3,41,000 cash flow in tax offsets this quarter.",
    giniCoefficient: 0.31
  }
];

export const agentPersonas: AgentPersona[] = [
  {
    id: "data-analyst",
    name: "Data Analyst Agent",
    role: "Structure Mapping & Translation",
    description: "Translates cryptically-headed industrial datasets, standardizes variables, and indexes them into sandboxed in-browser databases.",
    specialty: "DuckDB Schema Mapping & LLM Header Inference",
    icon: "Table",
    sampleInput: "`csv_headers(['VAR_99', 'TXN_ID', 'F_PH_0'])`",
    sampleAnalysis: "Analyzed dataset structure. 'VAR_99' aligns with Net Revenue (INR); 'F_PH_0' correctly matched as Farmer Registered Mobile Contacts."
  },
  {
    id: "forensic-auditor",
    name: "Forensic Audit Mind",
    role: "Fraud, Duplication, & Manipulation Detection",
    description: "Performs mathematical audit sweeps, checks digit distributions (Benford's Law), flags duplicate entries, and exposes manual modifications.",
    specialty: "Internal Auditing & Precision Leak Identification",
    icon: "Fingerprint",
    sampleInput: "Audit transactions where manual override flag = true",
    sampleAnalysis: "Discovered 3 anomalies: Amount rounding irregularities matching exactly 4 decimal places, indicating custom bypass injections."
  },
  {
    id: "business-analyst",
    name: "Bharat Business Mind",
    role: "Macro Strategy & Indian Context Translation",
    description: "Evaluates financial and logistical trends against Indian regulatory structures like state GST slabs, fiscal dates (Apr-Mar), and Tier-2 clusters.",
    specialty: "GST Slab Audit & Tier-2/Tier-3 Market Modeling",
    icon: "TrendingUp",
    sampleInput: "Report on regional market concentration & Gini metrics",
    sampleAnalysis: "Gini Coefficient calculated as 0.58. High market concentration in Tamil Nadu suggests strategic expansion into adjacent southern zones."
  },
  {
    id: "ledger-agent",
    name: "Ledger Reconciliation Expert",
    role: "Double-Entry Balance Validation",
    description: "Validates double-entry books, maps unstructured invoices using local-first OCR, and checks for transaction balance correctness.",
    specialty: "Multimodality Receipt-to-Ledger Mapping & Balancing",
    icon: "FileCheck",
    sampleInput: "`balance_validation(sales_ledger, bank_passbook_extract)`",
    sampleAnalysis: "Matched 98.4% of credit records. Exposed ₹42k unaccounted imbalance in Q1 bank charges vs ledger receipts."
  },
  {
    id: "supply-chain-agent",
    name: "Supply Chain Logistical Mind",
    role: "Cold Storage & Distribution Optimization",
    description: "Calculates logistical bottlenecks, transit time variance in Indian interstate transport, and recommends optimum storage ratios.",
    specialty: "Infrastructure Sparing & Supply Flow Optimization",
    icon: "Truck",
    sampleInput: "Analyze transit bottlenecks across National Highway-44",
    sampleAnalysis: "Identified 4 hours excess delay at border tax checkpoints. Recommends shifting 15% shelf buffer stock to Kurnool storage yard."
  }
];

export const pricingTiers: PricingTier[] = [
  {
    id: "standard",
    name: "STANDARD",
    subtitle: "The Departmental License",
    investment: "₹1.8 Lakhs / Year",
    discount: "10% Discounted from ₹2L",
    capacity: "Up to 5 User Seats (₹36k per user)",
    features: [
      "Local-First Browser-based Processing",
      "DuckDB-Wasm In-memory Analytics Engine",
      "Up to 10MB individual file uploads",
      "Secure PII Shield (Standard detection rules)",
      "Indian Context Mapping (GST/APMC data dictionary)",
      "Standard PDF/CSV Executive Reports",
      "Community Email Support"
    ]
  },
  {
    id: "professional",
    name: "PROFESSIONAL",
    subtitle: "The Business License",
    investment: "₹8 Lakhs / Year",
    discount: "33% Discounted from ₹12L",
    capacity: "Up to 35 User Seats (₹23k per user)",
    popular: true,
    features: [
      "Everything in Standard License +",
      "Uncapped File Sizes (Uses Chrome Origin Private Storage)",
      "Advanced PII Shield custom masking rules",
      "Forensic Audits (Benford's digit analysis & decimal sweep)",
      "Specialty Agent Minds (Data Analyst + Forensic + Business)",
      "Gini Coefficient & Pareto 80/20 Whale identifier",
      "Full KrataBooks High-Fidelity PDF Exporting",
      "Priority Email & Slack Support"
    ]
  },
  {
    id: "enterprise",
    name: "ENTERPRISE",
    subtitle: "The Site License",
    investment: "₹35 Lakhs / Year",
    discount: "Custom pricing scales for unlimited scale",
    capacity: "100 Users to Unlimited Users",
    features: [
      "Everything in Professional License +",
      "SSO & Private Instance Deployment Support",
      "Integrated Okta / Microsoft Entra ID Login",
      "White-labeled UI on your custom secure corporate domain",
      "Custom Persona Agent Mind Training on internal business ERP schemas",
      "24/7 Dedicated WhatsApp & Phone direct pipeline to IIT Madras founders",
      "Regulatory audit logging and legal DPDP liability shield certification"
    ]
  }
];
