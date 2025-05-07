import styled from 'styled-components';
import { useState, useEffect } from 'react';
import SearchResult from '../components/SearchResult';

export const BASE_URL = "http://localhost:9000/";

function App() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filterData, setFilterData] = useState(null);
  const [selectedBtn, setSelectedBtn] = useState("all");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try{
        const response = await fetch(BASE_URL);

        const json = await response.json();

        setData(json);
        setLoading(false);
        setFilterData(json);
      }
      catch(error){
        setError("Unable to fetch data");
      }
    };
    fetchData();
  }, []);


  const searchResult = (e) => {
    const search = e.target.value;

    if(search === ""){
      setFilterData(null);
    }

    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilterData(filter);
  }


  const filterFood = (type) => {
    if(type === "all"){
      setFilterData(data);
      setSelectedBtn("all");
      return;
    }
    
    const filter = data?.filter((food) =>
    food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilterData(filter);
    setSelectedBtn(type);
  };

  const filterBtns = [
    {name: "All", type: "all"},
    {name: "Breakfast", type: "breakfast"},
    {name: "Lunch", type: "lunch"},
    {name: "Dinner", type: "dinner"},
  ];


  if(loading) return <h1>Loading...</h1>
  if(error) return <div>{error}</div>

  return (
    <>
       <Container>
        <TopSection>
          <h1>Food-List</h1>
          <div className="search">
            <input type='text' placeholder='Search Food...' onChange={searchResult}/>
          </div>
        </TopSection>

        <FilterContainer>
            {filterBtns.map((value) => (
              <Button
                key={value.name}
                $isSelected={selectedBtn === value.type}
                onClick={() => filterFood(value.type)}>
                  {value.name}
              </Button>
            ))}
        </FilterContainer>

       </Container>
       <SearchResult data={filterData} />
    </>
  )
}

export default App

export const Container = styled.div`
  max-width: 1500px;
  margin: 0 auto;
`;

const TopSection = styled.div`
  display: flex;
  max-height: 140px;
  justify-content: space-between;
  align-items: center;
  padding: 50px;

  .search{
    input{
      padding: 10px;
      border: 1px solid red;
      border-radius: 5px;
      background-color: #323334;
      font-size: 16px; 
      width: 280px; 
      color: white;

      &::placeholder{
        color: white;
      }
    }
  }

   @media (0 < width < 600px) {
    flex-direction: column;
    height: 130px;
    gap: 5px;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`;

export const Button = styled.button`
    background-color: ${({$isSelected}) => ($isSelected ? "#f22f2f" : "#ff4343")};
    outline: 1px solid ${({$isSelected}) => ($isSelected ? "white" : "#ff4343")};
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    margin-bottom: 30px;
`;