import Header from "../components/Header";
import Navbar from "../components/Navbar";

const Dokumen = () => {
  return (
    <div className="relative">
      <Header />
      <div className="sticky top-0 z-50 w-full bg-green-950">
        <Navbar />
      </div>
      Dokumen
    </div>
  );
};

export default Dokumen;
