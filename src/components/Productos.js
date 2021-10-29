import React, {Component} from 'react';
import Producto from "./Producto";
import '../assert/scss/style.scss'

class Productos extends Component {
    render() {
        const {productos, agregarAlCarro} = this.props;
        return (
            <div className="productos">
                {productos.map((producto) =>
                    <Producto
                        agregarAlCarro={agregarAlCarro}
                        key={producto.name}
                        producto={producto}
                    />)
                }
            </div>
        );
    }
}

export default Productos;
