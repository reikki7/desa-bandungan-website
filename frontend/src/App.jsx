import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Beranda from './pages/Beranda'
import Kegiatan from './pages/Kegiatan'
import Dokumen from './pages/Dokumen'
import Umkm from './pages/Umkm'
import Apdes from './pages/Apdes'
import Tentang from './pages/Tentang'
import NoPage from './pages/NoPage'

function App() {
  return (
    <div className='font-roboto app-container'>
      <Router>
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/beranda" element={<Beranda />} />
          <Route path="/kegiatan" element={<Kegiatan />} />
          <Route path="/dokumen" element={<Dokumen />} />
          <Route path="/umkm" element={<Umkm />} />
          <Route path="/apdes" element={<Apdes />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
