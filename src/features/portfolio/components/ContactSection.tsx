import { InViewItem, SectionReveal, StaggerReveal } from './SectionReveal'
import type { PortfolioContent } from '../types/portfolio.types'

interface ContactSectionProps {
  content: Pick<
    PortfolioContent,
    'email' | 'phone' | 'location' | 'socials' | 'name'
  >
}

/**
 * Contact footer with staggered channel reveals.
 */
export function ContactSection({ content }: ContactSectionProps) {
  return (
    <section id="contact" className="scroll-mt-28 px-6 py-24 md:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Contact
          </h2>
          <p className="mt-3 max-w-2xl text-ink-muted">
            Open to frontend roles, collaborations, and interesting product
            problems.
          </p>
        </SectionReveal>

        <StaggerReveal className="mt-10 grid gap-6 sm:grid-cols-2">
          <InViewItem>
            <a
              href={`mailto:${content.email}`}
              className="group block border-t border-border pt-5 transition-colors hover:border-accent"
            >
              <p className="text-sm text-ink-muted">Email</p>
              <p className="mt-1 font-display text-xl font-bold text-ink group-hover:text-accent">
                {content.email}
              </p>
            </a>
          </InViewItem>
          <InViewItem>
            <a
              href={`tel:${content.phone.replace(/\s/g, '')}`}
              className="group block border-t border-border pt-5 transition-colors hover:border-accent"
            >
              <p className="text-sm text-ink-muted">Phone</p>
              <p className="mt-1 font-display text-xl font-bold text-ink group-hover:text-accent">
                {content.phone}
              </p>
            </a>
          </InViewItem>
          <InViewItem className="border-t border-border pt-5">
            <p className="text-sm text-ink-muted">Location</p>
            <p className="mt-1 font-display text-xl font-bold text-ink">
              {content.location}
            </p>
          </InViewItem>
          <InViewItem className="border-t border-border pt-5">
            <p className="text-sm text-ink-muted">Social</p>
            <ul className="mt-2 flex flex-wrap gap-4">
              {content.socials.map((social) => (
                <li key={social.href}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-display text-xl font-bold text-ink transition-colors hover:text-accent"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </InViewItem>
        </StaggerReveal>

        <SectionReveal delay={0.12}>
          <p className="mt-16 border-t border-border pt-6 text-sm text-ink-muted">
            © {new Date().getFullYear()} {content.name}. Built with React &
            Motion.
          </p>
        </SectionReveal>
      </div>
    </section>
  )
}
