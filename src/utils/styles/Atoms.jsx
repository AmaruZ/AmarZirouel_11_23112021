import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from './colors'
import chevron from '../../assets/chevron-down.svg'

export const StyledLink = styled(Link)`
    color: ${colors.primary};
    text-decoration: none;
    font-size: 24px;
    text-align: center;
    &:hover {
        text-decoration: underline;
    }
    @media screen and (max-width: 480px) {
        font-size: 12px;
        text-transform: uppercase;
        margin-left: 10px;
    }
`
export const ChevronBtn = styled.button`
    position: absolute;
    height: 47px;
    width: 80px;
    top: 50%;
    background:  no-repeat center/100% url(${chevron}) ;
    border: none;
    cursor: pointer;
    color: rgba(0, 0, 0, 0);
    @media screen and (max-width: 480px) {
        width: 30px;
        height: 20px;
        font-size: 5px;
    }
    ${(props) =>
        props.$direction === 'right'
            ? ` right: 20px;
                transform: rotate(-90deg) translateX(25%);
                @media screen and (max-width: 480px) {
                    right: 2%;
                }`
            : props.$direction === 'left' &&
              ` left: 20px;
              transform: rotate(90deg) translateX(-25%);
              @media screen and (max-width: 480px) {
                left: 2%;
            }`
  }
    font-size: 10px;
`
