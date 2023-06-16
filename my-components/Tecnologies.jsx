//IMPORT IMG
import BaseImg from "../base/base-img";

function Tecnologies() {
  return (
    <section className="companies">
      {/**TITTLE CONTENT */}
      <div className="container">
        <div className="text-center">
          <h4 className="fw-bold lead mb-2">Tecnologias hasta el momento</h4>
          <div className="heading-line"></div>
        </div>
      </div>

      {/**TECNOLOGIES CONTENT */}
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="campanies__logo-box d-flex">
              <img src={BaseImg[0].img} alt="" />
              <img src={BaseImg[1].img} alt="" />
              <img src={BaseImg[2].img} alt="" />
              <img src={BaseImg[3].img} alt="" />
              <img src={BaseImg[4].img} alt="" />
              <img src={BaseImg[5].img} alt="" />
              <img src={BaseImg[6].img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tecnologies;
