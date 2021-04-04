  
import database from '@react-native-firebase/database';
import {React,useState} from 'react'
export const getEvents =()=>{
    return(dispatch)=>{
        
        
        const events =[]
        database().ref("/events").on("child_added",(data)=>{
            events.push(data.val())
            
            dispatch({
                type:"ADDEVENTS",
                payload:events
    
            })
        })
        const datalist=[]
        database().ref("/datalist").on("child_added",(data)=>{
            datalist.push(data.val())
            
            dispatch({
                type:"ADDDATA",
                payload:datalist
    
            })
        })
        const datavalue=[]
        database().ref("/datalist").on("child_added",(data)=>{
            datavalue.push(data.val())
            // console.log(datavalue)
            dispatch({
                type:"ADDDATAVAL",
                payload:datavalue
    
            })
        })
        const status=[]

        database().ref("/list").on("child_added",(data)=>{
            status.push(data.val())
            console.log(data.val)
            dispatch({
                type:"ADDSTATUS",
                payload:status
    
            })
        })
        const location=[]
        database().ref("/location").on("child_added",(data)=>{
            location.push(data.val())
            // console.log(location)
            dispatch({
                type:"ADDLOCATION",
                payload:location
    
            })
        })
        database().ref("/").child("currentUser").on("value",(data)=>{
            dispatch({
                type:"ADDCURRENTUSER",
                payload:data.val()
    
            })
        })
        database().ref(`/mergeKey`).on("value",(data)=>{
            dispatch({
                type:"ADDMERGE",
                payload:data.val()
    
            })
        })
        
    }
}