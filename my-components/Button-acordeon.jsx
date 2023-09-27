import { useState, useRef } from "react";

function ButtonAcordeon({title, text}) {
  //referencias
  let refButton = useRef();

  //manejador del estado
  const [Visible, setVisible] = useState(false);
  const HandleState = () => {
    setVisible(!Visible);
    if (!Visible) {
      refButton.current.textContent = "cerrar";
    } else {
      refButton.current.textContent = "abrir";
    }
  };
  return (
    <div className="mycontainer">
      <button className="my-botton" onClick={HandleState}>
        <div className="title-botton">
          <h3> {title}</h3>
          <span ref={refButton}>abrir</span>
        </div>
      </button>

      <div>
        {Visible && (
          <div className="text-container">
        <p dangerouslySetInnerHTML={{ __html: text }} />

          </div>
        )}
      </div>
    </div>
  );
}
export default ButtonAcordeon;


