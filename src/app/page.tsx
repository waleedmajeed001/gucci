import Categories from '@/components/categories'
import FeatureSection from '@/components/Feauter'
import Hero from '@/components/hero'
import ServicesSection from '@/components/Service'
import Womantag from '@/components/womantag'

const page = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <Womantag />
      <FeatureSection />
      <ServicesSection />
    </div>
  )
}

export default page
