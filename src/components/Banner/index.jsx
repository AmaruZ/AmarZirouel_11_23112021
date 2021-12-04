import { Component } from 'react'
import './index.css'


class Banner extends Component{
    render(){
        return (
            <div className={`banner__container${this.props.type=== "about" ? " banner__container-about":""}`}>
                <img className="banner__img" src={this.props.pic} alt=""/>
                {this.props.children && <p className="banner_text"> {this.props.children}</p>}
            </div>
        )
    }
}

export default Banner