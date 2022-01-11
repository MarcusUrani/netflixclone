import React, { useEffect } from "react";
import TMDB from "./Api/tmdb";

function App() {
  useEffect(() => {
    //Pegando a lista dos filmes
    const loadAll = async () => {
      let list = TMDB.getHomeList();
      console.log(list);
    };

    loadAll();
  }, []);

  return <h1>Hello World!</h1>;
}

export default App;
