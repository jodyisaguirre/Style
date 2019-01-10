import React from 'react'
import {StyleSheet,Text,View, ImageBackground} from 'react-native'
import { Actions} from 'react-native-router-flux'
import Header from './src/components/Header.js'
import Temp from './src/components/Temp.js'
import Buttons from './src/components/Buttons.js'




const Splash = () =>{

  return(
    <ImageBackground source={require('./src/components/topSuit.jpg')}
    style={{
      height:'100%',
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    }}>

     <Header />

    
    </ImageBackground>
  )
}

export default Splash
