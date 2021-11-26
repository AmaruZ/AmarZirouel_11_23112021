import styled from 'styled-components'


const StyledCover = styled.div`
    width: 100%;
    height: 223px;
    border-radius: 25px;
    overflow: hidden;
`

const StyledImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;

`

function Cover({pic, children}){


    return (
        <StyledCover>
            <StyledImg src={pic} />
            {children}
        </StyledCover>
    )
}

export default Cover