import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <footer>
      <article>
        <p className="footer__text">
          Desenvolvido por{" "}
          <a
            href="https://github.com/MarcusUrani"
            className="footer__link"
            rel="noreferrer"
            target="_blank"
          >
            Marcus Urani
          </a>
        </p>
        <p className="footer__text">
          Todos os direitos de imagem para{" "}
          <a
            href="https://www.netflix.com"
            rel="noreferrer"
            target="_blank"
            className="footer__link"
          >
            Netflix
          </a>
        </p>
        <p className="footer__text">
          Api do{" "}
          <a
            href="https://www.themoviedb.org"
            rel="noreferrer"
            target="_blank"
            className="footer__link"
          >
            The Movie database
          </a>{" "}
          utilizada no projeto
        </p>
      </article>
    </footer>
  );
};

export default Footer;
