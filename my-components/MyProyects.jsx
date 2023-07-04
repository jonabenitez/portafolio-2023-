//IMPORT
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import { faTableCellsLarge } from "@fortawesome/free-solid-svg-icons";
import Button2 from "../my-components/Button2";

import WebDevelopmentImg from "../img/arts/WebDevelopment.png";
import TodolistImg from "../img/arts/Checklist.png";
import ColorGameImg from "../img/arts/ColorGame.png";

const TravelIcons = <FontAwesomeIcon icon={faPaperPlane} />;
const TodoList = <FontAwesomeIcon icon={faListCheck} />;
const ColorGame = <FontAwesomeIcon icon={faTableCellsLarge} />;

function MyProyects() {
  return (
    <section id="proyects" className="services">
        <div className="row text-center">
          <h3 className="display-3 fw-bold">my Proyects</h3>
          <div className="heading-line"></div>
        </div>

      {/**section 1- websitex */}
      <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-cs-12 services text-start">
          <div className="services__content">
            <div className="icon">{TravelIcons}</div>
            <h3 className="display-3--title mt-1">web development</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
              cumque ducimus corporis assumenda excepturi harum dolor
              perspiciatis odit iusto ut. Eos perspiciatis obcaecati quia! Ad ab
              beatae adipisci sed soluta?
            </p>
            <div className="">
              <Button2 />
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12 col-cs-12 services text-end">
          <div className="services__pic">
            <img
              className="img-fluid"
              src={WebDevelopmentImg}
              alt="wedeveloper"
            />
          </div>
        </div>
      </div>

      {/**section 2 */}

      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-cs-12 services text-start">
          <div className="services__pic">
            <img className="img-fluid" src={TodolistImg} alt="TODOLIST" />
          </div>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12 col-cs-12 services">
          <div className="services__content">
            <div  className="icon">{TodoList}</div>
            <h3 className="display-3--title mt-1">TodoList React</h3>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
              cumque ducimus corporis assumenda excepturi harum dolor
              perspiciatis odit iusto ut. Eos perspiciatis obcaecati quia! Ad ab
              beatae adipisci sed soluta?
            </p>
            <div className="">
              <Button2 />
            </div>
          </div>
        </div>
      </div>

      {/**section 3 */}
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-cs-12 services">
          <div className="services__content">
            <div  className="icon">{ColorGame}</div>
            <h3 className="display-3--title mt-1">Color Game Js</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
              cumque ducimus corporis assumenda excepturi harum dolor
              perspiciatis odit iusto ut. Eos perspiciatis obcaecati quia! Ad ab
              beatae adipisci sed soluta?
            </p>
            <div className="">
              <Button2 />
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12 col-cs-12 services text-end">
          <div className="services__pic">
            <img className="img-fluid" src={ColorGameImg} alt="colorGame" />
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
export default MyProyects;
