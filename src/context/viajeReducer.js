import {
  CLASE_ACTIVADA,
  CLASE_DESACTIVADA,
  REINICIAR_CLASE,
  MOSTRAR_ANIMACION,
  MOSTRAR_ANIMACION_SCROLL,
  REINICIAR_TODO,
} from "../types";

const viajeReducer = (state, action) => {
  switch (action.type) {
    case CLASE_ACTIVADA:
      return {
        activo: true,
        claseprincipal: "activoPrincipal",
        claseMenuNavegador: "visibilidadMenu",
        claseMenuToogle: "esActivo",
        claseAnimacionImagen: "",
        claseAnimacionTitulo: "",
        claseAnimacionTexto: "",
        claseAnimacionBoton: "",
      };
    case CLASE_DESACTIVADA:
      return {
        activo: false,
        claseprincipal: "desactivadoPrincipal",
        claseMenuNavegador: "ocultarMenu",
        claseMenuToogle: "",
        claseAnimacionImagen: "",
        claseAnimacionTitulo: "",
        claseAnimacionTexto: "",
        claseAnimacionBoton: "",
      };
    case REINICIAR_CLASE:
    case MOSTRAR_ANIMACION_SCROLL:
      return {
        activo: false,
        claseprincipal: "",
        claseMenuNavegador: "",
        claseMenuToogle: "",
        claseAnimacionImagen: "animate__animated animate__bounceInLeft",
        claseAnimacionTitulo: "animate__animated animate__bounceInRight",
        claseAnimacionTexto: "animate__animated animate__bounceInRight",
        claseAnimacionBoton: "animate__animated animate__bounceInRight",
      };

    case MOSTRAR_ANIMACION:
      return {
        activo: false,
        claseprincipal: "",
        claseMenuNavegador: "",
        claseMenuToogle: "",
        claseAnimacionImagen: "animate__animated animate__bounceInLeft",
        claseAnimacionTitulo: "animate__animated animate__bounceInRight",
        claseAnimacionTexto: "animate__animated animate__bounceInRight",
        claseAnimacionBoton: "animate__animated animate__bounceInRight",
      };

    case REINICIAR_TODO:
      return {
        activo: false,
        claseprincipal: "",
        claseMenuNavegador: "",
        claseMenuToogle: "",
        claseAnimacionImagen: "",
        claseAnimacionTitulo: "",
        claseAnimacionTexto: "",
        claseAnimacionBoton: "",
      };

    default:
      return state;
  }
};

export default viajeReducer;
