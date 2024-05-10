/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const initialVelocity = 10000; // velocity (km/h)
const acceleration = 3; // acceleration (m/s^2)
const time = 3600; // seconds (1 hour)
const distance = 0; // distance (km)
const fuel = 5000; // remaining fuel (kg)
const fuelBurnRate = 0.5; // fuel burn rate (kg/s)

const newDistance = distance + initialVelocity * time; //calcultes new distance
const remainingFuel = fuelBurnRate * time; //calculates remaining fuel

// Pick up an error with how the function below is called and make it robust to such errors
//define calcNewVel function before calling it
const calcNewVel = (vel, acc, time) => {
  return vel + acc * time;
};

//divide initialVelocity by 3.6 to make it consistent with other units (m/s), and fix the parameters
const newVelocity = calcNewVel(initialVelocity / 3.6, acceleration, time); //calculates new velocity based on acceleration

console.log(`Corrected New Velocity: ${newVelocity * 3.6} km/h`);
console.log(`Corrected New Distance: ${newDistance} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);
