import React, { Component } from 'react';

import './style.css';
import '../../assets/fonts/fonts.googleapis.com/css87d6.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome,faPhone } from '@fortawesome/fontawesome-free-solid'

import storyPic1 from "../../assets/images/story_pic_1.jpg"
import chefAjay from '../../assets/images/ChefAjay.png';
import design from '../../assets/images/kdi.png';


import  Maps  from '../Maps/Maps';
import { ContactPage } from '../ContactPage/ContactPage';


import 'animate.css';
import TrackVisibility from 'react-on-screen';


 export const AboutUsInfo = (props)=>{
  return (
	<div>
	
			<TrackVisibility once>
			{ ({ isVisible }) => isVisible &&
			<section id="contact-single">
				<div class="container  animate__animated animate__fadeInUp">
					<div class="section-title text-center">
						<h3 class="sub-title wow fadeInUp">About Raag</h3>
						<h2 class="title wow fadeInUp" data-wow-delay="0.3s">
								We Are Raag, Progressive Indian Restaurant
						</h2>
					</div>

					<div class="about-content-two text-center">
						<p class="wow fadeInUp" data-wow-delay="0.5s">
							Raag is a composed symphony. It’s an expression, a crescendo. A word that perfectly defines what our ethos is.
						</p>
						<p class="wow fadeInUp" data-wow-delay="0.5s">
							Raag is also a feeling, an ambience, a world in its own that draws you in farther from the chaos outside. It’s a celebration of the perfect composition of the color, aroma, texture and taste blend together to form a resplendent orchestra of symphonies for your senses. The scented dry ice that introduces you to the complex spices of the east, to the rich luxurious décor that complements the menu and its many diversities, will elevate you to the modern world of Indian cuisine. With a menu created by Food Network India Star, Chef Ajay Chopra and executed by Chef Romila Ramamurthy, Raag is an endeavor to change the way you look at Indian cuisine, permanently.
						</p>
						<p class="wow fadeInUp" data-wow-delay="0.5s">
							It strives to set itself apart from other Indian restaurants not just by the sheer joy it brings to your taste buds, but by presenting an experience that lures you in again and again.
						</p>
						<p class="wow fadeInUp" data-wow-delay="0.5s">
							By reimagining the cuisine – be it individual dining and sharing, a mix of small plates, entrees and sharing entrees with sides and desserts, complemented by equally creative and thoughtful mocktails, cocktails and beverages created with fresh seasonal ingredients and infused liquors – Raag wishes to tantalize your tastebuds in ways that only Raag’s special blend of flavors can.
						</p>
						<p class="wow fadeInUp" data-wow-delay="0.5s">
							Elegant, Individualistic and Balanced, the magic of delectable and aromatic food will make your heart sing – to the intricate melody of Raag.
						</p>

					</div>

					<section id="testimonial" class="section-padding ">
						<div class="container banner-testimonial">
							<div class="testimonial-wrapper">
								<div class="testimonial-content">

									<div class="row align-items-end">
										

										<div class="col-md-6">
											<div class="content">
												<h3 class="heading">Our Chef</h3>
												
												Renowned Indian chef, Chef Ajay Chopra is the might behind Raag. None of this would have been possible without his expertise and insight. Chef Ajay has been pivotal in curating the delectable menu. His eye for detail extends to every factor, right down to the cutlery. His endeavour is to provide you with an authentic experience combined with a creativity that makes Raag, a cut above the rest.
												
											</div>
										</div>

										<div class="col-md-6">
											<div class="testi-author text-right">
												<div >
													<img src={chefAjay} alt=" Logo" />
												</div>
											</div>
										</div>
									</div>

								</div>
							</div>
						</div>

					</section>


					<section id="testimonial" class="section-padding ">
						<div class="container banner-testimonial">
							<div class="testimonial-wrapper">
								<div class="testimonial-content">

									<div class="row align-items-end">
										

										<div class="col-md-6">
											<div class="content">
												<h3 class="heading">Design</h3>
												
												Award Winning Interior Designer, Kara (Karpenske) Bigos of Kamarron Design, Inc. created the interiors of Raag to be casual, yet upscale with subtle inspired accents of India. As a twenty year veteran of commercial and residential design, Raag is her 11th opening for restaurant/club design. Kara’s unique experience gave her the knowledge & ability to refine this previously lack luster space for all to enjoy.
												
											</div>
										</div>

										<div class="col-md-6">
											<div class="testi-author text-right">
												<div >
													<img src={design} alt=" Logo" />
												</div>
											</div>
										</div>
									</div>

								</div>
							</div>
						</div>

					</section>

				</div>
			</section>
 			}
			</TrackVisibility>


		<ContactPage />
		</div>
  )
};