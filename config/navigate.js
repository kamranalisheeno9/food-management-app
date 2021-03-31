import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from "../screens/login"
import Register from "../screens/register"
import User from "../screens/user"
import {StyleSheet} from 'react-native'
const Stack = createStackNavigator();


const Navigate =()=>{
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
<Stack.Screen
                
                    options={{
                            title: 'User',
                            headerStyle: {
                                backgroundColor: '#424242',
                                height: 60
                            },
                            headerTintColor: '#FFA300',
                            headerTitleStyle: {}
                        }}


                    name="User"
                    component={User}/> 
                     
                
            </Stack.Navigator>
        </NavigationContainer>
)

}

export default Navigate;

const styles = StyleSheet.create({
    loginHeader: {

        backgroundColor: "black",
        color: "red"
    }
});