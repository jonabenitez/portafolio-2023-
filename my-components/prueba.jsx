import { useState } from 'react';


// FUNCTION HANDLESTATE
const ToggleElement = () => {
  const [isVisible, setIsVisible] = useState(false);
//es falso para que al princio no se vea el contenido

  const handleToggle = () => {
    setIsVisible(!isVisible);
    //el handle togle es una funcion que lo unico que hace es ponerle el valor al estado, lo invierte al estado, como is visible es falso no se ve, este lo setea y dandole el valor con la funcion on change y lo
  };

  return (
    <div>
      <button onClick={handleToggle}>Mostrar/Ocultar</button>
      {isVisible && <div>¡ahora se ve!</div>}
      {/**si es visible es verdado me muestra el div, sino, si es falso, que cambia con el handle, no se muestra */}
    </div>
  );
};

export default ToggleElement;



/**<div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
          
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Testimonials
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Faq
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Portfolio
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
            <button type="button" className="rounded-pill btn-round">
              +341 123 45678
              <span>
                <a href="/">
                {iconsCall}
                </a>
              </span>
            </button>
          </ul>
        </div>
      </div>
 */