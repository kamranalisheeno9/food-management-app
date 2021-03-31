import React, { Component,useState,useEffect  } from 'react';
import {StyleSheet,Dimensions,Image,ImageBackground, TextInput, ScrollView, TouchableOpacity} from 'react-native'
import { Container,Label, View,Text, Form, Item, Input,Button, Content} from 'native-base';
import auth from '@react-native-firebase/auth';
const Login =(props) => {
     return (
          <Container style={styles.container} >
         <ImageBackground source={require('./images/background1.jpg')} style={styles.backgroundImage}>
<ScrollView>

            <Content style={styles.imageContainer}>
                <Image source={require('./images/logo.png')}  style={styles.logo}>

                </Image>
            </Content>
            <View style={styles.loginContainer}>
<Form>

            <Item style={styles.inputBox} >
              <Input style={styles.input} placeholder="EMAIL" placeholderTextColor="white"  />
              </Item>

            <Item style={styles.inputBox} >
              <Input style={styles.input} placeholder="PASSWORD" secureTextEntry={true} placeholderTextColor="white"  />
              </Item>

              
</Form>

<View style={styles.btnContainer}>
<Button style={styles.btnBox}>
            <Text onPress={()=>props.navigation.navigate("User")} style={styles.btnText}>LOGIN</Text>
          </Button>
          <Button style={styles.btnBox}>
            <Text onPress={()=>props.navigation.navigate("Register")} style={styles.btnText}>REGISTER</Text>
          </Button>
    </View>
            </View>
         
</ScrollView>
         
         </ImageBackground>
      </Container>

    );
  }

export default Login;

const styles = StyleSheet.create({
    container :{
        display:"flex",
        justifyContent:"space-around",
        
        backgroundColor:"transparent",
    },
    backgroundImage :{
        flex:1,
    },
    logo :{
        width:Dimensions.get('window').width*0.75,
        resizeMode: "contain"
        
        
    },
    imageContainer:{
        flex:1,
        alignSelf:"center"
    },
    loginContainer:{
        width:Dimensions.get('window').width*0.90,
        backgroundColor:"#ffffff90",
        alignSelf:"center",
        padding:10,
        paddingLeft:0,
        marginBottom:25,
        borderRadius:10,



    },
    placeholdercolor:{
        color:"white",
    },
    inputBox:{
        backgroundColor:"black",
        marginTop:10,
        marginBottom:10,

        borderBottomWidth:0,
    },
    input:{
        color:"white",
        paddingLeft:15,

    },
    btnContainer:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        marginTop:15,
        marginBottom:15,


    },
    btnBox:{
        width:Dimensions.get('window').width*0.35,
        height:Dimensions.get('window').height*0.08,
        marginLeft:15,
        justifyContent:"center",
        borderRadius:10,
        backgroundColor:"#FFCE00"

        

    },
    btnText:{
        textAlign:"center",
        fontSize:20,
        color:"black",
        fontWeight:"bold"
        
    }
   

  });