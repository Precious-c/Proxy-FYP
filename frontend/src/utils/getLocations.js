import locations from "../mockData/locations.json" with { type: "json" };
// const locations = require("../mockData/locations.json");

const getAllCities = () => {
  const cities = [];
  locations.forEach((state) => {
    state.state.cities.forEach((city) => {
      cities.push(city);
    });
  });
  return cities;
};

const getAllLga = () => {
  const lgas = [];
  locations.forEach((state) => {
    state.state.locals.forEach((lga) => {
        lgas.push(lga);
    });
  });
  return lgas
};

const getStates = () => {
  const states = [];
  locations.forEach((state) => {
    states.push(state.state.name);
  });
  return states;
};

console.log("Cities: ", getAllCities());
console.log("LGAs: ", getAllLga());
console.log("States: ", getStates());
// })
//   return fetch("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
//     .then((response) => response.json())
//     .then((data) => data.results);
export default {getAllCities, getAllLga, getStates};
