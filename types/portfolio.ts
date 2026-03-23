export interface ExpertiseCardItem {
  icon: string;
  title: string;
  desc: string;
}

export interface ProjectItem {
  title: string;
  badge: string | null;
  badgeIcon: string;
  desc: string;
  tags: string[];
  link: boolean;
}

export interface TimelineItem {
  role: string;
  period: string;
  company: string;
  desc: string;
}

export interface ToolkitItem {
  icon: string;
  label: string;
}

export interface StatItem {
  value: string;
  label: string;
}
