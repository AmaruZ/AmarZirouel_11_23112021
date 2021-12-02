import styled from 'styled-components'
import logo from '../../assets/logo-white.svg'

const StyledFooter = styled.footer`
    position: relative;
    width: 100%;
    height: 210px;
    background-color: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 66px;
    margin-top: 50px;
`
const CopyrightsParagraph = styled.p`
    color: #fff;
    font-size: 24px;
    font-weight: 500;
    padding-top: 30px;
    @media screen and (max-width: 480px) {
        font-size: 12px;
    }
`
const KasaLogo = styled.img`
    height: 40px;
`

function Footer() {
    return (
        <StyledFooter>
            <KasaLogo src={logo} alt="Kasa" />
            <CopyrightsParagraph>
                © 2020 Kasa. All rights reserved
            </CopyrightsParagraph>
        </StyledFooter>
    )
}

export default Footer
