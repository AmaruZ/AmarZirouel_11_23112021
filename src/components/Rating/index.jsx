import styled from 'styled-components'
import colors from '../../utils/styles/colors'

const StarsContainer = styled.div`
    display: flex;
    margin-top: 20px;
    @media screen and (max-width: 480px) {
        width: 40%;
        margin-top: 10px;
    }
`
const StyledSvg = styled.svg`
    margin-left: 10px;
    @media screen and (max-width: 480px) {
        margin-left: 0;
        margin-right: 5px;
    }
`

function Rating({ rate }) {
    const stars = []

    for (let i = 0; i < rate; i++) {
        stars.push(
            <StyledSvg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                key={i.toString()}
            >
                <path
                    d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z"
                    fill={colors.primary}
                />
            </StyledSvg>
        )
    }
    if (stars.length < 5) {
        for (let i = stars.length; i < 5; i++) {
            stars.push(
                <StyledSvg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    key={i.toString()}
                >
                    <path
                        d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z"
                        fill="#E3E3E3"
                    />
                </StyledSvg>
            )
        }
    }

    return <StarsContainer>{stars}</StarsContainer>
}

export default Rating
