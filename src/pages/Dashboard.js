import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LowStockAlert from "./LowStockAlert";
import {
  getAllProducts,
  getAllSuppliers,
  getAllInventory
} from "../services/ProductService";

import DashboardChart from "./DashboardChart";
import RecentProducts from "./RecentProducts";
import RecentSuppliers from "./RecentSuppliers";

import "./Dashboard.css";
import "./DashboardCards.css";
import "./Topbar.css";

function Dashboard() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    const productResponse = await getAllProducts();
    const supplierResponse = await getAllSuppliers();
    const inventoryResponse = await getAllInventory();

    setProducts(productResponse.data);
    setSuppliers(supplierResponse.data);
    setInventory(inventoryResponse.data);
  };

  return (
    <div className="dashboard">
      <div className="sidebar">
        <h2 className="logo">Warehouse</h2>

        <button onClick={() => navigate("/dashboard")}>📊 Dashboard</button>
        <button onClick={() => navigate("/products")}>📦 Products</button>
        <button onClick={() => navigate("/suppliers")}>🚚 Suppliers</button>
        <button onClick={() => navigate("/inventory")}>📋 Inventory</button>
        <button onClick={() => navigate("/")}>🚪 Logout</button>
      </div>

      <div className="content">
        <div className="topbar">
          <div className="topbar-title">
            <h1>Warehouse Management Dashboard</h1>
            <p>Manage your warehouse efficiently</p>
          </div>

          <div className="topbar-actions">
            <input type="text" placeholder="Search..." className="topbar-search" />
            <div className="topbar-icon">🔔</div>
            <div className="topbar-profile">👤 Admin</div>
          </div>
        </div>

        <div className="stats-section">
          <div className="stats-grid">
            <div className="stat-card" onClick={() => navigate("/products")}>
              <div className="stat-icon">📦</div>
              <div className="stat-title">Total Products</div>
              <div className="stat-number">{products.length}</div>
            </div>

            <div className="stat-card" onClick={() => navigate("/suppliers")}>
              <div className="stat-icon">🚚</div>
              <div className="stat-title">Total Suppliers</div>
              <div className="stat-number">{suppliers.length}</div>
            </div>

            <div className="stat-card" onClick={() => navigate("/inventory")}>
              <div className="stat-icon">📋</div>
              <div className="stat-title">Inventory Records</div>
              <div className="stat-number">{inventory.length}</div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">📈</div>
              <div className="stat-title">Reports</div>
              <div className="stat-number">Soon</div>
            </div>
          </div>
        </div>

        <DashboardChart
          products={products.length}
          suppliers={suppliers.length}
          inventory={inventory.length}
        />

        <div style={{ display: "flex", gap: "25px", marginTop: "30px" }}>
          <RecentProducts products={products} />
          <RecentSuppliers suppliers={suppliers} />
        </div>
        <div style={{ marginTop: "30px" }}>
    <LowStockAlert products={products} />
</div>
      </div>
    </div>
  );
}

export default Dashboard;