import React, { Component } from 'react';

import './style.css';
import '../../assets/fonts/fonts.googleapis.com/css87d6.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome,faPhone } from '@fortawesome/fontawesome-free-solid'

import doordash from "../../assets/images/doordash.png"
import bitesquad from "../../assets/images/bitesquad.png"
import toast from "../../assets/images/Toast.png"
import uberEats from "../../assets/images/UberEats.png"
import grubhub from "../../assets/images/grubhub.png"
import postmates from "../../assets/images/postmates.png"

import  Maps  from '../Maps/Maps';
import { ContactPage } from '../../components/ContactPage/ContactPage';


import 'animate.css';
import TrackVisibility from 'react-on-screen';


 export const DeliveryInfo = (props)=>{
  return (
	<div>

			<TrackVisibility once>
			{ ({ isVisible }) => isVisible &&

			<section id="section-padding">

				<div class="container animate__animated animate__fadeInUp">
						<div class="section-title section-padding text-center">

							<h2 class="title wow fadeInUp" data-wow-delay="0.3s">
									Our Delivery Partners
							</h2>
						</div>

						<div class="row">
								<div class="col-lg-4 text-center">
									<a href="https://www.bitesquad.com/food/raag-progressive-indian-cuisine/36385" target="_blank" title="Order Food Delivery with Bitesquad" >
										<img src={doordash} height="20px" alt="Order Food Delivery with Bitesquad" />
									</a>
								</div>

								<div class="col-lg-4 text-center">
									<a href="https://www.bitesquad.com/food/raag-progressive-indian-cuisine/36385" target="_blank" title="Order Food Delivery with Bitesquad" >
										<img src={bitesquad} alt="Order Food Delivery with Bitesquad" />
									</a>
								</div>

								<div class="col-lg-4 text-center">
									<a href="https://www.toasttab.com/raagindiancuisine" target="_blank" title="Online Order for Pickup">
										<img src={toast} alt="Order Takeout Order with Toast" />
									</a>
								</div>
						</div>

						<div class="row section-padding">
								<div class="col-lg-4 text-center">
									<a href="https://www.ubereats.com/minneapolis/food-delivery/raag-indian-cuisine/6WGlXkJuT8aGAkgozPje6g" target="_blank" title="Order Food Delivery with Uber Eats">
										<img src={uberEats} />
									</a>
								</div>

								<div class="col-lg-4 text-center">
									<a href="https://www.grubhub.com/restaurant/raag-progressive-indian-cuisine-3812-w-50th-street-minneapolis/2062602?classicAffiliateId=%2Fr%2Fw%2F2062602%2F&amp;utm_source=kitchen.grubhub.com&amp;utm_medium=OOL&amp;utm_campaign=order%20online&amp;utm_content=2062602" target="_blank" title="Order Food Delivery with Grubhub" >
										<img src={grubhub} width="300px" alt="Order Food Delivery with Grubhub" />
									</a>
								</div>

								<div class="col-lg-4 text-center">
									<a href="https://postmates.com/merchant/raag-progressive-indian-cuisine-minneapolis" target="_blank" title="Order Food Delivery with Postmates" >
										<img src={postmates} width="300px" alt="Order delivery from Postmates" />
									</a>
								</div>
						</div>
				
			</div>

		</section>
 			}
			</TrackVisibility>
		<ContactPage />
		</div>
  )
};