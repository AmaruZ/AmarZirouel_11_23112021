import { Component } from 'react'
import './index.css'
import PropTypes from 'prop-types'

class Owner extends Component {
    render() {
        return (
            <div className="owner__container">
                <p className="owner__name">{this.props.name}</p>
                <img
                    className="owner__avatar"
                    src={this.props.picture}
                    alt={this.props.name}
                />
            </div>
        )
    }
}

export default Owner

Owner.propTypes = {
    picture: PropTypes.string,
    name: PropTypes.string
}