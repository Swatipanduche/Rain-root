function calculateWater() {
  const crop = document.getElementById('cropType').value;
  const temperature = parseFloat(document.getElementById('temperature').value);
  const humidity = parseFloat(document.getElementById('humidity').value);
  let waterNeed = '';

  if (isNaN(temperature) || isNaN(humidity)) {
    document.getElementById('waterNeed').textContent = "Please enter valid temperature and humidity values.";
    return;
  }

  // Basic logic for recommendation
  let baseNeed;
  switch (crop) {
    case 'corn':
      baseNeed = 1.2;
      break;
    case 'wheat':
      baseNeed = 1.0;
      break;
    case 'rice':
      baseNeed = 1.5;
      break;
    case 'tomato':
      baseNeed = 0.8;
      break;
    default:
      baseNeed = 1.0;
  }

  const adjustment = (temperature / 30) * (1 - humidity / 100);
  const waterAmount = (baseNeed * (1 + adjustment)).toFixed(2);

  waterNeed = `Recommended water: ${waterAmount} liters per square meter.`;

  document.getElementById('waterNeed').textContent = waterNeed;
}
