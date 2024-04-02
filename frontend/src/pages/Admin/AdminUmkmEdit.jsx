import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const AdminUmkmEdit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name_umkm: "",
        category_umkm: "",
        owner_umkm: "",
        description_umkm: "",
        date_created_umkm: "",
        address_umkm: "",
        contact_umkm: "",
    });

    useEffect(() => {
        if (id) {
            fetchUmkmData(id);
        }
    }, [id]);

    const fetchUmkmData = async (id) => {
        try {
            const response = await fetch(
                `https://api.testing.visitdesakenteng.id/umkm/${id}`
            );
            const data = await response.json();
            setFormData({
                name_umkm: data.name_umkm,
                category_umkm: data.category_umkm,
                owner_umkm: data.owner_umkm,
                description_umkm: data.description_umkm,
                date_created_umkm: data.date_created_umkm,
                address_umkm: data.address_umkm,
                contact_umkm: data.contact_umkm,
            });
        } catch (error) {
            console.error("Error fetching UMKM data:", error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const requestMethod = id ? "PATCH" : "POST";
        const requestUrl = id
            ? `https://api.testing.visitdesakenteng.id/umkm/${id}`
            : "https://api.testing.visitdesakenteng.id/umkm";

        try {
            const response = await fetch(requestUrl, {
                method: requestMethod,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                navigate("/admin/umkm");
            } else {
                console.error("Error submitting data:", response.status);
            }
        } catch (error) {
            console.error("Error submitting data:", error);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    let date_created_umkm = new Date(formData.date_created_umkm);
    let year = date_created_umkm.getFullYear();
    let month = ("0" + (date_created_umkm.getMonth() + 1)).slice(-2); // Months are 0 based index
    let day = ("0" + date_created_umkm.getDate()).slice(-2);

    let formattedDate = `${year}-${month}-${day}`;

    return (
        <div className="mx-auto max-w-7xl">
            <h2 className="p-2 text-2xl font-bold">
                {id ? "Edit UMKM" : "Tambah UMKM"}
            </h2>
            <form
                onSubmit={handleSubmit}
                className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md"
            >
                <div className="mb-4">
                    <label
                        htmlFor="name_umkm"
                        className="block mb-2 font-bold text-gray-700"
                    >
                        Nama UMKM
                    </label>
                    <input
                        type="text"
                        id="name_umkm"
                        name="name_umkm"
                        value={formData.name_umkm}
                        onChange={handleChange}
                        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="category_umkm"
                        className="block mb-2 font-bold text-gray-700"
                    >
                        Kategori UMKM
                    </label>
                    <select
                        id="category_umkm"
                        name="category_umkm"
                        value={formData.category_umkm}
                        onChange={handleChange}
                        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        required
                    >
                        <option value="">Pilih Kategori UMKM</option>
                        <option value="Pangan">Pangan</option>
                        <option value="Retail">Retail</option>
                        <option value="Kerajinan">Kerajinan</option>
                        <option value="Edukasi">Edukasi</option>
                        <option value="Kesenian">Kesenian</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="owner_umkm"
                        className="block mb-2 font-bold text-gray-700"
                    >
                        Pemilik UMKM
                    </label>
                    <input
                        type="text"
                        id="owner_umkm"
                        name="owner_umkm"
                        value={formData.owner_umkm}
                        onChange={handleChange}
                        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="description_umkm"
                        className="block mb-2 font-bold text-gray-700"
                    >
                        Deskripsi UMKM
                    </label>
                    <textarea
                        id="description_umkm"
                        name="description_umkm"
                        value={formData.description_umkm}
                        onChange={handleChange}
                        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        rows={10}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="date_created_umkm"
                        className="block mb-2 font-bold text-gray-700"
                    >
                        Tanggal Dibuat
                    </label>
                    <input
                        type="date"
                        id="date_created_umkm"
                        name="date_created_umkm"
                        value={formattedDate}
                        onChange={handleChange}
                        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="address_umkm"
                        className="block mb-2 font-bold text-gray-700"
                    >
                        Alamat UMKM
                    </label>
                    <input
                        type="text"
                        id="address_umkm"
                        name="address_umkm"
                        value={formData.address_umkm}
                        onChange={handleChange}
                        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="contact_umkm"
                        className="block mb-2 font-bold text-gray-700"
                    >
                        Nomor Telepon UMKM
                    </label>
                    <input
                        type="text"
                        id="contact_umkm"
                        name="contact_umkm"
                        value={formData.contact_umkm}
                        onChange={handleChange}
                        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="px-4 py-2 font-bold text-white bg-[#004b23] rounded duration-200 hover:bg-[#176312] focus:outline-none focus:shadow-outline"
                    >
                        {id ? "Update UMKM" : "Tambah UMKM"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AdminUmkmEdit;
