import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllProducts, deleteProduct } from "../services/ProductService";
import { exportProductsToPDF } from "../services/PdfService";
import { exportProductsToExcel } from "../services/ExcelService";
import { toast } from "react-toastify";
import "./ProductList.css";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const response = await getAllProducts();
      setProducts(response.data);
    } catch (error) {
      toast.error("Failed to Load Products");
    }
  };

  const removeProduct = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      await deleteProduct(id);
      toast.success("Product Deleted Successfully");
      loadProducts();
    } catch (error) {
      toast.error("Delete Failed");
    }
  };

  const filteredProducts = products.filter((product) =>
    product.productName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="product-container">
      <div className="product-header">
        <h1>Product Management</h1>

        <div>
          <button className="add-btn" onClick={() => navigate("/add-product")}>
            + Add Product
          </button>

          &nbsp;

          <button className="add-btn" onClick={() => exportProductsToPDF(products)}>
            Export PDF
          </button>

          &nbsp;

          <button className="add-btn" onClick={() => exportProductsToExcel(products)}>
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
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table className="product-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.productName}</td>
              <td>{product.category}</td>
              <td>{product.quantity}</td>
              <td>{product.price}</td>

              <td>
                <button
                  className="edit-btn"
                  onClick={() => navigate("/edit-product/" + product.id)}
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => removeProduct(product.id)}
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

export default ProductList;