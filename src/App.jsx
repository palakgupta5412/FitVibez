import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Plans from './sections/Plans'
import Clients from './sections/Clients'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Exercises from './sections/Exercises'
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Plans />
      <Exercises />
      <Clients />
      <Contact />
      <Footer />
    </>
    
  )
}

export default App