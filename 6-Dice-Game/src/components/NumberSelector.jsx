import styled from "styled-components";

const NumberSelector = ({error, setError ,selectedNumber, setSelectedNumber}) => {

  const arrNum = [1, 2, 3, 4, 5, 6];

  const handleError = (value) => {
    setSelectedNumber(value);
    setError("");
  } 

  return(
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arrNum.map((value,i) => (
           <Box isSelected={value === selectedNumber} key={i} onClick={() => {handleError(value)}}>
            {value}
           </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  )
}

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;

  .flex{
    display: flex;
    gap: 24px;
  }

  p{
    font-size: 24px;
    font-weight: 700;
    text-align: end;
    padding-top: 30px;
  }
    
  .error{
    color: red;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  display: grid;
  place-items: center;
  border:1px solid black;
  font-size: 24px;
  font-weight: 700;
  transition: background 0.3s ease-in;
  background-color: ${props => props.isSelected ? "black" : "white" };
  color: ${props => !props.isSelected ? "black" : "white"};
`;