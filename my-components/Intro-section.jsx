//import  icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faArrowDown } from "@fortawesome/free-solid-svg-icons";

//imports img
import CodingFlatline from "../img/arts/Coding _Monochromatic.png";

//variables icons
const iconsPlay = <FontAwesomeIcon icon={faCirclePlay} />;
const iconsArrow = <FontAwesomeIcon icon={faArrowDown} />

const wave = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path
      fill="#ffffff"
      d="M0,288L40,293.3C80,299,160,309,240,282.7C320,256,400,192,480,170.7C560,149,640,171,720,197.3C800,224,880,256,960,250.7C1040,245,1120,203,1200,192C1280,181,1360,203,1400,213.3L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
    ></path>
  </svg>

  
);
//intro section

function Section1() {
  return (
    <section id="home" className="intro-section">
      <div className="container">
        <div className="row  align-items-center text-white">
          {/*PRIMER COLUMNS CONTENT INTRO*/}
          <div className="col-md-6 intros">
            <h1 className="display-2">
              <span className="display-2--intro">Hola!, soy Jonatan</span>
              <span className="display-2--description lh-base">
                {" "}
                Bienvenidos a mi Portfolio, el cuál está desarrollado con las tecnologías de JavaScript, React, Boostrap y Sass. Además de algunas librerías para la tipografía como Font Awesome.
              </span>
            </h1>
            <button type="button" className="rounded-pill btn-rounded ">
              {/* CORREGIR BOTON */}
              Click aquí
              <span>
                <a href="#aboutMe">{iconsArrow}</a>
              </span>
            </button>

            {/*SECOND COLUMNS FOR VIDEO*/}
          </div>
          <div className="col-md-6 intros text-end">
            <div className="video-box ">
              <img src={CodingFlatline} alt="null" className="w-100 h-100" />
              <a
                href="#"
                className="position-absolute top-50 start-50 translate-middle"
              >
                <span>
                  <i>{iconsPlay}</i>
                </span>
                <span className="border-animation border-animation--border-1"></span>
                <span className="border-animation border-animation--border-2"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>{wave}</div>
    </section>
  );
}

export default Section1;
