import React from 'react';

const Marca = (props) =>  { 
      const {img, nombre} = props.marca
    return (
      
        <div class="col-12 col-sm-6 col-md-2 mb-5">
            <a href="#">
                <img src={`images/brands/${img}.svg`} alt={nombre} />              
            </a>
         </div>
    );

};

export default Marca;