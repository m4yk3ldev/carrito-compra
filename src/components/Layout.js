import {Component} from 'react'
import '../assert/scss/style.scss'

class Layout extends Component {
    render() {
        return (
            <div className='layout'>
                <div className='container'>
                    {this.props.children}
                    lala
                </div>
            </div>
        )
    }
}

export default Layout
