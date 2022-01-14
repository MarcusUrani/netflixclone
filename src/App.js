import React, { useEffect, useState } from "react";
import "./App.css";
import TMDB from "./Api/tmdb";
import List from "./Components/List";
import FeaturedItem from "./Components/FeaturedItem";
import tmdb from "./Api/tmdb";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);

  //Buscando a lista dos filmes
  const loadAll = async () => {
    let list = await TMDB.getHomeList();
    setMovieList(list);

    //Buscando o item em destaque
    let originals = list.filter((i) => i.slug === "originals");
    let randomChoice = Math.floor(
      Math.random() * (originals[0].items.results.length - 1)
    );
    let chosen = originals[0].items.results[randomChoice];
    let chosenInfo = await tmdb.getItemInfo(chosen.id, 'tv');
    setFeaturedData(chosenInfo);
  };

  useEffect(() => {
    loadAll();
  }, []);
  return (
    <section className="page">
      {featuredData && <FeaturedItem item={featuredData} />}
      {movieList.map((item, id) => (
        <List key={id} title={item.title} items={item.items} />
      ))}
    </section>
  );
}

export default App;
