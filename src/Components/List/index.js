import React, { useState } from "react";
import "./style.css";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const List = ({ title, items }) => {
  const [scrollX, setScrollX] = useState(0);

  //Lista indo para a esquerda
  const handleLeft = () => {
    let xValue = scrollX + Math.round(window.innerWidth / 2);
    if (xValue > 0) {
      xValue = 0;
    }

    setScrollX(xValue);
  };

  //Lista indo para a direita
  const handleRight = () => {
    let xValue = scrollX - Math.round(window.innerWidth / 2);
    let listWidth = items.results.length * 150;
    if (window.innerWidth - listWidth > xValue) {
      xValue = window.innerWidth - listWidth - 60;
    }

    setScrollX(xValue);
  };

  return (
    <section className="homelist">
      <h1 className="homelist__title">{title}</h1>
      <section className="homelist__left" onClick={handleLeft}>
        <NavigateBeforeIcon style={{ fontSize: 50 }} />
      </section>
      <section className="homelist__right" onClick={handleRight}>
        <NavigateNextIcon style={{ fontSize: 50 }} />
      </section>
      <div className="homelist__listarea">
        <section
          className="homelist__list"
          style={{
            marginLeft: scrollX,
            width: items.results.length * 150,
          }}
        >
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
