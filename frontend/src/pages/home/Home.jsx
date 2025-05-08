import React from 'react'
import WelcomeBanner from './components/welcomeBanner/WelcomeBanner'
import Mission from './components/mission/Mission'
import Products from './components/products/Products'
import Pricing from './components/pricing/Pricing'
import Contacts from './components/contacts/Contacts'

const Home = () => {
  return (
    <div>
      <WelcomeBanner/>
      <Mission/>
      <Products/>
      <Pricing/>
      <Contacts/>
    </div>
  )
}

export default Home