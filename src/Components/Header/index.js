import React from "react";
import "./style.css";

const Header = ({ black }) => {
  return (
    <header className={black ? "black" : ""}>
      <div className="header__logo">
        <a href="#">
          <img
            alt="netflix"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/200px-Netflix_2015_logo.svg.png"
          />
        </a>
      </div>
      <div className="header__user">
        <a href="/">
          <img
            alt="Usuário"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
