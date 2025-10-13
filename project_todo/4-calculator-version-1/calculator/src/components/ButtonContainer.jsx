import React from "react";
import styles from "./ButtonContainer.module.css";
const ButtonContainer = () => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div classNameName={styles.buttonsContainer}>
      {buttonNames.map((buttonNames) => (
        <button classNameName={styles.button}>{buttonNames}</button>
      ))}
    </div>
  );
};

export default ButtonContainer;
