import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../services/ProductService";
import { toast } from "react-toastify";
import "./FormStyle.css";

function AddProduct() {

    const navigate = useNavigate();

    const [product, setProduct] = useState({
        productName: "",
        category: "",
        quantity: "",
        price: ""
    });

    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    };

    const saveProduct = async (e) => {
        e.preventDefault();

        try {
            await addProduct(product);
            toast.success("Product Added Successfully");
            navigate("/products");
        } catch (error) {
            toast.error("Failed to Add Product");
        }
    };

    return (
        <div className="form-page">
            <div className="form-card">

                <h2>Add Product</h2>

                <form onSubmit={saveProduct}>

                    <div className="form-group">
                        <label>Product Name</label>
                        <input
                            type="text"
                            name="productName"
                            value={product.productName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Category</label>
                        <input
                            type="text"
                            name="category"
                            value={product.category}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Quantity</label>
                        <input
                            type="number"
                            name="quantity"
                            value={product.quantity}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Price</label>
                        <input
                            type="number"
                            name="price"
                            value={product.price}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button className="save-btn">
                        Save Product
                    </button>

                    <button
                        type="button"
                        className="cancel-btn"
                        onClick={() => navigate("/products")}
                    >
                        Cancel
                    </button>

                </form>

            </div>
        </div>
    );
}

export default AddProduct;