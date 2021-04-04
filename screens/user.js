import React, { Component,useState,useEffect  } from 'react';
import {StyleSheet,Dimensions,Image,ImageBackground, TextInput, ScrollView, TouchableOpacity} from 'react-native'
import { Container,Label, View,Text, Form, Item, Input,Button, Content} from 'native-base';
import auth from '@react-native-firebase/auth';
import {getEvents} from '../store/actions/index'
import {connect} from 'react-redux'

const logOut=()=>{
    auth()
  .signOut()
  .then(() => 
  console.log('User signed out!'));
}

const User =(props) => {
     useEffect( () => {
        props.addEvents()
        },[]); 
    return (
         <Container style={styles.container} >
              <ImageBackground source={require('./images/background2.jpg')} style={styles.backgroundImage}>
<ScrollView>
        <Content style={styles.userContainer} >
            <View>
                <TouchableOpacity onPress={()=>props.navigation.navigate("Invite")}>
              <ImageBackground source={require('./images/btn.png')} style={styles.btnImage}>

                </ImageBackground>
                </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity onPress={()=>props.navigation.navigate("getInvitation")} >

              <ImageBackground source={require('./images/btn2.png')} style={styles.btnImage}>
                   
                    </ImageBackground>
                </TouchableOpacity>

            </View>
            <View style={styles.btnContainer}>
 <Button onPress={logOut}  style={styles.btnBox}>
            <Text style={styles.btnText} >LOGOUT</Text>
          </Button>
    </View>

        </Content>
     
            
</ScrollView>
         
         </ImageBackground>
      </Container>

    );
  }


  const mapStateToProps = (state) => {
    return {
        events: state.events,
    }
}


  const mapDispatchToProps = (dispatch) => ({
    addEvents: () => dispatch(getEvents())
})

export default connect(mapStateToProps, mapDispatchToProps)(User);


const styles = StyleSheet.create({
    container:{
        display:"flex",
        justifyContent:"space-around",
        backgroundColor:"transparent",
    },
    backgroundImage :{
        flex:1,

    },
    
    imageContainer:{
        flex:1,
    },
    userContainer:{
        display:"flex",
        flexDirection:"column",
    },
    btnImage:{
        width:270,
        height:270,
        resizeMode:"contain",
        alignSelf:"center",
        zIndex:-1
    },
    btnText:{
        zIndex:9999
    }, btnContainer:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        marginTop:15,
        marginBottom:15,


    },
    btnBox:{
        width:Dimensions.get('window').width*0.35,
        height:Dimensions.get('window').height*0.08,
        justifyContent:"center",
        borderRadius:10,
        backgroundColor:"#FFCE00"

        

    },
    btnText:{
        textAlign:"center",
        fontSize:20,
        color:"black",
        fontWeight:"bold",
        
    }
   
    
  
  });