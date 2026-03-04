import { Calendar } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'
import AnimatedElement from '../components/ui/AnimatedElement'
import { events } from '../data/content'

export default function Events() {
  return (
    <>
      <PageHero title="Events" subtitle="Upcoming conferences, training, and gatherings" />

      <Section>
        <div className="max-w-[900px] mx-auto space-y-5">
          {events.map((event, i) => (
            <AnimatedElement key={event.id} delay={i * 0.1}>
              <div className="bg-white rounded-[15px] p-6 shadow-[0_4px_15px_rgba(26,92,82,0.06)]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cream rounded-xl flex items-center justify-center shrink-0">
                    <Calendar className="w-6 h-6 text-deep-teal" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-deep-teal mb-1">{event.title}</h3>
                    {event.date && (
                      <p className="text-sm text-terracotta font-medium mb-2">{event.date}</p>
                    )}
                    <p className="text-text-light text-sm leading-relaxed">{event.description}</p>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </Section>
    </>
  )
}
