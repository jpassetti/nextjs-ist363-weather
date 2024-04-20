import classnames from "classnames/bind";

import styles from "./Temp.module.scss";

const cx = classnames.bind(styles);

const Temp = ({ amount, size, unit }) => {
  const tempClasses = cx({
    temp: true,
    [`font_size--${size}`]: size,
  });
  const formattedTemp = unit === "metric" ? (amount - 32) * (5 / 9) : amount;
  const roundedTemp = Math.round(formattedTemp);
  const tempSymbol = unit === "metric" ? "C" : "F";
  return (
    <span className={tempClasses}>
      {roundedTemp}&deg; {tempSymbol}
    </span>
  );
};
export default Temp;
