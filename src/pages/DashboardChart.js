import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

import { Bar, Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

function DashboardChart({ products, suppliers, inventory }) {

  const barData = {
    labels: ["Products", "Suppliers", "Inventory"],
    datasets: [
      {
        label: "Warehouse Statistics",
        data: [products, suppliers, inventory],
        backgroundColor: [
          "#2563eb",
          "#10b981",
          "#f59e0b"
        ]
      }
    ]
  };

  const pieData = {
    labels: ["Products", "Suppliers", "Inventory"],
    datasets: [
      {
        data: [products, suppliers, inventory],
        backgroundColor: [
          "#2563eb",
          "#10b981",
          "#f59e0b"
        ]
      }
    ]
  };

  return (

    <div
      style={{
        display: "flex",
        gap: "30px",
        marginTop: "40px",
        flexWrap: "wrap"
      }}
    >

      <div
        style={{
          width: "500px",
          background: "white",
          padding: "20px",
          borderRadius: "15px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
        }}
      >
        <h2>Warehouse Statistics</h2>
        <Bar data={barData} />
      </div>

      <div
        style={{
          width: "400px",
          background: "white",
          padding: "20px",
          borderRadius: "15px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
        }}
      >
        <h2>Distribution</h2>
        <Pie data={pieData} />
      </div>

    </div>

  );
}

export default DashboardChart;