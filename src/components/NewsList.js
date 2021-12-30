import styled from "styled-components";
import NewsItem from "./NewsItem";
import axios from "axios";
import { useState, useEffect } from "react";

const NewsBlock = styled.div`
    
`;

const NewsList = ({categoryName}) => {
    // 기사 데이터 들어갈 state
    const [articles, setArticles] = useState(null); 
    // API 요청 중인지 판별 state
    const [loading, setLoading] = useState(false);

    // useEffett 함수를 사용해서 컴포넌트가 처음 렌더링되는 시점에 API 요청  
    useEffect( () => {
        // async 쓰기 위해 따로 함수 선언  
        const fetchData = async() => {
            setLoading(true);
            try {
                // props로 받은 카테고리 id가 all이면 아무것도 반환 x, 그외의 것이면 해당 문자열 반환
                const query = categoryName === 'all' ? '' : `&category=${categoryName}`
                // API 요청
                const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=aee5c3d7ed4040a9b9abe67404289e08`);
                // 요청한 데이터 중 기사 데이터들 state 설정
                setArticles(response.data.articles);
            }
            catch (e) {
                console.log(e);
            }
            setLoading(false);
        };
        
        // 앞서 따로 선언한 함수 호출
        fetchData();
    },[categoryName]);
    
    if (loading) {
        return (
            <h2>
                기사 불러오는 중..
            </h2>
        );  
    }

    if (!articles) {
        return null;
    }

    return (
        <NewsBlock>
            {
                articles.map( article => (
                    <NewsItem article={article} key={article.url}></NewsItem>
                ))
            }            
        </NewsBlock>
    );
};

export default NewsList;