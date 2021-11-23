import styled from 'styled-components'
import logo from '../../assets/logo-white.svg'

const StyledFooter = styled.footer`
    background-color: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 210px;
    padding-top: 66px;
`
const CopyrightsParagraph = styled.p`
    color: #FFF;
    font-size: 24px;
    font-weight: 500;
    padding-top: 30px;
`
const KasaLogo = styled.img`
    height: 40px;
`

function Footer(){
    return(
        <StyledFooter>
            <KasaLogo src={logo} alt="Kasa" />
            <CopyrightsParagraph>© 2020 Kasa. All rights reserved</CopyrightsParagraph>
        </StyledFooter>
    )
}

export default Footer