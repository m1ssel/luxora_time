import React from 'react'

import MainSection from '../../components/home/main-section/main-section'
import SecondSection from '../../components/home/second-section/second-section'
import FourthSection from '../../components/home/fourth-section/fourth-section'
import Footer from '../footer/footer'
import './home.scss'

const Home = () => {
  return (
    <main>
      <MainSection />
      <SecondSection />
      <FourthSection />
    </main>
  )
}

export default Home