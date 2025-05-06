import styled from "styled-components";

const RoleDice = ({currentDice, roleDice}) => {

  return(
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`/dice_${currentDice}.png`} alt="dice1" />
      </div>
      <p>Click on dice to roll</p>
    </DiceContainer>
  )
}

export default RoleDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .dice{
    cursor: pointer;
  }
    
  p{
    font-size: 24px;
    font-weight: 500;
    margin-top: 10px;
  }
`;