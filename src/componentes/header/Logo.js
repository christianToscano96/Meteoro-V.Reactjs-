import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

const Logo = (props) => {
    return(
        <div clasName="custom-nav-container d-flex align-items-center justify-content-between px-2 py-3 shadow-sm">
            <a clasName="text-clipped navbar-brand">
                <i class="fas fa-meteor d-flex text-clipped">
                    <span class="m-auto text-clipped">{props.titulo}</span>
                </i>
            </a>
        </div>
    );
};

export default Logo;