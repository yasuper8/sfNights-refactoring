import React, {Component} from 'react';
import axios from 'axios';


class Places extends Component{
  componentDidMount(){
    var map;
    axios.defaults.baseURL = location.protocol + '//' + location.hostname + ':' + 3001;
    axios.get('/position').then(function(position){
      console.log(position);
      map = new window.google.maps.Map(document.getElementById('map'), {
        center: {lat: parseFloat(position.data.lat), lng:parseFloat(position.data.lng)},
        zoom: 12
      });

    var marker = new window.google.maps.Marker({
        position: new window.google.maps.LatLng(position.data.lat, position.data.lng),
        map: map
    });

      var infoWindow = new window.google.maps.InfoWindow({map: map});

      infoWindow.setPosition({lat: parseFloat(position.data.lat), lng: parseFloat(position.data.lng)});
      infoWindow.setContent('You are here');
    });
  }

  render(){
    return (
      <div>
        <div id="map"></div>
      </div>
    );
  }
}

export default Places;
