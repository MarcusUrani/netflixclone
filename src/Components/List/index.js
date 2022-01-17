import React from "react";
import "./style.css";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const List = ({ title, items }) => {
  return (
    <section className="homelist">
      <h1 className="homelist__title">{title}</h1>
      <section className="homelist__left">
        <NavigateBeforeIcon style={{ fontSize: 50 }} />
      </section>
      <section className="homelist__right">
        <NavigateNextIcon style={{ fontSize: 50 }} />
      </section>
      <div className="homelist__listarea">
        <section className="homelist__list">
          {items.results.length > 0 &&
            items.results.map((item, id) => (
              <figure key={id} className="homelist__item">
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.original_title}
                />
              </figure>
            ))}
        </section>
      </div>
    </section>
  );
};

export default List;
