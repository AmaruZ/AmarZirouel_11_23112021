import Cover from '../../components/Banner'
import pic from '../../assets/home-pic.png'
import Card from '../../components/Card'
import { Component } from 'react'
import './index.css'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            apartmentsList: [],
        }
    }

    componentDidMount() {
        const url = './logements.json'
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                this.setState({ apartmentsList: data })
            })
            .catch((error) => {
                console.log(`Erreur au fetch: ${error}`)
            })
    }

    render() {
        const { apartmentsList } = this.state
        return (
            <>
                <Cover pic={pic}>Chez vous, partout et ailleurs</Cover>
                <section className="home__cards">
                    {apartmentsList.map((apartment) => (
                        <Card
                            key={apartment.id}
                            title={apartment.title}
                            cover={apartment.cover}
                            id={apartment.id}
                        />
                    ))}
                </section>
            </>
        )
    }
}

export default Home
