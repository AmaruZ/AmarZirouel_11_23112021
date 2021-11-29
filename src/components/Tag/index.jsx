import styled from "styled-components"
import colors from "../../utils/styles/colors"

const StyledTag = styled.p`
    width: 115px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${colors.primary};
    border-radius: 10px;
    color: white;
    font-size: 14px;
    weight: 500;
`

function Tag({children}){
    return (
        <StyledTag>{children}</StyledTag>
    )
}

export default Tag