import React from "react";
import "./style.css";

const FeaturedItem = ({ item }) => {
  const firstDate = new Date(item.first_air_date);
  let genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }

  return (
    <section
      className="featured"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className="featured__vertical">
        <div className="featured__horizontal">
          <h1 className="featured__name">{item.original_name}</h1>
          <section className="featured__info">
            <p className="featured__points">{item.vote_average} pontos</p>
            <p className="featured__year">{firstDate.getFullYear()}</p>
            <p className="featured__seasons">
              {item.number_of_seasons} temporada
              {item.number_of_seasons !== 1 ? "s" : ""}
            </p>
          </section>
          <article className="featured__description">
            <p>{item.overview}</p>
          </article>
          <section className="featured__buttons">
            <a href={`/watch/${item.id}`} className="featured__play">
              ▶ Assistir
            </a>
            <a href={`/list/add/${item.id}`} className="featured__myList">
              + Minha lista
            </a>
          </section>
          <section className="featured__genres">
            <p>
              <strong>Gêneros: </strong>
              {genres.join(", ")}
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default FeaturedItem;
