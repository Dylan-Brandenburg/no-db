const express = require("express");
const bodyParser = require("body-parser");
const beerCtrl = require("./controllers/beerCtrl");

//creating the express app
const app = express();
//confgiure the app to parse JSON from the body
app.use(bodyParser.json());

//test
app.get("/api/test", (req, res) => {
  res.status(200).send({ message: 'You are now connected' });
});

//
app.get("/api/getBeer/", beerCtrl.getBeer);
app.get("/api/getRandomBeer/", beerCtrl.getRandomBeer);
app.delete("/api/getRandomBeer/:id", beerCtrl.deleteRandomBeer);
app.get('/api/getBeer/', beerCtrl.getBeer);
app.post('/api/getBeer/', beerCtrl.createBeer);
app.delete('/api/getBeer/:id', beerCtrl.deleteBeer);
app.put('/api/getBeer/:id', beerCtrl.updateBeer);
app.get("/api/getHighBeer/", beerCtrl.getHighBeer)
app.delete('/api/getHighBeer/:id', beerCtrl.deleteHighBeer);


//Which port im using
const port = 3001;
//console logs the port im listening on
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});