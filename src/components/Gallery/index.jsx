import { useState } from 'react'
import styled from 'styled-components'
import { ChevronBtn } from '../../utils/styles/Atoms'

export const StyledSlider = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 415px;
    border-radius: 25px;
    overflow: hidden;
    @media screen and (max-width: 480px) {
        height: 255px;
    }
`

export const SlideImage = styled.img`
    object-fit: cover;
    width: 100%;
    border-radius: 25px;
    @media screen and (max-width: 480px) {
        height: 100%
    }
`

const Numbering = styled.span`
    position: absolute;
    bottom: 5%;
    color: white;
    @media screen and (max-width: 480px) {
        display: none;
    }
`

function Gallery({ pictures }) {
    const [current, setCurrent] = useState(0)
    const length = pictures.length

    const nextPic = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const prevPic = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    return (
        <StyledSlider>
            <ChevronBtn onClick={prevPic} $direction="left">
                Précédent
            </ChevronBtn>
            <ChevronBtn onClick={nextPic} $direction="right">
                Suivant
            </ChevronBtn>
            <Numbering>
                {current + 1}/{length}
            </Numbering>
            {pictures.map(
                (pic, index) =>
                    index === current && (
                        <SlideImage key={pic} src={pic} alt="" />
                    )
            )}
        </StyledSlider>
    )
}

export default Gallery
