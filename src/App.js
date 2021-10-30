import React, {Component} from 'react';
import tomate from "./assert/img/tomate.jpg"
import arbejas from "./assert/img/arbejas.jpg"
import lechuga from "./assert/img/lechuga.jpg"
import Productos from "./components/Productos";
import Layout from "./components/Layout";
import Title from "./components/Title";
import Navbar from "./components/Navbar";

class App extends Component {
    state = {
        productos: [
            {name: 'Tomates', price: 1500, img: tomate},
            {name: 'Arbejas', price: 2500, img: arbejas},
            {name: 'Lechuga', price: 500, img: lechuga},
        ],
        carro: [],
    }

    agregarAlCarro = (producto) => {
        const {carro} = this.state;
        if (carro.find(x => x.name === producto.name)) {
            const newCarro = carro.map(x => x.name === producto.name ? ({...x, cantidad: x.cantidad + 1}) : x)
            return this.setState({carro: newCarro})
        }
        return this.setState({
            carro: this.state.carro.concat({
                ...producto,
                cantidad: 1,
            })
        })
    }

    render() {
        return (
            <div>
                <Navbar carro={this.state.carro}/>
                <Layout>
                    <Title/>
                    <Productos
                        agregarAlCarro={this.agregarAlCarro} productos={this.state.productos}
                    />
                </Layout>
            </div>
        );
    }
}

export default App;