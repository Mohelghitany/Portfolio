
export type ProjectCategory =
  | 'all'
  | 'graduation'
  | 'web'
  | 'image-processing'
  | 'signal-processing'
  | 'computer-graphics'
  | 'data-structure'
  | 'oop'

export interface SocialLink {
  label: string
  href: string
}

export interface ExperienceItem {
  id: string
  company: string
  role: string
  period: string
  location: string
  bullets: string[]
}

export interface ProjectItem {
  id: string
  title: string
  description: string
  categories: Exclude<ProjectCategory, 'all'>[]
  tech: string[]
  href?: string
}

export interface SkillGroup {
  id: string
  title: string
  skills: string[]
}

export interface CourseItem {
  id: string
  title: string
  subtitle?: string
  description: string
}

export interface EducationItem {
  id: string
  degree: string
  institution: string
  period: string
  location: string
}

export interface PortfolioContent {
  name: string
  monogram: string
  role: string
  summary: string
  location: string
  email: string
  phone: string
  socials: SocialLink[]
  cv: SocialLink
  nav: { label: string; href: string }[]
  experience: ExperienceItem[]
  projects: ProjectItem[]
  projectFilters: { id: ProjectCategory; label: string }[]
  skills: SkillGroup[]
  courses: CourseItem[]
  education: EducationItem[]
}
