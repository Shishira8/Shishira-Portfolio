
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  isFeatured?: boolean;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  bullets: string[];
}

export interface Article {
  title: string;
  date: string;
  description: string;
  link: string;
}

export interface CoreCapability {
  title: string;
  description: string;
}
