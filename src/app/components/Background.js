"use client";
import {
  changeToColor,
  darkTheme,
  lightTheme,
} from "@/redux/features/colorSlice";
import styles from "../page.module.css";
import { useSelector, useDispatch } from "react-redux";

const Background = () => {
  const colorTheme = useSelector((state) => state.changeColor.color);
  const dispatch = useDispatch();
  const colorThemeColor =
    colorTheme === "dark"
      ? "#002438"
      : colorTheme === "light"
      ? "#9fdcff"
      : colorTheme;
      
  console.log(colorTheme);

  return (
    <div className={styles.backgroundDiv}>
      <div
        className={styles.background}
        style={{ background: colorThemeColor }}
      ></div>
      <div className={styles.btnWrapper}>
        <button className={styles.btn} onClick={() => dispatch(lightTheme())}>
          Light Theme
        </button>
        <button className={styles.btn} onClick={() => dispatch(darkTheme())}>
          Dark Theme
        </button>
        <input
          type="color"
          className={styles.input}
          name="color"
          id="color"
          onChange={(e) => dispatch(changeToColor(e.target.value))}
        />
      </div>
    </div>
  );
};

export default Background;
