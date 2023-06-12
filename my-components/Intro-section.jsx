import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
const iconsCall = <FontAwesomeIcon icon={faPhoneVolume} />;

//intro section

function Section1() {
  return (
    <section id="home" className="intro-section">
      <div className="container">
        <div className="row  align-items-center text-white">
          <div className="col-md-6 intros">
            <h1 className="display-2">
              <span className="display-2--intro">Hi!, I am Jonatan</span>
              <span className="display-2--description lh-base">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                libero deserunt sequi, odit, totam iusto iste ipsam quo non nemo
                voluptatibus itaque a maiores, officiis qui voluptas inventore
                quidem ipsa!
              </span>
            </h1>
            <button type="button" className="rounded-pill btn-rounded">
              Get in Touch
              <span>
                <a href="/">{iconsCall}</a>
              </span>
            </button>
          </div>
          <div className="col-md-6 intros"></div>
        </div>
      </div>
    </section>
  );
}

export default Section1;
