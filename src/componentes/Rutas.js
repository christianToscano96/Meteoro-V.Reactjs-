import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
//componentes
import Header  from './header/Header';
import Marcas from './marcas/Marcas';
import WomanProducts from './coleccion/WomanProducts';
import Banner from './Banner';
//datos JSON
import infoMarcas from '../datos/marcas.json';
import Woman from '../datos/WonanProduct.json';


class Routas extends Component {
    state = { 
        marcas : [],
        womenproducts : []
     }

    //marcas
    componentWillMount () {

        //marcas
        this.setState({
            marcas : infoMarcas
        })

        //productos mujer
        this.setState({
            womenproducts : Woman
        })

    } 


    render() { 
        return ( 
            <BrowserRouter>
                <div className="">
                    <Switch>
                        <WomanProducts
                            womenproducts={this.state.womenproducts}
                        />

                        <Header/>

                        <Route  exact path="/marcas" render={() => (
                            <Marcas 
                                marcas={this.state.marcas}
                            />
                        )} />
                        
                        <Banner/>
                        
                       
                    </Switch>
                </div>
            </BrowserRouter>
         );
    }
}
 
export default Routas;