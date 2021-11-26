import styled from "styled-components";
import { StyledLink } from "../../utils/styles/Atoms";
import colors from "../../utils/styles/colors";

const ErrorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 150px;
`

const ErrorTitle = styled.h1`
    font-size: 288px;
    color: ${colors.primary};
    margin: 0;
    font-weight: bold;
    font-family: "Montserrat", sans-serif;
`

const ErrorText = styled.p`
    color: ${colors.primary};
    font-size: 36px;
    margin-bottom: 180px;
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