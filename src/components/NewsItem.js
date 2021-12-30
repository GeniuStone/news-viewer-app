import styled from "styled-components";
import image from '../images/test.jpg'

const ItemBlock = styled.div`
    margin-top: 35px;
    display: flex;
    width : 100%;

    .thumnail {
        margin-right: 40px;

        img {
            object-fit: cover;
        }
    }

    .content {
        flex-grow : 1;

        h2 {
            margin: 0;
            margin-top: 10px;
            padding-left: 5px;
            font-size: 1.5rem;
        }

        p {
            margin: 0;
            padding: 10px 0;
            font-size: 1.1rem;
        }
    }
`;

const NewsItem = ({article}) => {
    // props에서 필요한 데이터만
    const {title, description, url, urlToImage} = article;

    return (
        <ItemBlock>
            {/* 이미지 없는 기사일 때는 해당 요소 보여주지마 */}
            {urlToImage && (<div className="thumnail">
                <a href={url} onClick="return false;" rel="noopener noreferrer">
                    <img src={urlToImage} width="300px" height="200px"/>
                </a>
            </div>)}
            <div className="content">
                <h2>
                    {title}
                </h2>
                <p>
                    {description}    
                </p>      
            </div>
        </ItemBlock>
    );
};

export default NewsItem;