import { useState, useRef } from "react";

function ButtonAcordeon() {
  //referencias
  let refButton = useRef();

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
    <div className="my-content-button">
      <h2>
        <button onClick={HandleState} className="my-botton" type="button">
          Accordion Item #1
          <span ref={refButton}>
            abrir
          </span>
        </button>
      </h2>
      <div>
        {Visible && (
          <div>
            <strong>This is the first items accordion body.</strong> It is shown
            by default, until the collapse plugin adds the appropriate classes
            that we use to style each element. These classes control the overall
            appearance, as well as the showing and hiding via CSS transitions.
            You can modify any of this with custom CSS or overriding our default
            variables. Its also worth noting that just about any HTML can go
            within the <code>.accordion-body</code>, though the transition does
            limit overflow.
          </div>
        )}
      </div>
    </div>
  );
}
export default ButtonAcordeon;
