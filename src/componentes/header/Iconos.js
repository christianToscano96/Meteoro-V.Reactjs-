import React, { Component } from 'react';
import './Header.css';

class Iconos extends React.Component {
    render(){
        return(
            <div className ="nav-icons-container d-flex justify-content-between">
                <div className ="nav-icons">
                    <a href="#">
                        <i className ="fas fa-search text-clipped"></i>
                    </a>
                </div>
                <div className ="nav-icons">
                    <a href="#">
                    <i className ="fas fa-shopping-bag bag-item-count text-clipped"></i>
                    <span className ="badge">2</span>
                    </a>
                </div>
               
                    <div className="nav-icons">
                        <div className="dropdown ">
                        <a className="dropdown-toggle " href="#" data-toggle="dropdown">
                            <i className="fas fa-user text-clipped"></i>
                        </a>
                        <div className="dropdown-menu  ">
                            <form action="" className="p-2 text-secondary">
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Enter Email"  required />
                            
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Enter Password"  required />
                            </div>
                            <div className="form-check">
                                <input type="checkbox"className="form-check-input"name=""id="dropdown-checkbox"/>
                                <label className="form-check-label" for="dropdown-checkbox">Remamber me</label>
   
                            </div>
                            <button type="submit" className="btn btn-bg my-2">Login</button>
                            </form>
                            <div className="dropdown-divider mt-0"></div>

                            <a className="dropdown-item" href="#">Don't heve an account? Sign up</a >
                        
                            <a className="dropdown-item" href="#">Forget your password? Reset now</a  >
 
                        </div>
                        </div>
                    </div>

                    <div class="nav-icons d-lg-none">
                        <i class="fas fa-bars open-menu-icon text-clipped"></i>
                    </div>
                    
            </div>
        );
    }
}

export default Iconos;