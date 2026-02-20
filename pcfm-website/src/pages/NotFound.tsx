import { Link } from 'react-router-dom'
import { ArrowRight, Home } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-32">
      <div className="text-center max-w-[500px]">
        <p className="text-8xl font-display font-bold text-deep-teal/20 mb-4">404</p>
        <h1 className="font-display text-3xl font-bold text-deep-teal mb-4">Page Not Found</h1>
        <p className="text-text-light mb-8">
          Sorry, we couldn't find the page you're looking for. It may have been moved or no longer exists.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            to="/"
            className="font-display font-semibold text-base px-6 py-3 rounded-full bg-terracotta text-white no-underline inline-flex items-center gap-2 transition-all hover:bg-terracotta-light hover:-translate-y-0.5"
          >
            <Home className="w-5 h-5" /> Go Home
          </Link>
          <Link
            to="/resources"
            className="font-display font-semibold text-base px-6 py-3 rounded-full bg-transparent text-deep-teal border-2 border-deep-teal no-underline inline-flex items-center gap-2 transition-all hover:bg-deep-teal hover:text-white"
          >
            Browse Resources <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
