import { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.css'

class Error extends Component {
    render() {
        return (
            <div className="error__container">
                <h2 className="error__title">404</h2>
                <p className="error__text">
                    Oups! La page que vous demandez n'existe pas.
                </p>
                <Link to="/" className="link">
                    Retournez sur la page d'accueil
                </Link>
            </div>
        )
    }
}

export default Error
