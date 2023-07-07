import Carousel from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";

import client1 from "../img/testimonials/client-1.jpg";
import client2 from "../img/testimonials/client-2.jpg";
import client3 from "../img/testimonials/client-3.jpg";

const iconStar = <FontAwesomeIcon icon={faStar} />;
const quoteLeft = <FontAwesomeIcon icon={faQuoteLeft} />;
const quoteRight = <FontAwesomeIcon icon={faQuoteRight} />;

const waveDown = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path
      fill="#ffffff"
      d="M0,288L40,293.3C80,299,160,309,240,282.7C320,256,400,192,480,170.7C560,149,640,171,720,197.3C800,224,880,256,960,250.7C1040,245,1120,203,1200,192C1280,181,1360,203,1400,213.3L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
    ></path>
  </svg>
);

const waveUp = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path
      fill="#ffffff"
      d="M0,192L48,213.3C96,235,192,277,288,261.3C384,245,480,171,576,138.7C672,107,768,117,864,138.7C960,160,1056,192,1152,202.7C1248,213,1344,203,1392,197.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
    ></path>
  </svg>
);

function Testimonials() {
  return (
    <div className="container-fluid testimonials">
      {waveUp}
      <div className="row text-center text-white">
        <h3 className="display-3 fw-bold">Testimonials</h3>
        <div className="heading-line2 mx-auto"></div>
        <p className="lead pt-1">What out clients are saying</p>
      </div>

      {/**CAROUSEL */}

      <Carousel className="container">
        <Carousel.Item>
          {/**CLIENT 1 */}
          <div className="testimonials__card">
            <p>
              <i>{quoteLeft}</i>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
              necessitatibus autem atque natus neque commodi dolorum, nulla
              impedit facere veniam est, dignissimos, amet ad. Recusandae enim
              repellat natus excepturi aut.
              <i>{quoteRight}</i>
            </p>
            <div className="ratings col p-1">
              <i>{iconStar}</i>
              <i>{iconStar}</i>
              <i>{iconStar}</i>
              <i>{iconStar}</i>
            </div>
          </div>
          {/**client-img */}
          <div className="first-slide">
            <div className="testimonials__picture">
              <img
                src={client1}
                alt="client1"
                className="img-fluid rounded-circle"
              />
            </div>
          </div>
          {/**client-name */}
          <div className="testimonials__name">
            <h3>Luz Diaz</h3>
            <p className="lead fw-light">marketing managger</p>
          </div>
        </Carousel.Item>

        {/**CLIENT 2 */}
        <Carousel.Item>
          <div className="testimonials__card">
            <p>
              <i>{quoteLeft}</i>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
              necessitatibus autem atque natus neque commodi dolorum, nulla
              impedit facere veniam est, dignissimos, amet ad. Recusandae enim
              repellat natus excepturi aut.
              <i>{quoteRight}</i>
            </p>
            <div className="ratings col p-1">
              <i>{iconStar}</i>
              <i>{iconStar}</i>
              <i>{iconStar}</i>
              <i>{iconStar}</i>
            </div>
          </div>
          {/**client-img */}
          <div className="first-slide">
            <div className="testimonials__picture">
              <img
                src={client2}
                alt="client2"
                className="img-fluid rounded-circle"
              />
            </div>
          </div>
          {/**client-name */}
          <div className="testimonials__name">
          <h3>Martin Benitez</h3>
          <p className="lead fw-light"> CEO & founder </p>
          </div>
        </Carousel.Item>

        {/**CLIENT 3 */}
        <Carousel.Item>
          <div className="testimonials__card">
            <p>
              <i>{quoteLeft}</i>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
              necessitatibus autem atque natus neque commodi dolorum, nulla
              impedit facere veniam est, dignissimos, amet ad. Recusandae enim
              repellat natus excepturi aut.
              <i>{quoteRight}</i>
            </p>
            <div className="ratings col p-1">
              <i>{iconStar}</i>
              <i>{iconStar}</i>
              <i>{iconStar}</i>
              <i>{iconStar}</i>
            </div>
          </div>
          {/**client-img */}
          <div className="first-slide">
            <div className="testimonials__picture">
              <img
                src={client3}
                alt="client3"
                className="img-fluid rounded-circle"
              />
            </div>
          </div>
          {/**client-name */}
          <div className="testimonials__name">
          <h3>Luz Diaz</h3>
          <p className="lead fw-light">global brand managger </p>
          </div>
        </Carousel.Item>
      </Carousel>
      {waveDown}
    </div>
  );
}

export default Testimonials;
