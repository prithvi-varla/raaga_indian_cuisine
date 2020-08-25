import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
/* import "../TabsComponent/node_modules/react-tabs/style/react-tabs.css"; */

import './Address_style.css';

class AddressComponent extends Component{

    constructor(props) {
        super(props);
    
        this.state = {
          currentItem: null
        };
    
        this.selectItem = this.selectItem.bind(this);
      }


      componentDidMount() {
    
        if (this.props.restaurant) {
    
          //Test123 (modify existing order is stopping to work because of 1 == "1" validatin and deleting the  order items)
          /* if (this.props.restaurant.id !== parseInt(this.props.orderRestaurantId)) {
            this.props.deleteAllItems();
          } */
    
          this.props.fetchMenuItems(this.props.match.params.id);
    
          // Test123
          //this.props.fetchReviews(this.props.match.params.id);
    
          //if (this.props.currentUser) {
          //  this.props.fetchReviewable(this.props.match.params.id);
          //}
    
          const map = this.refs.map;
          const lat = this.props.restaurant.latitude;
          const lng = this.props.restaurant.longitude;
          this.map = new google.maps.Map(map, {
            center: {lat: lat, lng: lng},
            zoom: 15,
            clickableIcons: true,
            draggable: true,
            disableDefaultUI: true
          });
    
          const marker = new google.maps.Marker({
            position: {lat, lng}
          });
    
          marker.setMap(this.map);
        }
      }

      selectItem(selectedItem) {
        this.setState({currentItem: selectedItem});
      }

render(){

    const { name, address, city, state, zip, phone, img_url, open_time, close_time, latitude, longitude, distance, rating_avg, rating_count } = this.props.restaurant;
      const { currentUserFirstName, toggleMenuItemModal, menuItemModal, reviewModal, currentUser, reviewable } = this.props;


  return (
        <div>
            <div className='bottom-info-container'>
                <div className='left-location-info'>
                    <h1>About {name}</h1>
                    <div className='map' ref='map'>
                    Map
                    </div>
                    <ul className='restaurant-info-list'>
                    <li>{address}</li>
                    <li>{city}, {state} {zip}</li>
                    <li>{distance.toFixed(2)} mi</li>
                    <li>{phone}</li>
                    </ul>
                </div>
                <div className='right-hours-info'>
                    <h3>Hours</h3>
                    <div className='hours-container'>
                    <h6>Today</h6>
                    <div className='hours'>
                        <ul>
                        <li>Delivery: {open_time}-{close_time}</li>
                        <li>Pickup: {open_time}-{close_time}</li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}


export default AddressComponent;