import React, {Component} from 'react';
import axios from 'axios';


class Places extends Component{
  componentWillMount(){
    const script = document.createElement("script");

    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAyUxOqgoWnWG2a_9C3JAUX5uAI3BnzsIU";
    script.async = true;

    document.body.appendChild(script);
  }

  componentDidMount(){
    const script = document.createElement("script");

    script.src = "./map.js";
    script.async = true;

    document.body.appendChild(script);
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
