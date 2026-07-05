import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    getProductById,
    updateProduct
} from "../services/ProductService";
import { toast } from "react-toastify";
import "./FormStyle.css";

function EditProduct() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState({
        productName: "",
        category: "",
        quantity: "",
        price: ""
    });

    useEffect(() => {
        loadProduct();
    }, []);

    const loadProduct = async () => {
        const response = await getProductById(id);
        setProduct(response.data);
    };

    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    };

    const updateData = async (e) => {
        e.preventDefault();

        try {
            await updateProduct(id, product);
            toast.success("Product Updated Successfully");
            navigate("/products");
        } catch (error) {
            toast.error("Update Failed");
        }
    };

    return (
        <div className="form-page">

            <div className="form-card">

                <h2>Edit Product</h2>

                <form onSubmit={updateData}>

                    <div className="form-group">
                        <label>Product Name</label>
                        <input
                            type="text"
                            name="productName"
                            value={product.productName}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Category</label>
                        <input
                            type="text"
                            name="category"
                            value={product.category}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Quantity</label>
                        <input
                            type="number"
                            name="quantity"
                            value={product.quantity}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Price</label>
                        <input
                            type="number"
                            name="price"
                            value={product.price}
                            onChange={handleChange}
                        />
                    </div>

                    <button className="save-btn">
                        Update Product
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

export default EditProduct;