import {
  AiOutlineEdit,
  AiOutlineDelete,
  AiOutlineDownload,
} from "react-icons/ai";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

const AdminDokumen = () => {
  const navigate = useNavigate();

  const [dokumenData, setDokumenData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const handleDownload = (fileUrl) => {
    window.open(`https://visitdesakenteng.id/download/${fileUrl}`, "_blank");
  };

  useEffect(() => {
    setIsLoading(true);
    fetch("https://api.testing.visitdesakenteng.id/documents")
      .then((response) => response.json())
      .then((data) => {
        let filtered = data;
        if (searchQuery) {
          filtered = filtered.filter((dokumen) =>
            dokumen.name_document
              .toLowerCase()
              .includes(searchQuery.toLowerCase())
          );
        }
        setDokumenData(filtered);
        setIsLoading(false);
      });
  }, [searchQuery]);

  const handleAction = (id, action) => {
    if (action === "delete") {
      const confirmDelete = window.confirm(
        "Apakah Anda yakin ingin menghapus data ini?"
      );
      if (confirmDelete) {
        fetch(`https://api.testing.visitdesakenteng.id/documents/${id}`, {
          method: "DELETE",
        })
          .then((response) => {
            if (!response.ok) {
              throw response;
            }
            return response.json();
          })
          .then((data) => {
            console.log(data);
            setDokumenData(dokumenData.filter((dokumen) => dokumen.id !== id));
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }
    }

    if (action === "edit") {
      navigate(`/admin/dokumen/${id}`);
    }
    // Handle other actions here
  };

  const handleTambahDokumen = () => {
    navigate("/admin/dokumen/baru");
  };

  return (
    <div className="admin-dokumen">
      <div className="flex justify-between mb-4">
        <h2 className="mb-4 text-2xl font-bold">Dokumen</h2>
        <button
          className="px-4 py-2 ml-4 text-white bg-[#1d4a27] duration-300 rounded-lg hover:bg-[#091806] focus:outline-none"
          onClick={handleTambahDokumen}
        >
          Tambah Dokumen
        </button>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          {/* Search box */}
          <input
            type="text"
            placeholder="Cari berdasarkan nama dokumen..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full max-w-md px-4 py-2 mb-4 border border-gray-300 rounded-full focus:outline-none"
          />
        </div>

        {isLoading ? (
          <div className="flex justify-center">
            <ClipLoader color="#004b23" />
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-center">ID</th>
                  <th className="px-4 py-2 text-center">Nama Dokumen</th>
                  <th className="px-4 py-2 text-center">Tanggal Dibuat</th>
                  <th className="px-4 py-2 text-center">Tindakan</th>
                </tr>
              </thead>
              <tbody>
                {dokumenData.map((dokumen) => (
                  <tr
                    key={dokumen.id}
                    className="border-b hover:bg-gray-100 transition-colors duration-200"
                  >
                    <td className="px-4 py-2 text-center">{dokumen.id}</td>
                    <td className="px-4 py-2 text-left">
                      {dokumen.name_document}
                    </td>
                    <td className="px-4 py-2 text-center">
                      {new Date(dokumen.created_at).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-2 text-center">
                      <div className="flex items-center justify-center">
                        <button
                          className="mr-2 text-[#3aa227] hover:text-[#2d7c1e] transition-colors duration-200"
                          onClick={() => handleDownload(dokumen.file_document)}
                        >
                          <AiOutlineDownload className="w-5 h-5" />
                        </button>
                        <button
                          className="mr-2 text-blue-500 hover:text-blue-700 transition-colors duration-200"
                          onClick={() => handleAction(dokumen.id, "edit")}
                        >
                          <AiOutlineEdit className="w-5 h-5" />
                        </button>
                        <button
                          className="text-red-500 hover:text-red-700 transition-colors duration-200"
                          onClick={() => handleAction(dokumen.id, "delete")}
                        >
                          <AiOutlineDelete className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDokumen;
