import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import './styles.css';


const AnyReactComponent = ({ text }) => {
  return (
    <div>
      <div
        className="pin bounce"
        style={{ backgroundColor: "red", cursor: 'pointer' }}
        title={text}
      />
      <div className="pulse" />
    </div>
  );
};

class Maps extends Component {

  static defaultProps = {
    center: {
      lat: 44.912980,
      lng: -93.328278
    },
    zoom: 15,
    myOptions : {
      disableDefaultUI: true,
        mapTypeControl: true,
        streetViewControl: true,
        styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] }]
    }

  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="mapstyle">
        <GoogleMapReact
          bootstrapURLKeys="AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo"
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          options={this.props.myOptions}
        >
          <AnyReactComponent
            lat={44.912980}
            lng={-93.328278}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Maps;