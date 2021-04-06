//import liraries
import { Button } from 'native-base';
import React, { Component, useState,useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import database from '@react-native-firebase/database';
import {getEvents} from '../store/actions/index'
import {connect} from 'react-redux'

const homePlace = {


  description: 'Cantt. Station Road, Karachi',
  geometry: { location: { lat: 24.843368, lng: 67.0357202 } },
};
const workPlace = {
  description: 'Pearl Continental Hotel,Karachi',
  geometry: { location: { lat: 25.4124104, lng: 68.1914664 } },
};
const workPlace1 = {
  description: 'Qasim Banquet,Hyderabad',
  geometry: { location: { lat: 25.409612, lng:68.3531235 } },
};
const workPlace2 = {
  description: 'HyperStar, Sea View Road,Karachi',
  geometry: { location: { lat: 24.8017507, lng: 67.0284951 } },
};
const workPlace3 = {
  description: 'Faisal Masjid, Islamabad',
  geometry: { location: { lat: 33.7033378, lng: 73.0208673 } },
};
const workPlace4 = {
  description: 'Candles Banquet, Karachi',
  geometry: { location: { lat: 24.9077034, lng: 67.1163291 } },
};
const workPlace5 = {
  description: 'Pearl Banquet, Karachi',
  geometry: { location: { lat: 24.878054, lng: 67.0824588 } },
};
const workPlace6 = {
  description: 'Saima Banquet, Karachi',
  geometry: { location: { lat: 24.9011006, lng: 67.1123072 } },
};
const workPlace7 = {
  description: 'The Court Marquee, Karachi',
  geometry: { location: { lat: 24.8728898, lng: 67.0898228 } },
};
const workPlace8 = {
  description: 'Dream Heaven Banquet, Karachi',
  geometry: { location: { lat: 24.9219504, lng: 67.0543847 } },
};
const workPlace9 = {
  description: 'Arena, Karachi',
  geometry: { location: { lat: 24.887577, lng: 67.0876493 } },
};
const workPlace10 = {
  description: 'Courtyard, Karachi',
  geometry: { location: { lat: 24.881402, lng: 67.0669323 } },
};
const workPlace11 = {
  description: 'Darbar Banquet, Karachi',
  geometry: { location: { lat: 24.9527667, lng: 67.055057 } },
};
const workPlace12 = {
  description: 'Hill Top, Karachi',
  geometry: { location: { lat: 24.9080814, lng: 67.1168233 } },
};
const workPlace13 = {
  description: 'The Venue, Karachi',
  geometry: { location: { lat: 24.8986582, lng: 67.1154261 } },
};
const workPlace14 = {
  description: 'The City, Karachi',
  geometry: { location: { lat: 24.9286478, lng: 67.1032164 } },
};
const workPlace15 = {
  description: 'Eastern Banquet, Karachi',
  geometry: { location: { lat: 24.9253157, lng:67.1122427 } },
};

const GooglePlacesInput = (props) => {
    useEffect( () => {
        props.addEvents()
        console.log(props.mergeUid)
        },[]); 
        
    return (

    <GooglePlacesAutocomplete
      placeholder='Please Select Any One Location'
      onPress={(data, details = null) => {
          const latitude= data.geometry.location.lat
          const langitude =data.geometry.location.lng
          const locationdata ={
              lat:latitude,
              lng:langitude,
              mergeuid:props.mergeUid
          }
          console.log(data, details);
          database().ref("/location").set(locationdata)
          
        }}
        query={{
            key: 'AIzaSyBYX1GJMextq85MSNFot0dcn0M-jyKGydk',
            language: 'en',
        }}
        predefinedPlaces={[homePlace, workPlace,workPlace1,workPlace2,workPlace3, workPlace4,workPlace5,workPlace6,workPlace7,workPlace8, workPlace9,workPlace10,workPlace11,workPlace12,workPlace13,workPlace14,workPlace15]}
        />
        
  );
};

const mapStateToProps = (state) => {
    return {
        events: state.events,
        currentUser:state.currentUser,
        mergeUid:state.mergeUid
    }
}


  const mapDispatchToProps = (dispatch) => ({
    addEvents: () => dispatch(getEvents())
})

export default connect(mapStateToProps, mapDispatchToProps)(GooglePlacesInput);

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
