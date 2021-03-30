import React, { useContext } from "react";
import "./css/Header.css";

import ViajeContext from "../context/viajeContext";
const Header = () => {
  const viajeContext = useContext(ViajeContext);
  const {
    activo,
    claseMenuNavegador,
    claseMenuToogle,
    estaActivo,
    noActivo,
  } = viajeContext;

  const onToogleClick = () => {
    if (!activo) {
      estaActivo();
    } else {
      noActivo();
    }
  };

  return (
    <header className="contenido__cabecera">
      <div className="contenedor cabecera">
        <div className="cabecera__logo">
          <p className="logo__titulo">TravelApp</p>
          <div
            className={`toogleNavegacion ${claseMenuToogle}`}
            onClick={onToogleClick}
          >
            <span className="barra"></span>
            <span className="barra"></span>
            <span className="barra"></span>
          </div>
        </div>
        <nav className={`cabecera__navegacion ${claseMenuNavegador}`}>
          <a href="/" className="navegacion__item">
            Inicio
          </a>
          <a href="#!" className="navegacion__item">
            Nuestra Empresa
          </a>
          <a href="#!" className="navegacion__item">
            Blog
          </a>
          <a href="#!" className="navegacion__item">
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
