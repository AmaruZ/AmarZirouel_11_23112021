import styled from 'styled-components'
import logo from '../../assets/logo.svg'
import { StyledLink } from '../../utils/styles/Atoms'

const KasaLogo = styled.img`
    height: 68px;
`

const StyledHeader = styled.header`
  padding: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledNav = styled.nav`
    display: flex;
    width: 250px;
    justify-content: space-between;
`

function Header(){
    return(
        <StyledHeader>
            <KasaLogo src={logo} alt="Kasa" />
            <StyledNav>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/about">A Propos</StyledLink>
            </StyledNav>
        </StyledHeader>
    )
}

export default Header