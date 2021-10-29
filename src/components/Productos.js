import React, {Component} from 'react';
import Producto from "./Producto";
import '../assert/scss/style.scss'

class Productos extends Component {
    render() {
        const {productos, agregarAlCarro} = this.props;
        return (
            <React.Fragment>
                {productos.map((producto) =>
                    <Producto class='producto'
                              agregarAlCarro={agregarAlCarro}
                              key={producto.name}
                              producto={producto}
                    />)
                }
            </React.Fragment>
        );
    }
}

export default Productos;