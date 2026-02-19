import { useState } from 'react'
import { MapPin, Mail, Phone } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import AnimatedElement from '../components/ui/AnimatedElement'
import { ArrowRight } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your message. We will be in touch soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <>
      <PageHero title="Contact Us" subtitle="We'd love to hear from you." />

      <section className="py-20 px-4 md:px-8">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-12">
          <AnimatedElement>
            <h2 className="font-display text-3xl font-bold text-deep-teal mb-4">Let's Chat!</h2>
            <p className="text-lg text-text-light mb-8 leading-relaxed">
              We'd love to hear from you. Whether you have questions about our resources or want to connect about ministry in your context, reach out anytime.
            </p>

            <div className="space-y-5 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-[45px] h-[45px] bg-cream rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-deep-teal" />
                </div>
                <div>
                  <strong className="font-display block mb-1 text-text">Postal Address</strong>
                  <p className="text-text-light text-sm leading-relaxed">
                    Presbyterian Children and Families Ministry<br />
                    c/o PCANZ Assembly Office<br />
                    PO Box 9049<br />
                    Te Aro, Wellington 6141<br />
                    Aotearoa New Zealand
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-[45px] h-[45px] bg-cream rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-deep-teal" />
                </div>
                <div>
                  <strong className="font-display block mb-1 text-text">Physical Office</strong>
                  <p className="text-text-light text-sm leading-relaxed">
                    PCANZ Assembly Office<br />
                    Level 4, Orbit House<br />
                    94 Dixon St<br />
                    Wellington 6011
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-[45px] h-[45px] bg-cream rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-deep-teal" />
                </div>
                <div>
                  <strong className="font-display block mb-1 text-text">Email</strong>
                  <p className="text-text-light text-sm">
                    <a href="mailto:karo@presbyterian.org.nz" className="text-teal no-underline hover:text-terracotta transition-colors">karo@presbyterian.org.nz</a> (Karo Wilson, Director)<br />
                    <a href="mailto:childrenandfamilies@presbyterian.org.nz" className="text-teal no-underline hover:text-terracotta transition-colors">childrenandfamilies@presbyterian.org.nz</a> (General)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-[45px] h-[45px] bg-cream rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-deep-teal" />
                </div>
                <div>
                  <strong className="font-display block mb-1 text-text">Phone</strong>
                  <p className="text-text-light text-sm">
                    <a href="tel:0272743322" className="text-teal no-underline hover:text-terracotta transition-colors">027 274 3322</a> (Karo Wilson)<br />
                    <a href="tel:048016000" className="text-teal no-underline hover:text-terracotta transition-colors">(04) 801-6000</a> (PCANZ Main Office)
                  </p>
                </div>
              </div>
            </div>

            <p className="text-sm text-text-light italic">
              The Presbyterian Church of Aotearoa New Zealand National Office is located in Wellington, although members of the Assembly Team may be located throughout New Zealand.
            </p>
          </AnimatedElement>

          <AnimatedElement delay={0.2}>
            <div className="bg-white rounded-[20px] p-8 shadow-[0_4px_30px_rgba(26,92,82,0.08)]">
              <h3 className="font-display text-2xl font-semibold text-deep-teal mb-5">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="block font-display font-medium text-sm text-text mb-1.5">Your Name</label>
                  <input
                    type="text"
                    id="contact-name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-cream rounded-[10px] font-body text-base transition-colors bg-cream focus:border-teal focus:bg-white outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block font-display font-medium text-sm text-text mb-1.5">Email Address</label>
                  <input
                    type="email"
                    id="contact-email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-cream rounded-[10px] font-body text-base transition-colors bg-cream focus:border-teal focus:bg-white outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="contact-subject" className="block font-display font-medium text-sm text-text mb-1.5">Subject</label>
                  <input
                    type="text"
                    id="contact-subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-cream rounded-[10px] font-body text-base transition-colors bg-cream focus:border-teal focus:bg-white outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block font-display font-medium text-sm text-text mb-1.5">Message</label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-cream rounded-[10px] font-body text-base transition-colors bg-cream focus:border-teal focus:bg-white outline-none resize-y"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full font-display font-semibold text-base px-8 py-4 rounded-full bg-terracotta text-white border-2 border-terracotta cursor-pointer inline-flex items-center justify-center gap-2 transition-all hover:bg-terracotta-light hover:border-terracotta-light"
                >
                  Send Message <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </>
  )
}
