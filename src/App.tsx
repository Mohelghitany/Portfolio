import { ContactSection } from '@/features/portfolio/components/ContactSection'
import { CoursesSection } from '@/features/portfolio/components/CoursesSection'
import { CursorBackground } from '@/features/portfolio/components/CursorBackground'
import { EducationSection } from '@/features/portfolio/components/EducationSection'
import { ExperienceSection } from '@/features/portfolio/components/ExperienceSection'
import { FloatingNav } from '@/features/portfolio/components/FloatingNav'
import { Hero } from '@/features/portfolio/components/Hero'
import { ProjectsSection } from '@/features/portfolio/components/ProjectsSection'
import { SkillsSection } from '@/features/portfolio/components/SkillsSection'
import { portfolioContent } from '@/features/portfolio/data/content'
import { useTheme } from '@/features/portfolio/hooks/useTheme'

/**
 * Portfolio application shell.
 */
export function App() {
  const { theme, toggleTheme } = useTheme()
  const content = portfolioContent

  return (
    <div className="relative min-h-svh bg-surface text-ink">
      <CursorBackground />
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-fg"
      >
        Skip to content
      </a>
      <FloatingNav
        items={content.nav}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <main className="relative z-10">
        <Hero
          content={{
            name: content.name,
            role: content.role,
            summary: content.summary,
            monogram: content.monogram,
            socials: content.socials,
          }}
        />
        <ExperienceSection items={content.experience} />
        <ProjectsSection
          projects={content.projects}
          filters={content.projectFilters}
        />
        <SkillsSection groups={content.skills} />
        <CoursesSection courses={content.courses} />
        <EducationSection items={content.education} />
        <ContactSection
          content={{
            email: content.email,
            phone: content.phone,
            location: content.location,
            socials: content.socials,
            name: content.name,
          }}
        />
      </main>
    </div>
  )
}

export default App
