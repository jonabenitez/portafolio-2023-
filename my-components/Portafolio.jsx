import img1 from "../img/portfolio/img1.jpg";
import img2 from "../img/portfolio/img2.jpg";
import img3 from "../img/portfolio/img3.jpg";
import img4 from "../img/portfolio/img4.jpg";
import img5 from "../img/portfolio/img5.jpg";
import img6 from "../img/portfolio/img6.jpg";

function Portafolio() {
  return (
    <section  id="portfolio">
      <div className="container">
        <div className="row  text-center mt-5">
          <h1 className="display-3 fw-bold">My Work</h1>
          <div className="heading-line"></div>
          <p className="lead mt-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas fugia
          </p>
        </div>
      </div>

      {/**FILTER BOTTON */}
      <div className="row mt-2 g-1 text-center">
        <div className="col-md-12">
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
        </div>
        {/** START PORTFOLIO IMG */}
        <div className="portafolio row"
        >
          <div className="col-lg-4 col-md-6">
            <div className="portfolio-box shadow">
              <img className="img-fluid" src={img1} alt="imagen1" />

              <div className="portafolio-info">
                <div className="caption">
                  <h3>project category 1</h3>
                  <p> description project</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="portfolio-box shadow">
              <img className="img-fluid" src={img2} alt="imagen2" />

              <div className="portafolio-info">
                <div className="caption">
                  <h3>project category 2</h3>
                  <p> description project</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="portfolio-box shadow">
              <img className="img-fluid" src={img3} alt="imagen3" />

              <div className="portafolio-info">
                <div className="caption">
                  <h3>project category 3</h3>
                  <p> description project</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="portfolio-box shadow">
              <img className="img-fluid" src={img4} alt="imagen4" />

              <div className="portafolio-info">
                <div className="caption">
                  <h3>project category 4</h3>
                  <p> description project</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="portfolio-box shadow">
              <img className="img-fluid" src={img5} alt="imagen5" />

              <div className="portafolio-info">
                <div className="caption">
                  <h3>project category 5</h3>
                  <p> description project</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="portfolio-box shadow">
              <img className="img-fluid" src={img6} alt="imagen6" />

              <div className="portafolio-info">
                <div className="caption">
                  <h3>project category 6</h3>
                  <p> description project</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portafolio;
