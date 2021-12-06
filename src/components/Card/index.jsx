import { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import PropTypes from 'prop-types'

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

Card.propType = {
    id: PropTypes.number,
    cover: PropTypes.string,
    title: PropTypes.string,
}
