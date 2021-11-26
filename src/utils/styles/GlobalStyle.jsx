import { createGlobalStyle } from 'styled-components'

const StyledGlobalStyle = createGlobalStyle`
    *{
        font-family: 'Montserrat', sans-serif;
    }
    body{
        display: flex;
        padding: 0 5%;
    }
`

function GlobalStyle() {
    return <StyledGlobalStyle  />
}

export default GlobalStyle
