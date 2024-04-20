import classnames from "classnames/bind";

import styles from "./Col.module.scss";

const cx = classnames.bind(styles);

const Col = ({ children, xs, sm, md, lg, xl }) => {
  const colClasses = cx({
    col: true,
    [`col__xs__${xs}`]: xs,
    [`col__sm__${sm}`]: sm,
    [`col__md__${md}`]: md,
    [`col__lg__${lg}`]: lg,
    [`col__xl__${xl}`]: xl,
  });
  return <div className={colClasses}>{children}</div>;
};
export default Col;
