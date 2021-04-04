import React, { Component,useState,useEffect  } from 'react';
import {StyleSheet,Dimensions,Image,ImageBackground, FlatList, ScrollView, TouchableOpacity, DrawerLayoutAndroidBase} from 'react-native'
import { Container,CheckBox,Body, View,Text, Form, Item, Input,Button, List, ListItem} from 'native-base';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {getEvents} from '../store/actions/index'
import {connect} from 'react-redux'
import { setEnabled } from 'react-native/Libraries/Performance/Systrace';

const AcceptInvitation =(props) => {
    const [check1,setCheck1]=useState(true)
    const [check2,setCheck2]=useState(false)
    const [people,setpeople]=useState("")

    const addPreference =()=>{
        alert("Successfully Invitation Accepted")   
        props.navigation.navigate("User") 
    }
     return (
         <Container style={styles.container} >
              <ImageBackground source={require('./images/background2.jpg')} style={styles.backgroundImage}>
<ScrollView>
<View style={styles.checkContainer}>

<Text style={styles.headerPreference}>
PLEASE HELP US BY TELLING 
YOU PREFEENCES
</Text>
        <View style={styles.checkBoxMainContainer}>
        <ListItem style={styles.checkBoxContainer}>
            <CheckBox  onPress={()=>setCheck1(!check1)} style={ check1 ?  styles.checkBox : styles.checkBox1 }  checked={check1} />
            <Body style={styles.bodyCheckBox}>
              <Text style={styles.checkBoxText}>Daily Stand Up</Text>
            </Body>
          </ListItem>
      
        <ListItem style={styles.checkBoxContainer}>
            <CheckBox onPress={()=>setCheck2(!check2)} style={ check2 ?  styles.checkBox : styles.checkBox1 }   checked={check2} />
            <Body style={styles.bodyCheckBox}>
              <Text style={styles.checkBoxText}>Daily Stand Up</Text>
            </Body>
          </ListItem>
      
        </View>

<View style={styles.btnContainer}>
<Button onPress={addPreference} style={styles.btnBox}>
            <Text  style={styles.btnText}>ACCEPT</Text>
          </Button>
          
            </View>


            </View> 
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

export default connect(mapStateToProps, mapDispatchToProps)(AcceptInvitation);


const styles = StyleSheet.create({
    container:{
        display:"flex",
        backgroundColor:"transparent",
    },
    backgroundImage :{
        flex:1,

    },
    
    imageContainer:{
        flex:1,
    },
    checkBoxContainer:{
        alignSelf:"center",
        borderBottomWidth:0,

    },
    checkBox:{
        marginLeft:24,
        borderRadius:25,
        width:Dimensions.get('window').width*0.1,
        height:Dimensions.get('window').height*0.05,
        paddingLeft:7,
        paddingTop:7,
        borderColor:"#FFCE00",
        backgroundColor:"black"
    },
    checkBox1:{
        marginLeft:24,
        borderRadius:25,
        width:Dimensions.get('window').width*0.1,
        height:Dimensions.get('window').height*0.05,
        paddingLeft:7,
        paddingTop:7,
        borderColor:"#FFCE00",
        backgroundColor:"white"
    },
    checkBoxMainContainer:{
        width:Dimensions.get('window').width*0.95,
        height:Dimensions.get('window').height*0.6,
        justifyContent:"space-around"
    },
    checkContainer:{
        width:Dimensions.get('window').width*0.90,
        backgroundColor:"#ffffff90",
        alignSelf:"center",
        padding:10,
        marginTop:20,
        paddingLeft:0,
        marginBottom:25,
        borderRadius:10,



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
        
    },
    headerPreference:{
        alignSelf:"center",
        fontWeight:"bold",
        fontSize:18,


    },
    checkBoxText:{
        marginRight:70,

        alignSelf:"center",
        fontWeight:"bold",
        fontSize:18,
       

    },
   
  
    
  
  });