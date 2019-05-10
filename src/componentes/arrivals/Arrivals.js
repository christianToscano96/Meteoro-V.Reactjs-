import React, { Component } from 'react';
import Arrival from './Arrival';
import './Arrivals.css';

class Arrivals extends React.Component {
    render() { 
        return ( 
            <section className="arrivals">
                    <div className="container">
                        <div className="section-heading text-center mb-5">
                        <h1 className="text-clipped text-uppercase">
                            The latest and greatest shoes
                        </h1>
                        <p className="text-secondary">Shop the newest releases</p>
                        </div>
                        <div className="row text-center">
                            { Object.keys(this.props.arrivals).map(key =>(
                                <Arrival
                                    key={key}
                                    arrival={this.props.arrivals[key]}
                                />
                            ) ) }
                        </div>                          
                    </div>
            </section>
         );
    }
}
 
export default Arrivals;