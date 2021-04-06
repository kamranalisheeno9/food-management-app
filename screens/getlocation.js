//import liraries
import React, { Component,useState,useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView,{Marker} from 'react-native-maps';
import {getEvents} from '../store/actions/index'
import database from '@react-native-firebase/database';
import {connect} from 'react-redux'


// create a component
const Maps =(props)=> {
        

    useEffect( () => {
        props.addEvents()
 
    },[]);
    
        return (
    props.location.map((v,i)=>{
return(
    v.mergeUid === props.mergeUid ?

    <MapView key={i} style={{width:"100%",height:"100%"}}
    
    initialRegion={
        
        {
            latitude: v.lat,
            longitude: v.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }
        
    }
    
    // onRegionChange={this.onRegionChange}
    >
              <Marker coordinate={{
                  latitude: v.lat,
                  longitude: v.lng,
                }}>

              </Marker>
              </MapView>
              :
              null
                  )
        })

        );
    }
    const mapStateToProps = (state) => {
        return {
            events: state.events,
            currentUser:state.currentUser,
            location:state.location
        }
    }
    
    
      const mapDispatchToProps = (dispatch) => ({
        addEvents: () => dispatch(getEvents())
    })
    
    export default connect(mapStateToProps, mapDispatchToProps)(Maps);
    

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
