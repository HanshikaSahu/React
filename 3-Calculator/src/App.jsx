import { useState } from "react";
import styles from "./App.module.css";
import AppDisplay from "./components/AppDisplay";
import ButtonContainer from "./components/ButtonContainer";

function App(){
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) =>{
    if(buttonText === "C"){
      setCalVal("");
    }
    else if(buttonText === "="){
      const result = eval(calVal);
      setCalVal(result);
    }
    else{
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  }

  return<>
    <div className={styles.calculator}>
      <AppDisplay displayValue = {calVal}></AppDisplay>
      <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
    </div>
  </>
}

export default App;