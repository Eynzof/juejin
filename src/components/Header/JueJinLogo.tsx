import React from "react";
import styles from "./Logo.module.css";
import { useSelector } from "react-redux";
import { selectTheme } from "../../store/themeSlice";

function JueJinLogo() {
  const isLight = useSelector(selectTheme);

  return (
    <img
      src={isLight ? "/juejin_logo.svg" : "/juejin_logo_dark.svg"}
      alt="Logo"
      className={styles.header__logo}
    />
  );
}

export default JueJinLogo;
