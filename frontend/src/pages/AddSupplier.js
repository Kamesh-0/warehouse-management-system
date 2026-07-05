import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addSupplier } from "../services/ProductService";
import { toast } from "react-toastify";
import "./FormStyle.css";

function AddSupplier() {
  const navigate = useNavigate();

  const [supplier, setSupplier] = useState({
    supplierName: "",
    companyName: "",
    email: "",
    phone: "",
    address: ""
  });

  const handleChange = (e) => {
    setSupplier({
      ...supplier,
      [e.target.name]: e.target.value
    });
  };

  const saveSupplier = async (e) => {
    e.preventDefault();

    try {
      await addSupplier(supplier);
      toast.success("Supplier Added Successfully");
      navigate("/suppliers");
    } catch (error) {
      toast.error("Failed to Add Supplier");
    }
  };

  return (
    <div className="form-page">
      <div className="form-card">
        <h2>Add Supplier</h2>

        <form onSubmit={saveSupplier}>
          <div className="form-group">
            <label>Supplier Name</label>
            <input
              type="text"
              name="supplierName"
              value={supplier.supplierName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Company Name</label>
            <input
              type="text"
              name="companyName"
              value={supplier.companyName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={supplier.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="text"
              name="phone"
              value={supplier.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={supplier.address}
              onChange={handleChange}
              required
            />
          </div>

          <button className="save-btn" type="submit">
            Save Supplier
          </button>

          <button
            type="button"
            className="cancel-btn"
            onClick={() => navigate("/suppliers")}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddSupplier;