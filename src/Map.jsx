import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';


const AnyReactComponent = ({ text }) => <div>{text}</div>;
class Map extends Component {
  static defaultProps = {
    center: {lat: 32.71, lng: -117.16},
    latitude:32.71,
    longitude:-117.16,
    zoom: 14
  };
    render() {console.log(this.props.latitude)
        return(
            <GoogleMapReact
            center={{
          lat: this.props.latitude,
          lng: this.props.longitude
        }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <AnyReactComponent
          lat={this.props.latitude}
          lng={this.props.longitude}
          text={<i className="fa fa-beer fa-4x" aria-hidden="true"></i>}
        /> 
      </GoogleMapReact>
        )
    }
} 

export default Map;