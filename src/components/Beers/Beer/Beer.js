import React, { Component } from "react";
import Button from "../../Button/Button";
import "./beer.css";
import "font-awesome/css/font-awesome.min.css";

class Beer extends Component {
  state = {
    newBeer: ""
  };
  onChangeHandler = event => {
    this.setState({ newBeer: event.target.value });
  };

  render() {
    const { deleteBeer, updateBeer, editing } = this.props;
    const { name, id, abv, tagline, image_url } = this.props.obj;
    return (
      <div className="Beer">
        <div>
          {editing ? (
            <div>
              <input
                value={this.state.newBeer}
                onChange={this.onChangeHandler}
                type="text"
              />
              <Button clicked={() => updateBeer(id, this.state.newBeer)}>
                Update beer name
              </Button>
            </div>
          ) : (
            <div>
              <h4>{tagline}</h4>
              <p>
                {id}. {name} ABV.{abv}%
              </p>
              <p>
                <img className="brandImage" src={image_url} alt="Beer Logos"/>
                <br />
                <span className="deleteDiv" onClick={() => deleteBeer(id)}>
                  <i className="fa fa-ban" />
                </span>
                <br />
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Beer;
