import { Facebook, Instagram } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'
import AnimatedElement from '../components/ui/AnimatedElement'
import { useState } from 'react'

export default function NewsletterSignup() {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for subscribing! You will receive Woven, our termly newsletter.')
    setFormData({ firstName: '', lastName: '', email: '' })
  }

  return (
    <>
      <PageHero title="Sign Up to Newsletter" subtitle="Stay connected with PCFM" />

      <Section>
        <div className="max-w-[600px] mx-auto">
          <AnimatedElement>
            <div className="text-center mb-8">
              <p className="text-lg text-text-light mb-4">Keep up to date with all of our news by signing up to our mailing list.</p>
              <p className="text-text-light mb-4">You will receive 'Woven', our termly newsletter, plus occasional updates.</p>
              <p className="text-text-light text-sm">We promise not to overload your inbox, and you can unsubscribe at any time.</p>
            </div>
          </AnimatedElement>

          <AnimatedElement>
            <div className="bg-white rounded-[20px] p-8 shadow-[0_4px_20px_rgba(26,92,82,0.06)]">
              <h2 className="font-display text-xl font-semibold text-deep-teal mb-5 text-center">Just fill in the form below to subscribe!</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="firstName" className="block font-display font-medium text-sm text-text mb-1.5">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-cream rounded-[10px] font-body text-base transition-colors bg-cream focus:border-teal focus:bg-white outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block font-display font-medium text-sm text-text mb-1.5">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-cream rounded-[10px] font-body text-base transition-colors bg-cream focus:border-teal focus:bg-white outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="newsletter-email" className="block font-display font-medium text-sm text-text mb-1.5">Email Address</label>
                  <input
                    type="email"
                    id="newsletter-email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-cream rounded-[10px] font-body text-base transition-colors bg-cream focus:border-teal focus:bg-white outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full font-display font-semibold text-base px-8 py-4 rounded-full bg-terracotta text-white border-2 border-terracotta cursor-pointer transition-all hover:bg-terracotta-light hover:border-terracotta-light"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </AnimatedElement>

          <AnimatedElement className="mt-8">
            <div className="text-center">
              <p className="font-display font-semibold text-deep-teal mb-3">Follow us on social media</p>
              <div className="flex justify-center gap-3">
                <a
                  href="https://www.facebook.com/presbyterianchildrenandfamilies"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-[44px] h-[44px] bg-deep-teal rounded-full flex items-center justify-center text-white no-underline transition-all hover:bg-teal hover:-translate-y-0.5"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/childrenandfamiliespcanz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-[44px] h-[44px] bg-deep-teal rounded-full flex items-center justify-center text-white no-underline transition-all hover:bg-teal hover:-translate-y-0.5"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </Section>
    </>
  )
}
