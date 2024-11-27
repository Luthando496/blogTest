import React from 'react'
import { Footer } from './Footer'
import { Header } from './Header'
import Main from './Main'
import SectionGrid from './SectionGrid'
import SectionTrends from './SectionTrends'


const MainApp = () => {
  return (
    <> 
    <main className='body'>

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