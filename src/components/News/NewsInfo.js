import React, { Component } from 'react';

import './style.css';
import '../../assets/fonts/fonts.googleapis.com/css87d6.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome,faPhone } from '@fortawesome/fontawesome-free-solid'

import storyPic1 from "../../assets/images/news_background_image.jpg"
import chefAjay from '../../assets/images/ChefAjay.png';
import design from '../../assets/images/kdi.png';


import  Maps  from '../Maps/Maps';
import { ContactPage } from '../ContactPage/ContactPage';


import 'animate.css';
import TrackVisibility from 'react-on-screen';


 export const NewsInfo = (props)=>{
  return (
	<div>
		<TrackVisibility once>
			{ ({ isVisible }) => isVisible &&
		<div class="blog-post-archive animate__animated animate__fadeInUp">
			<div class="container">
				<article class="post">
					<div class="feature-image">
						<a>
							<img src={storyPic1} alt="" />
						</a>
					</div>
					<div class="blog-content">
						<ul class="post-meta">
							<li><a href="#">Oct 16, 2019, Thursday </a></li>
						</ul>

						<h3 class="entry-title"><a href="#">Shrimp Scampi With Linguini</a></h3>

						<p>
							The little rotter spiffing good time lemon squeezy smashing excuse my French old, cheesed off give us a bell happy days brown bread, blow off Harry barney bobby. Cup of char gormless hors.!
						</p>

					</div>
				</article>
			</div>
		</div>

		}
		</TrackVisibility>

		<ContactPage />
	</div>
  )
};