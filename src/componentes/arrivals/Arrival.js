import React from 'react';

const Arrival = (props) => {

        const {imagen, titulo, descr} = props.arrival
        return ( 
            <div class="col-12 col-sm-6 col-md-3 mb-3">
                <div class="new-arrival-img mb-3">
                <img src={`images/shoes/${imagen}.jpg`} alt={titulo} />
                </div>
                <a href="#">
                <span class="text-uppercase font-weight-bold">{titulo}</span>
                <br />
                <span>{descr}</span>
                <i class="fas fa-caret-right"></i>
                </a>
          </div>
         );   
}
 
export default Arrival;