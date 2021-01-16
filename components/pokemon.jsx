import React from "react";
import "./css/pokemon.css";
class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image, moreInfo } = this.props;
    return (
      <section className="pokemon-card">
        <div>
          <h4>{name}</h4>
          <p>{type}</p>
          <span>Average Weight: {averageWeight.value} {averageWeight.measurementUnit}
          </span>
        </div>
        <div>
          <a href={moreInfo} target="_blank" rel="noopener noreferrer">
            <img src={image} alt="Name" />
          </a>
        </div>
      </section>
    );
  };
}

export default Pokemon;