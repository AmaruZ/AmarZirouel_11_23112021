import styled from 'styled-components'


const StyledCover = styled.div`
    position: relative;
    width: 100%;
    height: 223px;
    border-radius: 25px;
    overflow: hidden;
`

const StyledImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: contrast(50%);
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