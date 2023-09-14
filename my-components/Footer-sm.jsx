import Copyright from "./Copyright";
function FooterCampanyinfo() {
  return (
    <section className="container-fluid">
      <div className="FooterCampanyinfo row justify-content-center text-white mt-3 pb-2">
        <div className="col-12 col-sm-6 col-lg-6">
          <h5 className="text-capitalize fw-bold"> companies name</h5>
          <hr className="d-inline-block mb-2" />
          <p className="lh-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
            quis dolore nihil atque labore earum animi veniam inventore modi
            libero{" "}
          </p>
        </div>

        <div className="col-12 col-sm-6 col-lg-2">
          <h5 className="text-capitalize fw-bold">Products</h5>
          <hr className=" mb-2 d-inline-block" />
          <ul className="list">
            <li>
              <a href="#">lorem</a>
            </li>
            <li>
              <a href="#">lorem</a>
            </li>
            <li>
              <a href="#">lorem</a>
            </li>
            <li>
              <a href="#">lorem</a>
            </li>
          </ul>
        </div>

        <div className="col-12 col-sm-6 col-lg-2">
          <h5 className="text-capitalize fw-bold">Useful Links</h5>
          <hr className=" mb-2 d-inline-block" />
          <ul className="list">
            <li>
              <a href="#">Your account</a>
            </li>
            <li>
              <a href="#">become an affiliate</a>
            </li>
            <li>
              <a href="#">create an account</a>
            </li>
            <li>
              <a href="#">help</a>
            </li>
          </ul>
        </div>

        <div className="col-12 col-sm-6 col-lg-2">
          <h5 className="text-capitalize fw-bold">Contact</h5>
          <hr className=" mb-2 d-inline-block" />
          <ul className="list ">
            <li>
              <a href="#">lorem</a>
            </li>
            <li>
              <a href="#">lorem</a>
            </li>
            <li>
              <a href="#">lorem</a>
            </li>
            <li>
              <a href="#">lorem</a>
            </li>
          </ul>
        </div>
      </div>
      <Copyright />
    </section>
  );
}

export default FooterCampanyinfo;
