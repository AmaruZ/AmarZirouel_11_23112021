import Cover from '../../components/Cover'
import pic from '../../assets/home-pic.png'
import styled from 'styled-components'
import Card from '../../components/Card'
import colors from '../../utils/styles/colors'
import { useEffect, useState } from 'react'

const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background: ${colors.ligthgrey};
    margin-top: 43px;
    border-radius: 25px;
    padding: 20px;
    
`

function Home() {
    const [apartmentsList, setApartmentsList] = useState([])

    useEffect(()=>{
        async function fetchApartments(){
            try{
                const response = await fetch('./logements.json')

                const apartments = await response.json()
                setApartmentsList(apartments)
            } finally{
                
            } 
         }
         fetchApartments() 
      }, [] )
    
    return (
        <>
            <Cover pic={pic}>Chez vous, partout et ailleurs</Cover>
            <CardsContainer>
                {apartmentsList.map((apartment)=>(
                    <Card key={apartment.id} title={apartment.title} id={apartment.id}/>
                ))}
            </CardsContainer>
        </>
    )
}

export default Home
