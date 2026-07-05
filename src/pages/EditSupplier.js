import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getSupplierById,
  updateSupplier
} from "../services/ProductService";
import { toast } from "react-toastify";
import "./FormStyle.css";

function EditSupplier() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [supplier, setSupplier] = useState({
    id: "",
    supplierName: "",
    companyName: "",
    email: "",
    phone: "",
    address: ""
  });

  useEffect(() => {
    loadSupplier();
  }, []);

  const loadSupplier = async () => {
    try {
      const response = await getSupplierById(id);
      setSupplier(response.data);
    } catch (error) {
      toast.error("Failed to Load Supplier");
    }
  };

  const handleChange = (e) => {
    setSupplier({
      ...supplier,
      [e.target.name]: e.target.value
    });
  };

  const updateData = async (e) => {
    e.preventDefault();

    try {
      await updateSupplier(supplier);
      toast.success("Supplier Updated Successfully");
      navigate("/suppliers");
    } catch (error) {
      toast.error("Update Failed");
    }
  };

  return (
    <div className="form-page">
      <div className="form-card">
        <h2>Edit Supplier</h2>

        <form onSubmit={updateData}>
          <div className="form-group">
            <label>Supplier Name</label>
            <input
              name="supplierName"
              type="text"
              value={supplier.supplierName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Company Name</label>
            <input
              name="companyName"
              type="text"
              value={supplier.companyName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              name="email"
              type="email"
              value={supplier.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              name="phone"
              type="text"
              value={supplier.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Address</label>
            <input
              name="address"
              type="text"
              value={supplier.address}
              onChange={handleChange}
              required
            />
          </div>

          <button className="save-btn" type="submit">
            Update Supplier
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

export default EditSupplier;