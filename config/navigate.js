import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { Container,Label, View,Text, Form, Item, Input,Button, List, ListItem} from 'native-base';
import Login from "../screens/login"
import Register from "../screens/register"
import User from "../screens/user"
import Invite from "../screens/invite"
import GetInvitation from "../screens/getInvitation"
import AcceptInvitation from "../screens/acceptInvitation"
import Maps from "../screens/location"
import GetMaps from "../screens/getlocation"
import Data from "../screens/totaldata"
import {StyleSheet} from 'react-native'
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const Navigate =()=>{

    // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
        <NavigationContainer>
        <Stack.Navigator >
           
        <Stack.Screen
        options={{headerShown: false}}
            //     options={{
            //     title: 'Welcome',
            //     headerStyle: {
            //         backgroundColor: '#580000',
            //         height: 50
            //     },
            //     headerTintColor: '#fff',
            //     headerTitleStyle: {}
            // }}
                name="Login"
                component={Login}/>




<Stack.Screen
        options={{headerShown: false}}
    
        name="Register"
        component={Register}/>


</Stack.Navigator>
</NavigationContainer>
    );
  }

  const currentUser ={
    Email:user.email,
    Uid:user.uid
}


  database().ref("/").child("currentUser").set(currentUser)
  
  return (
  
  
  
  <NavigationContainer>
                 <Stack.Navigator >
                    
                   
    <Stack.Screen
                    
                        options={{
                                title: 'USER',
                                headerStyle: {
                                    backgroundColor: '#424242',
                                    height: 60
                                },
                                headerTintColor: '#FFA300',
                                headerTitleStyle: {}
                            }}
    
    
                        name="User"
                        component={User}/> 
    <Stack.Screen
                    
                        options={{
                                title: 'INVITE PEOPLE',
                                headerStyle: {
                                    backgroundColor: '#424242',
                                    height: 60
                                },
                                headerTintColor: '#FFA300',
                                headerTitleStyle: {}
                            }}
    
    
                        name="Invite"
                        component={Invite}/> 
                         
    <Stack.Screen
                    
                        options={{
                                title: 'GET INVITATION',
                                headerStyle: {
                                    backgroundColor: '#424242',
                                    height: 60
                                },
                                headerTintColor: '#FFA300',
                                headerTitleStyle: {}
                            }}
    
    
                        name="getInvitation"
                        component={GetInvitation}/> 
    <Stack.Screen
                    
                        options={{
                                title: 'LOCATION',
                                headerStyle: {
                                    backgroundColor: '#424242',
                                    height: 60
                                },
                                headerTintColor: '#FFA300',
                                headerTitleStyle: {}
                            }}
    
    
                        name="getlocation"
                        component={GetMaps}/> 
                         
    <Stack.Screen
                    
                        options={{
                                title: 'ACCEPT INVITATION',
                                headerStyle: {
                                    backgroundColor: '#424242',
                                    height: 60
                                },
                                headerTintColor: '#FFA300',
                                headerTitleStyle: {}
                            }}
    
    
                        name="Accept Invitation"
                        component={AcceptInvitation}/> 
                         
    <Stack.Screen
                    
                        options={{
                                title: 'LIST GENERATED',
                                headerStyle: {
                                    backgroundColor: '#424242',
                                    height: 60
                                },
                                headerTintColor: '#FFA300',
                                headerTitleStyle: {}
                            }}
    
    
                        name="Data"
                        component={Data}/> 
                         
    <Stack.Screen
                    
                        options={{
                                title: 'MAPS',
                                headerStyle: {
                                    backgroundColor: '#424242',
                                    height: 60
                                },
                                headerTintColor: '#FFA300',
                                headerTitleStyle: {}
                            }}
    
    
                        name="maps"
                        component={Maps}/> 
                         
                    
                </Stack.Navigator>
            </NavigationContainer>
    )
   
   
    
}









const Stack = createStackNavigator();

export default Navigate;

const styles = StyleSheet.create({
    loginHeader: {

        backgroundColor: "black",
        color: "red"
    }
});