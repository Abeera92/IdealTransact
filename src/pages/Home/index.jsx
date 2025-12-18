import React from 'react'
import HeroSlider from '../../Components/Heroslider'
import WhyChooseUs from '../../Components/WhyChooseUs'
// import DashboardFeature from '../../Components/AboutUs'
import Steps from '../../Components/Steps'
import Counter from '../../Components/Counter'
import SecuritySection from '../../Components/SecuritySection'
import TestimonialsLoopHorizontal from '../../Components/Testimonials'
import Pricing from '../../Components/Pricing'
import ContactForm from '../../Components/ContactForm'
// import ServicesPage from '../../Components/Services'
import ServicesCards from '../../Components/ServiceCards'
import FAQs from '../../Components/Faqs'
import AboutUs from '../../Components/AboutUs'


export default function Home() {
  return (
    <>
   <HeroSlider/>
   <WhyChooseUs/>
   <AboutUs/>
   <ServicesCards/>
   <Steps/>
    <Counter/>
    <SecuritySection/>
    <TestimonialsLoopHorizontal/>
    <Pricing/>
    <FAQs/>
    <ContactForm/>
    </>
  )
}
