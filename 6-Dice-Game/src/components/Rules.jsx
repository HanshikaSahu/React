import styled from "styled-components";

const Rules = () => {
  return(
    <RulesContainer>
      <h2>How to play dice game</h2>
      <div className="rules">
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
        <p>if you get wrong guess then  2 point will be dedcuted </p>
      </div>
    </RulesContainer>
  )
}

export default Rules;

const RulesContainer = styled.div`
  background-color: #FBF1F1;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 24px;
  padding: 20px;

  h2{
    font-size: 24px;
    font-weight: 700;
  }

  .rules{
    margin-top: 24px;
  }
`;