import React, { Component } from 'react';

import './style.css';
import '../../assets/fonts/fonts.googleapis.com/css87d6.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome,faPhone } from '@fortawesome/fontawesome-free-solid'


 export const NewsBanner = (props)=>{
  return (
  
	<section id="page-banner">
		<div class="banner-top banner-top-news">
			<div class="container">
				<div class="page-banner-title">
					<h1 class="title">News/ Promotions</h1>

					<p>Check out the latest Raag news or promotions</p>
				</div>
			</div>
		</div>
		<div class="breadcrumb-wrapper">
			<div class="container">
				<div class="breadcrumb-inner">
					<div class="home-link">
						<a href="index-2.html"><FontAwesomeIcon icon={faHome} /></a>
					</div>

					<ul class="site-breadcrumb">
						<li><a href="#">Home</a></li>
						<li>News</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
  )
};