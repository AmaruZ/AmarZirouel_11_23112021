import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Error from '../../components/Error'
import Gallery from '../../components/Gallery'
import Tag from '../../components/Tag'

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
                        <main>
                            <Gallery />
                            <div>
                                <div>
                                <h2>{apartment.title}</h2>
                                <p>{apartment.location}</p>
                                </div>
                                        <div>
                                        <span>{apartment.host.name}</span>
                                        <img src={apartment.host.picture} alt={apartment.host.name} />
                                        </div>
                            </div>
                            <div>
                                {
                                    apartment.tags.map(tag => (
                                        <Tag>{tag}</Tag>
                                    ))
                                }
                            </div>
                        </main>
                    }
                </>
            ) : (
                <Error />
            )}
        </>
    )
}

export default Apartment
