import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles/Pokemon.css";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState();

  const { id } = useParams();

  const getPercentBar = (stat) => {
    const percent = (stat * 100) / 150;
    return `${percent}%`;
  };

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    axios
      .get(URL)
      .then((res) => setPokemon(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className={`pokemon border-${pokemon?.types[0].type.name}`}>
      <section>
        {/* ...Parte superior */}
        <section
          className={`pokemon__Header bg-lg-${pokemon?.types[0].type.name}`}
        >
          <div className="pokemon__img">
            <img
              src={pokemon?.sprites.other["official-artwork"].front_default}
              alt=""
            />
          </div>
        </section>
      </section>

      {/* Body */}
      <section className="pokemonInf">
        <h2 className="pokemonInf__id">#{pokemon?.id}</h2>
        <div className="pokemonInf__title">
        <hr class="pokemonInf__line-l"/>
        <h2 className="pokemonInf_name">{pokemon?.name}</h2>
        <hr class="pokemonInf__line-r"/>
        </div>
        <div className="pokemonInf__sub">
          <div className="pokemonInf__weight">
            <h5 className="pokemonInf__weight-title">Weight</h5>
            <h4 className="pokemonInf__weight-sub">{pokemon?.weight}</h4>
          </div>
          <div className="pokemonInf__height">
            <h5 className="pokemonInf__height-title">Height</h5>
            <h4 className="pokemonInf__height-sub">{pokemon?.height}</h4>
          </div>
        </div>

        <div className="pokemonInf__set">
          <div>
            <h3 className="pokemonInf__type">Type</h3>
            <div  className="pokemonInf__type-set">
              {pokemon?.types.map((type) => (
                <div className={`pokemon__type-sets bg-${type.type.name}`} key={type.type.name}>
                  <span >{type.type.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="pokemonInf__abilit">Abilities</h3>
            <div className="pokemonInf__abilit-set">
              {pokemon?.abilities.map((ability) => (
                <div className="pokemonInf__abilit-sets" key={ability.ability.name}>
                  <span>{ability.ability.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <section className="pokemon__stats">
          <h2 className="pokemon__stats-title">Stats</h2>
          <section className="pokemon__stats-info">
            {pokemon?.stats.map((stat) => (
              <article className="pokemon__stat" key={stat.stat.name}>
                <div className="pokemon__stat-header">
                  <h4 className="pokemon__stat-name"> {stat.stat.name}</h4>
                  <h5 className="pokemon__stat-value">{stat.base_stat}/255</h5>
                </div>
                <div className="pokemon__stat-bar">
                  <div className="pokemon__stat-barGray">
                    <div
                      className="pokemon__stat-barProgress"
                      style={{ width: getPercentBar(stat.base_stat) }}
                    ></div>
                  </div>
                </div>
              </article>
            ))}
          </section>
        </section>
      </section>
    </main>
  );
};

export default Pokemon;
