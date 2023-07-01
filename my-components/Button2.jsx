import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const iconsArrow =<FontAwesomeIcon icon={faArrowRight} />

function Button2() {
  return (
    <button type="button" className="rounded-pill border-primary btn-rounded">
      Learn More
      <span>
        <a className="display-3" href="/">{iconsArrow}</a>
      </span>
    </button>
  );
}

export default Button2;
