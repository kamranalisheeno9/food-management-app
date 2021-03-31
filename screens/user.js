import React, { Component,useState,useEffect  } from 'react';
import {StyleSheet,Dimensions,Image,ImageBackground, TextInput, ScrollView, TouchableOpacity} from 'react-native'
import { Container,Label, View,Text, Form, Item, Input,Button, Content} from 'native-base';
import auth from '@react-native-firebase/auth';
const Login =(props) => {
     return (
         <Container style={styles.container} >
              <ImageBackground source={require('./images/background2.jpg')} style={styles.backgroundImage}>
<ScrollView>
        <Content style={styles.userContainer} >
            <View>
                <TouchableOpacity onPress={()=>props.navigation.navigate("")}>
              <ImageBackground source={require('./images/btn.png')} style={styles.btnImage}>

                </ImageBackground>
                </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity>

              <ImageBackground source={require('./images/btn2.png')} style={styles.btnImage}>
                   
                    </ImageBackground>
                </TouchableOpacity>

            </View>
        </Content>
     
            
</ScrollView>
         
         </ImageBackground>
      </Container>

    );
  }

export default Login;

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
        width:300,
        height:300,
        resizeMode:"contain",
        alignSelf:"center",
        zIndex:-1
    },
    btnText:{
        zIndex:9999
    }
    
  
  });