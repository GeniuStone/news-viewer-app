import styled from "styled-components";
import banner from "../images/title-image.jpg"

const Top = styled.div`
    width: 100%;
    margin: 20px 0 10px;
    text-align: center;
    display: flex;
    justify-content: center;

    h1 {    
        color: white;
        width: 361px;
        font-weight: bold;
        font-size: 3rem;
        text-align: center;
        padding: 25px 0;
        margin: 0;
        background: no-repeat url(${banner});
        text-shadow: -1px 0 gray, 0 1px gray, 1px 0 gray, 0 -1px gray;
    }
`;

const MainTitle = () => {
    return (
        <Top>
            <h1>
                Bridge News
            </h1>            
        </Top>
    );
};

export default MainTitle;