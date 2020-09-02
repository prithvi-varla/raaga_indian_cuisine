

import React from "react";
import Slider from "react-animated-slider";
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';

import { fetchImages } from '../../actions/modal_actions';
import { fetchRestaurants } from '../../actions/restaurant_actions';
import Loading from '../Loading/Loading';
import OrderPlacedModal from '../../components/MenuComponents/modals/order_placed_modal';

import "react-animated-slider/build/horizontal.css";
import "./slider-animations.css";
import "./styles.css";

import raag1 from "./img/Raag_Landing_1.jpg";
import raag2 from "./img/Raag_Landing_2.jpg";
import raag3 from "./img/Raag_Landing_3.jpg";
import raag4 from "./img/Raag_Landing_4.jpg";

const content = [
  {
    "imageName": "indian menu",
    "imageDescription": "Indian cusine menu",
    "srcUrl": "https://www.diversifiedconstruction.com/wp-content/uploads/2019/11/RAAG-26.jpg",
    "buttonName":  "Menu",
    "buttonUri": "/menu"
  }, 
  {
    "imageName": "Delivery methods",
    "imageDescription": "All Deliveries are in below link",
    "srcUrl": "https://www.diversifiedconstruction.com/wp-content/uploads/2019/11/RAAG-13.jpg",
    "buttonName":  "Delivery",
    "buttonUri": "/delivery"
  }, 
  {
    "imageName": "Delivery methods",
    "imageDescription": "All Deliveries are in below link",
    "srcUrl": "https://www.diversifiedconstruction.com/wp-content/uploads/2019/11/RAAG-13.jpg",
    "buttonName":  "Delivery",
    "buttonUri": "/delivery"
  }
];

const settings = {
  dots: false,
  infinite: true,
  pauseOnHover: false,
  autoplay: 4000,
  //duration:3000
};

const mapStateToProps = state => ({
    restaurant: state.entities.restaurants,
    galleryItems: state.ui.gallery,
    orderPlacedModal: state.ui.modals.orderPlacedModal
  });

const mapDispatchToProps = dispatch => ({
    fetchImages: (id, imageType) => dispatch(fetchImages(id, imageType)),
    fetchRestaurantInfo: () => dispatch(fetchRestaurants())
  });

class Carousel extends React.Component {
    
    sliderRef;

    constructor(props) {
        super(props);

        this.imageUriLink = this.imageUriLink.bind(this);
    }

    componentDidMount() {
        this.timerID = setInterval(this.sliderRef.next, 4000);
        this.props.fetchRestaurantInfo().then(() => {
            this.props.fetchImages(process.env.REACT_APP_ENTITY_ID, "LANDING_PAGE");
            });
    }

    componentWillUnmount() {
        if (this.timerID) {
            clearInterval(this.timerID);
        }
    }

    imageUriLink(imageUri) {
      this.props.history.push(imageUri);
      
    }

    render() {  

        var df = this.props.orderPlacedModal;
        var images;
        if (this.props.galleryItems.images !== undefined && this.props.galleryItems.images.length > 0) {
            images = this.props.galleryItems.images
        } else {
            images = content; 
        }
        return (
            <div>
                <Loading />
                { this.props.orderPlacedModal ? <OrderPlacedModal /> : null }
                <Slider {...settings} className="slider-wrapper" ref={ref => (this.sliderRef = ref)}>
                {images.map((item, index) => (
                    <div
                    key={index}
                    className="slider-content"
                    style={{ background: `url('${item.srcUrl}') no-repeat center center` }}
                    >
                    <div className="inner">
                        <h1>{item.imageName}</h1>
                        <p>{item.imageDescription}</p>
                        <button className="landing-button" onClick={this.imageUriLink.bind(this, `${item.buttonUri}`)}>{item.buttonName}</button>
                    </div>
                    </div>
                ))}
                </Slider>
            </div>
            );
        }
    }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Carousel));