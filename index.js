/**
 * @format
 */
import React from 'react'
import {AppRegistry,LogBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import store from './store/index'
import { Provider } from 'react-redux'

const FoodApp =()=>{
    return(

        <Provider store={store}>
        <App />
    </Provider>
        // return null;
        )
}


AppRegistry.registerComponent(appName, () => FoodApp);
// LogBox.ignoreAllLogs()
// console.disableYellowBox = true;