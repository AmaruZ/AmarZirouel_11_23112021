import styled from 'styled-components'
import logo from '../../assets/logo.svg'
import { StyledLink } from '../../utils/styles/Atoms'

const KasaLogo = styled.img`
    height: 68px;
    @media screen and (max-width: 480px) {
        height: 47px;
    }
`

const StyledHeader = styled.header`
  padding: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 480px) {
    padding: 20px 5%;
    }

`

const StyledNav = styled.nav`
    display: flex;
    width: 250px;
    justify-content: space-between;
    @media screen and (max-width: 480px) {
        width: 50%;
        justify-content: flex-end;
    }


`

function Header(){
    return(
        <StyledHeader>
            <StyledLink to="/">
                <KasaLogo src={logo} alt="Kasa" />
            </StyledLink>
            <StyledNav>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/about">A Propos</StyledLink>
            </StyledNav>
        </StyledHeader>
    )
}

export default Header