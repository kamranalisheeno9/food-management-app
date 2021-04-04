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
  geometry: { location: { lat: 24.8474816, lng: 67.0231774 } },
};
const workPlace1 = {
  description: 'Qasim Banquet,Hyderabad',
  geometry: { location: { lat: 24.8017507, lng:67.0284951 } },
};
const workPlace2 = {
  description: 'HyperStar, Sea View Road,Karachi',
  geometry: { location: { lat: 24.8017507, lng: 67.0284951 } },
};
const workPlace3 = {
  description: 'Faisal Masjid, Islamabad',
  geometry: { location: { lat: 33.7033378, lng: 73.0208673 } },
};
// const workPlace = {
//   description: 'Work',
//   geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
// };

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
          database().ref("/location").child(props.currentUser.Uid).set(locationdata)
          
        }}
        query={{
            key: 'AIzaSyBYX1GJMextq85MSNFot0dcn0M-jyKGydk',
            language: 'en',
        }}
        predefinedPlaces={[homePlace, workPlace,workPlace1,workPlace2,workPlace3,]}
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
