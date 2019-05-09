import React from 'react';
import './Header.css';

const Oferta = (props) => {
    return (  
        <div className="promotions text-white text-center py-2 mg-5">
            <span>
                <span className="text-uppercase font-weight-bold ">{props.titulo}</span> 
                {props.descripcion}
            </span>
        </div>
        
    );
}
 
export default Oferta;