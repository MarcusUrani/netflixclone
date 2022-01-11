import React, { useEffect, useState } from "react";
import TMDB from "./Api/tmdb";

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
  console.log(movieList);
  return (
    <section className="page">
      {movieList.map((item, id) => (
        <h1 key={id}>{item.title}</h1>
      ))}
    </section>
  );
}

export default App;
