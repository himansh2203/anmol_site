import "../css/admin.css";
import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const dummyStats = {
  totalOrders: 1200,
  cancelledOrders: 120,
  returnedOrders: 45,
  totalSales: 350000,
};

const salesData = [
  { name: "Week 1", sales: 5000 },
  { name: "Week 2", sales: 8000 },
  { name: "Week 3", sales: 12000 },
  { name: "Week 4", sales: 9000 },
];

const monthlyData = [
  { name: "Jan", sales: 40000 },
  { name: "Feb", sales: 35000 },
  { name: "Mar", sales: 50000 },
  { name: "Apr", sales: 42000 },
];

const yearlyData = [
  { name: "2022", sales: 300000 },
  { name: "2023", sales: 350000 },
  { name: "2024", sales: 400000 },
];

function Admin() {
  const [graphType, setGraphType] = useState("weekly");

  let data;
  if (graphType === "weekly") data = salesData;
  else if (graphType === "monthly") data = monthlyData;
  else data = yearlyData;

  return (
    <div className="admin-panel">
      <h2>Admin Dashboard</h2>
      <div className="admin-stats">
        <div className="stat-card">
          <h3>Total Orders</h3>
          <p>{dummyStats.totalOrders}</p>
        </div>
        <div className="stat-card">
          <h3>Cancelled Orders</h3>
          <p>{dummyStats.cancelledOrders}</p>
        </div>
        <div className="stat-card">
          <h3>Returned Orders</h3>
          <p>{dummyStats.returnedOrders}</p>
        </div>
        <div className="stat-card">
          <h3>Total Sales</h3>
          <p>₹{dummyStats.totalSales.toLocaleString()}</p>
        </div>
      </div>
      <div className="admin-graph-section">
        <div className="graph-controls">
          <button
            onClick={() => setGraphType("weekly")}
            className={graphType === "weekly" ? "active" : ""}
          >
            Weekly
          </button>
          <button
            onClick={() => setGraphType("monthly")}
            className={graphType === "monthly" ? "active" : ""}
          >
            Monthly
          </button>
          <button
            onClick={() => setGraphType("yearly")}
            className={graphType === "yearly" ? "active" : ""}
          >
            Yearly
          </button>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sales" fill="#16a085" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Admin;
