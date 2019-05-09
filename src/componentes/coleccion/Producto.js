import React, { Component } from 'react';

class Producto extends Component {
    
    render() {
        const {produc, titulo, descr} = this.props.producto 
        return ( 
            <div className="col-12 col-md-6  hero-img">
            <a href="#">
              <img src={produc} alt="" />
            </a>
            <div className="mt-2">
              <a href="#">
                <span className="Text-ippercase font-weight-bold"> {titulo}</span >
                <br />
                <span>{descr}</span>
                <i className="fas fa-caret-right"></i>
              </a>
            </div>
          </div>
         );
    }
}
 
export default Producto;