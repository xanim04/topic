import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import MainCom from './MainCom'
import Footer from './Footer'

function App() {
 
  return (
    <div className='App'>
      <Header/>
      <MainCom/>
      <Footer/>
    </div>
  )
}

export default App
