import { FeatureSection } from './components/FeatureSection'
import { HeroSection } from './components/HeroSection'
import { WorkflowSection } from './components/WorkflowSection'
import { PricingSection } from './components/PricingSection'
import { Navbar } from './components/Navbar'

export const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <WorkflowSection />
        <PricingSection/>
      </div>
    </>
  )
}
