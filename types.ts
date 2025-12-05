import { ReactNode } from 'react';

export type Language = 'zh' | 'en';

export interface NavData {
  product: string;
  technology: string;
  solutions: string;
  pricing: string;
  about: string;
  contact: string;
  cases?: string; // Optional as it was used in code but not in all data
}

export interface HeroData {
  badge: string;
  title: string;
  subtitle: string;
  cta_primary: string;
  cta_secondary: string;
  demo: {
    user_avatar: string;
    agent_avatar: string;
    user_text: string;
    process_steps: Array<{
      type: 'think' | 'check' | 'action' | 'reply';
      text: string;
    }>;
    final_reply: string;
  };
}

export interface ComparisonData {
  title: string;
  subtitle: string;
  traditional: {
    title: string;
    items: string[];
  };
  logeek: {
    title: string;
    items: string[];
  };
}

export interface AgentData {
  role: string;
  focus: string;
  desc: string;
  icon?: ReactNode; // In data file this will be handled carefully
  color: string;
}

export interface MatrixData {
  title: string;
  subtitle: string;
  agents: AgentData[];
}

export interface BentoCardData {
  title: string;
  desc: string;
  col: string;
  icon?: ReactNode;
  bg: string;
}

export interface BentoData {
  title: string;
  cards: BentoCardData[];
}

export interface CaseItem {
  id: number;
  tag: string;
  title: string;
  desc: string;
  stat: string;
  statLabel: string;
}

export interface CasesData {
  title: string;
  list: CaseItem[];
}

export interface FooterData {
  slogan: string;
  copyright: string;
}

export interface ContentData {
  nav: NavData;
  hero: HeroData;
  comparison: ComparisonData;
  matrix: MatrixData;
  bento: BentoData;
  cases: CasesData;
  footer: FooterData;
}