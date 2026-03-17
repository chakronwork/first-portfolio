export type ProjectCategory = 'ACADEMIC' | 'GENERAL';

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  category: ProjectCategory;
  link?: string;
  linkLabel?: string;
}