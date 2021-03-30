import React, { useContext } from "react";
import "./css/Imagen.css";
import imgPrincipal from "../img/principalViaje.svg";
import ViajeContext from "../context/viajeContext";

const Imagen = () => {
  const viajeContext = useContext(ViajeContext);
  const { claseAnimacionImagen } = viajeContext;
  return (
    <div className={`principal__imagen ${claseAnimacionImagen}`}>
      <img loading="lazy" src={imgPrincipal} alt="" className="imgPrincipal" />
    </div>
  );
};

export default Imagen;
