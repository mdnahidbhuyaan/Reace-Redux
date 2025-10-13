import React from "react";
import style from "./WelcomeMassage.module.css";
const WelcomeMassage = ({ todoItems }) => {
  return (
    <div>
      {todoItems.lenght === 0 && (
        <p classNameName={style.welcome}>Enjoy your day</p>
      )}
    </div>
  );
};

export default WelcomeMassage;
