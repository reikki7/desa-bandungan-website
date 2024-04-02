import { useState, useEffect } from "react";
import InfoCard from "../components/InfoCard";
import { useSearchParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

const Umkm = () => {
  const [umkm, setUmkm] = useState([]);
  const [filter, setFilter] = useState("none");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams({ search: "" });
  const [isMobile, setIsMobile] = useState(false);
  const [imageLinks, setImageLinks] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedData, setDisplayedData] = useState([]);
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  const itemsPerPage = 5;

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchQuery(value);
    setSearchParams({ search: value });
  };

  useEffect(() => {
    setLoading(true);
    fetch("https://api.testing.visitdesakenteng.id/umkm")
      .then((response) => response.json())
      .then((data) => {
        let filteredData;
        switch (filter) {
          case "Pangan":
            filteredData = data.filter(
              (umkm) => umkm.category_umkm === "Pangan"
            );
            break;
          case "Retail":
            filteredData = data.filter(
              (umkm) => umkm.category_umkm === "Retail"
            );
            break;
          case "Kerajinan":
            filteredData = data.filter(
              (umkm) => umkm.category_umkm === "Kerajinan"
            );
            break;
          case "Edukasi":
            filteredData = data.filter(
              (umkm) => umkm.category_umkm === "Edukasi"
            );
            break;
          case "Kesenian":
            filteredData = data.filter(
              (umkm) => umkm.category_umkm === "Kesenian"
            );
            break;
          default:
            filteredData = data;
        }
        setFilteredData(filteredData);
        setUmkm(filteredData);
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        setDisplayedData(filteredData.slice(startIndex, endIndex));
        setLoading(false);
      });
  }, [filter, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filter]);

  useEffect(() => {
    setLoading(true);
    if (filteredData.length > 0) {
      fetch(`https://api.testing.visitdesakenteng.id/umkm_images`)
        .then((response) => response.json())
        .then((images) => {
          const filteredImages = images.filter((image) => image?.umkm_id);
          setImageLinks(filteredImages);
          setLoading(false);
        });
    }
  }, [filteredData]);

  useEffect(() => {
    const results = umkm.filter((umkm) =>
      umkm.name_umkm.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  }, [searchQuery, umkm]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMediumScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setDisplayedData(filteredData.slice(startIndex, endIndex));
  };

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <div>
      <div className="flex flex-col items-center justify-center mx-4 mt-5">
        <input
          type="text"
          placeholder="Cari berdasarkan nama UMKM..."
          value={searchQuery}
          onChange={handleSearch}
          className="w-full max-w-5xl px-6 py-2 border border-gray-300 rounded-full text-xlg h-14 focus:outline-none"
        />

        {isMobile ? (
          <div className="flex items-center justify-center mt-4 -mb-4 overflow-hidden bg-white shadow-md rounded-2xl">
            <button
              type="button"
              className={`px-4 py-2 text-xs font-bold text-white hover:bg-[#004b23]/80 ${filter === "none" ? "bg-[#004b23]/80" : "bg-[#004b23]"}`}
              onClick={() => setShowFilterMenu(!showFilterMenu)}
            >
              Filter
            </button>
            {showFilterMenu && (
              <div className="absolute z-10 bg-white border border-gray-300 rounded-md top-12">
                <button
                  type="button"
                  className={`block w-full py-2 px-4 text-sm text-left hover:bg-gray-100 ${filter === "none" ? "bg-gray-100" : ""}`}
                  onClick={() => {
                    setFilter("none");
                    setShowFilterMenu(false);
                  }}
                >
                  Semua
                </button>
                <button
                  type="button"
                  className={`block w-full py-2 px-4 text-sm text-left hover:bg-gray-100 ${filter === "Pangan" ? "bg-gray-100" : ""}`}
                  onClick={() => {
                    setFilter("Pangan");
                    setShowFilterMenu(false);
                  }}
                >
                  Pangan
                </button>
                <button
                  type="button"
                  className={`block w-full py-2 px-4 text-sm text-left hover:bg-gray-100 ${filter === "Retail" ? "bg-gray-100" : ""}`}
                  onClick={() => {
                    setFilter("Retail");
                    setShowFilterMenu(false);
                  }}
                >
                  Retail
                </button>
                <button
                  type="button"
                  className={`block w-full py-2 px-4 text-sm text-left hover:bg-gray-100 ${filter === "Kerajinan" ? "bg-gray-100" : ""}`}
                  onClick={() => {
                    setFilter("Kerajinan");
                    setShowFilterMenu(false);
                  }}
                >
                  Kerajinan
                </button>
                <button
                  type="button"
                  className={`block w-full py-2 px-4 text-sm text-left hover:bg-gray-100 ${filter === "Edukasi" ? "bg-gray-100" : ""}`}
                  onClick={() => {
                    setFilter("Edukasi");
                    setShowFilterMenu(false);
                  }}
                >
                  Edukasi
                </button>
                <button
                  type="button"
                  className={`block w-full py-2 px-4 text-sm text-left hover:bg-gray-100 ${filter === "Kesenian" ? "bg-gray-100" : ""}`}
                  onClick={() => {
                    setFilter("Kesenian");
                    setShowFilterMenu(false);
                  }}
                >
                  Kesenian
                </button>
              </div>
            )}
          </div>
        ) : isMediumScreen ? (
          <div className="flex items-center justify-center mt-4 -mb-4 overflow-hidden bg-white shadow-md rounded-2xl">
            <button
              type="button"
              className={`px-4 py-2 text-xs font-bold text-white hover:bg-[#004b23]/80 ${filter === "none" ? "bg-[#004b23]/80" : "bg-[#004b23]"}`}
              onClick={() => setFilter("none")}
            >
              Semua
            </button>
            <button
              type="button"
              className={`px-4 py-2 text-xs font-bold text-white hover:bg-[#004b23]/80 ${filter === "Pangan" ? "bg-[#004b23]/80" : "bg-[#004b23]"}`}
              onClick={() => setFilter("Pangan")}
            >
              Pangan
            </button>
            <button
              type="button"
              className={`px-4 py-2 text-xs font-bold text-white hover:bg-[#004b23]/80 ${filter === "Retail" ? "bg-[#004b23]/80" : "bg-[#004b23]"}`}
              onClick={() => setFilter("Retail")}
            >
              Retail
            </button>
            <button
              type="button"
              className={`px-4 py-2 text-xs font-bold text-white hover:bg-[#004b23]/80 ${filter === "Kerajinan" ? "bg-[#004b23]/80" : "bg-[#004b23]"}`}
              onClick={() => setFilter("Kerajinan")}
            >
              Kerajinan
            </button>
            <button
              type="button"
              className={`px-4 py-2 text-xs font-bold text-white hover:bg-[#004b23]/80 ${filter === "Edukasi" ? "bg-[#004b23]/80" : "bg-[#004b23]"}`}
              onClick={() => setFilter("Edukasi")}
            >
              Edukasi
            </button>
            <button
              type="button"
              className={`px-4 py-2 text-xs font-bold text-white hover:bg-[#004b23]/80 ${filter === "Kesenian" ? "bg-[#004b23]/80" : "bg-[#004b23]"}`}
              onClick={() => setFilter("Kesenian")}
            >
              Kesenian
            </button>
          </div>
        ) : (
          <div className="relative flex items-center justify-center mt-5 mr-4 space-x-4 content">
            <div
              className={`duration-[360ms] transition-all text-[#004b23] font-bold text-nowrap text-center absolute flex justify-center z-10 items-center text-sm bg-white h-12 rounded-full ${filter === "none" ? "w-20 mr-[448px]" : filter === "Pangan" ? "w-24 mr-[267px]" : filter == "Retail" ? "w-[85px] mr-[105px]" : filter == "Kerajinan" ? "w-28 -mr-[73px]" : filter == "Edukasi" ? "w-24 -mr-[266px]" : "w-[110px] -mr-[450px]"}`}
            >
              <div
                className={`absolute transition-opacity duration-300 ${filter !== "none" ? "opacity-0" : "opacity-100"}`}
                style={{ height: "1.5rem", lineHeight: "1.5rem" }}
              >
                Semua
              </div>
              <div
                className={`absolute transition-opacity duration-300 ${filter !== "Pangan" ? "opacity-0" : "opacity-100"}`}
                style={{ height: "1.5rem", lineHeight: "1.5rem" }}
              >
                Pangan
              </div>
              <div
                className={`absolute transition-opacity duration-300 ${filter !== "Retail" ? "opacity-0" : "opacity-100"}`}
                style={{ height: "1.5rem", lineHeight: "1.5rem" }}
              >
                Retail
              </div>
              <div
                className={`absolute transition-opacity duration-300 ${filter !== "Kerajinan" ? "opacity-0" : "opacity-100"}`}
                style={{ height: "1.5rem", lineHeight: "1.5rem" }}
              >
                Kerajinan
              </div>
              <div
                className={`absolute transition-opacity duration-300 ${filter !== "Edukasi" ? "opacity-0" : "opacity-100"}`}
                style={{ height: "1.5rem", lineHeight: "1.5rem" }}
              >
                Edukasi
              </div>
              <div
                className={`absolute transition-opacity duration-300 ${filter !== "Kesenian" ? "opacity-0" : "opacity-100"}`}
                style={{ height: "1.5rem", lineHeight: "1.5rem" }}
              >
                Kesenian
              </div>
            </div>
            <div className="p-2 w-[553px] rounded-full bg-[#004b23] relative">
              <button
                onClick={() => setFilter("none")}
                className={`px-4 py-2 duration-300 font-bold rounded-full ${filter === "none" ? "opacity-0" : "text-white"}`}
              >
                Semua
              </button>
              <button
                onClick={() => setFilter("Pangan")}
                className={`px-4 py-2 duration-300 font-bold rounded-full ${filter === "Pangan" ? "opacity-0" : "text-white"}`}
              >
                Pangan
              </button>
              <button
                onClick={() => setFilter("Retail")}
                className={`px-4 py-2 duration-300 font-bold rounded-full ${filter === "Retail" ? "opacity-0" : " text-white"}`}
              >
                Retail
              </button>
              <button
                onClick={() => setFilter("Kerajinan")}
                className={`px-4 py-2 duration-300 font-bold rounded-full ${filter === "Kerajinan" ? "opacity-0" : "text-white"}`}
              >
                Kerajinan
              </button>
              <button
                onClick={() => setFilter("Edukasi")}
                className={`px-4 py-2 duration-300 font-bold rounded-full ${filter === "Edukasi" ? "opacity-0" : "text-white"}`}
              >
                Edukasi
              </button>
              <button
                onClick={() => setFilter("Kesenian")}
                className={`px-4 py-2 duration-300 font-bold rounded-full ${filter === "Kesenian" ? "opacity-0" : "text-white"}`}
              >
                Kesenian
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="min-h-screen mx-8">
        {loading ? (
          <div className="flex justify-center mt-10">
            <ClipLoader color="#004b23" loading={loading} size={50} />
          </div>
        ) : (
          (searchQuery.length > 0 ? searchResults : displayedData).map(
            (umkm) => {
              const filteredImages = imageLinks.filter(
                (image) => image.umkm_id === umkm.id
              );
              const imageUrl =
                filteredImages.length > 0
                  ? filteredImages[0].name
                  : "https://via.placeholder.com/320x220";
              return (
                <InfoCard
                  key={umkm.id}
                  id={umkm.id}
                  name={umkm.name_umkm}
                  date={umkm.date_created_umkm}
                  type={umkm.category_umkm}
                  description={umkm.description_umkm}
                  image={imageUrl}
                  link="umkm"
                  page="umkm"
                />
              );
            }
          )
        )}
      </div>

      <div className="flex justify-center mt-4 mb-6">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(
          (pageNumber) => (
            <button
              key={pageNumber}
              className={`mx-1 px-3 py-1 rounded ${currentPage === pageNumber ? "bg-[#004b23] text-white" : "bg-gray-200"}`}
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Umkm;
