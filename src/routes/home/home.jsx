import React from 'react'

import MainSection from '../../components/home/main-section/main-section'
import SecondSection from '../../components/home/second-section/second-section'
import ThirdSection from '../../components/home/third-section/third-section'
import FourthSection from '../../components/home/fourth-section/fourth-section'

import './home.scss'

const Home = () => {
  return (
    <main>
      <MainSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
    </main>
  )
}

export default Home