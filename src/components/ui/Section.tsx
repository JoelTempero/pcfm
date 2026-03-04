import type { ReactNode } from 'react'
import AnimatedElement from './AnimatedElement'

interface SectionProps {
  title?: string
  subtitle?: string
  children: ReactNode
  className?: string
  dark?: boolean
  id?: string
}

export default function Section({ title, subtitle, children, className = '', dark = false, id }: SectionProps) {
  return (
    <section id={id} className={`py-20 px-4 md:px-8 ${className}`}>
      {(title || subtitle) && (
        <AnimatedElement className="text-center max-w-[700px] mx-auto mb-12">
          {title && (
            <h2 className={`text-3xl md:text-[2.5rem] font-bold mb-4 leading-tight ${dark ? 'text-white' : 'text-deep-teal'}`}>
              {title}
            </h2>
          )}
          {subtitle && (
            <p className={`text-lg ${dark ? 'text-white/80' : 'text-text-light'}`}>
              {subtitle}
            </p>
          )}
        </AnimatedElement>
      )}
      {children}
    </section>
  )
}
