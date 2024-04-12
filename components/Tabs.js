import classnames from "classnames/bind";

import styles from "./Tabs.module.scss";

const cx = classnames.bind(styles);

const Tabs = ({ activeIndex, clickHandler, items }) => {
  return (
    <ul className={styles.tabs}>
      {items?.map((item, index) => {
        const itemClasses = cx({
          tabs__item: true,
          active: index === activeIndex,
        });
        return (
          <li
            key={index}
            className={itemClasses}
            onClick={() => {
              clickHandler(index);
            }}
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
};
export default Tabs;
