import React, { Component } from "react";
import axios from "axios";
import "./beersStyle.css";
import Beer from "./Beer/Beer";
import RandomBeer from "./RandomBeer/RandomBeer";
import HighBeer from "./HighBeer/HighBeer";
import Button from "../Button/Button";

class Beers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
      randomBeer: [],
      newBeer: "",
      editing: false,
      highBeer: []
    };
  }
  componentDidMount() {
    axios.get("/api/getBeer").then(Response => {
      this.setState({ beers: Response.data });
    });
  }
  //get the high abv beers
  getHighBeer = () => {
    axios.get("/api/getHighBeer/").then(response => {
      this.setState({ highBeer: response.data });
    });
  };
  //get a random beer
  getRandomBeer = () => {
    axios.get("/api/getRandomBeer/").then(response => {
      this.setState({ randomBeer: response.data });
    });
  };
  //delete the random beer array
  deleteRandomBeerHandler = id => {
    axios.delete(`/api/getRandomBeer/${id}`).then(response => {
      this.setState({ randomBeer: response.data });
    });
  };
  deleteHighBeerHandler = id => {
    axios.delete(`/api/getHighBeer/${id}`).then(response => {
      this.setState({ highBeer: response.data });
    });
  };
  //delete a beer from the array
  deleteBeerHandler = id => {
    axios.delete(`/api/getBeer/${id}`).then(response => {
      this.setState({ beers: response.data });
    });
  };
  //edit a beer in the array
  updateBeerHandler = (id, name) => {
    axios.put(`/api/getBeer/${id}`, { name }).then(response => {
      this.setState({ beers: response.data, editing: false });
    });
  };

  onSubmitHandler = event => {
    event.preventDefault();
    axios.post("/api/getBeer/", { name: this.state.newBeer }).then(response => {
      this.setState({ beers: response.data, newBeer: "" });
    });
  };
  // set state to the opposite it is.
  onEditHandler = () => {
    this.setState({ editing: !this.state.editing });
  };
  //handle the cahnge o
  onChangeHandler = event => {
    this.setState({ newBeer: event.target.value });
  };

  render() {
    const { beers, randomBeer, editing, highBeer } = this.state;

    const beerDisplay = beers.map(beers => {
      return (
        <Beer
          editing={editing}
          updateBeer={this.updateBeerHandler}
          deleteBeer={this.deleteBeerHandler}
          key={beers.id}
          obj={beers}
        />
      );
    });
    const randomBeerDisplay = randomBeer.map(randomBeer => {
      return (
        <RandomBeer
          deleteRandomBeer={this.deleteRandomBeerHandler}
          key={randomBeer.id}
          obj={randomBeer}
        />
      );
    });
    const highBeerDisplay = highBeer.map(highBeer => {
      return (
        <HighBeer
          deleteHighBeer={this.deleteHighBeerHandler}
          key={highBeer.id}
          obj={highBeer}
        />
      );
    });

    return (
      <div className="main">
        <header>
          <div className="corner">
            <h1>
              Brewd<i className="fa fa-beer fa-1x" />
            </h1>
          </div>
          <div className="top-block">
            <h1>
              {" "}
              <Button clicked={this.getRandomBeer}>Want a random beer?</Button>
              <Button clicked={this.getHighBeer}>
                How about a high abv beer?
              </Button>
              <Button clicked={this.onEditHandler}>Edit beer names</Button>
            </h1>
          </div>
          <div className="formHolder">
            {" "}
            <form onSubmit={this.onSubmitHandler}>
              <input
                value={this.state.newBeer}
                onChange={this.onChangeHandler}
                type="text"
                placeholder="add new Beer"
              />
              <Button>Submit</Button>
            </form>
          </div>
        </header>
        <div className="content">
          <div className="beerDisplay">
            {highBeerDisplay}
            {randomBeerDisplay}
            {beerDisplay}
          </div>
        </div>
      </div>
    );
  }
}

export default Beers;
