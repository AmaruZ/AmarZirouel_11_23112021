import { Component } from 'react'
import Collapsible from '../../components/Collapsible'
import Error from '../../components/Error'
import Gallery from '../../components/Gallery'
import Owner from '../../components/Owner'
import Rating from '../../components/Rating'
import Tag from '../../components/Tag'
import { withRouter } from './withRouter'
import './index.css'

class Apartment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isDataLoading: true,
            error: false,
            apartmentsList: [],
            apartment: {},
        }
    }

    componentDidMount() {
        this.setState({ isDataLoading: true })
        const url = './../logements.json'
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    apartmentsList: data,
                })
            }).then(()=>{
                this.setState({
                    apartment: this.state.apartmentsList.find(
                        (apart) => apart.id === this.props.id.id
                    ),
                })
            })
            .finally(() => {
                this.setState({ isDataLoading: false })
            })
            .catch((error) => {
                console.log(`Erreur au fetch: ${error}`)
                this.setState({ error: true })
            })
    }

    render() {
        return (
            <>
                {this.state.isDataLoading ? (
                    'chargement'
                ) : this.state.apartment ? (
                    <>
                        {
                            <main className="apartment__main">
                                <Gallery
                                    pictures={this.state.apartment.pictures}
                                />
                                <section className="apartment__infos">
                                    <div>
                                        <h2 className="apartment__title">
                                            {this.state.apartment.title}
                                        </h2>
                                        <p className="apartment__location">
                                            {this.state.apartment.location}
                                        </p>
                                        <Tag
                                            tags={this.state.apartment.tags}
                                            id={this.state.apartment.id}
                                        />
                                    </div>

                                    <div className="apartment__col-right">
                                        <Owner
                                            name={
                                                this.state.apartment.host.name
                                            }
                                            picture={
                                                this.state.apartment.host
                                                    .picture
                                            }
                                        />
                                        <Rating
                                            rate={this.state.apartment.rating}
                                        />
                                    </div>
                                </section>
                                <section className="apartment__collapsibles">
                                    <Collapsible title="Description" type="big">
                                        {this.state.apartment.description}
                                    </Collapsible>
                                    <Collapsible title="Équipements" type="big">
                                        <ul>
                                            {this.state.apartment.equipments.map(
                                                (equipement) => (
                                                    <li
                                                        key={
                                                            this.state.id +
                                                            equipement
                                                        }
                                                    >
                                                        {equipement}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </Collapsible>
                                </section>
                            </main>
                        }
                    </>
                ) : (
                    <Error />
                )}
            </>
        )
    }
}

export default withRouter(Apartment)
