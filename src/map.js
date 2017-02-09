import axios from 'axios';
var map;

axios.defaults.baseURL = location.protocol + '//' + location.hostname + ':' + 3001;
axios.get('/position').then(function(position){
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: parseFloat(position.lat), lng:parseFloat(position.lng)},
    zoom: 12
  });
  // parseFloat(position.lat) parseFloat(position.lng)
  var infoWindow = new google.maps.InfoWindow({map: map});

  infoWindow.setPosition({lat: parseFloat(position.lat), lng: parseFloat(position.lng)});
  infoWindow.setContent('You are here');
});
