/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./item.module.css";
const Item = ({ foodItems, bought, handleBuyButton }) => {
  const handleButtonClick = (event) => {};
  return (
    <li
      classNameName={`${styles["kg-item"]} list-group-item ${
        bought && "active"
      }`}
    >
      <span classNameName={styles["kg-span"]}>{foodItems}</span>
      <button
        classNameName={`${styles.button} btn btn-info`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
