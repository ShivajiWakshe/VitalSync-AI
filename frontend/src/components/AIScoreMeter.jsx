import { useEffect, useState } from "react";
import API from "../utils/api";

export default function AIScoreMeter({ stats }) {
  const [scoreData, setScoreData] = useState({
    score: 70,
    status: "Good",
  });

  useEffect(() => {
    const fetchScore = async () => {
      try {
        const res = await API.post("/ai/predict", stats);
        setScoreData(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchScore();
  }, [stats]);

  return (
    <div className="bg-white p-6 border-4 border-black 
                    shadow-[8px_8px_0px_#000]">

      <h2 className="text-xl mb-4">AI Health Score</h2>

      <div className="w-full h-8 border-4 border-black bg-gray-200 relative">
        <div
          className="h-full bg-green-400 transition-all duration-700"
          style={{ width: `${scoreData.score}%` }}
        ></div>

        <span className="absolute inset-0 flex items-center justify-center font-bold">
          {scoreData.score}%
        </span>
      </div>

      <p className="mt-4 text-lg">{scoreData.status}</p>
    </div>
  );
}