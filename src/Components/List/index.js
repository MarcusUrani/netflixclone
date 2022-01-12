import React from "react";
import "./style.css";

const List = ({ title, items }) => {
  return (
    <section className="homelist">
      <h1 className="homelist__title">{title}</h1>
      <div className="homelist__listarea">
        <div className="homelist__list">
          {items.results.length > 0 &&
            items.results.map((item, id) => (
              <figure key={id} className="homelist__item">
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.original_title}
                />
              </figure>
            ))}
        </div>
      </div>
    </section>
  );
};

export default List;
