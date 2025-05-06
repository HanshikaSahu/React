import styled from "styled-components";
import TotalScore from "./TotalScore.jsx";
import NumberSelector from "./NumberSelector.jsx";
import RoleDice from "./RoleDice.jsx";
import Rules from "./Rules.jsx";
import { Button, OutlineButton } from "../styled/Button.js";
import { useState } from "react";

const GamePlay = () => {

  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const roleDice = () => {
    if(!selectedNumber){
      setError("You have not selected any number");
      return;
    };

    const randomNumber = generateRandomNumber(1,7);
    setCurrentDice((prev) => randomNumber);

    if(selectedNumber === randomNumber ){
      setScore((prev) => prev + randomNumber);
    }
    else{
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  }  

  const resetScore = () => {
    setScore(0);
  }

  return(
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score}/>
        <NumberSelector error={error} setError={setError} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />
      </div>

      <RoleDice currentDice={currentDice} roleDice={roleDice} />

      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
        <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide" : "Show"} Rules
        </Button>
      </div>

      {showRules && <Rules />}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.div`
  padding-top: 40px;

  .top_section{
    display: flex;
    justify-content: space-around;
    align=items: end;
  }


  .btns{
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    align-items: center;
    gap: 5px;
  }
`;