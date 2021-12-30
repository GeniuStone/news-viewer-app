import styled from "styled-components";
import { css } from "styled-components";

const categories = [
    {
      id : 'all',
      name : '전체보기'
    },
    {
      id : 'business',
      name : '비즈니스'
    },
    {
      id : 'entertainment',
      name : '오락'
    },
    {
      id : 'health',
      name : '건강'
    },
    {
      id : 'science',
      name : '과학'
    },
    {
      id : 'sports',
      name : '스포츠'
    },
    {
      id : 'technology',
      name : '기술'
    }
  ];

const CategoryBlock = styled.div`
    display: flex;
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
    box-shadow: 0 2px 2px -2px gray;
`;

const Category = styled.div `       
    cursor: pointer;
    padding: 15px 0px;
    flex-grow: 1;
    text-align: center;

    &:hover {
        background-color: #eeeeee;
        font-weight: bold;
    }

    // props 중 active가 true이면 해당 스타일을 적용 => 단 styled component만 가능, 클래스 이름으로 접근하면 x
    ${ props => props.active && css`
        background-color: #eeeeee;  
        font-weight: bold; 
    `}
`;

const NewsCategory = ({categoryName, onSelect}) => {
    return (
        <CategoryBlock>
            {categories.map(category => (
                // props로 받은 카테고리 id과 현재 카테고리 id을 비교 => 즉, 과거의 카테고리 id와 현재의 카테고리 id을 비교
                <Category className="categoryItem" key={category.id} active={categoryName === category.id} onClick={() => onSelect(category.id)}>
                    {category.name}
                </Category>
            ))}
        </CategoryBlock>
    );
};

export default NewsCategory;