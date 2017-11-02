import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class Map extends Component {
  static defaultProps = {
    center: {lat: 32.71, lng: -117.16},
    zoom: 11
  };
    render() {
        return(
            <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        {/* <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text={'Kreyser Avrora'}
        /> */}
      </GoogleMapReact>
        )
    }
} 

export default Map;