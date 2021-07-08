import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { MdLocationOn } from "react-icons/md";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat:  18.505202683831484,
      lng: 74.27020111576596
    },
    zoom: 13
  };
  
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyA5tB12qeUuDfGQGCUTorL5eAJJcerwBgE" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={18.505202683831484}
            lng={74.27020111576596}
            text= {<MdLocationOn/>}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;