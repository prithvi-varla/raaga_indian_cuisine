import React, { Component } from 'react';

import './style.css';

import storyPic1 from "../../assets/images/story_pic_1.jpg"
import storyPic2 from "../../assets/images/story_pic_2.jpg"

import 'animate.css';
import TrackVisibility from 'react-on-screen';

 export const AboutPage = (props)=>{
  return (
  
  <section class="about">
	  <TrackVisibility once>
			{ ({ isVisible }) => isVisible &&
			<div class="container animate__animated animate__fadeInUp">
				<div class="row">
					<div class="col-lg-6">
						<div class="about-content">
							<div class="section-title text-left">
								<h3 class="sub-title wow fadeInUp">Our Story</h3>
								<h2 class="title wow fadeInUp" data-wow-delay="0.3s">
                  Welcome to Raag
								</h2>
							</div>


							<p class="wow fadeInUp" data-wow-delay="0.5s">
              Over here, we believe that food is a symphony that rings true with everyone. We serve authentic Indian cuisine infused with a wonderful blend of spices, which come together in a resplendent orchestra of flavours to satisfy your craving for genuine, Indian food.
							</p>

							<a href="#" class="gp-btn wow fadeInUp" data-wow-delay="0.7s">Read More</a>
						</div>
					</div>

					<div class="col-lg-6">
						<div class="about-feature-image">
							<div class="img-one">
								<img src={storyPic1} alt="about" class="wow fadeInDown" />
							</div>

							<div class="img-two" data-parallax='{"y" : -25}'>
								<img src={storyPic2} alt="about" class="wow fadeInUp" />
							</div>
						</div>
					</div>
				</div>
			</div>
 			}
			</TrackVisibility>
		</section>
  )
};