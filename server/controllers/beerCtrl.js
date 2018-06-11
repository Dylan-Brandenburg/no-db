const axios = require("axios");

let beer = [];
let randomBeer = [];
let id = 26;
let highBeer = [];

// get the list of beers from the api
axios.get("https://api.punkapi.com/v2/beers/").then(response => {
  beer = response.data;
});
//get random beer
axios.get("https://api.punkapi.com/v2/beers/random").then(response => {
  randomBeer = response.data;
});
//get a high beer
axios.get("https://api.punkapi.com/v2/beers?abv_gt=10").then(response => {
    highBeer = response.data;
})

const getBeer = (req, res, next) => {
  res.status(200).send(beer);
};
const getHighBeer = (req, res, next) => {
    res.status(200).send(highBeer);
}
const getRandomBeer = (req, res, next) => {
  res.status(200).send(randomBeer);
};
//Add a new beer to the array;
const createBeer = (req, res, next) => {
  const { name } = req.body;
  let newBeer = {
    name,
    id
  };
  id++;
  beer.push(newBeer);
  res.status(200).send(beer);
};
// delete random beer
const deleteRandomBeer = (req, res, next) => {
  const { id } = req.params;
  let indexOfRandomBeer = randomBeer.findIndex(
    randomBeer => randomBeer.id == id
  );
  randomBeer.splice(indexOfRandomBeer, 1);
  res.status(200).send(randomBeer);
};
//delete high beer
const deleteHighBeer = (req, res, next) => {
    const { id } = req.params;
    let indexOfHighBeer = highBeer.findIndex(
      highBeer => highBeer.id == id
    );
    highBeer.splice(indexOfHighBeer, 1);
    res.status(200).send(highBeer);
  };
// delete beer
const deleteBeer = (req, res, next) => {
  const { id } = req.params;
  let indexOfBeer = beer.findIndex(beer => beer.id == id);
  beer.splice(indexOfBeer, 1);
  res.status(200).send(beer);
};
//update beer names
const updateBeer = (req, res, next) => {
  const { name } = req.body;
  const { id } = req.params;
  let indexOfBeer = beer.findIndex(beer => beer.id == id);
  beer[indexOfBeer].name = name;
  res.status(200).send(beer);
};
module.exports = {
  getBeer,
  getRandomBeer,
  deleteRandomBeer,
  createBeer,
  deleteBeer,
  updateBeer,
  getHighBeer,
  deleteHighBeer
};
