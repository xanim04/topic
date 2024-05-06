import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderSection from './HeaderSection'
import IntroSection from './IntroSection'
import FooterSection from './FooterSection'
import MenuSection from './MenuSection'
import Counter from './Counter'

function App() {

  return (
    <>
    <HeaderSection/>
    <IntroSection/>
    <MenuSection/>
    <FooterSection/>
    <Counter/>
    </>
  )
}

export default App
