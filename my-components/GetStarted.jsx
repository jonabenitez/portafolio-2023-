import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const checkList = <FontAwesomeIcon icon={faCheck} />;
const paperPlane = <FontAwesomeIcon icon={faPaperPlane} />;
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

        {/**SECTION INBOX*/}
        <div className=" row text-white ">
          <div className="col-12 col-lg-6 gradient shadow p-3">
            <div className="cta-info ">
              <h4 className="display-4 fw-bold">
                100% Satisfaction guaranteed
              </h4>
              <p className="lh-lg">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident deserunt delectus volupta um dolor sit amet
                consectetur adipisicing elit. Provident deserunt delectus volupt
              </p>
              <h3 className="display-3--brief">What will the next step?</h3>
              <ul className="cta-info__list">
                <li>
                  {" "}
                  <span>{checkList}</span> lorem ipsum
                </li>
                <li>
                  {" "}
                  <span>{checkList}</span> lorem ipsum
                </li>
                <li>
                  {" "}
                  <span>{checkList}</span> lorem ipsum
                </li>
              </ul>
            </div>
          </div>
          {/**SECOND COLUM - FORM */}
          <div className="col-12 col-lg-6 bg-white shadow p-3">
            <div className="form w-100 pb-2">
              <h4 className="display-3--title mb-5">Start Your Project</h4>
              <form action="#" className="row ">
                <div className="col-lg-6 mb-3">
                  <input
                    type="text"
                    placeholder="FirsName"
                    id="inputFirsName"
                    className="form-control form-control-lg"
                  />
                </div>
                <div className="col-lg-6 mb-3 ">
                  <input
                    type="text"
                    placeholder="LastName"
                    id="inputLastName"
                    className="form-control form-control-lg"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="email"
                    id="inpuEmail"
                    className="form-control form-control-lg"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    placeholder="message"
                    name="Message"
                    id="message"
                    cols="30"
                    rows="8"
                    className="form-control"
                  
                  ></textarea>
                </div>
                <div className="text-center d-grid mt-1">
                  <button
                    type="button"
                    className="btn btn-primary rounded-pill pb-3"
                  >
                    submit
                    <i className="p-2">{paperPlane}</i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetStarted;
