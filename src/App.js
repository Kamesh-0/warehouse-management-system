import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ProductList from "./pages/ProductList";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import SupplierList from "./pages/SupplierList";
import AddSupplier from "./pages/AddSupplier";
import EditSupplier from "./pages/EditSupplier";
import InventoryList from "./pages/InventoryList";
import AddInventory from "./pages/AddInventory";
import ForgotPassword from "./pages/ForgotPassword";
import EditInventory from "./pages/EditInventory";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
      
  <Route path="/" element={<Login />} />
  <Route path="/register" element={<Register />} />
  <Route path="/dashboard" element={<Dashboard />} />
  <Route path="/products" element={<ProductList />} />
  <Route path="/add-product" element={<AddProduct />} />
  <Route path="/edit-product/:id" element={<EditProduct />} />
<Route path="/add-supplier" element={<AddSupplier />} />
  <Route path="/suppliers" element={<SupplierList />} />
  <Route path="/edit-supplier/:id" element={<EditSupplier />} />
  <Route path="/inventory" element={<InventoryList />} />
  <Route path="/add-inventory" element={<AddInventory />} />
  <Route path="/forgot-password" element={<ForgotPassword />} />
  <Route path="/edit-inventory/:id" element={<EditInventory />} />
</Routes>
<ToastContainer
    position="top-right"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop
    closeOnClick
    pauseOnHover
/>

    </BrowserRouter>
  );
}

export default App;