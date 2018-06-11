import React, { Component } from "react";
import Button from "../../Button/Button";
// import "./randomBeer.css";


class HighBeer extends Component {
 
  render() {
    const { deleteHighBeer  } = this.props;
    const { name, id, abv, tagline, image_url } = this.props.obj;
    return (
      <div className="Beer">
        <div>
           <div>
              <h4>{tagline}</h4>
              <p>
                {id}. {name} ABV.{abv}%
              </p>
              <p>
                <img className="brandImage" src={image_url} alt="Beer Logos"/>
                <br />
                <span className="deleteDiv" onClick={() => deleteHighBeer(id)}>
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

export default HighBeer;