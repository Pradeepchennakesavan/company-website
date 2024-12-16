import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Features from './components/Features'
import Benefits from './components/Benefits'
import About from './components/About'
import Results from './components/Results'
import LearnMore from './components/LearnMore'
import Procedure from './components/Procedure'
import FounderDetails from './components/FounderDetails'
import CaseStudy from './components/CaseStudy'
import CustomerService from './components/CustomerService'
import Footer from './components/Footer'
import SolutionHover from './components/SolutionHover'


const App = () => {
  return (
    <div className='px-4 sm: px-[6vw]  overflow-hidden '>
      <NavBar />
      <Hero />
      <Features />
      <Benefits /> 
      <About />
      <Results />
      <LearnMore />
      <Procedure />
      <FounderDetails />
      <CaseStudy />
      <CustomerService />
      <Footer />
    </div>
  )
}

export default App
