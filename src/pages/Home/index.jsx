import React from 'react'
import HeroSlider from '../../Components/Heroslider'
import WhyChooseUs from '../../Components/WhyChooseUs'
import DashboardFeature from '../../Components/DashboardFeature'
import Steps from '../../Components/Steps'
import Counter from '../../Components/Counter'
import SecuritySection from '../../Components/SecuritySection'
import TestimonialsLoopHorizontal from '../../Components/Testimonials'
import Pricing from '../../Components/Pricing'
import ContactForm from '../../Components/ContactForm'


export default function Home() {
  return (
    <>
   <HeroSlider/>
   <WhyChooseUs/>
   <DashboardFeature/>
   <Steps/>
    <Counter/>
    <SecuritySection/>
    <TestimonialsLoopHorizontal/>
    <Pricing/>
    <ContactForm/>
    </>
  )
}
