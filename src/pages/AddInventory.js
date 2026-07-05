import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addInventory } from "../services/ProductService";
import { toast } from "react-toastify";
import "./FormStyle.css";

function AddInventory() {

    const navigate = useNavigate();

    const [inventory, setInventory] = useState({
        productName: "",
        transactionType: "",
        quantity: "",
        date: "",
        remarks: ""
    });

    const handleChange = (e) => {
        setInventory({
            ...inventory,
            [e.target.name]: e.target.value
        });
    };

    const saveInventory = async (e) => {
        e.preventDefault();

        try {
            await addInventory(inventory);
            toast.success("Inventory Added Successfully");
            navigate("/inventory");
        } catch (error) {
            toast.error("Failed to Add Inventory");
        }
    };

    return (
        <div className="form-page">

            <div className="form-card">

                <h2>Add Inventory</h2>

                <form onSubmit={saveInventory}>

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

                    <button className="save-btn" type="submit">
                        Save Inventory
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

export default AddInventory;