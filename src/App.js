import "./App.css";
import Header from "./components/Header";
import Principal from "./components/Principal";
import ViajeState from "./context/ViajeState";

function App() {
  return (
    <div className="contenido-principal">
      <ViajeState>
        <Header />
        <Principal />
      </ViajeState>
    </div>
  );
}

export default App;
