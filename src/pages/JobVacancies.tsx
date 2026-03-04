import { Briefcase, ExternalLink } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'
import AnimatedElement from '../components/ui/AnimatedElement'
import { jobListings } from '../data/content'

export default function JobVacancies() {
  return (
    <>
      <PageHero title="Job Vacancies" subtitle="Ministry opportunities across Aotearoa" />

      <Section>
        <div className="max-w-[900px] mx-auto space-y-5">
          {jobListings.map((job, i) => (
            <AnimatedElement key={job.id} delay={i * 0.1}>
              <div className="bg-white rounded-[15px] p-6 shadow-[0_4px_15px_rgba(26,92,82,0.06)]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cream rounded-xl flex items-center justify-center shrink-0">
                    <Briefcase className="w-6 h-6 text-deep-teal" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-deep-teal mb-2">{job.title}</h3>
                    <p className="text-text-light text-sm leading-relaxed mb-3">{job.description}</p>
                    {(job.contact || job.contactEmail || job.contactPhone) && (
                      <div className="text-sm text-text-light">
                        {job.contact && <p className="font-medium">Contact: {job.contact}</p>}
                        {job.contactEmail && (
                          <a href={`mailto:${job.contactEmail}`} className="text-teal no-underline hover:text-terracotta transition-colors block">
                            {job.contactEmail}
                          </a>
                        )}
                        {job.contactPhone && (
                          <a href={`tel:${job.contactPhone.replace(/\s/g, '')}`} className="text-teal no-underline hover:text-terracotta transition-colors block">
                            {job.contactPhone}
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </AnimatedElement>
          ))}

          <AnimatedElement className="mt-10">
            <div className="bg-cream rounded-[15px] p-6 text-center">
              <p className="text-text-light mb-3">Also check the PCANZ jobs page for more opportunities:</p>
              <a
                href="https://www.presbyterian.org.nz/about-us/jobs"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display font-semibold text-sm text-terracotta no-underline inline-flex items-center gap-2 hover:gap-3 transition-all"
              >
                PCANZ Jobs Page <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </AnimatedElement>
        </div>
      </Section>
    </>
  )
}
