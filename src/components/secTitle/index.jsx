import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const SecTitle = ({ title }) => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div className="secTitle home">
            <h3 data-aos="fade-right" className="title font-title !text-black inline-block">
                {title}
            </h3>
        </div>
    )
}

export default SecTitle