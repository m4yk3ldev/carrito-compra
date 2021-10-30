import React, {Component} from 'react';
import "../assert/scss/style.scss"

class DetallesCarro extends Component {
    render() {
        const {carro} = this.props;
        return (
            <div className='detallesCarro'>
                <ul className="ul-detallecarro">
                    {carro.map(x =>
                        <li className='li-detallecarro' key={x.name}>
                            <img className='img-carro' src={x.img} alt={x.name}/>
                            {x.name} <span>{x.cantidad}</span>
                        </li>)
                    }
                </ul>
            </div>
        );
    }
}

export default DetallesCarro;