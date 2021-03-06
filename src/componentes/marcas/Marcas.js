import React, { Component } from 'react';
import Marca from './Marca.js';
import './Marcas.css';

class Marcas extends React.Component {
    
    render() {
        return (
           <section class="feactured-brands">
                <div class="container">
                    <div class="row align-items-center text-center">
                        { Object.keys(this.props.marcas).map(marca => (
                            <Marca                                
                                marca={this.props.marcas[marca]}
                                key={marca}
                            />
                        ) ) }
                    </div>
                </div>
            </section>
        );
    }
}

export default Marcas; 

