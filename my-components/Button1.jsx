import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

const iconsCall = <FontAwesomeIcon icon={faPhoneVolume} />;

function Button() {
  return (
    <button type="button" className="rounded-pill btn-rounded">
      +34 618720191
      <span>
        <a href="/">{iconsCall}</a>
      </span>
    </button>
  );
}

export default Button;
