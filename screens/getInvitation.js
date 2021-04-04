import React, { Component,useState,useEffect  } from 'react';
import {StyleSheet,Dimensions,Image,ImageBackground, FlatList, ScrollView, TouchableOpacity} from 'react-native'
import { Container,Label, View,Text, Form, Item, Input,Button, List, ListItem} from 'native-base';
import {getEvents} from '../store/actions/index'
import database from '@react-native-firebase/database';
import {connect} from 'react-redux'

const GetInvitation =(props) => {
    const [mergekey,setmergekey]=useState("")
    const [mergekey2,setmergekey2]=useState("")
    const [mergekey3,setmergekey3]=useState("")
    useEffect( () => {
        props.addEvents()
        // console.log(props.mergeUid)
        mergehide()
           },[]); 
   const mergehide =()=>{

    database().ref(`/mergeKey`).set("")
}

        
const merge=(key,keyvalue1)=>{
    {key < keyvalue1 ? setmergekey(key+keyvalue1) : setmergekey(keyvalue1+key) }
    database().ref(`/mergeKey`).set(mergekey)
    sendKey()
}
           
const sendKey=()=>{
    
    {mergekey !=="" ? 
    props.navigation.navigate("Accept Invitation"):
    null
    
}
}
const merge2=(key,keyvalue1)=>{
    {key < keyvalue1 ? setmergekey2(key+keyvalue1) : setmergekey2(keyvalue1+key) }
    database().ref(`/mergeKey`).set(mergekey2)
    sendKey2()
}
const sendKey2=()=>{
     
    {mergekey2 !== ""? 
    props.navigation.navigate("Data"):
    null
  
  }
}
const merge3=(key,keyvalue1)=>{
    {key < keyvalue1 ? setmergekey3(key+keyvalue1) : setmergekey3(keyvalue1+key) }
    database().ref(`/mergeKey`).set(mergekey3)
    sendKey3()
}
const sendKey3=()=>{
     
    {mergekey3 !== ""? 
    props.navigation.navigate("getlocation"):
    null
  
  }
}

   const deleteEvent =(key,index)=>{
      database().ref(`/events`).child(key).remove()
     

      props.addEvents()
   }
   
     return (
         <Container style={styles.container} >
              <ImageBackground source={require('./images/background2.jpg')} style={styles.backgroundImage}>

<ScrollView>
              <View style={styles.headerBox}>
                  
                  <Text style={styles.headerText}>LIST OF INVITATIONS</Text>
              </View>

              {props.events.map((v,i)=>{
return(<View key={i} style={styles.eventContainer} >
 <Text style={styles.eventName}>{v.EventName}</Text>

<Image style={styles.menuImage} source={require("./images/menu1.png")} />
<View style={styles.Timecontainer}>
    <Text style={styles.Time} >{v.Time}</Text>
    <Text style={styles.Date}>{v.Date}</Text>
</View>
 <View style={styles.menuCard}>
     <Text style={styles.menuHeader}>MENU ITEMS</Text>
     
 <Text style={styles.menuItems}>
     <ScrollView style={styles.menuContainer}>
         <List style={styles.menuItemContainer}>
     {v.MenuItems.map((v,i)=>{
         return(

            
            <ListItem key={i}  style={styles.MenuItemText} >
            <Text style={styles.itemText} >{v}</Text>
            
            
            </ListItem>
            
            
            
            
            )
        }) }
        </List>
        </ScrollView>
     </Text>  




     </View> 


              
<View style={styles.btnContainer}>
<Button onPress={()=>merge3(v.Key,v.KeyValue)} style={styles.btnBox}>
     <Text  style={styles.btnText}>Get Location</Text>
   </Button>
<Button onPress={()=>merge(v.Key,v.KeyValue)}  style={styles.btnBox}>
     <Text style={styles.btnText}>Accept Invitation</Text>
   </Button>
</View>

              {props.currentUser.Uid == v.KeyValue ?

              
<View style={styles.btnContainer}>
{/* <Button style={styles.btnBox1}>
     <Text onPress={()=>merge2(v.Key,v.KeyValue)} style={styles.btnText}>Get Data</Text>
   </Button> */}
<Button style={styles.btnBox2}>
     <Text onPress={()=>deleteEvent(v.Key,i)} style={styles.btnText2}>Delete</Text>
   </Button>
</View> :
null
}
        </View>

)   })

              }
             
            

</ScrollView>
         </ImageBackground>
      </Container>

    );
  }

  const mapStateToProps = (state) => {
    return {
        events: state.events,
        currentUser:state.currentUser,
        mergeUid:state.mergeUid,

    }
}


  const mapDispatchToProps = (dispatch) => ({
    addEvents: () => dispatch(getEvents())
})

export default connect(mapStateToProps, mapDispatchToProps)(GetInvitation);


const styles = StyleSheet.create({
    container:{
        display:"flex",
        backgroundColor:"transparent",
    },
    backgroundImage :{
        flex:1,

    },
    Timecontainer:{
        flexDirection:"row",
        justifyContent:"space-around",
        marginBottom:5
    },
    Date:{
        fontSize:17,
        fontWeight:"bold"  
        
    },
    Time:{
        fontSize:17,
        fontWeight:"bold"  
        
    },
    imageContainer:{
        flex:1,
    },
    headerBox:{
        alignSelf:"center",
        marginTop:10
    },
    headerText:{
        fontSize:25,
        fontWeight:"bold",
        color:"white"
    },
    eventContainer:{
        width:Dimensions.get('window').width*0.90,
        minHeight:Dimensions.get('window').height*0.50,
        backgroundColor:"#ffffff90",
        alignSelf:"center",
        marginBottom:15,
        borderRadius:10,
        marginTop:20,
        padding:0



    },
    menuHeader:{
        alignSelf:"center",
        color:"#424242",
        fontWeight:"bold",
        fontSize:22,
        letterSpacing:2

    },
    eventName:{
        alignSelf:"center",
        fontSize:25,
        textTransform:"uppercase",
        fontWeight:"bold"
    },
    menuImage:{
        width:Dimensions.get('window').width*0.80,
        resizeMode:"contain",
        borderRadius:5,
        alignSelf:"center"

    },
    menuCard:{
        width:Dimensions.get('window').width*0.80,
        minHeight:Dimensions.get('window').height*0.10,
        marginBottom:10,
       borderWidth:2,
       borderColor:"#e0e0e0",
       alignSelf:"center",
       borderRadius:5,
    },
    menuItems:{
        fontSize:20,
        color:"black",
        fontWeight:"bold",
        letterSpacing:4,
        textTransform:"uppercase",
        alignSelf:"center"
    },
    menuItemContainer:{
        alignSelf:"center",
    },
    itemText:{
        fontSize:18,
        fontWeight:"700",

    },
    btnContainer:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        marginTop:0,
        marginBottom:10,


    },
    btnBox:{
        width:Dimensions.get('window').width*0.36,
        height:Dimensions.get('window').height*0.070,
        justifyContent:"center",
        borderRadius:10,
        backgroundColor:"#FFCE00"

        

    },
    btnBox1:{
        width:Dimensions.get('window').width*0.36,
        height:Dimensions.get('window').height*0.075,
        justifyContent:"center",
        borderRadius:10,
        backgroundColor:"#F47A27"

        

    },
    btnBox2:{
        width:Dimensions.get('window').width*0.80,
        height:Dimensions.get('window').height*0.075,
        justifyContent:"center",
        borderRadius:10,
        backgroundColor:"#F47A27"

        

    },
    btnText:{
        textAlign:"center",
        fontSize:14,
        color:"black",
        fontWeight:"bold",
        
    },
   
    btnText2:{
        textAlign:"center",
        fontSize:18,
        color:"black",
        fontWeight:"bold",
        
    }
   
    
    
  
  });