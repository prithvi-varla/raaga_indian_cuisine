import React, { Component } from 'react';

import './style.css';
import '../../assets/fonts/fonts.googleapis.com/css87d6.css'


import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagramSquare, faTwitter } from '@fortawesome/free-brands-svg-icons'

export const ContactPage = (props)=>{
    return (
      <footer id="site-footer">
        <div class="container">
          <div class="footer-nner">
            <div class="row">
              <div class="col-md-6 col-lg-4">
                <div class="footer-widget widget">
                  <h3 class="widget-title">Sage International</h3>


                  <ul class="footer-menu">
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Contact Us</a></li>
                  </ul>
                </div>
              </div>

              <div class="col-md-6 col-lg-4">
                <div class="footer-widget widget">
                  <h3 class="widget-title">Quick Links</h3>

                  <ul class="footer-menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Book A Table</a></li>
                    <li><a href="#">Restaurant</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-md-6 col-lg-4">
                <div class="footer-widget widget">
                  <h3 class="widget-title">Get in Touch</h3>

                  <h4 class="title">Follow Us:</h4>
                  <ul class="footer-social-link">
                    <li><a href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faInstagramSquare} /></a></li>
                  </ul>
                </div>
              </div>
            </div>


          </div>
        </div>

        <div class="container">
          <div class="site-info">
            <p class="copy-right">© 2019 Raag Rights Reserved. Designed By <a href="#">BonMunch</a></p>
          </div>
        </div>
      </footer>
    )
  };