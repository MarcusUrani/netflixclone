import React from "react";

const List = ({ title, items }) => {
  return (
    <section className="homelist">
      <h1 className="homelist__title">{title}</h1>
      <div className="homelist__listarea">
        {items.results.length > 0 &&
          items.results.map((item, id) => (
            <img
              key={id}
              src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
              alt={item.original_title}
            />
          ))}
      </div>
    </section>
  );
};

export default List;
