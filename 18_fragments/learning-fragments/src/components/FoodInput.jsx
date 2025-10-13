import React from "react";
import styles from "./FoodInput.module.css";
const FoodInput = ({ handleKeDown }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Food Here"
        classNameName={styles.foodInput}
        onKeyDown={handleKeDown}
      />
    </div>
  );
};

export default FoodInput;
