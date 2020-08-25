import React, { Component } from 'react';

import './style.css';
import '../../assets/fonts/fonts.googleapis.com/css87d6.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome,faPhone } from '@fortawesome/fontawesome-free-solid'

import storyPic1 from "../../assets/images/story_pic_1.jpg"
import storyPic2 from "../../assets/images/story_pic_2.jpg"

import  Maps  from '../Maps/Maps';
import { ContactPage } from '../../components/ContactPage/ContactPage';


import 'animate.css';
import TrackVisibility from 'react-on-screen';


 export const ContactInfo = (props)=>{
  return (
	<div>
	<section id="contact-single">
			<TrackVisibility once>
			{ ({ isVisible }) => isVisible &&
			<div class="contact-top animate__animated animate__fadeInUp">

				<div class="container">
					<div class="contact-infos-box">
						<div class="row">
							<div class="col-lg-4 col-md-6 col-sm-6 mb-30">
								<div class="contact-info wow fadeIn">
									<div class="icon"><FontAwesomeIcon icon={faHome} /></div>

									<h3 class="title">Address</h3>

									<div class="content">
										<p>
											Eighth Avenue 1020, Dhaka<br /> New York
										</p>
									</div>
								</div>
							</div>

							<div class="col-lg-4 col-md-6 col-sm-6 mb-30">

								<div class="contact-info wow fadeIn" data-wow-delay="0.3s">
									<div class="icon"><FontAwesomeIcon icon={faPhone} /></div>

									<h3 class="title">Phone</h3>
									<div class="content">
										<p>
											<span>Online Reservations</span><br /> +946 256 986 426  <br />+496 582 147 296
										</p>
									</div>
								</div>
							</div>

							<div class="col-lg-4 col-md-6 col-sm-6 mb-30">

								<div class="contact-info wow fadeIn" data-wow-delay="0.5s">
									<div class="icon"><FontAwesomeIcon icon={faEnvelope} /></div>

									<h3 class="title">Email</h3>

									<div class="content">
										<p>
											Support@cafedia.com<br /> info@cafedia.com
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
 			}
			</TrackVisibility>

			<TrackVisibility once>
			{ ({ isVisible }) => isVisible &&
			<div class="container animate__animated animate__fadeInUp">

				<div class="contact-from-wrapper wrapper-padding">
					<div class="section-title text-center">
						<h3 class="sub-title wow fadeInUp">Tasty and Crunchy</h3>
						<h2 class="title wow fadeInUp" data-wow-delay="0.3s">Reservations</h2>
					</div>


					<div class="contact-form-inner form-container wow fadeIn" data-wow-delay="0.4s">
						<form action="http://cafedia-html.pixelsigns.art/php/mailer.php" class="contact-form" data-cafeform="contact">
							<div class="row">
								<div class="col-md-6">
									<input type="text" name="name" placeholder="Name" required />
									<input type="text" name="phone" placeholder="Phone" required />
								</div>

								<div class="col-md-6">
									<input type="text" name="email" placeholder="Email" required />
									<input type="text" name="subject" placeholder="Subject" required />
								</div>

							</div>


							<textarea placeholder="Your Massage" name="content" required></textarea>

							<div class="form-footer">
								<div class="condition">
									<input class="styled-checkbox" id="styled-checkbox-1" type="checkbox" value="value1" />
									<label for="styled-checkbox-1"></label>
									<span>I agree that my submitted data is being collected and stored.</span>

								</div>

								<button type="submit" name="submit" class="submit-btn gp-btn">Submit Now</button>
							</div>


							<div class="form-result alert">
								<div class="content"></div>
							</div>

						</form>
					</div>
				</div>

			</div>
			}
			</TrackVisibility>
		</section>

		<TrackVisibility once>
			{ ({ isVisible }) => isVisible &&
		<div class="animate__animated animate__fadeInUp">
		<section id="google-maps">
			<div class="google-map animate__animated animate__fadeInUp">
				<div class="gmap3-area" data-lat="40.712776" data-lng="-74.005974">
						< Maps />
				</div>
			</div>
			
		</section>
		<ContactPage />
		</div>
		}
		</TrackVisibility>
		</div>
  )
};