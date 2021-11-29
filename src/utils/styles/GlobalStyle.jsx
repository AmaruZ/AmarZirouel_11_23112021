import { createGlobalStyle } from 'styled-components'

const StyledGlobalStyle = createGlobalStyle`
    *{
        font-family: 'Montserrat', sans-serif;
        box-sizing: border-box;
    }
    body{
        display: flex;
        flex-direction: column;
        padding: 0 5%;
    }
`

function GlobalStyle() {
    return <StyledGlobalStyle  />
}

export default GlobalStyle
