import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
//componentes
import Header  from './header/Header';
import Marcas from './marcas/Marcas';
import WomanProducts from './coleccion/WomanProducts';
import Arrivals from './arrivals/Arrivals';
import Services from './services/Services';
import Footer from './footer/Footer';
import Banner from './Banner';
//datos JSON
import infoMarcas from '../datos/marcas.json';
import Woman from '../datos/WonanProduct.json';
import arrivals from '../datos/arrivals.json';


class Routas extends Component {
    state = { 
        marcas : [],
        womanproducts : [],
        arrivals : []
     }

    //marcas
    componentWillMount () {

        //marcas
        this.setState({
            marcas : infoMarcas
        })

        //productos mujer
        this.setState({
            womanproducts : Woman
        })

        //arrivals
        this.setState({
            arrivals : arrivals
        })
    } 


    render() { 
        return ( 
            <BrowserRouter>
                <div className="">
                    <Header/>
                   
                    <Marcas marcas={this.state.marcas} />
                         
                    <WomanProducts womanproducts={this.state.womanproducts} />

                    <Arrivals
                        arrivals={this.state.arrivals}
                    />
                    <Services />
                    <Banner/> 

                    <Footer/>
                    <Switch>
  
                    </Switch>
                </div>
            </BrowserRouter>
         );
    }
}
 
export default Routas;