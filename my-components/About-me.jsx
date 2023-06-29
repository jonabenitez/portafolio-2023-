function Aboutme() {
  return (
    <section id="aboutme" className="myservice">
      <div className="container">
        <div className="row text-center">
          <h3 className="display-3 fw-bold">About Me</h3>
          <div className="heading-line"></div>

          {/*DESCRIPTIONS COLUMS */}
          <div className="container">
            <div className="row pt-2 pb-2 mt-5 mb-3">
              <div className="col-md-6 border-right">
                <p className="fw-bold text-center display-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio .
                </p>
              </div>
              <div className="col-md-6">
                <p className="fw-light text-start">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Placeat, numquam libero veritatis possimus magni autem, vitae
                  dolor illum nisi asperiores commodi modi quam excepturi id
                  incidunt harum voluptatem assumenda tenetur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutme;
