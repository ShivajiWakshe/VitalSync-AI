export const calculateHealthScore = (req, res) => {
  const { heartRate, steps, focus, calories } = req.body;

  if (!heartRate || !steps || !focus || !calories) {
    return res.status(400).json({ message: "Missing data" });
  }

  let score = 0;

  // Heart Rate (ideal 60–80)
  if (heartRate >= 60 && heartRate <= 80) score += 25;
  else if (heartRate <= 90) score += 15;
  else score += 5;

  // Steps (ideal > 9000)
  if (steps > 9000) score += 25;
  else if (steps > 7000) score += 15;
  else score += 5;

  // Focus (ideal > 6)
  if (focus > 6) score += 25;
  else if (focus > 4) score += 15;
  else score += 5;

  // Calories burned
  if (calories > 600) score += 25;
  else if (calories > 450) score += 15;
  else score += 5;

  let status = "Needs Improvement";
  if (score > 75) status = "Excellent";
  else if (score > 50) status = "Good";

  res.json({ score, status });
};