import React from "react";
import { render } from "react-dom";
import PhotoGallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

import './style.css';

import { toggleReviewModal } from '../../actions/modal_actions';
import { createReview } from '../../actions/review_actions';
import { fetchRestaurants } from '../../actions/restaurant_actions';

import { connect } from 'react-redux';

import { GalleryBanner } from './GalleryBanner';
import Loading from '../Loading/Loading';
import NavBar1 from '../../components/NavBar1/NavBar1';
import { ContactPage } from '../../components/ContactPage/ContactPage';

import 'animate.css';
import TrackVisibility from 'react-on-screen';

import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'


export const photos = [
  {
    src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
    width: 3,
    height: 3,
    title: "dfdfdfdf"
  },
  {
    src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
    width: 3,
    height: 3,
    title: "dfdfdfdf"
  },
  {
    src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
    width: 3,
    height: 3,
    title: "dfdfdfdf"
  },
  {
    src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
    width: 2,
    height: 2,
    title: "dfdfdfdf"
  },
  {
    src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
    width: 2,
    height: 2,
    title: "dfdfdfdf"
  },
  {
    src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
    width: 2,
    height: 2,
    title: "dfdfdfdf"
  },
  {
    src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
    width: 2,
    height: 2,
    title: "dfdfdfdf"
  },
  {
    src: "https://source.unsplash.com/PpOHJezOalU/800x599",
    width: 2,
    height: 2,
    title: "dfdfdfdf"
  },
  {
    src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
    width: 2,
    height: 2,
    title: "dfdfdfdf"
  }
];

const mapStateToProps = state => ({
  restaurant: state.entities.restaurants
});

const mapDispatchToProps = dispatch => ({
  createReview: review => dispatch(createReview(review)),
  fetchRestaurantInfo: restaurantId => dispatch(fetchRestaurants(restaurantId))
});

class Gallery extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentImage: '0',
      viewerIsOpen: false
    };
  this.openLightbox = this.openLightbox.bind(this);
  this.closeLightbox = this.closeLightbox.bind(this);
  }

  closeLightbox() {
    this.setState(
      {
        currentImage: '0',
        viewerIsOpen: false
      }
    );
  }

  openLightbox(photo, index) {
    var dfd = index;
    var fd = index.toString();
    var gr = "df";
    this.setState(
      {
        currentImage: index,
        viewerIsOpen: true
      }
    );
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

    <header> 
    <Loading />
    <NavBar1 />
    <GalleryBanner />

    <div className='review-show-main'>

      <div className="gallery1 animate__animated animate__fadeInUp" >
        <h2 className='gallery-title'>Take a gander at our work</h2>
        <div className="container p-0">
          <div className="gallery-inner">
            <div className="cafe-isotope wow fadeIn" data-wow-delay="0.3s">
              <div className="cafe-gallery-items port-gutters">
              <div className="grid-sizer"></div>
                <PhotoGallery photos={photos} onClick={this.openLightbox} />
                <ModalGateway>
                  {this.state.viewerIsOpen ? (
                    <Modal onClose={this.closeLightbox}>
                      <Carousel
                        currentIndex= {this.state.currentImage.index}
                        views={photos.map(x => ({
                          ...x,
                          srcset: x.srcSet,
                          caption: x.title
                        }))}
                      />
                    </Modal>
                  ) : null}
                </ModalGateway>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    <ContactPage />
    </header>

  );
}
}

}
export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
