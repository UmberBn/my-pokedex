import React from "react";
import Pokemon from "./pokemon";
import "./css/pokedex.css"
import pokemons from "../data";

class Pokedex extends React.Component {
  render() {
    return (
      <main>
        <h1>Pokedex</h1>
        <section className="pokemons-area">
          {pokemons.map((pokeData) => {
            return <Pokemon key={pokeData.id} name={pokeData.name} type={pokeData.type}
              averageWeight={pokeData.averageWeight}
              image={pokeData.image}
              moreInfo={pokeData.moreInfo} />
          })}
        </section>
      </main>
    );
  };
}

export default Pokedex;