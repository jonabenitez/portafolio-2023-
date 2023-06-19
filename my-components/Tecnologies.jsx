//IMPORT IMG
import BaseImg from "../base/base-img";

function Tecnologies() {
  return (
    <section className="companies">
      {/**TITTLE CONTENT */}
      <div className="container">
        <div className="text-center">
          <h4 className="fw-bold display-6 mb-2">Tecnologias hasta el momento</h4>
          <div className="heading-line"></div>
        </div>
      </div>

      {/**TECNOLOGIES CONTENT */}
      <div className="container">
        <div className="row pt-5">
          <div className="col-md-3">
            <div className="campanies__logo-box shadow-sm">
              <img src={BaseImg[0].img} alt="" />
            </div>
         </div>
         <div className="col-md-3">
            <div className="campanies__logo-box shadow-sm">
              <img src={BaseImg[1].img} alt="" />
            </div>
         </div>
         <div className="col-md-3">
            <div className="campanies__logo-box shadow-sm">
              <img src={BaseImg[2].img} alt="" />
            </div>
         </div>

         <div className="col-md-3">
            <div className="campanies__logo-box shadow-sm">
              <img src={BaseImg[3].img} alt="" />
            </div>
         </div>

         <div className="col-md-3">
            <div className="campanies__logo-box shadow-sm">
              <img src={BaseImg[4].img} alt="" />
            </div>
         </div>
         <div className="col-md-3">
            <div className="campanies__logo-box shadow-sm">
              <img src={BaseImg[5].img} alt="" />
            </div>
         </div>

         <div className="col-md-3">
            <div className="campanies__logo-box shadow-sm">
              <img src={BaseImg[6].img} alt="" />
            </div>
         </div>

        </div>
      </div>
    </section>
  );
}

export default Tecnologies;
