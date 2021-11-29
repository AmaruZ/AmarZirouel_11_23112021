import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/styles/colors'

const StyledCard = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 340px;
    height: 340px;
    background: ${colors.primary};
    background: linear-gradient(
        0deg,
        rgba(119, 48, 48, 1) 0%,
        rgba(255, 96, 96, 1) 100%
    );
    margin: 30px;
    border-radius: 20px;
    text-decoration: none;
`
const TitleCard = styled.span`
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    color: white;
    margin: 20px;
    height: 52px;
`

function Card({ title, id }) {
    return (
        <StyledCard to={`/apartment/${id}`}>
            <TitleCard>{title}</TitleCard>
        </StyledCard>
    )
}

export default Card
