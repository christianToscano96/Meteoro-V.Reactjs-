import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
//componentes
import Header  from './header/Header';
import Marcas from './marcas/Marcas';
import Banner from './Banner';
//datos JSON
import infoMarcas from '../datos/marcas.json';


class Routas extends Component {
    state = { 
        marcas : []
     }

    //marcas
    componentWillMount () {
        this.setState({
            marcas : infoMarcas
        })
    } 



    render() { 
        return ( 
            <BrowserRouter>
                <div className="">
                    <Switch>
                        

                        <Marcas 
                            marcas={this.state.marcas}
                        />
                        <Banner/>
                        <Header/>
                       
                    </Switch>
                </div>
            </BrowserRouter>
         );
    }
}
 
export default Routas;