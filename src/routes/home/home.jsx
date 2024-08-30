import React from 'react'

import MainSection from '../../components/home/main-section/main-section'
import SecondSection from '../../components/home/second-section/second-section'
import FourthSection from '../../components/home/fourth-section/fourth-section'
import Dropdown from '../../components/dropdown/dropdown'
import './home.scss'

const Home = () => {
  return (
    <main>
      <MainSection />
      <SecondSection />
      <FourthSection />
      {/* <Dropdown /> */}
    </main>
  )
}

export default Home