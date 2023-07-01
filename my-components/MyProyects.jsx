//IMPORT
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import { faTableCellsLarge } from "@fortawesome/free-solid-svg-icons";
import WebDevelopmentImg from "../img/arts/WebDevelopment.png";
import TodolistImg from "../img/arts/Checklist.png";
import ColorGameImg from "../img/arts/ColorGame.png";

import Button2 from "../my-components/Button2";

const TravelIcons = <FontAwesomeIcon icon={faPaperPlane} />;
const TodoList = <FontAwesomeIcon icon={faListCheck} />;
const ColorGame = <FontAwesomeIcon icon={faTableCellsLarge} />;

function MyProyects() {
  return (
    //START PROYECTS CONTENT SECTIO 1

    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4 services mt-4">
          <div className="services__content mt-5 pt-5">
            <span className="display-2">{TravelIcons}</span>
            <h3 className="mt-4">Proyect Web Travel</h3>
            <p className="lh-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              repudiandae, voluptas possimus iure excepturi commodi officiis,
              dolore alias ipsam corrupti aut, autem in illum accusamus labore
              nisi reiciendis ex deleniti.
            </p>
            <div className="mt-2">
              <Button2 />
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4 services mt-4">
          <div className="services__content">
            <img className="" src={WebDevelopmentImg} alt="" />
          </div>
        </div>

        {/**SECTION 2 */}

        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4 services mt-4">
          <div className="services__content">
            <img src={TodolistImg} alt="" />
          </div>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4 services mt-4">
          <div className="services__content">
            <span className="display-2">{TodoList}</span>

            <h3>TodoList React</h3>
            <p className="lh-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              repudiandae, voluptas possimus iure excepturi commodi officiis,
              dolore alias ipsam corrupti aut, autem in illum accusamus labore
              nisi reiciendis ex deleniti.
            </p>
            <div>
              <Button2 />
            </div>
          </div>
        </div>

        {/**SECTION 3 */}
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 mt-4 services">
          <div className="services__content">
            <span className="display-2">{ColorGame}</span>

            <h3>ColorGame JavaScript</h3>
            <p className="lh-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              repudiandae, voluptas possimus iure excepturi commodi officiis,
              dolore alias ipsam corrupti aut, autem in illum accusamus labore
              nisi reiciendis ex deleniti.
            </p>
            <div>
              <Button2 />
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 mt-4 services">
          <div className="services__content">
            <img src={ColorGameImg} alt="" />
          </div>
        </div>
      </div>
    </div>

  );
}

export default MyProyects;
