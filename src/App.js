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
        carro: [

        ],
    }

    render() {
        return (
            <div>
                <Navbar/>
                <Layout>
                    <Title/>
                    <Productos
                        agregarAlCarro={() => {
                            alert("No hace nada")
                        }}
                        productos={this.state.productos}
                    />
                </Layout>
            </div>
        );
    }
}

export default App;