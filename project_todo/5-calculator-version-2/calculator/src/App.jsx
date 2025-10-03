/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */

// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import styles from "./app.module.css";
import ButtonContainer from "./components/ButtonContainer";
import Display from "./components/Display";
const App = () => {
  let [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result)
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };
  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal}></Display>
      <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
    </div>
  );
};

export default App;
