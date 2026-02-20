import { motion } from 'framer-motion'

interface PageHeroProps {
  title: string
  subtitle?: string
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-deep-teal via-teal to-light-teal" />
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.3)_0%,transparent_50%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.2)_0%,transparent_40%)]" />
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 md:px-8 text-center">
        <motion.h1
          className="font-display text-3xl md:text-5xl font-bold text-white mb-4 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            className="text-lg md:text-xl text-white/90 max-w-[600px] mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  )
}
