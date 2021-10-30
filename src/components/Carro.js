import React, {Component} from 'react';
import BubbleAlert from "./BubbleAlert";
import "../assert/scss/style.scss"
import DetallesCarro from "./DetallesCarro";

class Carro extends Component {
    state = {
        isShow: false
    }

    render() {
        const {carro} = this.props;
        const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0);
        const {isShow} = this.state;
        return (
            <div>
                <span className="bubble">
                    {cantidad > 0 ? <BubbleAlert value={cantidad}/> : null}
                </span>
                <button className="carro" onClick={() => this.setState({isShow: !isShow})}>Carro</button>
                {isShow ? <DetallesCarro carro={carro}/> : null}
            </div>
        );
    }
}

export default Carro;