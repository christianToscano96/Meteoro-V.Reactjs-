import React from 'react';

const Producto = (props) => {
    
        const {imagen, titulo, descr, id} = props.producto 
        return ( 
            <div className="col-12 col-md-6  hero-img">
            <a href="#">
              <img src={`images/hero/${imagen}.jpg`} alt="" />
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
 
export default Producto;