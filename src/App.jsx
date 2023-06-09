import "bootstrap/dist/css/bootstrap.min.css";
import ButtonAcordeon from "../my-components/Button-acordeon";
import ToggleElement from "../my-components/prueba";
import Home from '../my-components/navbar2'

function App() {
  return (
    <>
    <Home/>
      <ButtonAcordeon />
      <ButtonAcordeon />
      <ButtonAcordeon />

      <ToggleElement />
    </>
  );
}

export default App;
