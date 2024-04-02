import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faAngleRight,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";

const icons = {
  faAngleLeft: faAngleLeft,
  faAngleRight: faAngleRight,
  faBars: faBars,
};

const ButtonUI = ({ className, clickHandler, icon }) => {
  const matchingIcon = icons[icon];
  return (
    <button className={className} onClick={clickHandler}>
      <FontAwesomeIcon icon={matchingIcon} />
    </button>
  );
};
export default ButtonUI;
