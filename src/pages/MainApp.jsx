import React from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import Main from '../components/Main'
import SectionGrid from '../components/SectionGrid'
import SectionTrends from '../components/SectionTrends'
import Navbar from '../components/Navbar'


const MainApp = () => {
  return (
    <> 
    <main className='body'>
    <Navbar  />
    <Header />
    <Main  />
    <SectionGrid  />
    <SectionTrends  />
    <Footer  />
    /</main>
    </>
  )
}

export default MainApp