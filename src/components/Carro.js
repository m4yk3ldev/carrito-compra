import React, {Component} from 'react';
import BubbleAlert from "./BubbleAlert";
import "../assert/scss/style.scss"

class Carro extends Component {
    render() {
        return (
            <div>
                <span className="bubble">
                    <BubbleAlert value={5}/>
                </span>
                <button className="carro">Carro</button>
            </div>
        );
    }
}

export default Carro;