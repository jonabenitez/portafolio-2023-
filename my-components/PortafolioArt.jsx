import img1 from "../img/portfolio/img1.jpg";
// import img2 from "../img/portfolio/img2.jpg";
// import img3 from "../img/portfolio/img3.jpg";
// import img4 from "../img/portfolio/img4.jpg";
// import img5 from "../img/portfolio/img5.jpg";
// import img6 from "../img/portfolio/img6.jpg";

function PortafolioArt() {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="portfolio-box shadow">
        <a
          href="https://italiatravelsinglepage.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="img-fluid" src={img1} alt="imagen1" />
          <div className="portafolio-info">
            <div className="caption">
              <h3>Mi primer singlepage</h3>
              <p>
                Singlepage destinada a buscar nuevos clientes y se contacten por
                medio de las redes realizada con react y tailwild
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default PortafolioArt;
