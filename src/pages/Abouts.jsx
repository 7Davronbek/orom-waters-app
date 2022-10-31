import React, { useEffect, useState } from 'react'
import About from '../components/About'
import Office from '../components/Office'
import { PuffLoader } from 'react-spinners'

const Abouts = () => {
    const [loader, setLoader] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoader(false)
        }, 500);
    }, [])
    return (
        <>
            {loader && <div className='loader'><PuffLoader color='#2C8CC7' /></div>}
            <About />
            <Office />
        </>
    )
}

export default Abouts