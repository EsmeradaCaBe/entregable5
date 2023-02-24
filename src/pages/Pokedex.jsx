import React from "react";
import { useSelector } from "react-redux";
import PokemonCard from "../components/pokedex/PokemonCard";
import usePokedex from "../hooks/usePokedex";

const Pokedex = () => {
  const nameTrainer = useSelector((store) => store.nameTrainer);

  const {
    handleSubmit,
    handleChangeSelect,
    types,
    pokemonsInPage,
    handlePreviusPage,
    handleNextPage,
    pagesInBlock,
    setCurrentPage,
    currentPage,
  } = usePokedex();

  return (
    <main className="Pokedex">
      <p className="Pokedex__nameWelc"><span className="Pokedex__name">Welcome {nameTrainer}, </span> here you can find information about
        of your favorite pokemon.</p>
      <form className="PokedexForm" onSubmit={handleSubmit}>
        <div>
          <input className="PokedexForm__input"
            type="text"
            id="pokemonName"
            placeholder="Search your pokemon"
          />
          <button className="PokedexForm__btn">Search</button>
        </div>
        <select className="PokedexForm__select" onChange={handleChangeSelect}>
          <option value="">All</option>
          {types.map((type) => (
            <option key={type.url}>{type.name}</option>
          ))}
        </select>
      </form>
      <section className="Pokedex__list">
        {
        pokemonsInPage.map((pokemon) => (
          <PokemonCard key={pokemon.url} pokemonUrl={pokemon.url} />
        ))}
      </section>
      <section >
        <ul className="pagination"> 
          <li className='pagination__page' onClick={handlePreviusPage}>{"<<"}</li>
          <li className='pagination__pages' onClick={() => setCurrentPage(1)}>...</li>
          {pagesInBlock.map((page) => (
            <li className={`page ${page === currentPage ? 'current' :'' }`} onClick={() => setCurrentPage(page)} key={page}>
              {page}
            </li>
          ))}
          <li className='pagination__pages' onClick={() => setCurrentPage(lastPage)}>...</li>
          <li  className='pagination__page' onClick={handleNextPage}>{">>"}</li>
        </ul>
      </section>
    </main>
  );
};

export default Pokedex;
