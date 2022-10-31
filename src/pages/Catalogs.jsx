import React, { useEffect, useState } from 'react'
import Products from '../components/Products'
import { PuffLoader } from 'react-spinners'

const Catalogs = () => {
  const [loader, setLoader] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 1000);
  }, [])
  return (
    <>
      {loader && <div className='loader'><PuffLoader color='#2C8CC7' /></div>}
      <div>
        <Products />
      </div>
    </>
  )
}

export default Catalogs