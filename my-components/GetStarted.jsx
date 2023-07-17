function GetStarted() {
  return (
    <section className="get-started">
      <div className="container">
        <div className="row text-center">
          <h1 className="display-3 text-capitalize fw-bold">Get Started</h1>
          <div className="heading-line"></div>
          <p className="lh-lg fw-light">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
            deleniti, aliquid quae itaque
          </p>
        </div>
      </div>

      {/**SECTION INBOX*/}
      <div className="row">
        <div className="col-12 col-lg-6 gradient shadow p-3 text-white">
          <div className="cta-info w-100">
            <h4 className="display-4 fw-bold">100% Satisfaction guaranteed</h4>
            <p className="lhlg">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              deserunt delectus volupta
            </p>
            <h3 className="display-3--brief">What will the next step?</h3>
            <ul className="cta-info__list">
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
            </ul>
          </div>
        </div>
        <div className="col-12 col-lg-6 bg-white shadow p-3">asd</div>
      </div>
    </section>
  );
}

export default GetStarted;
