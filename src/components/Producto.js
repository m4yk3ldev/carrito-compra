import React, {Component} from 'react';
import '../assert/scss/style.scss'
import Button from "./Button";

class Producto extends Component {
    render() {
        const {producto, agregarAlCarro} = this.props
        return (
            <div className="producto">
                <img className='img' src={producto.img} alt={producto.name}/>
                <h3>{producto.name}</h3>
                <p>{producto.price}</p>
                <Button className="btn" onClick={() => agregarAlCarro(producto)}>
                    Agregar al carro
                </Button>
            </div>
        );
    }
}

export default Producto;
