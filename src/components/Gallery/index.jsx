import { Component } from 'react'
import '../../utils/styles/Atoms.css'
import './index.css'
import PropTypes from 'prop-types'

class Gallery extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current: 0,
        }
        this.length = this.props.pictures.length
    }

    nextPic = () => {
        this.state.current === this.length - 1
            ? this.setState({ current: 0 })
            : this.setState({ current: this.state.current + 1 })
    }
    prevPic = () => {
        this.state.current === 0
            ? this.setState({ current: this.length - 1 })
            : this.setState({ current: this.state.current - 1 })
    }

    render() {
        return (
            <div className="gallery__container">
                {this.length > 1 && (
                    <>
                        <button
                            className="btn__chevron btn__chevron-left"
                            onClick={this.prevPic}
                        >
                            Précédent
                        </button>
                        <button
                            className="btn__chevron btn__chevron-right"
                            onClick={this.nextPic}
                        >
                            Suivant
                        </button>
                    </>
                )}

                <span className="gallery__numbering">
                    {this.state.current + 1}/{this.length}
                </span>
                {this.props.pictures.map(
                    (pic, index) =>
                        index === this.state.current && (
                            <img
                                className="gallery__picture"
                                key={pic}
                                src={pic}
                                alt=""
                            />
                        )
                )}
            </div>
        )
    }
}

export default Gallery

Gallery.propTypes = {
    pictures: PropTypes.array,
}
