import { createGlobalStyle } from "styled-components"

const StyledGlobalStyle = createGlobalStyle`
    *{
        font-family: 'Montserrat', sans-serif;
    }
    body{
        width: 90%;
        margin-left: auto;
        margin-right: auto;
    }
`

function GlobalStyle(){
    return(
        <StyledGlobalStyle />
    )
}

export default GlobalStyle