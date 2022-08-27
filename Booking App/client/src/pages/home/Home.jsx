import React from 'react'
import Navbar from './Navbar.jsx'
import Header from './Header.jsx'
import Featured from '../home/components/Featured.jsx'
import PropertyList from './propertyList/PropertyList.jsx'
import FeaturedProperties from '../home/featuredProperties/FeaturedProperties.jsx'
import MailList from '../home/mailList/MailList.jsx'
import Footer from '../home/footer/Footer.jsx'
import './home.css'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header/>
      <div className="homeContainer">
          <Featured />
          <h1 className="homeTitle">Browse by property type</h1>
          <PropertyList />
          <h1 className="homeTitle">Homes guests love</h1>
          <FeaturedProperties />
          <MailList />
          <Footer />
      </div>
    </div>
  )
}
