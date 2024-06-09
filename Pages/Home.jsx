import React from 'react'
import Header from '../Component/Header.jsx'
import Footer from '../Component/Footer.jsx'
import Contact from '../Component/Contact.jsx'
import Service from '../Component/Service.jsx'
import Hero from '../Component/hero.jsx'
import Companies from '../Component/companies.jsx'
import About from '../Component/About.jsx'
export default function Home() {
  return (
    <div className="App">
      <Header/>
      <Hero />
      <Companies />
      <About />
      <Service />
      <Contact />
      <Footer />
    </div>
  )
}