import React, {Component} from 'react';
import '../assert/scss/style.scss'
import Button from "./Button";

class Producto extends Component {
    render() {
        console.log(this.props)
        const {producto, agregarAlCarro} = this.props
        return (
            <div className="producto">
                <img src={producto.img} alt={producto.name}/>
                <h3>{producto.name}</h3>
                <p>{producto.price}</p>
                <Button onClick={() => agregarAlCarro(producto)}>
                    Agregar al carro
                </Button>
            </div>
        );
    }
}

export default Producto;
