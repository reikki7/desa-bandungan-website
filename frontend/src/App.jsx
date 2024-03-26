import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Beranda from "./pages/Beranda";
import Kegiatan from "./pages/Kegiatan";
import Dokumen from "./pages/Dokumen";
import Umkm from "./pages/Umkm";
import Apdes from "./pages/Apdes";
import Tentang from "./pages/Tentang";
import NoPage from "./pages/NoPage";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import KegiatanDetails from "./pages/KegiatanDetails";
import UmkmDetails from "./pages/UmkmDetails";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import AdminMain from "./pages/Admin/AdminMain";
import AdminLogin from "./pages/Admin/AdminLogin";

function App() {
  const isAuthenticated = true; // Replace with authentication logic

  return (
    <Router>
      <Routes>
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/*"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <AdminMain />
            </PrivateRoute>
          }
        />
        <Route
          path="/*"
          element={
            <div className="flex flex-col min-h-screen">
              <Header />
              <div className="sticky top-0 z-50 w-full">
                <Navbar />
              </div>
              <div className="flex-grow">
                <Routes>
                  <Route path="/" element={<Beranda />} />
                  <Route path="/beranda" element={<Beranda />} />
                  <Route path="/kegiatan" element={<Kegiatan />} />
                  <Route path="/dokumen" element={<Dokumen />} />
                  <Route path="/umkm" element={<Umkm />} />
                  <Route path="/apdes" element={<Apdes />} />
                  <Route path="/tentang" element={<Tentang />} />
                  <Route path="/kegiatan/:id" element={<KegiatanDetails />} />
                  <Route path="/umkm/:id" element={<UmkmDetails />} />
                  <Route
                    path="/admin/*"
                    element={
                      <PrivateRoute isAuthenticated={isAuthenticated}>
                        <AdminMain />
                      </PrivateRoute>
                    }
                  />
                  <Route path="*" element={<NoPage />} />
                </Routes>
              </div>
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
