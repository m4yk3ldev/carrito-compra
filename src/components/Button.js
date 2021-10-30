import React, {Component} from 'react'
import '../assert/scss/style.scss'

class Button extends Component {
    render() {
        return (
            <React.Fragment>
                <button {...this.props} ></button>
            </React.Fragment>
        )
    }
}

export default Button
