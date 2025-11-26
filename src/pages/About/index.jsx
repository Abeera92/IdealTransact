import React from 'react'
import AboutHero from '../../Components/AboutHero'
import CoreValues from '../../Components/CoreValues'
import CtaSection from '../../Components/CtaSection'
import FeatureCards from '../../Components/FeatureCards'
import Team from '../../Components/Team'
import MissionVision from '../../Components/MissionVision'
// import HeroSection from '../../Components/HeroSection'
import OurStory from '../../Components/OurStory'

export default function About() {
  return (
    <>
      <AboutHero/>
      <OurStory/>
      <MissionVision/>
    {/* <HeroSection/> */}
      <CoreValues/>
      <CtaSection/>
      <FeatureCards/>
     
      <Team/>
    </>
  )
}
