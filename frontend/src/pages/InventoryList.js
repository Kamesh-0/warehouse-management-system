import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAllInventory,
  deleteInventory
} from "../services/ProductService";
import { exportInventoryToPDF } from "../services/PdfService";
import { exportInventoryToExcel } from "../services/ExcelService";
import { toast } from "react-toastify";
import "./InventoryList.css";

function InventoryList() {
  const [inventory, setInventory] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    loadInventory();
  }, []);

  const loadInventory = async () => {
    try {
      const response = await getAllInventory();
      setInventory(response.data);
    } catch (error) {
      toast.error("Failed to Load Inventory");
    }
  };

  const removeInventory = async (id) => {

    const confirmDelete = window.confirm(
        "Are you sure you want to delete this inventory record?"
    );

    if (!confirmDelete) {
        return;
    }

    try {
        await deleteInventory(id);
        toast.success("Inventory Deleted Successfully");
        loadInventory();
    } catch (error) {
        toast.error("Delete Failed");
    }
};

  const filteredInventory = inventory.filter((item) =>
    item.productName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="inventory-container">
      <div className="inventory-header">
        <h1>Inventory Management</h1>

        <div>
          <button className="add-btn" onClick={() => navigate("/add-inventory")}>
            + Add Inventory
          </button>

          &nbsp;

          <button className="add-btn" onClick={() => exportInventoryToPDF(inventory)}>
            Export PDF
          </button>

          &nbsp;

          <button className="add-btn" onClick={() => exportInventoryToExcel(inventory)}>
            Export Excel
          </button>

          &nbsp;

          <button className="add-btn" onClick={() => window.print()}>
            Print
          </button>
        </div>
      </div>

      <input
        className="search-box"
        type="text"
        placeholder="Search Product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table className="inventory-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product</th>
            <th>Transaction</th>
            <th>Quantity</th>
            <th>Date</th>
            <th>Remarks</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredInventory.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.productName}</td>
              <td>{item.transactionType}</td>
              <td>{item.quantity}</td>
              <td>{item.date}</td>
              <td>{item.remarks}</td>

              <td>
                <button
                  className="edit-btn"
                  onClick={() => navigate("/edit-inventory/" + item.id)}
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => removeInventory(item.id)}
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

export default InventoryList;