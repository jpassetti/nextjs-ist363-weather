import classnames from "classnames/bind";

import styles from "./Row.module.scss";

const cx = classnames.bind(styles);

const Row = ({ alignItems, children, justifyContent }) => {
  const rowClasses = cx({
    row: true,
    [`justify-content-${justifyContent}`]: justifyContent,
    [`align-items-${alignItems}`]: alignItems,
  });
  return <div className={rowClasses}>{children}</div>;
};
export default Row;
