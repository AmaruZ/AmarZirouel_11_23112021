import Collapsible from '../../components/Collapsible'
import Cover from '../../components/Banner'
import pic from '../../assets/about-pic.png'
import { Component } from 'react'
import './index.css'

class About extends Component {
    render() {
        return (
            <>
                <Cover pic={pic} type="about"></Cover>
                <div className="collapsibles-container">
                    <Collapsible title="Fiabilité" type="medium">
                        Les annonces postées sur Kasa garantissent une fiabilité
                        totale. Les photos sont conformes aux logements, et
                        toutes les informations sont régulièrement vérifiées par
                        nos équipes.
                    </Collapsible>
                    <Collapsible title="Respect" type="medium">
                        La bienveillance fait partie des valeurs fondatrices de
                        Kasa. Tout comportement discriminatoire ou de
                        perturbation du voisinage entraînera une exclusion de
                        notre plateforme.
                    </Collapsible>
                    <Collapsible title="Service" type="medium">
                        Nos équipes se tiennent à votre disposition pour vous
                        fournir une expérience parfaite. N'hésitez pas à nous
                        contacter si vous avez la moindre question.
                    </Collapsible>
                    <Collapsible title="Responsabilité" type="medium">
                        La sécurité est la priorité de Kasa. Aussi bien pour nos
                        hôtes que pour les voyageurs, chaque logement correspond
                        aux critères de sécurité établis par nos services. En
                        laissant une note aussi bien à l'hôte qu'au locataire,
                        cela permet à nos équipes de vérifier que les standards
                        sont bien respectés. Nous organisons également des
                        ateliers sur la sécurité domestique pour nos hôtes.
                    </Collapsible>
                </div>
            </>
        )
    }
}

export default About
