import img1 from "../img/portfolio/img1.jpg";
import img2 from "../img/portfolio/img2.jpg";
import img3 from "../img/portfolio/img3.jpg";
import img4 from "../img/portfolio/img4.jpg";

function Portafolio() {
  return (
    <section id="portfolio">
      <div className="container">
        <div className="row  text-center mt-5">
          <h1 className="display-3 fw-bold">Mis trabajos</h1>
          <div className="heading-line"></div>
          <p className="lead mt-2">
            Conoce los trabajos que he realizado de forma freelance y
            autodidacta.
          </p>
        </div>
      </div>

      <div className="row mt-2 g-1 text-center px-5">
        {/**FILTER BOTTON */}
        {/* <div className="col-md-12">
          <button className="btn btn-outline-primary " type="button">
            All
          </button>
          <button className="btn btn-outline-primary " type="button">
            Websites
          </button>
          <button className="btn btn-outline-primary " type="button">
            Design
          </button>
          <button className="btn btn-outline-primary " type="button">
            Api
          </button>
        </div> */}

        {/** START PORTFOLIO IMG */}

        <div className="portafolio row">
          <div className="col-lg-6 col-md-6">
            <div className="portfolio-box shadow">
              <a
                href="https://italiatravelsinglepage.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="img-fluid" src={img1} alt="imagen1" />
                <div className="portafolio-info">
                  <div className="caption">
                    <h3>Singlepage</h3>
                    <p>
                      Página web destinada a atraer nuevos clientes y generar un
                      primer contacto por medio de las redes sociales. Fue
                      realizada con React y Tailwild.
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-6 col-md-6">
            <div className="portfolio-box shadow">
              <a
                href="https://todo-list-react-1006.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="img-fluid" src={img2} alt="imagen2" />
                <div className="portafolio-info">
                  <div className="caption">
                    <h3>To do List</h3>
                    <p>
                      Lista de tareas realizada con los fundamentos básicos y
                      hooks de React y Tailwild.
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>


          <div className="col-lg-6 col-md-6">
            <div className="portfolio-box shadow">
              <a
                href="https://ecommerce-react2023.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="img-fluid" src={img4} alt="imagen2" />
                <div className="portafolio-info">
                  <div className="caption">
                    <h3>Ecommerce</h3>
                    <p>
                   Ecommerce y Carrito de compras, realizado con React y uso de Hooks.
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-6 col-md-6">
            <div className="portfolio-box shadow">
              <a
                href="https://ecommerce-react2023.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="img-fluid" src={img3} alt="imagen2" />
                <div className="portafolio-info">
                  <div className="caption">
                    <h3>ColorGame</h3>
                    <p>
                  Juego realizado con JS Vanilla.
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>

 
        </div>
      </div>
    </section>
  );
}

export default Portafolio;
