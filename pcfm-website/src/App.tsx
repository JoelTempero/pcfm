import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Resources from './pages/Resources'
import Contact from './pages/Contact'
import News from './pages/News'
import Events from './pages/Events'
import Anchored from './pages/Anchored'
import WhanauFriendly from './pages/WhanauFriendly'
import Take15 from './pages/Take15'
import FamilyFaithMoments from './pages/FamilyFaithMoments'
import AdventAndChristmas from './pages/AdventAndChristmas'
import LentAndEaster from './pages/LentAndEaster'
import Pentecost from './pages/Pentecost'
import JobVacancies from './pages/JobVacancies'
import CurriculumResources from './pages/CurriculumResources'
import ChristmasSkits from './pages/ChristmasSkits'
import PrayingForChildren from './pages/PrayingForChildren'
import LightParty from './pages/LightParty'
import CreationCare from './pages/CreationCare'
import PandemicResources from './pages/PandemicResources'
import ReadingLikeChocolate from './pages/ReadingLikeChocolate'
import PodcastsForLeaders from './pages/PodcastsForLeaders'
import FiveMatters from './pages/FiveMatters'
import NewsletterSignup from './pages/NewsletterSignup'
import ThinkingIntergenerational from './pages/ThinkingIntergenerational'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<News />} />
        <Route path="/events" element={<Events />} />
        <Route path="/anchored" element={<Anchored />} />
        <Route path="/whanau-friendly-process" element={<WhanauFriendly />} />
        <Route path="/take-15" element={<Take15 />} />
        <Route path="/family-faith-moments" element={<FamilyFaithMoments />} />
        <Route path="/advent-and-christmas" element={<AdventAndChristmas />} />
        <Route path="/lent-and-easter" element={<LentAndEaster />} />
        <Route path="/pentecost" element={<Pentecost />} />
        <Route path="/job-vacancies" element={<JobVacancies />} />
        <Route path="/curriculum-resources-and-ideas" element={<CurriculumResources />} />
        <Route path="/christmas-skits" element={<ChristmasSkits />} />
        <Route path="/praying-for-children" element={<PrayingForChildren />} />
        <Route path="/light-party-resource" element={<LightParty />} />
        <Route path="/creation-care" element={<CreationCare />} />
        <Route path="/pandemic-resources" element={<PandemicResources />} />
        <Route path="/reading-is-like-chocolate" element={<ReadingLikeChocolate />} />
        <Route path="/podcasts-for-leaders" element={<PodcastsForLeaders />} />
        <Route path="/5-matters" element={<FiveMatters />} />
        <Route path="/newsletter-signup" element={<NewsletterSignup />} />
        <Route path="/thinking-intergenerational" element={<ThinkingIntergenerational />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
