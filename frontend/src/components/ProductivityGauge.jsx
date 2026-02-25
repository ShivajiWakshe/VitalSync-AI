import { useEffect, useState } from "react";

export default function ProductivityGauge() {
  const [progress, setProgress] = useState(65);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(50 + Math.floor(Math.random() * 50));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const radius = 70;
  const stroke = 10;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset =
    circumference - (progress / 100) * circumference;

  return (
    <div className="bg-white p-6 border-4 border-black 
                    shadow-[8px_8px_0px_#000] flex flex-col items-center">

      <h2 className="text-xl mb-4">Productivity</h2>

      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="black"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />

        <circle
          stroke="lime"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + " " + circumference}
          style={{
            strokeDashoffset,
            transition: "stroke-dashoffset 0.7s",
          }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>

      <p className="text-2xl mt-3 font-bold">{progress}%</p>
    </div>
  );
}