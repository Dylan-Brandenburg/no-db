import React, { Component } from "react";
import Button from "../../Button/Button";
import "./randomBeer.css";


class RandomBeer extends Component {
 
  render() {
    const { deleteRandomBeer  } = this.props;
    const { name, id, abv, tagline, image_url } = this.props.obj;
    return (
      <div className="Beer">
        <div>
           <h3> Your random beer is!</h3>
           <div>
              <h4>{tagline}</h4>
              <p>
                {id}. {name} ABV.{abv}%
              </p>
              <p>
                <img className="brandImage" src={image_url} alt="Beer Logos"/>
                <br />
                <span className="deleteDiv" onClick={() => deleteRandomBeer(id)}>
                  <i className="fa fa-ban" />
                </span>
                <br />
              </p>
            </div>
        </div>
      </div>
    );
  }
}

export default RandomBeer;