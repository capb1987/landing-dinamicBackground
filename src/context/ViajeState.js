import React, { useReducer } from "react";
import ViajeContext from "./viajeContext";
import ViajeReducer from "./viajeReducer";
import {
  CLASE_ACTIVADA,
  CLASE_DESACTIVADA,
  REINICIAR_CLASE,
  MOSTRAR_ANIMACION,
  MOSTRAR_ANIMACION_SCROLL,
  REINICIAR_TODO,
} from "../types";

const ViajeState = (props) => {
  const initialState = {
    activo: false,
    claseprincipal: "",
    claseMenuNavegador: "",
    claseMenuToogle: "",
    claseAnimacionImagen: "",
    claseAnimacionTitulo: "",
    claseAnimacionTexto: "",
    claseAnimacionBoton: "",
  };

  //funciones

  /*FUNCIONES DEL MENU */

  const estaActivo = () => {
    dispatch({
      type: CLASE_ACTIVADA,
    });
  };

  const noActivo = () => {
    dispatch({
      type: CLASE_DESACTIVADA,
    });
  };

  const reiniciarEstado = () => {
    dispatch({
      type: REINICIAR_CLASE,
    });
  };

  /*FUNCIONES DE ANIMACION ANIMATE.CSS */

  const mostrarAnimacionCSS = () => {
    dispatch({
      type: MOSTRAR_ANIMACION,
    });
  };

  const mostrarAnimacionScroll = () => {
    dispatch({
      type: MOSTRAR_ANIMACION_SCROLL,
    });
  };

  const reiniciaTodo = () => {
    dispatch({
      type: REINICIAR_TODO,
    });
  };

  const [state, dispatch] = useReducer(ViajeReducer, initialState);
  return (
    <ViajeContext.Provider
      value={{
        activo: state.activo,
        claseprincipal: state.claseprincipal,
        claseMenuNavegador: state.claseMenuNavegador,
        claseMenuToogle: state.claseMenuToogle,
        claseAnimacionImagen: state.claseAnimacionImagen,
        claseAnimacionTitulo: state.claseAnimacionTitulo,
        claseAnimacionTexto: state.claseAnimacionTexto,
        claseAnimacionBoton: state.claseAnimacionBoton,

        estaActivo,
        noActivo,
        reiniciarEstado,
        mostrarAnimacionCSS,
        mostrarAnimacionScroll,
        reiniciaTodo,
      }}
    >
      {props.children}
    </ViajeContext.Provider>
  );
};

export default ViajeState;
