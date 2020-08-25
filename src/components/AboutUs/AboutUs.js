import React, { Component } from 'react';
import './style.css';

import bonMunchLogo from "../../assets/images/raag.png"

import { toggleReviewModal } from '../../actions/modal_actions';
import { createReview } from '../../actions/review_actions';
import { fetchRestaurants } from '../../actions/restaurant_actions';

import { connect } from 'react-redux';

import Loading from '../Loading/Loading';
import NavBar1 from '../NavBar1/NavBar1';
import { AboutUsBanner } from './AboutUsBanner';
import { AboutUsInfo } from './AboutInfo';

const mapStateToProps = state => ({
  restaurant: state.entities.restaurants
});

const mapDispatchToProps = dispatch => ({
  createReview: review => dispatch(createReview(review)),
  fetchRestaurantInfo: restaurantId => dispatch(fetchRestaurants(restaurantId))
});

class AboutUs extends React.Component {

  constructor(props) {
    super(props);

    this.state={
      currentRating: 0,
      reviewSaved: false,
      name: "",
      phoneNumber: "",
      emailId: "",
      review: ""
    };

    this.submitReview = this.submitReview.bind(this);
  }

  update(field) {
    return(e) => {
      this.setState({[field]: e.target.value});
    };
  }

  submitReview(e) {
    e.preventDefault();

    const review = {
      name: this.state.name,
      phoneNumber: this.state.phoneNumber,
      emailId: this.state.emailId,
      review: this.state.review
    };

    this.props.createReview(review);
    this.setState({'name': ""});
    this.setState({'phoneNumber': ""});
     this.setState({'emailId': ""});
     this.setState({'review': ""});
     this.setState({'reviewSaved': true});
  }

  componentDidMount() {
    
    if (!this.props.restaurant.companyId) {

      this.props.fetchRestaurantInfo("12345678-1234-1234-1234-123456789116");
    } 
  }
  
  render() {
    if (this.props.restaurant) {
      const { name, address, city, state, zip, phone, img_url, open_time, close_time, latitude, longitude, distance, rating_avg, rating_count } = this.props.restaurant;
      const { currentUserFirstName, toggleMenuItemModal, menuItemModal, reviewModal, currentUser, reviewable } = this.props;
   
  return (

 
    <div id="main_content">
      <Loading />
      <NavBar1 />
      <AboutUsBanner />
      <AboutUsInfo />
    </div>

  
  


  );
} 
}
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutUs);