import styled from "styled-components";
import { StyledLink } from "../../utils/styles/Atoms";
import colors from "../../utils/styles/colors";

const ErrorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 150px;
    @media screen and (max-width: 480px) {
        height: 60vh;
        margin: 0;
    }
`

const ErrorTitle = styled.h1`
    font-size: 288px;
    color: ${colors.primary};
    margin: 0;
    font-weight: bold;
    font-family: "Montserrat", sans-serif;
    @media screen and (max-width: 480px) {
        font-size: 96px;
    }
`

const ErrorText = styled.p`
    color: ${colors.primary};
    font-size: 36px;
    margin-bottom: 180px;
    @media screen and (max-width: 480px) {
        font-size: 18px;
        width: 70%;
        text-align: center;
        margin-bottom: 130px;
    }
`

function Error(){

    return(
        <ErrorContainer>
            <ErrorTitle>404</ErrorTitle>
            <ErrorText>Oups! La page que vous demandez n'existe pas.</ErrorText>
            <StyledLink to="/">Retournez sur la page d'accueil</StyledLink>
        </ErrorContainer>
    )
}

export default Error