export interface Dataset {
  id: string;
  name: string;
  source: string;
  description: string;
  rawColumns: string[];
  mappedColumns: { [key: string]: string };
  rawRows: Array<{ [key: string]: any }>;
  piiShieldColumns: string[];
  anomaliesCount: number;
  anomaliesList: string[];
  growthInsight: string;
  giniCoefficient: number;
}

export interface AgentPersona {
  id: string;
  name: string;
  role: string;
  description: string;
  specialty: string;
  icon: string;
  sampleInput: string;
  sampleAnalysis: string;
}

export interface PricingTier {
  id: string;
  name: string;
  subtitle: string;
  investment: string;
  discount: string;
  capacity: string;
  features: string[];
  popular?: boolean;
}
