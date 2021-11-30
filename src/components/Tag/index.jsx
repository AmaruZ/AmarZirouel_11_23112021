import styled from "styled-components"
import colors from "../../utils/styles/colors"

const StyledTag = styled.p`
    min-width: 115px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${colors.primary};
    border-radius: 10px;
    color: white;
    font-size: 14px;
    weight: 500;
    padding: 3px 20px;
    margin-right: 10px;

`

function Tag({children}){
    return (
        <StyledTag>{children}</StyledTag>
    )
}

export default Tag