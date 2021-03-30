import React, { useContext } from "react";
import { HiInformationCircle } from "react-icons/hi";
import ViajeContext from "../context/viajeContext";
import "./css/ContenidoLanding.css";
const ContenidoLanding = () => {
  const viajeContext = useContext(ViajeContext);
  const {
    claseAnimacionTitulo,
    claseAnimacionTexto,
    claseAnimacionBoton,
  } = viajeContext;
  return (
    <div className="principal__contenido">
      <h1 className={`contenido__titulo ${claseAnimacionTitulo}`}>
        Bienvenido a TravelAPP
      </h1>
      <p className={`contenido__informacion ${claseAnimacionTexto}`}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
        soluta recusandae accusantium alias qui aspernatur unde dignissimos esse
        quisquam debitis. Sit deserunt, consequatur maiores accusantium unde
        magnam obcaecati corrupti nostrum voluptas, eligendi quod molestiae
        provident minima? Dignissimos, porro, inventore facere iure voluptatibus
        aperiam esse necessitatibus nisi, harum nemo hic sapiente!
      </p>

      <a href="#!">
        <button className={`btn--principal ${claseAnimacionBoton}`}>
          <HiInformationCircle /> Mayor Información
        </button>
      </a>
    </div>
  );
};

export default ContenidoLanding;
