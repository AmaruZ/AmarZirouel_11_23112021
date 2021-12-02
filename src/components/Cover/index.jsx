import styled from 'styled-components'


const StyledCover = styled.div`
    position: relative;
    width: 100%;
    height: 223px;
    border-radius: 25px;
    overflow: hidden;
    @media screen and (max-width: 480px) {
        padding: 0 5%;
        height: 111px;
        border-radius: 10px;
    }
`

const StyledImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: contrast(50%);
    @media screen and (max-width: 480px) {
        border-radius: 10px;
    }
`

const StyledContent = styled.p`
    position absolute;
    color: white;
    font-size: 48px;
    top: 50%;
    transform: translateY(-50%);
    margin: 0;
    width: 100%;
    text-align:center;
    @media screen and (max-width: 480px) {
        font-size: 24px;
        width: 217px;
        height: 48px;
        text-align: start;
        left: 10%;
        top: 45%;
    }
`

function Cover({pic, children}){


    return (
        <StyledCover>
            <StyledImg src={pic} />
            {children&& <StyledContent> {children}</StyledContent>}
        </StyledCover>
    )
}

export default Cover