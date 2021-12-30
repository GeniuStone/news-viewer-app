import { useCallback, useState } from "react";
import styled from "styled-components";
import NewsList from "./components/NewsList"
import MainTitle from "./components/MainTitle"
import NewsCategory from "./components/NewsCategory"

const NewsContainer = styled.div`
  width: 800px;
  margin: 0 auto;
`;

const App = () => {
  const [categoryName, setCategoryName] = useState('all'); // App 함수 안에 state 선언한 이유 => 여러 컴포넌트에 쏴주려고
  
  const onSelect = useCallback((categoryName) => {
    setCategoryName(categoryName);
  },[]);

  return (
    <NewsContainer>
      <MainTitle></MainTitle>
      <NewsCategory categoryName={categoryName} onSelect={onSelect}></NewsCategory>
      <NewsList categoryName={categoryName}></NewsList>
    </NewsContainer>
  );
};

export default App;
