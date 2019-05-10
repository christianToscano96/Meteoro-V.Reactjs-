import React from 'react';
import './css/App.css';
import Header from './componentes/header/Header.js';
import Marcas from './componentes/marcas/Marcas.js';
import WomenProducts from './componentes/coleccion/WomenProducts.js';
import Arrivals from './componentes/arrivals/Arrivals';
import Banner from './componentes/Banner';
import Services from './componentes/services/Services';

class App extends React.Component{

    state = {
      marcas: [],
      producto: [],
      arrivals: []
    }

    //imagenes de marcas
    componentDidMount() {
      const marcas = [
        {marca: "./images/brands/nike.svg"},
        {marca: "./images/brands/adidas.svg"},
        {marca: "./images/brands/puma.svg"},
        {marca: "./images/brands/jordan.svg"},
        {marca: "./images/brands/vans.svg"},
        {marca: "./images/brands/under-armour.svg"}
      ]

      this.setState({
        marcas : marcas
      });

       //imagenes de producto de mujer
      const producto = [
        {produc: "./images/hero/hero1.jpg", titulo:"Women's Nike Air Max ", descr:"Shop now"},
        {produc: "./images/hero/hero2.jpg", titulo:"Women's Nike Air Max ", descr:"Shop now"},
        {produc: "./images/hero/hero3.jpg", titulo:"Women's Nike Air Max ", descr:"Shop now"},
        {produc: "./images/hero/hero4.jpg", titulo:"Women's Nike Air Max ", descr:"Shop now"}
      ]
      this.setState({
        producto : producto
      });

      //imagenes para Nuevos productos
      const arrivals = [
        {img: "./images/shoes/shoe3.jpg", titulo:"Women's Nike Air Max ", descr:"Shop now"},
        {img: "./images/shoes/shoe4.jpg", titulo:"Women's Nike Air Max ", descr:"Shop now"},
        {img: "./images/shoes/shoe5.jpg", titulo:"Women's Nike Air Max ", descr:"Shop now"},
        {img: "./images/shoes/shoe6.jpg", titulo:"Women's Nike Air Max ", descr:"Shop now"}
      ]
      this.setState({
        arrivals : arrivals
      })
    }

   
    


    render(){
    return (
      <div className="App">
        <Header/>

        <Marcas
          marcas={this.state.marcas}
        />

        <WomenProducts
          producto={this.state.producto}
        />

        <Arrivals
          arrivals= {this.state.arrivals}
        />

        <Banner/>
        <Services/>
        
      </div>
    );
  }
}
export default App;
