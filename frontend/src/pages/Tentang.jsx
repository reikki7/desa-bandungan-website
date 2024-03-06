import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

const Tentang = () => {
    return (
        <div>
            <Header />
            <div className="sticky top-0 z-50 w-full bg-green-950">
                <Navbar />
            </div>
            Tentang
        </div>
    )
}

export default Tentang