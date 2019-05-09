import React, { Component } from 'react';
import './Header.css';
import Logo from './Logo.js';
import Nav from './Nav.js';
import Iconos from './Iconos.js';
import Oferta from './Oferta.js';
import Carousel from './Carousel.js';


class Header extends React.Component {
    state = { 
        
     }
    render(){
        return(
          <header>  
            <div className="custom-nav-container d-flex align-items-center justify-content-between px-2 py-3 shadow-sm">
                <Logo
                    titulo = "Meteoro"
                />
                <Nav/>
                <Iconos/>

               
            </div> 
            <Oferta
                titulo = "Free Shipping"
                descripcion = "On orders of $100 or more!"
            />
            <Carousel/>
          </header>  
        );
    }
}
export default Header;