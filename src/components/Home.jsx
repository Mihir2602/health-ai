import React from 'react'
import CustomNavbar from './CustomNavbar'
import HomePageSection from './HomePageSection'
import FeaturesSection from './FeatureSection'
import ReviewSection from './ReviewSection'
import Faq2 from './Faq2'
import Footer10 from './Footer10'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div>
        <HomePageSection/>
        <FeaturesSection/>
        <ReviewSection/>
        <Faq2/>
        <Footer10/>
    </div>
  )
}

export default Home