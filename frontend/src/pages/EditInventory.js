import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getInventoryById,
  updateInventory
} from "../services/ProductService";
import { toast } from "react-toastify";
import "./FormStyle.css";

function EditInventory() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [inventory, setInventory] = useState({
    id: "",
    productName: "",
    transactionType: "",
    quantity: "",
    date: "",
    remarks: ""
  });

  useEffect(() => {
    loadInventory();
  }, []);

  const loadInventory = async () => {
    try {
      const response = await getInventoryById(id);
      setInventory(response.data);
    } catch (error) {
      toast.error("Failed to Load Inventory");
    }
  };

  const handleChange = (e) => {
    setInventory({
      ...inventory,
      [e.target.name]: e.target.value
    });
  };

  const updateData = async (e) => {
    e.preventDefault();

    try {
      await updateInventory(inventory);
      toast.success("Inventory Updated Successfully");
      navigate("/inventory");
    } catch (error) {
      toast.error("Update Failed");
    }
  };

  return (
    <div className="form-page">
      <div className="form-card">

        <h2>Edit Inventory</h2>

        <form onSubmit={updateData}>

          <div className="form-group">
            <label>Product Name</label>
            <input
              type="text"
              name="productName"
              value={inventory.productName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Transaction Type</label>
            <select
              name="transactionType"
              value={inventory.transactionType}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="IN">IN</option>
              <option value="OUT">OUT</option>
            </select>
          </div>

          <div className="form-group">
            <label>Quantity</label>
            <input
              type="number"
              name="quantity"
              value={inventory.quantity}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Date</label>
            <input
              type="date"
              name="date"
              value={inventory.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Remarks</label>
            <textarea
              name="remarks"
              rows="4"
              value={inventory.remarks}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="save-btn">
            Update Inventory
          </button>

          <button
            type="button"
            className="cancel-btn"
            onClick={() => navigate("/inventory")}
          >
            Cancel
          </button>

        </form>

      </div>
    </div>
  );
}

export default EditInventory;