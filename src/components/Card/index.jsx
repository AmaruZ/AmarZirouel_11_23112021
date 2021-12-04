import { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.css'

class Card extends Component {
    render() {
        return (
            <Link
                className="card__container"
                to={`/apartment/${this.props.id}`}
            >
                <img
                    className="card__cover"
                    src={this.props.cover}
                    alt={this.props.title}
                />
                <span className="card__title">{this.props.title}</span>
            </Link>
        )
    }
}

export default Card
