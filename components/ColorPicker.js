// core imports
import { useState } from "react";

// custom components
import Button from "./Button";

// styles
import styles from "./ColorPicker.module.scss";

const colors = [
  {
    name: "red",
    value: "#FF0000", // 0-9, A-F
  },
  {
    name: "green",
    value: "#00FF00",
  },
  {
    name: "blue",
    value: "#0000FF",
  },
  {
    name: "yellow",
    value: "#FFFF00",
  },
  {
    name: "teal",
    value: "#008080",
  },
  {
    name: "orange",
    value: "#FFA500",
  },
];

const ColorPicker = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.colorpicker}>
      <div
        className={styles.colorpicker__block}
        style={{
          backgroundColor: colors[activeIndex].value,
        }}
      >
        <h2 className={styles.colorpicker__name}>{colors[activeIndex].name}</h2>
      </div>
      {colors.map((color, index) => {
        return (
          <Button
            key={index}
            backgroundColor={color.value}
            label={color.name}
            clickHandler={() => {
              setActiveIndex(index);
            }}
          />
        );
      })}
    </div>
  );
};
export default ColorPicker;
