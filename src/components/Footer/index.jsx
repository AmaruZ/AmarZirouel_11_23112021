import { Component } from 'react'
import logo from '../../assets/logo-white.svg'
import './index.css'

class Footer extends Component {
    render() {
        return (
            <div className="footer__container">
                <img className="footer__logo" src={logo} alt="Kasa" />
                <p className="footer__text">© 2020 Kasa. All rights reserved</p>
            </div>
        )
    }
}

export default Footer
