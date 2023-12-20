import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main'
import Card from './components/Cards/Card'
import Cards2 from './components/Cards2/Cards2'
import Footer from './components/Footer/Footer'
import { useSelector } from 'react-redux'

const App = () => {
  const { darkMode } = useSelector(state => state.mode)
  const bodyStyles = {
    backgroundColor: darkMode ? '#1f1f1f' : '#ffffff', // Set your desired background colors
  };

  return (
    <div style={bodyStyles}>
      <div className=" mx-auto w-[72.5rem] overflow-hidden" >
        <Navbar/>
        <Main />
        <Card />
        <Cards2 />
        <Footer />
      </div>
    </div>
  )
}

export default App