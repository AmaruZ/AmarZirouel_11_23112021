import { Component } from 'react'
import colors from '../../utils/styles/colors'
import './index.css'

class Rating extends Component {
    setRating() {
        const stars = []
        for (let i = 0; i < this.props.rate; i++) {
            stars.push(
                <svg
                    className="rating__star"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    key={i.toString()}
                >
                    <path
                        d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z"
                        fill={colors.primary}
                    />
                </svg>
            )
        }
        if (stars.length < 5) {
            for (let i = stars.length; i < 5; i++) {
                stars.push(
                    <svg
                        className="rating__star"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        key={i.toString()}
                    >
                        <path
                            d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z"
                            fill="#E3E3E3"
                        />
                    </svg>
                )
            }
        }
        return stars
    }

    render() {
        return <div className="rating__container">{this.setRating()}</div>
    }
}

export default Rating
