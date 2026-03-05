export type Language = 'en' | 'es';

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Project {
  title: string;
  description: string;
  type: string;
  tech: string;
  image: string;
}
