import React, {Component} from 'react';
import tomate from "./assert/img/tomate.jpg"
import arbejas from "./assert/img/arbejas.jpg"
import lechuga from "./assert/img/lechuga.jpg"
import Productos from "./components/Productos";

class App extends Component {
    state = {
        productos: [
            {name: 'Tomates', price: 1500, img: tomate},
            {name: 'Arbejas', price: 2500, img: arbejas},
            {name: 'Lechuga', price: 500, img: lechuga},
        ]
    }

    render() {
        return (
            <div>
                <Productos
                    agregarAlCarro={() => {
                        alert("No hace nada")
                    }}
                    productos={this.state.productos}
                />
            </div>
        );
    }
}

export default App;