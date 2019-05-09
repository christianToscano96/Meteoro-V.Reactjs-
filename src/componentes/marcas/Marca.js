import React, { Component } from 'react';

 class Marca extends React.Component {
  render() {
      const {marca} = this.props.marca
    return (
      
        <div class="col-12 col-sm-6 col-md-2 mb-5">
            <a href="#">
                <img src={marca} alt="" />              
            </a>
         </div>
    );
  };
};

export default Marca;