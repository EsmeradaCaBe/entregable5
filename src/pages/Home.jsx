import React from "react";
import { useDispatch } from "react-redux";
import { setNameTrainerGlobal } from "../store/slices/nameTrainer.slice";
import "./styles/Home.css"
const Home = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameTrainer = e.target.nameTrainer.value;
    dispatch(setNameTrainerGlobal(nameTrainer));
  };

  return (
    <main className="pokedexHome">
      <section className="PokedexHome__title">
        <div className="PokedexHome__Header">
          <img src="/images/pokedex.png" alt="" />
        </div>
      </section>
      <section  className="PokedexHome__Loguin"> 
        <div className="PokedexHome__inf">
        <h2 className="PokedexHome__value">Hello trainer!</h2>
        <p className="PokedexHome__descrip">Give me your name to start!</p>
        </div>
        <form  className="PokedexHome__form" onSubmit={handleSubmit}>
          <input className="PokedexHome__input"
            id="nameTrainer"
            type="text"
            placeholder="your name..."
            required
          />
          <button className="PokedexHome__btn">Start</button>
        </form>
      </section>
    </main>
  );
};

export default Home;
