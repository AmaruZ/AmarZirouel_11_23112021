import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import colors from '../../utils/styles/colors'
import chevron from '../../assets/chevron-down.svg'

const CollapsibleContainer = styled.div`
    margin-top: 30px;
    ${(props) => props.$type === 'medium' ?
    `
     width: 100%;` : props.$type === 'big' && 
     `
     width: 45%;
     `}
`

const CollapseButton = styled.button`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    ${(props) =>
        props.$type === 'medium'
            ? `height: 47px;`
            : props.$type === 'big' &&
              `height: 52px;
      `}
    color: white;
    background-color: ${colors.primary};
    border: none;
    font-family: 'Montserrat';
    font-size: 24px;
    cursor: pointer;
    border-radius: 10px;
    padding-left: 18px;
`
const CollapseParentContent = styled.div`
    margin-top: -15px;

    ${(props) =>
        props.$isCollapse
            ? ` height: 0px;
            overflow: hidden;
            transition: height 0.2s ease-out;`
            : ` height: ${
                  props.$height ? `${props.$height.toString()}px` : 'auto' 
                              };
            transition: height 0.2s ease-out;`
        }
`

const CollapseContent = styled.div`
    background-color: ${colors.ligthgrey};
    color: ${colors.primary};
    font-size: 24px;
    font-weight: 400;
    padding: 35px 18px 20px 18px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    ${props =>
        props.$type === "big" && "height: 250px;"}
`

const Chevron = styled.img`
    margin-right: 30px;
    ${(props) =>
        props.$isCollaps
            ? `
            transform: rotate(0);
            transition: transform 0.3s;
            `
            : `
            transform: rotate(-180deg);
            transition: transform 0.3s;
        `}
`

function Collapsible({ type, collapsed, children, title }) {
    const [isCollapse, setisCollapsed] = useState(collapsed)
    const inputRef = useRef(0)

    useEffect(() => {
        setisCollapsed(true)
    }, [])

    return (
        <CollapsibleContainer $type={type}>
            <CollapseButton
                onClick={() => {
                    setisCollapsed(!isCollapse)
                }}
                $type={type}
            >
                {title} <Chevron src={chevron} alt="" $isCollaps={isCollapse} />
            </CollapseButton>
            <CollapseParentContent
                $isCollapse={isCollapse}
                aria-expanded={isCollapse}
                $height={inputRef.current.scrollHeight}
                $type={type}
            >
                <CollapseContent ref={inputRef} $type={type}>{children}</CollapseContent>
            </CollapseParentContent>
        </CollapsibleContainer>
    )
}

export default Collapsible
