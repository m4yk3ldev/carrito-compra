import React, {Component} from 'react';
import "../assert/scss/style.scss"
import Logo from "./Logo";
import Carro from "./Carro";

class Navbar extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className='navbar'>
                    <Logo/>
                    <Carro/>
                </nav>
            </React.Fragment>
        );
    }
}

export default Navbar;