/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./item.module.css";
const Item = ({ foodItems }) => {
  const handleButtonClick = (event) => {
    console.log(event);
    console.log(`${foodItems} being bought`);
  };
  return (
    <li className={`${styles["kg-item"]} list-group-item`}>
      <span className={styles["kg-span"]}>{foodItems}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={(event) => handleButtonClick(event)}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
