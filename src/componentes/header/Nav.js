import React, { Component } from 'react';
import './Header.css';

class Nav extends React.Component {
    render(){
        return(
            <div className="main-nav-outer d-flex ">
                <i
                    className="fas fa-times text-clipped menu-close-icon d-lg-none"
                ></i>

                <nav  className="main-nav navbar navbar-light navbar-expand-lg text-center m-auto" >
                
                    <ul className="navbar-nav d-flex">
                    <li className="nav-item">
                        <a className="nav-link" href="">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="">Men</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="">Women</a>
                    </li>
                    <li>
                        <a className="nav-link" href="">Kids</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="">New arrivals</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="">Sale</a>
                    </li>
                    </ul>
                </nav>
             </div>
        );
    };
}

export default Nav;