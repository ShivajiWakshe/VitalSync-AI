import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

function HealthLineChart({ data }) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow">
      <h2 className="text-xl font-bold mb-4">Health Trend</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="heartRate" stroke="#16a34a" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default HealthLineChart;