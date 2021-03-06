import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import styled from 'styled-components'
import Collapsible from '../../components/Collapsible'
import Error from '../../components/Error'
import Gallery from '../../components/Gallery'
import Rating from '../../components/Rating'
import Tag from '../../components/Tag'

const StyledMain = styled.main`
    @media screen and (max-width: 480px) {
        padding: 0 5%;
    }
`

const CollapsiblesContainer = styled.section`
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 480px) {
        flex-direction: column;
    }
`
const StyledSection = styled.section`
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    @media screen and (max-width: 480px) {
        flex-direction: column;
        margin-top: 15px;
    }
`

const LeftCol = styled.div`
`

const RightCol = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    @media screen and (max-width: 480px) {
        flex-direction: row-reverse;
        align-items: center;
        justify-content: space-between;
    }
`

const StyledTitle = styled.h2`
    font-weight: 500;
    font-size: 36px;
    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`

const StyledLocation = styled.p`
    font-weight: 500;
    font-size: 18px;
    @media screen and (max-width: 480px) {
        font-size: 14px;
        margin-top: 5px;
    }
`

const TagWrapper = styled.div`
    display: flex;
    margin-top: 20px;
`
const OwnerDiv = styled.div`
    display: flex;
    align-items: flex-start;
`

const OwnerName = styled.p`
    font-weight: 500;
    font-size: 18px;
    padding-top: 8px;
    text-align: end;
    margin-right: 10px;
    line-height: 142.6%;
    width: 90px;
`
const OwnerAvatar = styled.img`
    width: 64px;
    height: 64px;
    border-radius: 50%;
`

function Apartment() {
    const { id } = useParams()
    const [apartmentsList, setApartmentsList] = useState([])
    const [error, setError] = useState(false)
    const [isDataLoading, setDataLoading] = useState(true)

    useEffect(() => {
        async function searchApartment() {
            setDataLoading(true)
            try {
                const response = await fetch('./../logements.json')
                const apartments = await response.json()
                setApartmentsList(apartments)
            } catch (err) {
                console.log(err)
                setError(true)
            } finally {
                setDataLoading(false)
            }
        }
        searchApartment()
    }, [])

    const apartment = apartmentsList.find((apartment) => apartment.id === id)

    if (error) {
        return <Error />
    }
    return (
        <>
            {isDataLoading ? (
                'chargement'
            ) : apartment ? (
                <>
                    {
                        <StyledMain>
                            <Gallery pictures={apartment.pictures} />
                            <StyledSection>
                                <LeftCol>
                                    <StyledTitle>{apartment.title}</StyledTitle>
                                    <StyledLocation>
                                        {apartment.location}
                                    </StyledLocation>
                                    <TagWrapper>
                                        {apartment.tags.map((tag) => (
                                            <Tag key={id + tag}>{tag}</Tag>
                                        ))}
                                    </TagWrapper>
                                </LeftCol>

                                <RightCol>
                                    <OwnerDiv>
                                        <OwnerName>
                                            {apartment.host.name}
                                        </OwnerName>
                                        <OwnerAvatar
                                            src={apartment.host.picture}
                                            alt={apartment.host.name}
                                        />
                                    </OwnerDiv>
                                    <Rating rate={apartment.rating} />
                                </RightCol>
                            </StyledSection>
                            <CollapsiblesContainer>
                                <Collapsible title="Description" type="big">
                                    {apartment.description}
                                </Collapsible>
                                <Collapsible title="??quipements" type="big">
                                    <ul>
                                        {apartment.equipments.map(
                                            (equipement) => (
                                                <li key={id + equipement}>
                                                    {equipement}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </Collapsible>
                            </CollapsiblesContainer>
                        </StyledMain>
                    }
                </>
            ) : (
                <Error />
            )}
        </>
    )
}

export default Apartment
