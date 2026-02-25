export const getHealthData = (req, res) => {

  const data = {
    heartRate: Math.floor(Math.random() * 40) + 60,
    steps: Math.floor(Math.random() * 5000) + 2000,
    calories: Math.floor(Math.random() * 1000) + 500,
    sleep: Math.floor(Math.random() * 4) + 5,
    productivity: Math.floor(Math.random() * 100)
  };

  res.json(data);
};