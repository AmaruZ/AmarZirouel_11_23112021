import { Component } from 'react'
import './index.css'

class Tag extends Component {
    render() {
        return (
            <div className="tag__container">
                {this.props.tags.map((tag) => (
                    <p key={this.props.id + tag} className="tag">
                        {tag}
                    </p>
                ))}
            </div>
        )
    }
}

export default Tag
