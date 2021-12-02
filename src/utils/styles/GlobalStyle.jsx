import { createGlobalStyle } from 'styled-components'
import colors from './colors'

const StyledGlobalStyle = createGlobalStyle`
    *{
        font-family: 'Montserrat', sans-serif;
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        color: ${colors.primary};
    }
    body{
        display: flex;
        flex-direction: column;
        padding: 0 5%;
        @media screen and (max-width: 480px) {
            padding:0;
        }
    }
    ul{
        list-style-type: none;
    }
    li{
        margin-top: 5px;
    }

`

function GlobalStyle() {
    return <StyledGlobalStyle  />
}

export default GlobalStyle
