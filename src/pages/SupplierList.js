import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAllSuppliers,
  deleteSupplier
} from "../services/ProductService";
import { exportSuppliersToPDF } from "../services/PdfService";
import { exportSuppliersToExcel } from "../services/ExcelService";
import { toast } from "react-toastify";
import "./SupplierList.css";

function SupplierList() {
  const [suppliers, setSuppliers] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    loadSuppliers();
  }, []);

  const loadSuppliers = async () => {
    try {
      const response = await getAllSuppliers();
      setSuppliers(response.data);
    } catch (error) {
      toast.error("Failed to Load Suppliers");
    }
  };

  const removeSupplier = async (id) => {

    const confirmDelete = window.confirm(
        "Are you sure you want to delete this supplier?"
    );

    if (!confirmDelete) {
        return;
    }

    try {
        await deleteSupplier(id);
        toast.success("Supplier Deleted Successfully");
        loadSuppliers();
    } catch (error) {
        toast.error("Delete Failed");
    }
};
  const filteredSuppliers = suppliers.filter((supplier) =>
    supplier.supplierName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="product-container">

      <div className="product-header">

        <h1>Supplier Management</h1>

        <div>

          <button
            className="add-btn"
            onClick={() => navigate("/add-supplier")}
          >
            + Add Supplier
          </button>

          &nbsp;

          <button
            className="add-btn"
            onClick={() => exportSuppliersToPDF(suppliers)}
          >
            Export PDF
          </button>

          &nbsp;

          <button
            className="add-btn"
            onClick={() => exportSuppliersToExcel(suppliers)}
          >
            Export Excel
          </button>

          &nbsp;

          <button
            className="add-btn"
            onClick={() => window.print()}
          >
            Print
          </button>

        </div>

      </div>

      <input
        className="search-box"
        type="text"
        placeholder="Search Supplier..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table className="product-table">

        <thead>
          <tr>
            <th>ID</th>
            <th>Supplier Name</th>
            <th>Company</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {filteredSuppliers.map((supplier) => (

            <tr key={supplier.id}>

              <td>{supplier.id}</td>
              <td>{supplier.supplierName}</td>
              <td>{supplier.companyName}</td>
              <td>{supplier.email}</td>
              <td>{supplier.phone}</td>
              <td>{supplier.address}</td>

              <td>

                <button
                  className="edit-btn"
                  onClick={() =>
                    navigate("/edit-supplier/" + supplier.id)
                  }
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => removeSupplier(supplier.id)}
                >
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default SupplierList;