import React, { Component,useState,useEffect  } from 'react';
import {StyleSheet,Dimensions,Image,ImageBackground, FlatList, ScrollView, TouchableOpacity, VirtualizedList} from 'react-native'
import { Container,Label, View,Text, Form, Item, Input,Button, List, ListItem} from 'native-base';
import database from '@react-native-firebase/database';
import {getEvents} from '../store/actions/index'
import {connect} from 'react-redux'


const Invite =(props) => {
  const [EventName,setEventName]=useState("")
  const [EventPurpose,setEventPurpose]=useState("")
  const [DressCode,setDressCode]=useState("")
  const [Location,setLocation]=useState("")
  const [Date,setDate]=useState("")
  const [Time,setTime]=useState("")
  const [Menu,setMenu]=useState([])
  const [MenuItem,setMenuItem]=useState("")
  const Key =database().ref('events').push().key

  const addMenu=()=>{
    setMenuItem("")
    {MenuItem !== "" ?

      Menu.push(MenuItem)
      :
      alert("Please Add Menu Items")
    }
  }


  const setValue=()=>{

    setEventName("")
      setEventPurpose("")
      setDressCode("")
      setMenuItem("")
      setLocation("")
      setMenu([])
      setDate("")
      setTime("")
    
    }
    const KeyValue=props.currentUser.Uid
  const events ={
    EventName:EventName,
    DressCode:DressCode,
    MenuItems:Menu,
    KeyValue:KeyValue,
    Key:Key,
    Date:Date,
    Time:Time

  }

    const Invititation =()=>{
      {EventName!=="" &&  DressCode!=="" && Menu!=="" &&  Date !=="" && Time !==""    ?
      database().ref("/events").child(Key).set(events)
      
      :
      alert("Please Fill All Blanks")
    }
    setValue()
    }
  







     return (
         <Container style={styles.container} >
              <ImageBackground source={require('./images/background2.jpg')} style={styles.backgroundImage}>

<ScrollView>



<View style={styles.loginContainer}>
<Form>

            <Item style={styles.inputBox} >
              <Input style={styles.input} onChangeText={(text)=>setEventName(text)} value={EventName} placeholder="EVENT NAME" placeholderTextColor="#616161"  />
              </Item>

           
            <Item style={styles.inputBox} >
              <Input style={styles.input} onChangeText={(text)=>setDressCode(text)} value={DressCode} placeholder="DRESS CODE" placeholderTextColor="#616161"  />
              </Item>
            <Item style={styles.inputBox} >
              <Text style={styles.input} onPress={()=>props.navigation.navigate("maps")}  > Add Location</Text>
              </Item>
            <Item style={styles.inputBox} >
              <Input style={styles.input} onChangeText={(text)=>setDate(text)} value={Date} placeholder="DATE (04/04/2021)"   placeholderTextColor="#616161"  />
              </Item>
            <Item style={styles.inputBox} >
              <Input style={styles.input} onChangeText={(text)=>setTime(text)} value={Time} placeholder="TIME (12:00)"   placeholderTextColor="#616161"  />
              </Item>
            <Item style={styles.inputBox} >
              <Input style={styles.input} onChangeText={(text)=>setMenuItem(text)} value={MenuItem} placeholder="ADD MENU"  placeholderTextColor="#616161"  />
                <Button style={styles.addBtn}>
                    <Text style={styles.addBtnText} onPress={addMenu} >Add</Text>
                </Button>
              </Item>
              <ScrollView style={styles.menuContainer}>
                <List  style={styles.listContainer}>
{Menu.map((v,i)=>{
  return(


  <ListItem key={i} style={styles.listTextContainer} >
    <Text style={styles.listText} >{v}</Text>
  </ListItem>
  
  
  )
  
})

}
</List>
</ScrollView>

              
</Form>
 
<View style={styles.btnContainer}>
 <Button style={styles.btnBox}>
            <Text onPress={Invititation} style={styles.btnText}>INVITE</Text>
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
        currentUser:state.currentUser,
    }
}


  const mapDispatchToProps = (dispatch) => ({
    addEvents: () => dispatch(getEvents())
})

export default connect(mapStateToProps, mapDispatchToProps)(Invite);


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
        paddingRight:20,
        paddingBottom:10,
        paddingLeft:5,
        borderRadius:10,
        marginTop:10,




    },
    mapsearch:{
      color:"green"
    },
    

    inputBox:{
        marginTop:4,
        height:Dimensions.get('window').height*0.075,
        
        marginBottom:4,

        borderBottomWidth:4,
        borderBottomColor:"black"
    },
    input:{
        color:"black",
        paddingLeft:15,
        fontSize:15,
        fontWeight:"bold"

    },
    btnContainer:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        marginTop:2,
        marginBottom:2,


    },
    btnBox:{
        width:Dimensions.get('window').width*0.35,
        height:Dimensions.get('window').height*0.07,
        marginLeft:15,
        justifyContent:"center",
        borderRadius:10,
        backgroundColor:"#FFCE00"

        

    },
    btnText:{
        textAlign:"center",
        fontSize:16,
        color:"black",
        fontWeight:"bold",
        
    },
    addBtn:{
        backgroundColor:"#FFCE00",
        borderRadius:10,
    


    },
    addBtnText:{
        color:"black",
        fontWeight:"bold",
        fontSize:14
    },
    menuContainer:{
        marginBottom:5
    },
    listContainer:{
        
        width:Dimensions.get('screen').width*0.8,
        minHeight:Dimensions.get('window').height*0.15,
        backgroundColor:"black",
        margin:0,
        alignSelf:"center",
        borderRadius:10,
        marginLeft:10,
        
    },
    listText:{
        color:"white",
        borderBottomWidth:4,
        borderBottomColor:"white",
        width:Dimensions.get('screen').width*0.72,
        textAlign:"center",
        

    },
    listTextContainer:{
        borderBottomWidth:0
    }
   
  
  });