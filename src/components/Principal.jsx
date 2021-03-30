import React, { useContext, useEffect } from "react";
import Imagen from "./Imagen";
import "./css/Header.css";
import "./css/Principal.css";
import ContenidoLanding from "./ContenidoLanding";
import { useMediaQuery } from "react-responsive";
import ViajeContext from "../context/viajeContext";
import "animate.css";

const Principal = () => {
  const viajeContext = useContext(ViajeContext);

  const {
    claseprincipal,
    reiniciarEstado,
    mostrarAnimacionCSS,
    mostrarAnimacionScroll,
    reiniciaTodo,
  } = viajeContext;

  const laptop = useMediaQuery({
    query: "(min-width:992px)",
  });

  useEffect(() => {
    if (laptop) {
      reiniciarEstado();
      mostrarAnimacionCSS();

      setTimeout(() => {
        reiniciaTodo();
      }, 3000);
    } else {
      mostrarAnimacionScroll();

      const reiniciaTodos = async () => {
        const reinicia = await reiniciaTodo();

        return reinicia;
      };
      setTimeout(() => {
        reiniciaTodos();
      }, 3000);
    }

    //eslint-disable-next-line
  }, [laptop]);

  return (
    <main className={`principal__detalles ${claseprincipal}`}>
      <div className={`contenedor principal`}>
        <Imagen />
        <ContenidoLanding />
      </div>
    </main>
  );
};

export default Principal;
