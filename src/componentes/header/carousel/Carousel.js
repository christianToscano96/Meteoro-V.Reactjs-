import React, { Component } from 'react';
import '../Header.css';


class Carousel extends React.Component {
    
     
    render() {
        return (
            
            <div class="container">
                <div class="carousel slide"id="carousel-indicators" data-ride="carousel">

                <ol class="carousel-indicators">
                    <li class="active"data-target="#carousel-indicators" data-slide-to="0"></li>
                    <li data-target="#carousel-indicators" data-slide-to="1"></li>
                    <li data-target="#carousel-indicators" data-slide-to="2"></li>
                </ol>
                <br />
                <div class="carousel-inner">
                    <div class="carousel-item active ">
                        <a href="#">
                            <img class="img-fluid d-md-none"  src="images/carousel/carousel-img-1-mobile.jpeg" alt="" />
                            <img class="img-fluid d-none d-md-block" src="images/carousel/carousel-img-1.jpeg" alt=""/>
                        </a>
                    </div>
                    <div class="carousel-item">
                        <a href="#">
                            <img class="img-fluid d-md-none"  src="images/carousel/carousel-img-2-mobile.jpg" alt="" />
                            <img class="img-fluid d-none d-md-block" src="images/carousel/carousel-img-2.jpg" alt=""/>
                        </a>
                    </div>
                    <div class="carousel-item ">
                        <a href="#">
                            <img class="img-fluid d-md-none"  src="images/carousel/carousel-img-3-mobile.jpeg" alt="" />
                            <img class="img-fluid d-none d-md-block" src="images/carousel/carousel-img-3.jpeg" alt=""/>
                        </a>
                    </div>

                   
                </div>
                    <a class="carousel-control-prev"href="#carousel-indicators"role="button" data-slide="prev" >
                        <i class="fas fa-chevron-left text-clipped"></i>
                    </a>
                    <a class="carousel-control-next" href="#carousel-indicators"role="button" data-slide="prev">          
                        <i class="fas fa-chevron-right text-clipped"></i>
                    </a>
                </div> 
         </div> 
        );
    }
}

export default Carousel;