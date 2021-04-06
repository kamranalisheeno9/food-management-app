import React, { Component,useState,useEffect  } from 'react';
import {StyleSheet,Dimensions,Image,ImageBackground, TextInput, ScrollView, TouchableOpacity} from 'react-native'
import { Container,Label, View,Text, Form, Item, Input,Button, Content} from 'native-base';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

  const Register =(props) => {
  const Key =database().ref('users').push().key
  
  const setValue=()=>{
  setName("")
    setPassword("Password")
    setEmail("Email")
    setAddress("")
    setMobile("")
  
  }
  const [Email,setEmail]=useState("Email")
  const [Password,setPassword]=useState("Password")
  const [Name,setName]=useState("")
  const [Address,setAddress]=useState("")
  const [Mobile,setMobile]=useState("")
  const users={
    Email:Email,
    Password:Password,
    Name:Name,
    Address:Address,
    Mobile:Mobile,
    Key:Key
  }
  
 
  
const createUser=()=>{
  auth()
  .createUserWithEmailAndPassword(Email, Password)
  .then(() => {
  setValue()
    
    {Name!=="" && Password!=="" && Email!=="" && Address!=="" && Mobile!=="" ?
    database().ref("/users" ).child(Key).set(users)
    
    :
    alert("Please Fill All Blanks")
  }


  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      alert('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      alert('That email address is invalid!');
    }

    alert(error);
  });




}





  return (
         <Container style={styles.container} >
              <ImageBackground source={require('./images/background1.jpg')} style={styles.backgroundImage}>
<ScrollView>

     
            <View style={styles.loginContainer}>
<Form>

            <Item style={styles.inputBox} >
              <Input onChangeText={(text)=>setName(text)} value={Name} style={styles.input} placeholder="NAME" placeholderTextColor="#616161"  />
              </Item>

            <Item style={styles.inputBox} >
              <Input onChangeText={(text)=>setEmail(text)} textContentType="emailAddress" value={Email} style={styles.input} placeholder="EMAIL" placeholderTextColor="#616161"  />
              </Item>
            <Item style={styles.inputBox} >
              <Input onChangeText={(text)=>setPassword(text)} value={Password} style={styles.input} placeholder="PASSWORD" secureTextEntry={true} placeholderTextColor="#616161"  />
              </Item>

            <Item style={styles.inputBox} >
              <Input onChangeText={(text)=>setAddress(text)} value={Address} style={styles.input} placeholder="ADDRESS" placeholderTextColor="#616161"  />
              </Item>
            <Item style={styles.inputBox} >
              <Input onChangeText={(text)=>setMobile(text)} value={Mobile} style={styles.input} placeholder="MOBILE NUMBER" keyboardType="phone-pad"  placeholderTextColor="#616161"  />
              </Item>

              
</Form>

<View style={styles.btnContainer}>
 <Button onPress={createUser} style={styles.btnBox}>
            <Text  style={styles.btnText}>REGISTER</Text>
          </Button>
    </View>
            </View>
         
</ScrollView>
         
         </ImageBackground>
      </Container>

    );
  }

export default Register;

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
    loginContainer:{
        width:Dimensions.get('window').width*0.90,
        backgroundColor:"#ffffff90",
        alignSelf:"center",
        padding:20,
        paddingLeft:5,
        marginBottom:25,
        borderRadius:10,
        marginTop:90,




    },
    placeholdercolor:{
        color:"white",
    },
    inputBox:{
        backgroundColor:"black",
        marginTop:15,
        height:Dimensions.get('window').height*0.08,
        
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
        fontWeight:"bold",
        
    }
   

  });