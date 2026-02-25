import { useState } from "react";

export default function BMICalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState(null);

  const calculateBMI = () => {
    const bmi = weight / ((height / 100) ** 2);
    setResult(bmi.toFixed(2));
  };

  return (
    <div className="bg-white p-6 rounded shadow w-96">
      <h2 className="font-bold mb-4">BMI Calculator</h2>
      <input placeholder="Height (cm)" className="border p-2 w-full mb-2"
        onChange={(e) => setHeight(e.target.value)} />
      <input placeholder="Weight (kg)" className="border p-2 w-full mb-2"
        onChange={(e) => setWeight(e.target.value)} />
      <button onClick={calculateBMI} className="bg-blue-600 text-white p-2 w-full rounded">
        Calculate
      </button>
      {result && <p className="mt-3">Your BMI: {result}</p>}
    </div>
  );
}