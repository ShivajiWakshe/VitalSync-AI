import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useState, useEffect } from "react";

export default function BrutalChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const generateData = () => {
      const newData = Array.from({ length: 7 }, (_, i) => ({
        day: `Day ${i + 1}`,
        health: 60 + Math.floor(Math.random() * 40),
      }));
      setData(newData);
    };

    generateData();
    const interval = setInterval(generateData, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white p-8 border-4 border-black shadow-[10px_10px_0px_#000]">
      <h2 className="text-2xl mb-4">Weekly Health Trend</h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="day" stroke="#000" />
          <YAxis stroke="#000" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="health"
            stroke="#000"
            strokeWidth={4}
            dot={{ stroke: "#000", strokeWidth: 3 }}
            isAnimationActive={true}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}