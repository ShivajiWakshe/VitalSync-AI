import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

import BrutalChart from "../components/BrutalChart";
import GlassSidebar from "../components/GlassSidebar";
import AIScoreMeter from "../components/AIScoreMeter";
import ProductivityGauge from "../components/ProductivityGauge";
import AnimatedBlobs from "../components/AnimatedBlobs";

export default function Dashboard() {
  const navigate = useNavigate();

  const [user, setUser] = useState({ name: "", email: "" });

  const [stats, setStats] = useState({
    heartRate: 72,
    steps: 8200,
    focus: 5,
    calories: 480,
  });

  const [loaded, setLoaded] = useState(false);

  // Protect + Decode
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else {
      const decoded = jwtDecode(token);
      setUser({
        name: decoded.name,
        email: decoded.email,
      });
    }

    setTimeout(() => setLoaded(true), 300);
  }, [navigate]);

  // Simulated live update
  useEffect(() => {
    const interval = setInterval(() => {
      setStats({
        heartRate: 60 + Math.floor(Math.random() * 30),
        steps: 8000 + Math.floor(Math.random() * 2000),
        focus: 4 + Math.floor(Math.random() * 4),
        calories: 400 + Math.floor(Math.random() * 300),
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const getInitials = (name) => {
    if (!name) return "";
    const words = name.split(" ");
    if (words.length === 1) return words[0][0].toUpperCase();
    return words[0][0].toUpperCase() + words[1][0].toUpperCase();
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-yellow-200 via-pink-200 to-blue-200 font-bold overflow-x-hidden">

      <AnimatedBlobs />
      <GlassSidebar />

      <div className="ml-80 p-10 space-y-12">

        {/* HEADER */}
        <div className={`flex justify-between items-center transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}`}>

          <div className="flex items-center gap-6">

            <div className="w-16 h-16 flex items-center justify-center 
                            bg-white border-4 border-black 
                            shadow-[6px_6px_0px_#000] text-xl">
              {getInitials(user.name)}
            </div>

            <div>
              <h1 className="text-3xl">Welcome VitalSync AI Dashbord, {user.name} 👋</h1>
              <p className="text-gray-800">{user.email}</p>
            </div>
          </div>

          <button
            onClick={logout}
            className="bg-red-400 border-4 border-black px-6 py-3
                       shadow-[6px_6px_0px_#000]
                       hover:translate-x-1 hover:translate-y-1
                       hover:shadow-none transition"
          >
            LOGOUT
          </button>
        </div>

        {/* AI + PRODUCTIVITY */}
        <div className={`grid md:grid-cols-2 gap-10 transition-all duration-700 delay-200 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <AIScoreMeter stats={stats} />
          <ProductivityGauge />
        </div>

        {/* STATS */}
        <div className={`grid md:grid-cols-4 gap-8 transition-all duration-700 delay-300 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <StatCard title="Heart Rate" value={`${stats.heartRate} bpm`} color="bg-green-300" />
          <StatCard title="Steps" value={stats.steps} color="bg-blue-300" />
          <StatCard title="Focus Hours" value={stats.focus} color="bg-purple-300" />
          <StatCard title="Calories" value={`${stats.calories} kcal`} color="bg-orange-300" />
        </div>

        {/* CHART */}
        <div className={`transition-all duration-700 delay-500 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <BrutalChart />
        </div>

      </div>
    </div>
  );
}

function StatCard({ title, value, color }) {
  return (
    <div
      className={`${color} p-6 border-4 border-black 
      shadow-[8px_8px_0px_#000]
      hover:scale-105 hover:rotate-1
      transition duration-300`}
    >
      <h2 className="text-xl mb-2">{title}</h2>
      <p className="text-3xl">{value}</p>
    </div>
  );
}