import React from 'react';
import './Footer.css';


const Footer = (props) => {
    return (
       
      <section className="py-5 footer">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <address>
                <strong className="h3 font-weight-normal">Meteoro Goods</strong>
                <br />
                  Mariano Boedo 556 <br />
                  Bª Papa Feansisco - Calilegua - Jujuy - Argentina Phone: (+54) 15
                  3886608290
              </address>
            </div>

            <div className="col-12 col-sm-6 col-lg-3">
              <div className="footer-title ">
                <h5>Our Missions</h5>
                <span className="custom-border"></span>
              </div>
              <ul className="footer-list">
                <li>
                  <a href="#" className="footer-linl">lorem</a>
                </li>
                <li>
                  <a href="#" className="footer-linl">lorem</a>
                </li>
                <li>
                  <a href="#" className="footer-linl">lorem</a>
                </li>
                <li>
                  <a href="#" className="footer-linl">lorem</a>
                </li>
                <li>
                  <a href="#" className="footer-linl">lorem</a>
                </li>
              </ul>
            </div>

            <div className="col-12 col-sm-6 col-lg-3">
                <div className="footer-title ">
                  <h5>Customer Service</h5>
                  <span className="custom-border"></span>
                </div>
                <ul className="footer-list">
                  <li>
                    <a href="#" className="footer-linl">lorem</a>
                  </li>
                  <li>
                    <a href="#" className="footer-linl">lorem</a>
                  </li>
                  <li>
                    <a href="#" className="footer-linl">lorem</a>
                  </li>
                  <li>
                    <a href="#" className="footer-linl">lorem</a>
                  </li>
                  <li>
                    <a href="#" className="footer-linl">lorem</a>
                  </li>
                </ul>
              </div>

              <hr className="line mt-5"/>
              <div className="w-100 d-md-flex justify-content-between aling-items-center text-center">
                <div className="order-2 ">
                  <a href="#" className="footer-link">Lorem</a>
                  <a href="#" className="footer-link ml-3">Lorem</a>
                  <a href="#" className="footer-link ml-3">Lorem</a>
                </div>
                <p className="m-0 text-sm order-1">
                  &copy; 2019 Christian Toscano. All reighs reserved
                </p>
              </div>

          </div>
        </div>
      </section>
        
      );
}
 
export default Footer;