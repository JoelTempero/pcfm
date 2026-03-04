import { Link } from 'react-router-dom'
import { Facebook, Instagram } from 'lucide-react'
import { footerResources, footerPrograms, footerConnect } from '../../data/navigation'
import type { NavLink } from '../../types'

function FooterLink({ link }: { link: NavLink }) {
  if (link.external) {
    return (
      <a
        href={link.path}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/70 no-underline text-[0.9rem] transition-colors hover:text-terracotta-light"
      >
        {link.label}
      </a>
    )
  }
  return (
    <Link
      to={link.path}
      className="text-white/70 no-underline text-[0.9rem] transition-colors hover:text-terracotta-light"
    >
      {link.label}
    </Link>
  )
}

function FooterColumn({ title, links }: { title: string; links: NavLink[] }) {
  return (
    <div>
      <h4 className="font-display font-semibold text-base text-white mb-4">{title}</h4>
      <ul className="list-none space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <FooterLink link={link} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-footer-bg text-white pt-16 pb-8 px-4 md:px-8">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-8 md:gap-12">
        {/* Brand Column */}
        <div>
          <div className="font-display font-semibold text-[1.3rem] text-white mb-3">
            Presbyterian Children & Families Ministry
          </div>
          <p className="text-white/70 text-[0.95rem] mb-6 leading-relaxed">
            A whanau-based ministry of the Presbyterian Church of Aotearoa New Zealand, nurturing faith in communities across the motu.
          </p>
          <a href="https://www.presbyterian.org.nz/" target="_blank" rel="noopener noreferrer" className="inline-block">
            <img
              src="https://i0.wp.com/pcfm.org.nz/wp-content/uploads/2020/07/pcanz-logo.png?w=200"
              alt="PCANZ Logo"
              className="h-10 opacity-80"
            />
          </a>
          <div className="flex gap-3 mt-6">
            <a
              href="https://www.facebook.com/presbyterianchildrenandfamilies"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-[44px] h-[44px] bg-white/15 rounded-full flex items-center justify-center text-white no-underline transition-all hover:bg-white hover:text-deep-teal hover:-translate-y-0.5"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/childrenandfamiliespcanz/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-[44px] h-[44px] bg-white/15 rounded-full flex items-center justify-center text-white no-underline transition-all hover:bg-white hover:text-deep-teal hover:-translate-y-0.5"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        <FooterColumn title="Resources" links={footerResources} />
        <FooterColumn title="Programs" links={footerPrograms} />
        <FooterColumn title="Connect" links={footerConnect} />
      </div>

      <div className="max-w-[1200px] mx-auto mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <p className="text-white/50 text-[0.85rem]">
          &copy; 2025 Presbyterian Children & Families Ministry. All rights reserved.
        </p>
        <p className="text-white/50 text-[0.85rem]">
          Part of the{' '}
          <a
            href="https://www.presbyterian.org.nz/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 no-underline hover:text-white transition-colors"
          >
            Presbyterian Church of Aotearoa New Zealand
          </a>
        </p>
      </div>
    </footer>
  )
}
