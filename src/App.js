import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { PuffLoader } from 'react-spinners'
import About from './components/About'
import Benefits from './components/Benefits'
import Catalog from './components/Catalog'
import Cleaning from './components/Cleaning'
import Header from './components/Header'
import Ingredients from './components/Ingredients'
import Office from './components/Office'
import Services from './components/Services'

const App = () => {
  const [loader, setLoader] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 1000);
  }, [])
  return (
    <>
      {loader && <div className='loader'><PuffLoader color='#2C8CC7' /></div>}
      <Header />
      <Benefits />
      <About />
      <Ingredients />
      <Cleaning />
      <Services />
      <Catalog />
      <Office />
    </>
  )
}

export default App