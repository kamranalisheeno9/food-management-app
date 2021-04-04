import React, { Component,useState,useEffect  } from 'react';
import {StyleSheet,Dimensions,Image,ImageBackground, TextInput, ScrollView, TouchableOpacity} from 'react-native'
import { Container,List, View,Text, Form, ListItem, Input,Button, Content} from 'native-base';
import {getEvents} from '../store/actions/index'
import {connect} from 'react-redux'
import auth from '@react-native-firebase/auth';
const totalData =(props) => {
    useEffect( () => {
        props.addEvents()
        console.log(props.dataval)

        // console.log(props.dataval)
        },[]); 
        
     return (
         <Container style={styles.container} >
              <ImageBackground source={require('./images/background1.jpg')} style={styles.backgroundImage}>
<ScrollView>
    {props.list.map((v,i)=>{
        console.log(i)
    })}
    
    
</ScrollView>
         
         </ImageBackground>
      </Container>

    );
  }

  
  const mapStateToProps = (state) => {
    return {
        events: state.events,
        dataval:state.datavalue,
        mergeUid:state.mergeUid,
        list:state.status

    }
}


  const mapDispatchToProps = (dispatch) => ({
    addEvents: () => dispatch(getEvents())
})

export default connect(mapStateToProps, mapDispatchToProps)(totalData);



const styles = StyleSheet.create({
    container:{
        display:"flex",
        justifyContent:"space-around",
        backgroundColor:"transparent",
    },
    backgroundImage :{
        flex:1,

    },
    numberText:{
        color:"white",
      fontSize:30,

    },
    number:{ 

    } ,   
imageContainer:{
        flex:1,
    },
    menuContainer:{
        marginBottom:10,
        marginTop:20
    },
    listContainer:{
        
        width:Dimensions.get('screen').width*0.8,
        minHeight:Dimensions.get('window').height*0.25,
        backgroundColor:"black",
        margin:0,
        alignSelf:"center",
        borderRadius:10,
        marginLeft:10,
        
    },
    listText:{
        color:"white",
        width:Dimensions.get('screen').width*0.72,
        textAlign:"center",
        fontSize:18
        

    },
    listTextContainer:{
        borderBottomWidth:0,
        alignSelf:"center"
    },
    dataNumberText:{
     color:"white",
    }
   
  
   

  });