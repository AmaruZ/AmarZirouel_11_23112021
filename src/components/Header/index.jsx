import { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import './index.css'

class Header extends Component {
    render() {
        return (
            <header className="header__container">
                <h1>
                    <Link to="/">
                        <img className="header__logo" src={logo} alt="Kasa" />
                    </Link>
                </h1>
                <nav className="header__nav">
                    <Link className="link" to="/">
                        Accueil
                    </Link>
                    <Link className="link" to="/about">
                        A Propos
                    </Link>
                </nav>
            </header>
        )
    }
}

export default Header
