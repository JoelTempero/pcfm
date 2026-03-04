import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import KoruLogo from '../ui/KoruLogo'
import { mainNavLinks } from '../../data/navigation'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 transition-all duration-400 ${
          scrolled ? 'bg-warm-white/95 backdrop-blur-[10px] shadow-[0_2px_30px_rgba(26,92,82,0.08)]' : ''
        }`}
      >
        <nav className="max-w-[1400px] mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 no-underline">
            <KoruLogo />
            <div className="font-display font-semibold text-[1.1rem] text-deep-teal leading-tight">
              Children & Families
              <span className="block text-xs font-normal text-text-light">A whanau-based ministry</span>
            </div>
          </Link>

          <ul className="hidden md:flex items-center gap-8 list-none">
            {mainNavLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="font-display text-[0.95rem] font-medium text-text no-underline relative transition-colors hover:text-deep-teal group"
                >
                  {link.label}
                  <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-terracotta transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          <button
            className="md:hidden bg-transparent border-none cursor-pointer p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6 text-deep-teal" />
          </button>
        </nav>
      </header>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-[1500] transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 w-[80%] max-w-[400px] h-screen bg-warm-white z-[2000] p-6 transition-all duration-400 shadow-[-10px_0_50px_rgba(0,0,0,0.1)] ${
          mobileMenuOpen ? 'right-0' : 'right-[-100%]'
        }`}
      >
        <button
          className="absolute top-4 right-4 bg-transparent border-none text-deep-teal cursor-pointer p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          <X className="w-6 h-6" />
        </button>
        <ul className="list-none mt-16 space-y-2">
          {mainNavLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className="font-display text-[1.2rem] font-medium text-text no-underline block py-3 border-b border-cream transition-colors hover:text-terracotta"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
