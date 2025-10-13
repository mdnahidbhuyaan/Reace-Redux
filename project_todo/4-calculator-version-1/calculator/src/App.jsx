// eslint-disable-next-line no-unused-vars
import styles from "./app.module.css";
import ButtonContainer from "./components/ButtonContainer";
import Display from "./components/Display";
const App = () => {
  return (
    <div classNameName={styles.calculator}>
      <Display></Display>
      <ButtonContainer></ButtonContainer>
    </div>
  );
};

export default App;
