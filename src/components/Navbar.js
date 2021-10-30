import React, {Component} from 'react';
import "../assert/scss/style.scss"
import Logo from "./Logo";
import Carro from "./Carro";

class Navbar extends Component {
    render() {
        const {carro} = this.props;
        return (
            <React.Fragment>
                <nav className='navbar'>
                    <Logo/>
                    <Carro carro={carro}/>
                </nav>
            </React.Fragment>
        );
    }
}

export default Navbar;