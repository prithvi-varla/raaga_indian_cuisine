

import React from "react";
import Slider from "react-animated-slider";
import { connect } from 'react-redux';

import { fetchImages } from '../../actions/modal_actions';
import { fetchRestaurants } from '../../actions/restaurant_actions';
import Loading from '../Loading/Loading';

import "react-animated-slider/build/horizontal.css";
import "./slider-animations.css";
import "./styles.css";

const content = [
  {
    title: "Vulputate Mollis Ultricies Fermentum Parturient",
    description:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
    button: "Read More",
    image: "https://i.imgur.com/ZXBtVw7.jpg",
    user: "Luan Gjokaj",
    userProfile: "https://i.imgur.com/JSW6mEk.png"
  }, 
  {
    title: "Tortor Dapibus Commodo Aenean Quam",
    description:
      "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
    button: "Discover",
    image: "https://i.imgur.com/DCdBXcq.jpg",
    user: "Erich Behrens",
    userProfile: "https://i.imgur.com/0Clfnu7.png"
  },
  {
    title: "Phasellus volutpat metus",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
    button: "Buy now",
    image: "https://i.imgur.com/DvmN8Hx.jpg"
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
    galleryItems: state.ui.gallery
  });

const mapDispatchToProps = dispatch => ({
    fetchImages: (id, imageType) => dispatch(fetchImages(id, imageType)),
    fetchRestaurantInfo: () => dispatch(fetchRestaurants())
  });

class Carousel extends React.Component {
    
    sliderRef;

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.timerID = setInterval(this.sliderRef.next, 4000);
        this.props.fetchRestaurantInfo().then(() => {
            this.props.fetchImages(this.props.restaurant.companyId, "LANDING_PAGE");
            });
    }

    componentWillUnmount() {
        if (this.timerID) {
            clearInterval(this.timerID);
        }
    }

    render() {  

        var df = this.props.galleryItems.images;
        var images;
        if (this.props.galleryItems.images) {
            images = this.props.galleryItems.images
        } else {
            images = content; 
        }
        return (
            <div>
                <Loading />
                <Slider {...settings} className="slider-wrapper" ref={ref => (this.sliderRef = ref)}>
                {images.map((item, index) => (
                    <div
                    key={index}
                    className="slider-content"
                    style={{ background: `url('${item.srcUrl}') no-repeat center center` }}
                    >
                    <div className="inner">
                        <h1>{item.name}</h1>
                        <p>{item.description}</p>
                        <button className="landing-button">{item.button}</button>
                    </div>
                    </div>
                ))}
                </Slider>
            </div>
            );
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);