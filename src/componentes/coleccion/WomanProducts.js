import React, { Component } from 'react';
import Producto from './Producto.js'

class WomenProducts extends Component {
    render() { 
        return ( 
           <section className="women-collections pt-0">
                <div className="container">
                    <div className="section-heading text-center mb-5">
                    <h1 className="text-clipped text-uppercase">Women's Collections</h1>
                    <p className="text-secondary">Shop the newest trends</p>
                    </div>

                    <div className= "row" >
                        { Object.keys(this.props.womenproducts).map(key => (
                            <Producto
                                key={key}
                                producto={this.props.producto[key]}
                            /> 
                        ) ) }
                    </div>
                </div>
            </section>
         );
    }
}
 
export default WomenProducts;