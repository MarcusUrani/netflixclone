import React, { useEffect, useState } from "react";
import TMDB from "./Api/tmdb";
import List from "./Components/List";

function App() {
  const [movieList, setMovieList] = useState([]);
  //Pegando a lista dos filmes
  const loadAll = async () => {
    let list = await TMDB.getHomeList();
    setMovieList(list);
  };

  useEffect(() => {
    loadAll();
  }, []);
  return (
    <section className="page">
      {movieList.map((item, id) => (
        <List key={id} title={item.title} items={item.items} />
      ))}
    </section>
  );
}

export default App;
