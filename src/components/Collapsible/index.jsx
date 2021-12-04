import { createRef } from 'react'
import chevron from '../../assets/chevron-down.svg'
import { Component } from 'react'
import './index.css'

class Collapsible extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isCollapse: true,
            style: {
                height: '0',
                overflow: 'hidden',
                transition: 'height 0.2s ease-out',
            },
        }
        this.inputRef = createRef(0)
    }

    componentDidMount() {
        this.setState({ isCollapse: true })
    }

    render() {
        return (
            <div
                className={`collapsible__container collapsible__container-${this.props.type}`}
            >
                <button
                    className={`collapsible__button collapsible__button-${this.props.type}`}
                    onClick={() => {
                        this.setState({
                            isCollapse: !this.state.isCollapse,
                            style: !this.state.isCollapse
                                ? {
                                      height: '0',
                                      overflow: 'hidden',
                                      transition: 'height 0.2s ease-out',
                                  }
                                : {
                                      height: `${this.inputRef.current.scrollHeight.toString()}px`,
                                      transition: 'height 0.2s ease-out',
                                  },
                        })
                    }}
                >
                    {this.props.title}{' '}
                    <img
                        className={
                            this.state.isCollapse
                                ? `collapsible__chevron collapsible__chevron-down`
                                : `collapsible__chevron collapsible__chevron-up`
                        }
                        src={chevron}
                        alt=""
                    />
                </button>
                <div
                    className="collapsible__content-parent"
                    aria-expanded={!this.state.isCollapse}
                    style={this.state.style}
                >
                    <div
                        className={
                            this.props.type
                                ? `collapsible__content collapsible__content-${this.props.type}`
                                : `collapsible__content`
                        }
                        ref={this.inputRef}
                    >
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default Collapsible
