import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

const Umkm = () => {
    return (
        <div>
            <Header />
            <div className="sticky top-0 z-50 w-full bg-green-950">
                <Navbar />
            </div>
            UMKM
        </div>
    )
}

export default Umkm