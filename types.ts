export enum AppSection {
  HOME = 'HOME',
  PROBLEM = 'PROBLEM',
  SOLUTION = 'SOLUTION',
  DEMO = 'DEMO',
  ECOSYSTEM = 'ECOSYSTEM',
  CONTACT = 'CONTACT'
}

export interface LessonPlanRequest {
  grade: string;
  subject: string;
  topic: string;
}

export interface LessonPlanResponse {
  title: string;
  bnccCodes: string[];
  objective: string;
  duration: string;
  activities: Array<{
    title: string;
    description: string;
    time: string;
  }>;
  evaluation: string;
}

export interface EcosystemPartner {
  name: string;
  url: string;
  description: string;
  icon: React.ElementType;
}