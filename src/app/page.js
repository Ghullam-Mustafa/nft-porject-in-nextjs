import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from '../components/navbar/Navbar'
import HeroSection from '../components/heroSection/HeroSection'
import TrendingCollection from '../components/trendingCollection/TrendingCollection'
import TopCreater from '../components/topCreater/TopCreater'
import BrowsCategories from '../components/browsCategories/BrowsCategories'
import DiscoverMore from '../components/discoverMore/DiscoverMore'
import FluidImg from '../components/fluidImg/FluidImg'
import HowItWorks from '../components/howItWorks/HowItWorks'
import Subscribe from '../components/subscribe/Subscribe'
import Footer from '../components/footer/Footer'
export default function Home() {
  return (
    <main >
      <Navbar/>
        {/* <HeroSection/>
        <TrendingCollection/>
        <TopCreater/>
        <BrowsCategories/>
        <DiscoverMore/>
        <FluidImg/>
        <HowItWorks/>
        <Subscribe/> */}
        {/* <Footer/> */}
    </main>
  )
}
